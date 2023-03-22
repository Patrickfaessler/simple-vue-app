<script setup>
import BarcodeScan from '../components/BarcodeScan.vue'
</script>

<template>
     <BarcodeScan @decode="onDecode" @loaded="onLoaded"></BarcodeScan>
     <v-button @click="">Scan</v-button>
</template>

<style scoped>
</style>
