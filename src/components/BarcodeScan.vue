<template>
  <div>
    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
    <div class="textbox" v-if="!noCodeFound">
      <h2>{{ decodedText }}</h2>
    </div>
    <button :style="{ backgroundColor: foundCode ? 'green' : 'red' }">
      {{ foundCode ? 'Code gefunden!' : 'Suche nach Code...' }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
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
