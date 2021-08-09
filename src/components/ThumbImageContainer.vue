<template>
  <div
    v-bind="$attrs"
    class="grid md:grid-cols-4 px-2 md:grid-rows-5 gap-3 grid-cols-2"
  >
    <div
      class="col-span-1 flex justify-center row-span-1"
      v-for="(item, idx) in illustData"
      :key="idx"
    >
      <thumb-image
        @display-image="displayImage"
        :index="idx"
        :image_data="item"
      />
    </div>
  </div>
  <image-shower-dialog
    @close-dialog="closeDialog"
    :illustData="illustData"
    :showDialog="showDialog"
    :index="currentIndex"
  />
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import { GlobalProp } from "../store/props";
import ThumbImage from "./ThumbImage.vue";
import ImageShowerDialog from "./ImageShowerDialog.vue";

export default defineComponent({
  components: { ThumbImage, ImageShowerDialog },
  inheritAttrs: false,
  setup() {
    const store = useStore<GlobalProp>();
    const illustData = computed(() => store.state.illust_list_prop.data);
    const showDialog = ref(false);
    const currentIndex = ref(0);

    const displayImage = (index: number) => {
      showDialog.value = true;
      currentIndex.value = index;
    };

    const closeDialog = () => {
      showDialog.value = false;
      // setTimeout(() => currentIndex.value = -1, 150);
    };

    return {
      illustData,
      showDialog,
      displayImage,
      closeDialog,
      currentIndex
    };
  },
});
</script>

<style scoped>
</style>