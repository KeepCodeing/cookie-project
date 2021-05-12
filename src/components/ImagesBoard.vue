<template>
  <div style="height: 100%">
    <!--  加载骨架  -->
    <v-row justify="center" v-if="isLoading">
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
                :md="3"
              >
                <v-skeleton-loader
                  class="mx-auto"
                  type="image"
                  :loading="true"
                />
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <!--  空结果提示  -->
    <v-container v-if="!isLoading && !images_store.length" class="fill-height">
      <v-row justify="center" align="center">
        <h3 class="title">（关键字）不是这样吧！</h3>
      </v-row>
    </v-container>
    <!--  栅格图片，此处展示的是缩略图  -->
    <v-row justify="center" v-if="!isLoading">
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
                :md="3"
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
        <!--    PC端查看窗口    -->
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
                  <v-list-item-title v-if="item.prop !== 'download'">{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle
                    class="text-div"
                    v-if="item.prop !== 'tags'"
                    :style="{cursor: jump_tab(item.prop) ? 'pointer' : ''}"
                    :class="jump_tab(item.prop) ? 'blue--text lighten-3' : ''"
                    @click="jumpNewTab(item)"
                  >{{ item.prop === 'sid' ? 'im' : '' }}{{ dialogData[item.prop] }}</v-list-item-subtitle>
                  <v-list-item-action-text v-if="item.prop === 'tags'">
                    <v-chip
                      class="ma-1 my-2 white--text"
                      style="cursor: pointer;"
                      v-for="(item, idx) in dialogData[item.prop]"
                      :color="colorList[idx % colorList.length]"
                      :key="idx"
                      @click="changedTagModel({ keyWords: item, searchModel: '标签' })"
                    >
                      <span
                        style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 200px"
                      >{{ item }}</span>
                    </v-chip>
                    <v-chip
                      class="ma-1 my-2 white--text"
                      style="cursor: pointer;"
                      color="red"
                      @click="changedTagModel({ keyWords: dialogData['username'], searchModel: '用户名' })"
                    >
                      <span
                        style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 200px"
                      >{{ dialogData['username'] }}</span>
                    </v-chip>
                  </v-list-item-action-text>
                  <v-list-item-content v-if="item.prop === 'download'">
                    <v-btn
                      depressed
                      outlined
                      color="red"
                      @click="downloadImage()"
                    >下载</v-btn>
                  </v-list-item-content>
                </v-list-item-content>

              </v-list-item>
            </v-list>
         </v-row>
       </v-card>
        <!--    PE端查看窗口    -->
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
            <v-list width="370px">
              <v-list-item v-for="(item, idx) in listProps" :key="idx">
                <v-list-item-content>
                  <v-list-item-title v-if="item.prop !== 'download'">{{ item.title }}</v-list-item-title>
                  <v-list-item-subtitle
                    class="text-div"
                    v-if="item.prop !== 'tags'"
                    :style="{cursor: jump_tab(item.prop) ? 'pointer' : ''}"
                    :class="jump_tab(item.prop) ? 'blue--text lighten-3' : ''"
                    @click="jumpNewTab(item)"
                  >{{ dialogData[item.prop] }}</v-list-item-subtitle>
                  <v-list-item-action-text v-if="item.prop === 'tags'">
                    <v-chip
                      class="ma-1 my-2 white--text"
                      v-for="(item, idx) in dialogData[item.prop]"
                      :color="colorList[idx % colorList.length]"
                      :key="idx"
                      @click="changedTagModel({ keyWords: item, searchModel: '标签' })"
                    >
                      <span
                        style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 200px"
                      >{{ item }}</span>
                    </v-chip>
                    <v-chip
                      class="ma-1 my-2 white--text"
                      style="cursor: pointer;"
                      color="red"
                      @click="changedTagModel({ keyWords: dialogData['username'], searchModel: '用户名' })"
                    >
                      <span
                        style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; max-width: 200px"
                      >{{ dialogData['username'] }}</span>
                    </v-chip>
                  </v-list-item-action-text>
                  <v-list-item-content v-if="item.prop === 'download'">
                    <v-btn
                      depressed
                      outlined
                      color="red"
                      @click="downloadImage()"
                    >下载</v-btn>
                  </v-list-item-content>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-row>
        </v-card>
     </v-row>
    </v-dialog>
    <v-snackbar
      v-model="snackbar"
      color="success"
      light
      timeout="1700"
    >
      <span class="white--text">{{ downloadPrompt }}</span>
      <template v-slot:action="{ attrs }">
        <v-btn
          color="yellow"
          text
          v-bind="attrs"
          @click="snackbar = false"
          class="font-weight-bold"
        >
          关闭
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  import Pagination from "./Pagination";
  import {GET_PAGE_IMAGES, GET_TOTAL_PAGES} from "../store/type";
  import { mapState } from 'vuex'
  import {download} from "../utils/download";

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
        { prop: 'download', title: '下载' }
      ],
      colorList: ['indigo', 'orange', 'primary', 'green', 'teal'],
      pagesLimit: 20,
      snackbar: false,
      downloadPrompt: '下载已开始，默认保存格式.png，打开不能请尝试其它后缀（小声）'
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
      changedTagModel(args) {
        this.$emit('changedTagModel', args);
        this.dialog = false;
      },
      checkUrl(dialogData) {
        if (dialogData.cdn_url !== "" && !dialogData.cdn_url.endsWith('.text/html'))
        return dialogData.cdn_url;
        return dialogData.source_url;
      },
      downloadImage() {
        // console.log(this.dialogData);
        this.snackbar = true;
        download('im' + this.dialogData.sid, this.checkUrl(this.dialogData));
        // download()
      }
    },

    computed: {
      ...mapState({
        images_store: state => state.images,
        total_pages: state => state.totalPages,
        isLoading: state => state.isLoading,
      })
    },
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
