<template>
    <div>
        <Header />
        <thumb-image-container style="margin-top: 10px;" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './Header.vue'
import ThumbImageContainer from './ThumbImageContainer.vue'

export default defineComponent({
  components: { Header, ThumbImageContainer },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>