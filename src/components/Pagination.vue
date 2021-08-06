<template>
  <div
    class="
      bg-white
      p-2
      flex
      items-center
      justify-between
      border-t border-gray-200
      sm:px-6
    "
  >
    <!-- 小屏 -->
    <div class="flex-1 flex justify-between sm:hidden">
      <a
        class="
          relative
          inline-flex
          items-center
          p-2
          rounded-l-md
          border border-gray-300
          bg-white
          text-sm
          font-medium
          text-gray-500
          hover:bg-gray-50
          cursor-pointer
        "
        @click="current_page++"
      >
        <span class="sr-only">上一页</span>
        <!-- Heroicon name: solid/chevron-left -->
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
      <a
        class="
          relative
          inline-flex
          items-center
          px-2
          py-2
          rounded-r-md
          border border-gray-300
          bg-white
          text-sm
          font-medium
          text-gray-500
          hover:bg-gray-50
          cursor-pointer
        "
        @click="current_page--"
      >
        <span class="sr-only">下一页</span>
        <!-- Heroicon name: solid/chevron-right -->
        <svg
          class="h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>

    <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="text-sm text-gray-700">
          当前静画总计
          <span class="font-medium">{{ total_count }}</span>
          张
        </p>
      </div>
      <!-- 假设当前有12页，页数上限8页，左边4页右边4页，
			当当前页>=4时，左边1页，中间10页，右边1页 -->
      <!-- 这里是非上述情况的组件展示，这样做的一个好处是
			可以少写很多JS代码，但坏处也很明显，要多写一个分页 -->
      <div v-show="current_page < p_size && over_page_size">
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <!-- 上一页 -->
          <a
            class="
              relative
              inline-flex
              items-center
              p-2
              rounded-l-md
              border border-gray-300
              bg-white
              text-sm
              font-medium
              text-gray-500
              hover:bg-gray-50
              cursor-pointer
            "
            @click="current_page--"
          >
            <span class="sr-only">上一页</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
          <!-- 前n页 -->
          <a
            aria-current="page"
            class="
              relative
              inline-flex
              items-center
              p-2
              border
              text-sm
              font-medium
              cursor-pointer
              text-center
            "
            style="width: 50px"
            v-for="i in p_size"
            @click="current_page = i"
            :key="i"
            :class="current_page === i ? 'current-page' : 'default-page'"
          >
            <p style="width: 100%">{{ i }}</p>
          </a>
          <!-- 中间省略 -->
          <span
            v-show="over_page_size"
            class="
              relative
              inline-flex
              items-center
              px-4
              py-2
              border border-gray-300
              bg-white
              text-sm
              font-medium
              text-gray-700
            "
          >
            ...
          </span>
          <!-- 后n页 -->
          <a
            v-show="over_page_size"
            aria-current="page"
            class="
              z-10
              bg-indigo-50
              border-indigo-500
              text-indigo-600
              relative
              inline-flex
              items-center
              p-2
              border
              text-sm
              font-medium
              cursor-pointer
              text-center
            "
            style="width: 50px"
            v-for="i in p_size"
            :key="later_page + i"
            :class="
              current_page === later_page + i ? 'current-page' : 'default-page'
            "
            @click="current_page = later_page + i"
          >
            <p style="width: 100%">{{ total_page - p_size + i }}</p>
          </a>
          <a
            class="
              relative
              inline-flex
              items-center
              px-2
              py-2
              rounded-r-md
              border border-gray-300
              bg-white
              text-sm
              font-medium
              text-gray-500
              hover:bg-gray-50
              cursor-pointer
            "
            @click="current_page++"
          >
            <span class="sr-only">Next</span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
      <div v-show="current_page >= p_size && over_page_size">
        <nav
          class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
          aria-label="Pagination"
        >
          <!-- 未超出范围正常显示 -->
          <a
            class="
              relative
              inline-flex
              items-center
              p-2
              rounded-l-md
              border border-gray-300
              bg-white
              text-sm
              font-medium
              text-gray-500
              hover:bg-gray-50
              cursor-pointer
            "
            @click="current_page--"
          >
            <span class="sr-only">上一页</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
          <!-- 超出范围显示1和省略 -->
          <a
            aria-current="page"
            class="
              relative
              inline-flex
              items-center
              p-2
              border
              text-sm
              font-medium
              cursor-pointer
              text-center
            "
            style="width: 50px"
            @click="current_page = 1"
          >
            <p style="width: 100%">1</p>
          </a>
          <span
            v-show="over_page_size"
            class="
              relative
              inline-flex
              items-center
              px-4
              py-2
              border border-gray-300
              bg-white
              text-sm
              font-medium
              text-gray-700
            "
          >
            ...
          </span>
          <!-- 省略前 -->
          <a
            aria-current="page"
            class="
              relative
              inline-flex
              items-center
              p-2
              border
              text-sm
              font-medium
              cursor-pointer
              text-center
            "
            :class="current_page === i ? 'current-page' : 'default-page'"
            style="width: 50px"
            v-for="i in page_list"
            @click="current_page = i"
            :key="i"
          >
            <p style="width: 100%">{{ i }}</p>
          </a>
          <!-- 省略后 -->
          <!-- 未超出前正常显示 -->
          <a
            v-show="!over_page_size"
            aria-current="page"
            class="
              relative
              inline-flex
              items-center
              p-2
              border
              text-sm
              font-medium
              cursor-pointer
              text-center
            "
            style="width: 50px"
            v-for="i in p_size"
            :key="later_page + i"
            :class="
              current_page === later_page + i ? 'current-page' : 'default-page'
            "
            @click="current_page = later_page + i"
          >
            <p style="width: 100%">{{ total_page - p_size + i }}</p>
          </a>
          <!-- 超出后显示省略和最后一页 -->
          <span
            v-show="over_page_size && current_page + p_size < total_page"
            class="
              relative
              inline-flex
              items-center
              px-4
              py-2
              border border-gray-300
              bg-white
              text-sm
              font-medium
              text-gray-700
            "
          >
            ...
          </span>
          <a
            aria-current="page"
            class="
              relative
              inline-flex
              items-center
              p-2
              border
              text-sm
              font-medium
              cursor-pointer
              text-center
            "
            :class="
              current_page === total_page ? 'current-page' : 'default-page'
            "
            style="width: 50px"
            @click="current_page = total_page"
          >
            <p style="width: 100%">{{ total_page }}</p>
          </a>

          <!-- 后一页 -->
          <a
            class="
              relative
              inline-flex
              items-center
              px-2
              py-2
              rounded-r-md
              border border-gray-300
              bg-white
              text-sm
              font-medium
              text-gray-500
              hover:bg-gray-50
              cursor-pointer
            "
            @click="current_page++"
          >
            <span class="sr-only">Next</span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg
              class="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, watch, toRaw } from "vue";
