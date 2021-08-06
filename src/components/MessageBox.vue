<template>
  <transition name="slide" :duration="message_box.timeout" >
    <div
    v-show="message_box.show"
    :class="['text' + message_type]"
    class="
      top-0
      fixed
      left-1/2
      transform
      -translate-x-1/2
      inline-flex
      items-center
      bg-white
      leading-none
      rounded-full
      p-2
      shadow
      text-teal text-sm
      mt-4
    "
  >
    <span
      :class="['bg' + message_type]"
      class="
        inline-flex
        text-white
        rounded-full
        h-6
        px-3
        justify-center
        items-center
      "
      >{{ message_box.type }}</span
    >
    <span class="inline-flex px-2"
      >{{ message_box.message }}</span
    >
    </div>
  </transition>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from 'vuex'
import { GlobalProp } from '../store/props'

export default defineComponent({
  setup() {
    const store = useStore<GlobalProp>();

    const message_box = computed(() => store.state.message_box_prop);

    return {
      message_box,
    };
  },
  computed: {
    message_type() {
      if (this.message_box.type === '成功') return '-green-300';
      if (this.message_box.type === '错误') return '-red-300';
      if (this.message_box.type === '提示') return '-gray-300';
      return '-yellow-300';
    }
  }
});
</script>

<style scoped>
@keyframes slide-up {
  0% {
    transform: translate(-50%, -10px);
  }
  100% {
    transform: translate(-50%, 0px);
    transition: ease-in;
  }
}
.slide-enter-active {
  animation: slide-up 1s;
}
</style>