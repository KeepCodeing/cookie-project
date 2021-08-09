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
            class="absolute right-3 top-4 cursor-pointer md:right-10 md:top-4"
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
            style="height: 95%; width: 95%; background: none"
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
            <!-- image shower -->
            <div
              class="
                flex
                justify-center
                items-center
                row-span-3
                col-span-9
                md:col-span-7
                md:row-span-4
                image-container
                relative
              "
            >
              <div
                @click="currentIndex--"
                class="swiper-button left-0 hidden absolute cursor-pointer"
              >
                <svg
                  fill="white"
                  t="1628493822136"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1981"
                  width="40"
                  height="40"
                >
                  <path
                    d="M321.618 512.117l33.107 33.128 0.142-0.14 314.408 314.434 33.107-33.107L387.97 512 702.382 197.565l-33.107-33.103-314.408 314.431-0.14200001-0.14-33.10699999 33.131 0.118 0.117-0.118 0.116z m0 0"
                    p-id="1982"
                  ></path>
                </svg>
              </div>
              <div
                @click="currentIndex++"
                class="
                  swiper-button
                  hidden
                  absolute
                  right-0
                  transform
                  rotate-180
                  cursor-pointer
                "
              >
                <svg
                  fill="white"
                  t="1628493822136"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="1981"
                  width="40"
                  height="40"
                >
                  <path
                    d="M321.618 512.117l33.107 33.128 0.142-0.14 314.408 314.434 33.107-33.107L387.97 512 702.382 197.565l-33.107-33.103-314.408 314.431-0.14200001-0.14-33.10699999 33.131 0.118 0.117-0.118 0.116z m0 0"
                    p-id="1982"
                  ></path>
                </svg>
              </div>

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
            <!-- info -->
            <div
              class="
                bg-white
                px-3
                p-2
                overflow-y-scroll overflow-x-hidden
                row-span-2
                col-span-9
                md:col-span-2
                md:row-span-4
                break-words
                white-space-nowarp
              "
            >
              <div class="pb-2">
                <div class="py-1 text-lg text-gray-800">作者</div>
                <div class="text-blue-500 text-base">
                  <span
                    @click="
                      window.open(
                        'https://seiga.nicovideo.jp/user/illust/' +
                          illustData[currentIndex].user_id
                      )
                    "
                    class="cursor-pointer"
                    >{{ illustData[index].username }}</span
                  >
                </div>
              </div>
              <div class="pb-2">
                <div class="py-1 text-lg text-gray-800">标题</div>
                <div class="text-base text-gray-500">
                  {{ illustData[currentIndex].title }}
                </div>
              </div>
              <div class="pb-2">
                <div class="py-1 text-lg text-gray-800">简介</div>
                <div
                  v-html="illustData[currentIndex].description"
                  class="text-base text-gray-500"
                ></div>
              </div>
              <div class="pb-2">
                <div class="py-1 text-lg text-gray-800">静画id</div>
                <div class="text-blue-500 text-base">
                  <span
                    @click="
                      window.open(
                        'https://seiga.nicovideo.jp/seiga/im' +
                          illustData[currentIndex].sid
                      )
                    "
                    class="cursor-pointer"
                    >im{{ illustData[currentIndex].sid }}</span
                  >
                </div>
              </div>
              <div class="pb-2">
                <div class="py-1 text-lg text-gray-800">投稿时间</div>
                <div class="text-base text-gray-500">
                  {{ illustData[currentIndex].updated }}
                </div>
              </div>
              <div class="pb-2">
                <div class="py-1 text-lg text-gray-800">标签</div>
                <span
                  v-for="(tag, idx) in illustData[currentIndex].tags"
                  :key="idx"
                  class="inline-flex cursor-pointer mr-1 mb-2"
                  ><span
                    :class="'bg-' + color_list[idx % color_len] + '-500'"
                    class="
                      py-1.5
                      text-white
                      px-2
                      text-sm
                      rounded-l-full rounded-r-full
                      overflow-ellipsis
                      break-all
                      whitespace-nowrap                      
                    "
                    >{{ tag }}</span
                  ></span
                >
              </div>
            </div>
            <!-- swiper -->
            <div
              style="background: rgba(255, 255, 255, 0)"
              class="col-span-9 row-span-1 hidden md:block"
            >
              <div
                class="
                  swiper-container
                  flex
                  py-1
                  overflow-y-hidden
                  items-center
                  overflow-x-scroll
                  h-full
                "
                id="swiper_container"
              >
                <div
                  class="swiper-button hidden absolute cursor-pointer"
                  @click="scrollSwiper('left')"
                >
                  <svg
                    fill="white"
                    t="1628493822136"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1981"
                    width="40"
                    height="40"
                  >
                    <path
                      d="M321.618 512.117l33.107 33.128 0.142-0.14 314.408 314.434 33.107-33.107L387.97 512 702.382 197.565l-33.107-33.103-314.408 314.431-0.14200001-0.14-33.10699999 33.131 0.118 0.117-0.118 0.116z m0 0"
                      p-id="1982"
                    ></path>
                  </svg>
                </div>
                <div
                  class="
                    swiper-button
                    hidden
                    absolute
                    right-0
                    transform
                    rotate-180
                    cursor-pointer
                  "
                  @click="scrollSwiper('right')"
                >
                  <svg
                    fill="white"
                    t="1628493822136"
                    class="icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="1981"
                    width="40"
                    height="40"
                  >
                    <path
                      d="M321.618 512.117l33.107 33.128 0.142-0.14 314.408 314.434 33.107-33.107L387.97 512 702.382 197.565l-33.107-33.103-314.408 314.431-0.14200001-0.14-33.10699999 33.131 0.118 0.117-0.118 0.116z m0 0"
                      p-id="1982"
                    ></path>
                  </svg>
                </div>
                <div class="h-full flex">
                  <div
                    :key="idx"
                    v-for="(img, idx) in illustData"
                    class="h-full w-40 m-0.5 bg-white flex-shrink-0 flex-grow-0"
                    :class="{
                      'border-yellow-400 border-4': currentIndex === idx,
                    }"
                  >
                    <thumb-image
                      @display-image="displayImage"
                      :small="true"
                      :image_data="img"
                      :index="idx"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent, PropType, watch, toRefs, ref, onMounted } from "vue";
