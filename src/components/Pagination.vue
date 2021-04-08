<template>
  <v-pagination
    v-model="page"
    :length="length"
    :next-icon="nextIcon"
    :prev-icon="prevIcon"
    :page="page"
    :total-visible="totalVisible"
  />
</template>

<script>
  import {GET_PAGE_IMAGES} from "../store/type";

  export default {
    name: "Pagination",
    props: {
      nextIcon: {
        type: String,
        required: false,
        default: 'mdi-chevron-right'
      },
      prevIcon: {
        type: String,
        required: false,
        default: 'mdi-chevron-left'
      },
      totalVisible: {
        type: Number,
        required: false,
        default: 7,
      },
      length: {
        type: Number,
        required: false,
        default: 50,
      },
      limit: {
        type: Number,
        required: false,
        default: 20,
      }
    },
    data() {
      return {
        page: 1,
      }
    },
    watch: {
      page(val) {
        this.$store.state.images = [];
        this.$store.dispatch(GET_PAGE_IMAGES, { page: val, limit: this.limit });
      }
    }
  }
</script>

<style scoped>

</style>
