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
      <thumb-image :image_data="item" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from 'vuex'
import { GlobalProp } from '../store/props'
import ThumbImage from "./ThumbImage.vue";

export default defineComponent({
  components: { ThumbImage },
  inheritAttrs: false,
  setup() {
    const store = useStore<GlobalProp>();
    const illustData = computed(() => store.state.illust_list_prop.data);

    return {
        illustData,
    };
  },
});
</script>

<style scoped>
</style>