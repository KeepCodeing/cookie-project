<template>
  <div class="h-full">
    <router-view />
    <message-box />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { createTeleportElement } from "./utils/utils";
import { useStore } from 'vuex'
import MessageBox from "./components/MessageBox.vue";
import { GlobalProp } from "./store/props";
import { UPDATE_USER_STATUS } from "./store/type";

export default defineComponent({
  components: {
    MessageBox,
  },
  setup() {
    createTeleportElement(["image_shower_dialog", "message_box"]);
    const store = useStore<GlobalProp>();
    const token = sessionStorage.getItem('token');
    if (sessionStorage.getItem('token')) {
      store.commit(UPDATE_USER_STATUS, { token, isLogin: true});
    }
    return {};
  },
});
</script>

<style>
html,
body,
#app {
  height: 100%;
  width: 100%;
}
::-webkit-scrollbar {
  width: 7px;
  height: 5px;
  border-radius: 15px;
  -webkit-border-radius: 15px;
}
::-webkit-scrollbar-track-piece {
  background-color: #ffff;
  border-radius: 15px;
  -webkit-border-radius: 15px;
}
::-webkit-scrollbar-thumb:vertical {
  height: 5px;
  background-color: rgba(144, 147, 153, 0.5);
  border-radius: 15px;
  -webkit-border-radius: 15px;
}
::-webkit-scrollbar-thumb:horizontal {
  width: 7px;
  background-color: rgba(144, 147, 153, 0.5);
  border-radius: 15px;
  -webkit-border-radius: 15px;
}
</style>