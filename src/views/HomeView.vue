<script setup>
import BarcodeScan from '../components/BarcodeScan.vue'
</script>

<template>
     <BarcodeScan @decode="onDecode" @loaded="onLoaded"></BarcodeScan>
</template>

<style scoped>
</style>
