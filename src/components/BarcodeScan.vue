<script setup>
import { ref } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";

const decodedText = ref("");
const noCodeFound = ref(false);

const onLoaded = () => {
  console.log("loaded");
};

const onDecode = (text) => {
  decodedText.value = text;
  noCodeFound.value = false;
};

const foundCode = computed(() => decodedText.value !== "");
</script>

<template>
  <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
  <button :style="{backgroundColor: foundCode ? 'green' : 'red'}">{{ foundCode ? 'Code gefunden' : 'Suche nach Code...' }}</button>
  <h2>{{ decodedText }}</h2>
</template>

<style scoped>
</style>