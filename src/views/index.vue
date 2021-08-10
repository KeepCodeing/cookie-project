<template>
  <div>
    <layout />
    <message-box />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "../components/Layout.vue";
import MessageBox from "../components/MessageBox.vue";

export default defineComponent({
  components: { Layout, MessageBox },
  setup() {
    return {};
  },
});
</script>

<style scoped>
</style>