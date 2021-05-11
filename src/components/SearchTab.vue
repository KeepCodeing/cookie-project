<template>
  <v-toolbar
    tile
    flat
    color="grey lighten-3"
    class="hidden-sm-and-down"
  >
    <v-spacer />
    <v-toolbar-items>
      <v-container>
        <v-row>
          <v-col cols="2" style="width: 170px">
            <v-select
              :items="items"
              v-model="searchModel"
              placeholder="选择"
              hide-details
              @change="closeModel = searchModel === '标签'"
            />
          </v-col>
          <v-col cols="2" style="width: 50px">
            <v-switch
              v-model="closeModel"
              class="ma-2"
              label="交集"
              :disabled="true"
            />
          </v-col>
          <v-col cols="5" style="width: 390px">
            <v-text-field
              solo
              flat
              clearable
              dense
              single-line
              placeholder="关键字以空格隔开"
              v-model="keyWords"
            />
          </v-col>
          <v-col cols="1" style="width: 65px">
            <v-btn
              tile
              depressed
              color="white"
              @click="loadSearchData"
            >搜索</v-btn>
          </v-col>
          <v-col cols="1" style="width: 65px">
            <v-btn
              v-show="isSearchModel"
              tile
              depressed
              color="orange"
              class="white--text"
              @click="$emit('backNormalModel')"
            >返回</v-btn>
          </v-col>
          <v-col cols="1" class="pl-5">
            <v-tooltip bottom>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  color="primary"
                  dark
                  v-bind="attrs"
                  v-on="on"
                  icon
                  desen
                  style="height: 36px; width: 36px;"
                >
                  <v-icon color="grey lighten-1">mdi-help</v-icon>
                </v-btn>
              </template>
              <span>{{ helpInfo }}</span>
            </v-tooltip>
          </v-col>
        </v-row>
      </v-container>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    name: "SearchTab",
    data() {
      return {
        items: ['用户名', '标签', '静画id'],
        closeModel: true,
        searchModel: '标签',
        keyWords: '',
        helpInfo: `按id查询静画可以省去im前缀;使用tag查询只用输入xx姐贵
        即可（作者、id使用并集查询，tag使用交集查询）;点击tag查看相应饼图`
      }
    },
    methods: {
      loadSearchData() {
        if (!this.keyWords) return;
        this.keyWords = this.keyWords.trimStart().trimEnd();
        this.$emit('switchSearchModel', {
          searchModel: this.searchModel,
          keyWords: this.keyWords,
          closeModel: this.closeModel,
        });
      }
    },
    props: {
      isSearchModel: {
        type: Boolean,
        required: false,
        default: false,
      }
    }
  }
</script>

<style>
.v-label {
  font-size: 15px !important;
}
</style>
