<template>
     <h1>BarcodeApp</h1>
     <BarcodeScan></BarcodeScan>
</template>

<script>
import BarcodeScan from '../components/BarcodeScan.vue';

export default {
     name: 'BarcodeApp',
     components: {
          BarcodeScan,
     },
};
</script>

<style>
</style>
