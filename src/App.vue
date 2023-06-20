<template>
  <header_nav/>
  <div id="content" class="content">
    <router-view></router-view>
  </div>
</template>

<script>
import header_nav from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    header_nav
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
