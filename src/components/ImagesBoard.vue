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
                v-for="idx in 20"
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
                    <!-- :lazy-src="'https://lohas.nicoseiga.jp/thumb/' + item.sid + 'i'"-->
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular indeterminate color="grey lighten-5" />
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="12">
        <Pagination :limit="20" :length="100" />
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
       >
         <v-img
           v-if="dialog"
           :src="checkUrl(dialogData)"
           aspect-ratio="1"
           class="grey lighten-2"
           :lazy-src="'https://lohas.nicoseiga.jp/thumb/' + dialogData.sid + 'i'"
         >
           <template v-slot:placeholder>
             <v-row
               class="fill-height ma-0"
               align="center"
               justify="center"
             >
               <v-progress-circular indeterminate color="grey lighten-5" />
             </v-row>
           </template>
         </v-img>
       </v-card>
       <v-card
         width="300px"
         flat
       >
         <v-row
           class="fill-height"
           justify="start"
           align="start"
           no-gutters
           dense
         >
            <v-list width="300px">
              <v-list-item v-for="item in listProps">
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
  import { GET_PAGE_IMAGES } from "../store/type";
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
    }),

    methods: {
      showDialog(item) {
        this.dialog = true;
        this.dialogData = item;
      },
      jump_tab(tab) {
        return tab === 'user_name' || tab === 'sid';
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
      }
    },

    computed: {
      ...mapState({
        images_store: state => state.images,
      })
    },

    created() {
      this.$store.dispatch(GET_PAGE_IMAGES, { page: 1, limit: 20 });
    }
  }
</script>

<style scoped>
.transition-animate:hover {
  transition: 0.2s;
  transform: translateY(-3%);
}
.text-div {
  white-space:normal;
  word-break:break-all;
  word-wrap:break-word;
}
</style>