import { IllustProp } from "../store/props";
import ThumbImage from "./ThumbImage.vue";

export default defineComponent({
  components: { ThumbImage },
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
    let { illustData, index } = toRefs(props);
    let currentIndex = ref(0);

    const image_url = ref("");
    const thumb_url = ref("");
    const swpier_container = ref<HTMLElement | null>(null);
    const illustLen = illustData.value.length;

    const color_list = [
      "red",
      "yellow",
      "blue",
      "green",
      "indigo",
      "purple",
      "orange",
    ];

    const color_len = color_list.length;

    const loadImage = (newValue: number) => {
      const img = new Image();
      image_url.value =
        "https://lohas.nicoseiga.jp/thumb/" +
        illustData.value[newValue].sid +
        "i";
      thumb_url.value = image_url.value;
      img.src = illustData.value[newValue].cdn_url;
      img.onload = () => (image_url.value = img.src);
    };

    onMounted(() => {
      swpier_container.value = document.getElementById("swiper_container");
    });

    loadImage(currentIndex.value);

    watch(index, (newValue, oldValue) => (currentIndex.value = newValue));

    watch(
      currentIndex,
      (newValue, oldValue) =>
        newValue > 0 && newValue < illustLen && loadImage(newValue)
    );

    const displayImage = (idx: number) => (currentIndex.value = idx);

    const scrollSwiper = (to: string) => {
      const timeout: number = 10;
      const offset: number = 400;
      const mv: number = (to === "left" ? -offset : offset) / timeout;

      let cnt = 30;

      const timer = setInterval(() => {
        if (swpier_container.value?.scrollLeft !== undefined)
          swpier_container.value.scrollLeft += mv;
        if (cnt-- <= 0) clearInterval(timer);
      }, timeout);
    };

    return {
      image_url,
      thumb_url,
      window,
      color_list,
      color_len,
      currentIndex,
      displayImage,
      scrollSwiper,
      swpier_container,
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
@keyframes fade-in {
  from {
    display: none;
    opacity: 0;
  }
  to {
    display: block;
    opacity: 1;
  }
}
.scale-enter-active {
  animation: scale_enter 0.3s;
}
.scale-leave-active {
  animation: scale_enter reverse 0.3s;
}
.swiper-container:hover .swiper-button {
  display: block;
  animation: fade-in 0.3s;
}
.image-container:hover .swiper-button {
  display: block;
  animation: fade-in 0.3s;
}
</style>