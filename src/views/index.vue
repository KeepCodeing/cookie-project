<template>
  <div>
    <layout />
    <!-- <message-box /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "../components/Layout.vue";
// import MessageBox from "../components/MessageBox.vue";
import { useRouter } from 'vue-router'

export default defineComponent({
  components: { Layout },
  setup() {
    const router = useRouter();
    router.replace('/index?keyword=all&pn=1&type=all')
    // onMounted(() => router.replace('/index?keyword=all&pn=1&type=tags'));
    return {};
  },
});
</script>

<style scoped>
</style>