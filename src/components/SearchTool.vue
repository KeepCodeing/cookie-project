<template>
  <div>
    <div class="grid h-full grid-cols-7 grid-rows-2 md:grid-rows-1">
      <!-- 输入框 -->
      <input
        v-model="search_data.keyword"
        class="
          col-span-4
          mr-2
          border border-transparent
          focus:outline-none
          focus:ring-1 focus:ring-yellow-200
          focus:border-transparent
          duration-300
          border-gray-300
          pl-2
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
          @click="search_data.tag = true"
          :class="{ button_active: search_data.tag }"
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
          @click="search_data.tag = false"
          :class="{ button_active: !search_data.tag }"
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
          rounded-sm
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
import { GlobalProp, SearchProp } from '../store/props'
import { SEARCH_PROP_UPDATE } from '../store/type'
import { showMessageBox } from '../utils/utils'

export default defineComponent({
  setup() {
    const store = useStore<GlobalProp>();
    const search_data: SearchProp = reactive({
        keyword: '',
        tag: true,
    });

    const commitSearch = () => {
        store.commit(SEARCH_PROP_UPDATE, { search_data });
        showMessageBox({ type: '成功', message: '成功搜索xx标签/编号的静画', timeout: 1500, show: true }, store);
    }

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