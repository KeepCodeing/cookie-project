<template>
  <v-app>
    <v-main>
      <v-app-bar app>
        <v-app-bar-nav-icon />
        <v-app-bar-title>Cookie Project</v-app-bar-title>
      </v-app-bar>
      <ImagesBoard />
    </v-main>
  </v-app>
</template>

<script>
import ImagesBoard from "./components/ImagesBoard";
export default {
  name: 'App',

  components: {
    ImagesBoard

  },
};
</script>
