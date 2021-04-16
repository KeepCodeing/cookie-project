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

<script type="text/javascript" src="https://s4.cnzz.com/z_stat.php?id=1279848804&web_id=1279848804"></script>

<script>
import ImagesBoard from "./components/ImagesBoard";
export default {
  name: 'App',

  components: {
    ImagesBoard

  },
};
</script>

<style>
@import '../src/assets/CSS/scrollbar.css';
</style>
