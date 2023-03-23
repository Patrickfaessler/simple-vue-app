<template>
  <main>
    <HomeView />
  </main>
</template>

<script>
import HomeView from './views/HomeView.vue';

export default {
  components: {
    HomeView
  }
}
</script>

<style>
main {
  width: 50%;
  margin: 0 auto;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  font-weight: bolder;
}
</style>
