<template>
  <div>
    <!--  加载骨架  -->
    <v-row justify="center" v-if="!images_store.length">
      <v-col cols="11">
        <v-card
          tile
          flat
          style="background: none"
        >
          <v-container fluid>
            <v-row>
              <v-col
                v-for="idx in pagesLimit"
                :key="idx"
                class="d-flex child-flex"
                :cols="6"
                :md="2"
              >
                <v-skeleton-loader
                  class="mx-auto"
                  max-width="200"
                  type="image"
                  :loading="true"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <!--  栅格图片，此处展示的是缩略图  -->
    <v-row justify="center">
      <v-col cols="11">
        <v-card
          tile
          flat
          style="background: none"
        >
          <v-container fluid>
            <v-row>
              <v-col
                v-for="(item, idx) in images_store"
                :key="idx"
                class="d-flex child-flex"
                :cols="6"
                :md="2"
              >
                <v-card
                  tile
                  class="d-flex transition-animate"
                  elevation="7"
                  style="cursor: pointer;"
                  @click="showDialog(item)"
                >
                  <v-img
                    :src="'https://lohas.nicoseiga.jp/thumb/' + item.sid + 'i'"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="3" v-show="total_pages > 1" class="px-2">
        <Pagination
          ref="pagination"
          :totalVisible="6"
          :limit="pagesLimit"
          :length="total_pages"
        />
      </v-col>
      <v-col cols="1" class="px-0 pl-2 hidden-sm-and-down" v-show="total_pages > 1">
        <v-text-field
          solo
          flat
          rounded
          outlined
          color="indigo"
          dense
          :rules="[rules.required]"
          type="number"
          v-model="jumpPage"
        />
      </v-col>
      <v-col cols="1" class="px-0 pl-1 text-left hidden-sm-and-down" v-show="total_pages > 1">
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
    <!--  查看图片对话框  -->
    <v-dialog v-model="dialog" width="800px">
      <v-row no-gutters class="white" style="position: relative;">
        <div style="position: absolute; right: 5px; top: 5px; z-index: 100">
         <v-btn
           fab
           depressed
           color="grey"
           class="black--text font-weight-thin hidden-md-and-up"
           style="opacity: 0.3; font-size: 20px; height: 35px; width: 35px;"
           @click="dialog = false"
         >X</v-btn>
       </div>
        <v-card
         class="d-flex"
         width="500px"
         flat
         tile
         v-if="dialog"
       >
<!--         v-if="dialog"-->
         <v-img
           :src="'https://lohas.nicoseiga.jp/thumb/' + dialogData.sid + 'i'"
           aspect-ratio="1"
           style="position: absolute; filter: blur(20px); height: 100%; width: 100%;"
         />
         <v-img
           :src="checkUrl(dialogData)"
           aspect-ratio="1"
           :lazy-src="'https://lohas.nicoseiga.jp/thumb/' + dialogData.sid + 'i'"
           contain
         />
       </v-card>
        <v-card
         flat
         class="hidden-sm-and-down"
         width="300px"
         style="overflow-y: scroll; overflow-x: hidden; height: 500px;"
       >
         <v-row
           class="fill-height"
           justify="start"
           align="start"
           no-gutters
           dense
         >
            <v-list>
              <v-list-item v-for="(item, idx) in listProps" :key="idx">
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle
                    class="text-div"
                    v-if="item.prop !== 'tags'"
                    :style="{cursor: jump_tab(item.prop) ? 'pointer' : ''}"
                    :class="jump_tab(item.prop) ? 'blue--text lighten-3' : ''"
                    @click="jumpNewTab(item)"
                  >{{ item.prop === 'sid' ? 'im' : '' }}{{ dialogData[item.prop] }}</v-list-item-subtitle>
                  <v-list-item-action-text v-else>
                    <v-chip
                      class="ma-1 my-2 white--text"
                      v-for="(item, idx) in dialogData[item.prop]"
                      :color="colorList[idx % colorList.length]"
                      :key="idx"
                    >
                      <span
                        style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 200px"
                      >{{ item }}</span>
                    </v-chip>
                  </v-list-item-action-text>
                </v-list-item-content>
              </v-list-item>
            </v-list>
         </v-row>
       </v-card>
        <v-card
          flat
          class="hidden-md-and-up"
          width="100%"
        >
          <v-row
            class="fill-height"
            justify="start"
            align="start"
            no-gutters
            dense
          >
            <v-list width="300px">
              <v-list-item v-for="(item, idx) in listProps" :key="idx">
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle
                    class="text-div"
                    v-if="item.prop !== 'tags'"
                    :style="{cursor: jump_tab(item.prop) ? 'pointer' : ''}"
                    :class="jump_tab(item.prop) ? 'blue--text lighten-3' : ''"
                    @click="jumpNewTab(item)"
                  >{{ dialogData[item.prop] }}</v-list-item-subtitle>
                  <v-list-item-action-text v-else>
                    <v-chip
                      class="ma-1 my-2 white--text"
                      v-for="(item, idx) in dialogData[item.prop]"
                      :color="colorList[idx % colorList.length]"
                      :key="idx"
                    >
                      <span
                        style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 200px"
                      >{{ item }}</span>
                    </v-chip>
                  </v-list-item-action-text>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-row>
        </v-card>
     </v-row>
    </v-dialog>
  </div>
