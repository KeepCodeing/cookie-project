<template>
  <div
    class="h-16 items-center grid grid-cols-10 shadow"
    style="background: rgb(238, 238, 238)"
  >
    <div class="ml-3 col-span-3 text-lg cursor-pointer">
      <span
        @click="$router.replace('/index?keyword=all&pn=1&type=all')"
        class="hover:text-yellow-400"
        >饼图站</span
      >
    </div>
    <div class="col-span-4 hidden md:block">
      <slot name="search_tool"><search-tool /></slot>
    </div>
    <div
      class="
        col-span-3
        text-gray-400
        text-right
        mr-3
        col-start-9
      "
    >
      <span
        @click="window.open('http://121.5.133.245/')"
        class="hover:text-blue-400 cursor-pointer"
        >无法加载图片?</span
      >
      <span
        @click="window.open('http://udk187.ml')"
        class="
          border-l-2 border-r-2
          text-gray-400
          hover:text-blue-300
          border-white
          px-1
          ml-2
          cursor-pointer
        "
        >搜索站</span
      >
      <span
        ><button
          @click="$router.push('/login')"
          class="
            ml-4
            text-white text-sm
            border-gray-300
            hover:bg-blue-400
            px-3
            py-2
            transition-colors
            duration-150
            bg-blue-500
          "
        >
          登陆/注册
        </button></span
      >
    </div>
  </div>
  <!-- <div class="h-16 flex items-center justify-between shadow" style="background: rgb(238,238,238)">
        <div @click="$router.replace('/index?keyword=all&pn=1&type=all')" class="ml-3 text-lg cursor-pointer">
            <slot name="title">饼图站☆</slot>
        </div>
        <div>视频站</div>
        <div class="mr-3 hidden md:block">
            <slot name="search_tool"><search-tool /></slot>
        </div>
    </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchTool from "./SearchTool.vue";

export default defineComponent({
  components: { SearchTool },
  setup() {
    return {
      window,
    };
  },
});
</script>

<style scoped>
</style>