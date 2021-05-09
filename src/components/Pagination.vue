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
    data() {
      return {
        page: 1,
      }
    },
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
      },
    },
    watch: {
      page(val) {
        this.$store.state.images = [];
        this.$store.dispatch(GET_PAGE_IMAGES, {
          pn: val,
          limit: this.limit ,
          keyword: 'cookie☆ forever',
          type: 'all',
          join: 'OR',
          order:'-created'
        });
      }
    }
  }
</script>

<style scoped>

</style>
