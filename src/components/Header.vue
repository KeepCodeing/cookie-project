<template>
    <div class="h-16 flex items-center justify-between shadow" style="background: rgb(238,238,238)">
        <div class="ml-3 text-lg cursor-pointer">
            <slot name="title">饼图站☆</slot>
        </div>
        <div class="mr-3 hidden md:block">
            <slot name="search_tool"><search-tool /></slot>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SearchTool from './SearchTool.vue'

export default defineComponent({
  components: { SearchTool },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>

</style>