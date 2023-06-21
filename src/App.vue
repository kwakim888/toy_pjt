<template>
  
  <Header_nav/>
  
  <div id="content" class="content">
    <router-view></router-view>
  </div>

  <Footer_nav/>

</template>

<script>
import Header_nav from "./components/layout/Header.vue";
import Footer_nav from "./components/layout/Footer.vue";

export default {
  name: 'App',
  components: {
    Header_nav,
    Footer_nav
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
