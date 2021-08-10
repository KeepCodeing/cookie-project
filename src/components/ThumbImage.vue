<template>
  <div
    class="cursor-pointer shadow-md w-full bg-white"
    :class="small ? 'h-full' : 'md:h-72 h-48 thumb-image-box'"
    @click="displayImage"
  >
    <loading-animation v-if="!is_loaded" />

    <div
      v-else
      class="h-full w-full bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: 'url(' + image_url + ')' }"
    >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, watch } from "vue";
import LoadingAnimation from "./LoadingAnimation.vue";

export default defineComponent({
  components: { LoadingAnimation },
  props: {
    sid: {
      type: String,
      required: true,
      default: '',
    },
    index: {
      type: Number,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { emit }) {
    const { sid } = toRefs(props);
    const is_loaded = ref(false);
    const image_url = ref('');

    const loadImage = (nsid: string) => {
      const img = new Image();
      
      is_loaded.value = false;
      image_url.value = "https://lohas.nicoseiga.jp/thumb/" + nsid + "i"

      img.src = image_url.value;

      img.onload = () => {
        is_loaded.value = true;
      };
    };

    loadImage(sid.value);

    watch(sid, (n, o) => loadImage(n));

    const displayImage = () => is_loaded && emit("display-image", props.index);

    return {
      image_url,
      is_loaded,
      displayImage,
      sid,
    };
  },
});
</script>

<style scoped>
.thumb-image-box:hover {
  transform: translateY(-5px);
  transition: 0.2s;
}
</style>