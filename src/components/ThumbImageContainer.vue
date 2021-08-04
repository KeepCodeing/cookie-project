<template>
    <div v-bind="$attrs" class=" grid md:grid-cols-4 px-2 md:grid-rows-5 gap-3 grid-cols-2">
        <div class="col-span-1 flex justify-center row-span-1" v-for="i in 20" :key="i">
            <thumb-image  />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ThumbImage from './ThumbImage.vue'

export default defineComponent({
    components: { ThumbImage },
    inheritAttrs: false,
    setup () {

        return {}
    }
})
</script>

<style scoped>

</style>