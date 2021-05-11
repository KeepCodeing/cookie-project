<template>
  <v-app>
    <LeftDrawer @showSearchDialog="searchDialog = true" ref="drawer" />
    <v-main>
      <v-app-bar
        app
        color="grey lighten-3"
        hide-on-scroll
      >
        <v-app-bar-nav-icon
          @click="$refs['drawer']['drawer'] = true"
          class="hidden-md-and-up"
        />
        <v-app-bar-title>Cookie Project</v-app-bar-title>
        <SearchTab
          @switchSearchModel="switchSearchModel"
          @backNormalModel="backNormalModel"
          :isSearchModel="searchModel"
        />
        <v-spacer />
        <v-btn
          v-show="searchModel"
          tile
          depressed
          color="orange"
          class="white--text hidden-md-and-up"
          @click="backNormalModel"
        >返回</v-btn>
      </v-app-bar>
      <ImagesBoard @changedTagModel="changedTagModel" />
      <v-container v-show="total_pages > 1">
        <v-row justify="center">
          <v-col cols="10">
            <Pagination
              ref="pagination"
              :totalVisible="12"
              :limit="pagesLimit"
              :length="total_pages"
              :page="currentPage"
              @pageChanged="pageChanged"
            />
          </v-col>
          <v-col cols="1" class="px-0 pl-2 hidden-sm-and-down">
            <v-text-field
              solo
              flat
              rounded
              outlined
              color="indigo"
              dense
              type="number"
              v-model="jumpPage"
            />
          </v-col>
          <v-col cols="1" class="px-0 pl-1 text-left hidden-sm-and-down">
            <v-btn
              depressed
              rounded
              outlined
              color="grey darken-3"
              height="40"
              @click="jump(Number(jumpPage))"
            >
              跳转
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-dialog
        v-model="searchDialog"
        width="400"
      >
        <v-card>
          <v-card-title class="headline grey lighten-2">
            搜索
          </v-card-title>

          <v-divider />

          <v-card-actions>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    solo
                    flat
                    clearable
                    dense
                    single-line
                    outlined
                    placeholder="关键字以空格隔开"
                    v-model="keyWords"
                  />
                </v-col>
                <v-col cols="6" align-self="center" class="text-center">
                  <v-select
                    :items="items"
                    v-model="searchTag"
                    placeholder="选择"
                    hide-details
                    @change="closeModel = searchTag === '标签'"
                  />
                </v-col>
                <v-col cols="6"  align-self="center" class="text-center  pb-0">
                  <v-switch
                    v-model="closeModel"
                    class="ma-2"
                    label="交集"
                    :disabled="true"
                    style="height: 30px"
                  />
                </v-col>
              </v-row>
            </v-container>
          </v-card-actions>

          <v-card-actions>
            <v-spacer />
            <v-btn
              color="primary"
              text
              @click="() => {
                    switchSearchModel({
                      searchModel: searchTag,
                      keyWords: keyWords.trimStart().trimEnd(),
                      closeModel: closeModel,
                    });
                    searchDialog = false;
              }"
            >
              确定
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-main>
  </v-app>
</template>

<script>
import ImagesBoard from "./components/ImagesBoard";
import SearchTab from "./components/SearchTab";
import Pagination from "./components/Pagination";
import {mapState} from "vuex";
import {GET_PAGE_IMAGES, GET_SEARCH_PAGES} from "./store/type";
import LeftDrawer from "./components/LeftDrawer";
export default {
  name: 'App',
  components: {
    LeftDrawer,
    Pagination,
    SearchTab,
    ImagesBoard
  },
  data() {
    return {
      pagesLimit: 20,
      currentPage: 1,
      normalPage: 1,
      searchModel: false,
      searchUrl: '',
      searchArgs: {},
      jumpPage: 1,
      searchDialog: false,
      items: ['用户名', '标签', '静画id'],
      closeModel: true,
      searchTag: '标签',
      keyWords: '',
    }
  },
  methods: {
    initCNZZ() {
      //添加脚本
      const script = document.createElement('script');
      script.src = 'https://s22.cnzz.com/z_stat.php?id=1279848804&web_id=1279848804';
      script.language = 'JavaScript';
      script.id = 'cnzz';
      document.body.appendChild(script);
    },
    pageChanged(args) {
      if (!this.searchModel) this.normalPage = args['page'];
      this.currentPage = args['page'];
      this.loadImages();
    },
    switchSearchModel(args) {
      if (!args['keyWords']) return;
      this.searchModel = true;
      this.currentPage = this.$refs['pagination']['page'] = 1;
      this.searchArgs = args;
      // 同下面的页数不相同不加载问题一样
      if (this.currentPage === this.normalPage) this.loadImages();
    },
    changedTagModel(args) {
      this.searchArgs['closeModel'] = true;
      this.searchArgs['keyWords'] = args['tag'];
      this.searchArgs['searchModel'] = '标签';

      this.switchSearchModel(this.searchArgs);
    },
    mobileSearch() {
      this.searchDialog = false;
    },
    loadImages() {
      if (this.searchModel) {
        this.searchArgs['limit'] = this.pagesLimit;
        this.searchArgs['page'] = this.currentPage;
        this.$store.dispatch(GET_SEARCH_PAGES, {
          url: this.formattedSearchUrl(this.searchArgs),
          limit: this.pagesLimit,
        });
      } else {
        this.$store.dispatch(GET_PAGE_IMAGES, {
          pn: this.normalPage,
          limit: this.pagesLimit ,
          keyword: 'cookie☆ forever',
          type: 'all',
          join: 'OR',
          order:'-created'
        });
      }
    },
    jump(jumpPage) {
      if (jumpPage > this.total_pages || jumpPage < 1) return;
      this.$refs['pagination']['page'] = jumpPage;
    },
    backNormalModel() {
      this.searchModel = false;
      // 如果搜索页查看的page和全部页查看的page是一样的，pageChanged是不会触发的，也就不会请求
      // 这里这样写就是为了处理这种情况，不写if会产生两次请求
      if (this.normalPage === this.currentPage) this.loadImages();
      this.currentPage = this.$refs['pagination']['page'] = this.normalPage;
    },
    formattedSearchUrl(args) {
      return `keyword=${
        args['searchModel'] === '标签' ?
          args['keyWords']
            .replaceAll('姐贵', '姉貴')
            .replaceAll('兄贵', '兄貴') :
          args['keyWords'].replace('im', '')
      }&type=${
        args['searchModel'] === '标签' ? 'tags' : args['searchModel'] === '用户名' ? 'username' : 'sid'
      }&join=${
        args['closeModel'] ? 'AND' : 'OR'
      }&pn=${args['page']}&limit=${args['limit']}&order=-created`;
    }
  },
  computed: {
    ...mapState({
      total_pages: state => state.totalPages,
    }),
  },
  mounted() {
    this.initCNZZ();
    this.loadImages();
  },
};
</script>

<style>
@import '../src/assets/CSS/scrollbar.css';
</style>
