<template>
  <div class="h-full">
    <layout />
    <message-box />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from './components/Layout.vue'
import MessageBox from './components/MessageBox.vue'
import { createTeleportElement } from './utils/utils'

export default defineComponent({
  components: { Layout, MessageBox },
  setup () {

    createTeleportElement(['image_shower_dialog', 'message_box']);
    return {}
  }
})
</script>

<style>
html, body, #app {
  height: 100%;
  width: 100%;
}
::-webkit-scrollbar {
  width: 7px;
  height: 5px;
  border-radius:15px;
  -webkit-border-radius:  15px;
}
::-webkit-scrollbar-track-piece {
  background-color: #ffff;
  border-radius:15px;
  -webkit-border-radius:  15px;
}
::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: rgba(144, 147, 153, 0.5);
  border-radius: 15px;
  -webkit-border-radius:  15px;
}
::-webkit-scrollbar-thumb:horizontal {
  width: 7px;
  background-color: rgba(144, 147, 153, 0.5);
  border-radius:  15px;  
  -webkit-border-radius: 15px;
}
</style>