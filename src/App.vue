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
  mounted() {
    this.initCNZZ();
  },
  methods: {
    initCNZZ() {
      //添加脚本
      const script = document.createElement('script');
      script.src = 'https://s22.cnzz.com/z_stat.php?id=1279848804&web_id=1279848804';
      script.language = 'JavaScript';
      script.id = 'cnzz';
      document.body.appendChild(script);
    }
  },
  // watch: {
  //   '$route' () {
  //     if (window._czc) {
  //       //监听路由变化
  //       let location = window.location;
  //       let contentUrl = location.pathname + location.hash;
  //       let refererUrl = '/';
  //       window._czc.push(['_trackPageview', contentUrl, refererUrl])
  //     }
  //   }
  // }
};
</script>

<style>
@import '../src/assets/CSS/scrollbar.css';
</style>
