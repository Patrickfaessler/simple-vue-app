<template>
  <header>
    <NavBar />
    <RouterView />
  </header>
</template>

<script>
import NavBar from "@/components/NavBar.vue";

export default {
  components: {
    NavBar
  }

}
</script>

<style>
header {
  width: 100%;
  margin: 0 auto;
  font-family: 'Courier New', Courier, monospace;
  text-align: center;
  font-weight: bolder;
}
</style>