</template>

<script>
  import Pagination from "./Pagination";
  import {GET_PAGE_IMAGES, GET_TOTAL_PAGES} from "../store/type";
  import { mapState } from 'vuex'

  export default {
    name: "ImagesBoard",
    components: {Pagination},
    data: () => ({
      dialog: false,
      dialogData: {},
      listProps: [
        { prop: 'username', title: '作者' },
        { prop: 'title', title: '标题' },
        { prop: 'description', title: '简介' },
        { prop: 'sid', title: '静画id' },
        { prop: 'created', title: '投稿时间' },
        { prop: 'tags', title: '标签' },
      ],
      colorList: ['indigo', 'orange', 'primary', 'green', 'teal'],
      pagesLimit: 20,
      rules: {
        required: value => !!value || '页数我忘记了啊!',
      },
      jumpPage: 1,
    }),

    methods: {
      showDialog(item) {
        this.dialog = true;
        this.dialogData = item;
      },
      jump_tab(tab) {
        return tab === 'username' || tab === 'sid';
      },
      jumpNewTab(item) {
        let url = 'https://seiga.nicovideo.jp';
        if (this.jump_tab(item.prop)) {
          if (item.prop === 'sid') url += '/seiga/im' + this.dialogData['sid'];
          else url += '/user/illust/' + this.dialogData['user_id'];
          window.open(url, '_bank');
        }
      },
      checkUrl(dialogData) {
        if (dialogData.cdn_url !== "" && !dialogData.cdn_url.endsWith('.text/html'))
        return dialogData.cdn_url;
        return dialogData.source_url;
      },

      jump(jumpPage) {
        if (jumpPage > this.total_pages || jumpPage < 1) return;
        this.$refs['pagination']['page'] = jumpPage;
      }
    },

    computed: {
      ...mapState({
        images_store: state => state.images,
        total_pages: state => state.totalPages,
      })
    },

    created() {
      this.$store.dispatch(GET_PAGE_IMAGES, {
        page: 1,
        limit: this.pagesLimit ,
        keyword: 'cookie☆ forever',
        type: 'all',
        join: 'OR',
        order:'-created'
      });
      // this.$store.dispatch(GET_TOTAL_PAGES, { limit: this.pagesLimit });
    }
  }
</script>

<style>
.transition-animate:hover {
  transition: 0.2s;
  transform: translateY(-3%);
}
.text-div {
  white-space:normal !important;
  word-break:break-all !important;
  word-wrap:break-word !important;
}
.v-image__image--preload {
  filter: blur(0) !important;
}
</style>
