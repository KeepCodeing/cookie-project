<template>
  <div
    class="
      cursor-pointer
      shadow-md
      w-full
      bg-white
      thumb-image-box
    "
    :class="small ? 'h-full' : 'md:h-72 h-48'"
    @click="displayImage"
  >
    <loading-animation v-if="!is_loaded" />

    <div
      v-else
      class="h-full w-full bg-cover bg-center bg-no-repeat"
      :style="{ backgroundImage: 'url(' + image_url + ')' }"
    ></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import LoadingAnimation from "./LoadingAnimation.vue";
import { IllustProp } from "../store/props";

export default defineComponent({
  components: { LoadingAnimation },
  props: {
    image_data: {
      type: Object as PropType<IllustProp>,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    small: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {
    const img = new Image();
    const image_url = ref(
      "https://lohas.nicoseiga.jp/thumb/" + props.image_data.sid + "i"
    );
    const is_loaded = ref(false);

    img.src = image_url.value;

    img.onload = () => {
      is_loaded.value = true;
    };

    const displayImage = () => emit('display-image', props.index);
		
    return {
      image_url,
      is_loaded,
      displayImage
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