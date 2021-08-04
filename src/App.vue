<template>
  <div class="h-full">
    <layout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from './components/Layout.vue'

export default defineComponent({
  components: { Layout },
  setup () {

    return {}
  }
})
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
}
</style>