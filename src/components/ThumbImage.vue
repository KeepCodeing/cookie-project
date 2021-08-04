<template>
    <div class="md:h-72 cursor-pointer shadow-md h-48 w-full bg-white thumb-image-box">
        <loading-animation />
        <img :src="image_url" />
    </div>
</template>

<script lang="ts">
import { GET_PAGE_IMAGE } from '../store/type'
import { computed, defineComponent, ref } from 'vue'
import { useStore } from 'vuex'
import LoadingAnimation from './LoadingAnimation.vue';

export default defineComponent({
  components: { LoadingAnimation },
    setup () {
        const store = useStore();
        // store.dispatch(GET_PAGE_IMAGE);
        
        // const loading_image = computed(() => store.state.imageUrl);

        // const img = new Image();
        // let image_url = ref('');

        // img.src = loading_image.value;
        // img.onload = () => {
        //     image_url.value = loading_image.value;
        //     console.log(image_url);
        // }
        let image_url = ref('');
        return {
            image_url,
        }
    }
});
</script>

<style scoped>
.thumb-image-box:hover {
    transform: translateY(-5px);
    transition: .2s;
}
</style>