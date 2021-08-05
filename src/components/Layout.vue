<template>
    <div>
        <Header />
        <thumb-image-container style="margin-top: 10px;" />
        <pagination />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from './Header.vue'
import ThumbImageContainer from './ThumbImageContainer.vue'
import Pagination from './Pagination.vue'

export default defineComponent({
  components: { Header, ThumbImageContainer, Pagination },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>