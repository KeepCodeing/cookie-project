<template>
  <div>
    <div class="grid h-full grid-cols-7 grid-rows-2 md:grid-rows-1">
      <!-- 输入框 -->
      <input
        v-model="search_data.keyword"
        class="
          col-span-4
          mr-2
          outline-none
          focus:outline-none
          focus:ring-1 focus:ring-yellow-200
          focus:border-transparent
          duration-300
          pl-2
          rounded-full
        "
      />
      <!-- 选项按钮 -->
      <div
        class="
          col-span-2
          bg-gray-200
          text-sm text-gray-500
          leading-none
          border-2 border-gray-200
          inline-flex
          rounded-full
        "
      >
        <button
          @click="search_data.type = 'tags'"
          :class="{ button_active: search_data.type === 'tags' }"
          class="
            inline-flex
            items-center
            transition-colors
            duration-100
            ease-in
            focus:outline-none
            hover:text-blue-400
            focus:text-blue-400
            rounded-l-full
            px-2
            py-1
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="fill-current w-4 h-4 mr-2"
          >
            <rect x="3" y="3" width="7" height="7"></rect>
            <rect x="14" y="3" width="7" height="7"></rect>
            <rect x="14" y="14" width="7" height="7"></rect>
            <rect x="3" y="14" width="7" height="7"></rect>
          </svg>
          <span>标签</span>
        </button>
        <button
          @click="search_data.type = 'sid'"
          :class="{ button_active: search_data.type === 'sid' }"
          class="
            inline-flex
            items-center
            transition-colors
            duration-100
            ease-in
            focus:outline-none
            hover:text-blue-400
            focus:text-blue-400
            rounded-r-full
            px-2
            py-1
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="fill-current w-4 h-4 mr-2"
          >
            <line x1="8" y1="6" x2="21" y2="6"></line>
            <line x1="8" y1="12" x2="21" y2="12"></line>
            <line x1="8" y1="18" x2="21" y2="18"></line>
            <line x1="3" y1="6" x2="3.01" y2="6"></line>
            <line x1="3" y1="12" x2="3.01" y2="12"></line>
            <line x1="3" y1="18" x2="3.01" y2="18"></line>
          </svg>
          <span>编号</span>
        </button>
      </div>
      <!-- 搜索 -->
      <button
        @click="commitSearch"
        class="
          col-span-1
          ml-2
          text-white
          rounded-full
          text-sm
          border-gray-300
          hover:bg-yellow-500
          px-3
          py-2
          transition-colors
          duration-150
          bg-yellow-400
        "
      >
        搜索
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { useRoute } from 'vue-router'
import { GlobalProp } from "../store/props";
import { UPDATE_KEYWORD } from "../store/type";
import { showMessageBox } from "../utils/utils";

export default defineComponent({
  setup() {
    const store = useStore<GlobalProp>();
    const route = useRoute();
    const search_data = reactive({
      keyword: "",
      type: "tags",
    });

    if (route.query.keyword && route.query.type) {
      search_data.keyword = route.query.keyword.toString();
      search_data.type = route.query.type.toString();
      store.commit(UPDATE_KEYWORD, {
        keyword: search_data.keyword,
        type: search_data.type,
      });
    };

    const commitSearch = () => {
      if (search_data.keyword === "") return;
      const keyword = search_data.keyword
        .replaceAll("姐贵", "姉貴")
        .replaceAll("兄贵", "兄貴")
        .replaceAll(/\s+/g, " ")
        .trimEnd()
        .trimStart();
      showMessageBox(
        {
          type: "成功",
          message: `成功搜索${search_data.keyword}${
            search_data.type === "tags" ? "标签" : "编号"
          }的静画`,
          timeout: 1500,
          show: true,
        },
        store
      );
      store.commit(UPDATE_KEYWORD, {
        keyword,
        type: search_data.type,
      });
    };

    return {
      search_data,
      commitSearch,
    };
  },
});
</script>

<style scoped>
.button_active {
  background: white;
  border-radius: 9999px;
  color: #63b3ed;
}
</style>