<template>
  <teleport to="#image_shower_dialog">
    <div
      class="h-full w-full fixed top-0"
      style="background: rgba(0, 0, 0, 0.35)"
      v-show="showDialog"
    >
      <transition name="scale">
        <div class="h-full w-full fixed top-0" v-show="showDialog">
          <div
            @click="$emit('close-dialog')"
            class="absolute right-3 top-4 cursor-pointer md:right-10 md:top-3"
            style="z-index: 10"
          >
            <svg
              t="1628411857439"
              class="icon"
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="2155"
              width="40"
              height="40"
            >
              <path
                d="M512 817.52c-168.77 0-305.52-136.75-305.52-305.52S343.23 206.48 512 206.48 817.52 343.23 817.52 512 680.77 817.52 512 817.52z m0-581.937c-152.27 0-276.417 124.146-276.417 276.417S359.729 788.417 512 788.417c152.27 0 276.417-124.146 276.417-276.417S664.271 235.583 512 235.583z"
                p-id="2156"
              ></path>
              <path
                d="M534.311 512l118.333-118.332c5.814-5.814 5.814-15.521 0-22.312l-0.978-0.96a15.224 15.224 0 0 0-21.334 0L512 489.688 393.668 371.356a15.224 15.224 0 0 0-21.334 0l-0.978 0.978c-5.814 5.813-5.814 15.52 0 22.311L489.689 512 371.356 630.332c-5.814 5.814-5.814 15.521 0 22.312l0.978 0.978a15.224 15.224 0 0 0 21.334 0L512 534.329l118.332 118.333a15.224 15.224 0 0 0 21.334 0l0.978-0.978c5.814-5.814 5.814-15.521 0-22.312L534.311 512z"
                p-id="2157"
              ></path>
            </svg>
          </div>

          <div
            style="height: 95%; width: 95%"
            class="
              fixed
              top-1/2
              left-1/2
              transform
              -translate-x-1/2 -translate-y-1/2
              bg-gray-50
              grid grid-cols-9 grid-rows-5
            "
          >
            <div
              v-if="index !== -1"
              class="
                flex
                justify-center
                row-span-3
                col-span-9
                md:col-span-7
                md:row-span-4
              "
            >
              <div
                class="
                  bg-center
                  h-full
                  w-full
                  bg-contain bg-no-repeat
                  overflow-hidden
                "
                :style="{ backgroundImage: 'url(' + image_url + ')' }"
              >
                <div
                  :style="{ backgroundImage: 'url(' + thumb_url + ')' }"
                  style="filter: blur(10px); z-index: -1"
                  class="
                    bg-no-repeat
                    h-full
                    transform
                    scale-110
                    w-full
                    bg-cover
                    relative
                    top-0
                    bg-center
                  "
                ></div>
              </div>
            </div>
            <div
              class="
                bg-white
                px-3
                p-2
                overflow-y-scroll
                row-span-2
                col-span-9
                md:col-span-2
                md:row-span-4
              "
              v-if="index !== -1"
            >
              <div class="pb-2">
                <div class="py-1 text-lg text-gray-800">作者</div>
                <div
                  @click="
                    window.open(
                      'https://seiga.nicovideo.jp/user/illust/' +
                        illustData[index].user_id
                    )
                  "
                  class="text-blue-500 text-base cursor-pointer"
                >
                  {{ illustData[index].username }}
                </div>
              </div>
              <div class="pb-2">
                <div class="py-1 text-lg text-gray-800">标题</div>
                <div class="text-base text-gray-500">
                  {{ illustData[index].title }}
                </div>
              </div>
              <div class="pb-2">
                <div class="py-1 text-lg text-gray-800">简介</div>
                <div
                  v-html="illustData[index].description"
                  class="text-base text-gray-500"
                ></div>
              </div>
              <div class="pb-2">
                <div class="py-1 text-lg text-gray-800">静画id</div>
                <div
                  @click="
                    window.open(
                      'https://seiga.nicovideo.jp/seiga/im' +
                        illustData[index].sid
                    )
                  "
                  class="text-blue-500 text-base cursor-pointer"
                >
                  im{{ illustData[index].sid }}
                </div>
              </div>
              <div class="pb-2">
                <div class="py-1 text-lg text-gray-800">投稿时间</div>
                <div class="text-base text-gray-500">
                  {{ illustData[index].updated }}
                </div>
              </div>
              <div class="pb-2">
                <div class="py-1 text-lg text-gray-800">标签</div>
                {{ illustData[index].tags }}
              </div>
            </div>
            <div class="bg-yellow-200 col-span-9 row-span-1"></div>
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, watch, toRefs, ref } from "vue";
import { IllustProp } from "../store/props";

export default defineComponent({
  props: {
    showDialog: {
      type: Boolean,
      default: false,
    },
    illustData: {
      type: Array as PropType<IllustProp[]> | [],
      default: () => [],
    },
    index: {
      type: Number,
      required: true,
    },
  },
  emits: {
    "close-dialog": null,
  },
  setup(props) {
    const { illustData, index } = toRefs(props);

    const image_url = ref("");
    const thumb_url = ref("");

    watch(index, (newValue, oldValue) => {
      if (newValue === -1) return;
      const img = new Image();
      image_url.value =
        "https://lohas.nicoseiga.jp/thumb/" +
        illustData.value[newValue].sid +
        "i";
      thumb_url.value = image_url.value;
      img.src = illustData.value[newValue].cdn_url;
      img.onload = () => (image_url.value = img.src);
    });

    return {
      image_url,
      thumb_url,
      window,
    };
  },
});
</script>

<style scoped>
@keyframes scale_enter {
  from {
    transform: scale(0.3);
  }
  to {
    transform: scale(1);
  }
}
@keyframes scale_leave {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(0.7);
  }
}
.scale-enter-active {
  animation: scale_enter 0.3s;
}
.scale-leave-active {
  animation: scale_enter reverse 0.3s;
}
</style>