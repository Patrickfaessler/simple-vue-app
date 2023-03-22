<script setup>
import BarcodeScan from '../components/BarcodeScan.vue'
</script>

<template>
  <main>
     <BarcodeScan @decode="onDecode" @loaded="onLoaded"></BarcodeScan>
  </main>
</template>
