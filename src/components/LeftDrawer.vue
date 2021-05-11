<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    absolute
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title font-weight-thin">
          Cookie Project
        </v-list-item-title>
        <v-list-item-subtitle>
          饼图站
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list
      dense
      nav
    >
      <v-list-item
        link
        @click="showSearchDialog"
      >
        <v-list-item-icon>
          <v-icon>mdi-magnify</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>搜索</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: "LeftDrawer",
    data () {
      return {
        drawer: false,
      }
    },
    methods: {
      showSearchDialog() {
        this.drawer = false;
        this.$emit('showSearchDialog');
      }
    }
  }
</script>

<style scoped>

</style>