import { showMessageBox } from "../utils/utils";
import { useStore } from "vuex";
import { GlobalProp } from "@/store/props";

export default defineComponent({
  props: {
    // get from route parmas
    page_limit: {
      type: Number,
      default: 20,
    },
    pagination_size: {
      type: Number,
      default: 12,
    },
  },
  setup(props) {
    const total_count = 114514;
    const total_page = Math.ceil(total_count / props.page_limit + 0.5);
    const over_page_size = ref(total_page > props.pagination_size);

    const p_size = ref(
      over_page_size.value ? props.pagination_size / 2 : total_page
    );

    const store = useStore<GlobalProp>();

    const current_page = ref(1);

    let page_list: number[] = reactive([]);

    watch(
      [current_page, page_list],
      ([newValue, newValue1], [oldValue, oldValue1]) => {
        if (newValue < 1 || newValue > total_page) {
          current_page.value = oldValue;
          showMessageBox(
            {
              show: true,
              message: "新页面naidesu...",
              timeout: 700,
              type: "警告",
            },
            store
          );
          return;
        }
        let temp: number[] = toRaw(page_list);
        if (
          Math.abs(newValue - oldValue) >= temp.length - 1 ||
          newValue + p_size.value >= total_page
        ) {
          while (temp.length) temp.pop();
        }
        if (newValue >= p_size.value) {
          // if (newValue === p_size.value || newValue === total_page) page_list = [];
          // 第一次点击初始化页码列表

          if (!temp.length) {
            // console.log('hello')
            let i = 0;
            // 如果是前部分的最大值，则从3开始向后增加
            if (newValue === p_size.value) {
              for (let i = 3; i < p_size.value * 2 && i < total_page; i++)
                temp.push(i);
            } else {
              // 否则从current_page - p_size 到 current_page + p_size
              for (
                let i = current_page.value - p_size.value;
                i < current_page.value;
                i++
              )
                temp.push(i);
              for (
                let i = current_page.value;
                i < current_page.value + p_size.value && i < total_page;
                i++
              )
                temp.push(i);
              page_list = reactive(temp);
              // console.log(page_list)
            }
            // 之后的点击都可以看做是超过前部分最大值的情况，当然需要优化
          } else {
            // 特判点了最后几页
            // if (newValue <)
            // 去掉头几个，然后在尾部加上
            // let temp_arr: number[] = toRaw(page_list);
            let offset = newValue - oldValue;

            for (let i = 0; i < Math.abs(offset); i++) {
              if (offset > 0 && newValue > p_size.value) temp.shift();
              else temp.pop();
            }
            if (offset > 0) {
              let p_len = temp.length - 1;
              for (
                let i = temp[p_len] + 1;
                i < temp[p_len] + offset + 1 && i < total_page;
                i++
              )
                temp.push(i);
              // console.log('up')
            } else {
              let p_len = 0,
                t_val = temp[p_len];

              for (let i = t_val - 1; i > t_val - 1 + offset; i--) {
                temp.unshift(i);
              }
            }

            page_list = reactive(temp);
          }
        }
      }
    );

    return {
      total_count,
      total_page,
      p_size,
      over_page_size,
      current_page,
      page_list,
    };
  },
  computed: {
    later_page(): number {
      return this.total_page - this.p_size;
    },
  },
});
</script>

<style scoped>
.current-page {
  @apply z-10 bg-indigo-50 border-indigo-500 text-indigo-600;
}
.default-page {
  @apply bg-white border-gray-300 text-gray-500 hover:bg-gray-50;
}
</style>