<template>
  <div v-if="illustData !== null">
    <div
      v-bind="$attrs"
      class="grid md:grid-cols-4 px-2 md:grid-rows-5 gap-3 grid-cols-2"
    >
      <div
        class="col-span-1 flex justify-center row-span-1"
        v-for="(item, idx) in illustData.data"
        :key="idx"
      >
        <thumb-image
          @display-image="displayImage"
          :index="idx"
          :sid="item.sid"
        />
      </div>
    </div>
    <image-shower-dialog
      @close-dialog="closeDialog"
      :illustData="illustData.data"
      :showDialog="showDialog"
      :index="currentIndex"
    />
    <pagination
      :page_limit="page_limit"
      :total_count="illustData.count"
      :pagination_size="12"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, reactive, watch } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";
import { GlobalProp } from "../store/props";
import ThumbImage from "./ThumbImage.vue";
import ImageShowerDialog from "./ImageShowerDialog.vue";
import Pagination from "./Pagination.vue";
import {
  GET_PAGE_IMAGE,
  UPDATE_KEYWORD,
  UPDATE_PAGINATION,
} from "../store/type";

export default defineComponent({
  components: { ThumbImage, ImageShowerDialog, Pagination },
  inheritAttrs: false,
  setup() {
    const store = useStore<GlobalProp>();
    const illustData = computed(() => {
      if (store.state.illust_list_prop !== null) {
        return store.state.illust_list_prop;
      }
      return null;
    });

    const showDialog = ref(false);
    const currentIndex = ref(0);
    const searchData = computed(() => store.state.search_prop);
    const page_limit = searchData.value.limit;
    const router = useRouter();
    const route = useRoute();

    if (route.query.keyword && route.query.pn && route.query.type) {
      store.commit(UPDATE_KEYWORD, {
        keyword: route.query.keyword,
        type: route.query.type,
      });
      store.commit(UPDATE_PAGINATION, { page: route.query.pn });
    }

    store.dispatch(GET_PAGE_IMAGE, searchData);

    watch(searchData.value, (newVal, oldVal) => {
      store.dispatch(GET_PAGE_IMAGE, searchData);
      router.push({
        name: "index",
        query: { keyword: newVal.keyword, pn: newVal.pn, type: newVal.type },
      });
    });

    const displayImage = (index: number) => {
      showDialog.value = true;
      currentIndex.value = index;
    };

    const closeDialog = () => {
      showDialog.value = false;
    };

    return {
      illustData,
      showDialog,
      displayImage,
      closeDialog,
      currentIndex,
      page_limit,
    };
  },
});
</script>

<style scoped>
</style>