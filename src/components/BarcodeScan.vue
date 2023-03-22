<template>
  <div>
    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
    <div class="textbox" v-if="!noCodeFound">
      <h2>{{ decodedText }}</h2>
    </div>
    <button :style="{ backgroundColor: foundCode ? 'green' : 'red' }">
      {{ foundCode ? 'Code gefunden!' : 'Suche nach Code...' }}
    </button>
    <Artikel :barcodeText="decodedText" v-if="foundCode"></Artikel>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { StreamBarcodeReader } from "vue-barcode-reader";
import Artikel from "./Artikel.vue";

const decodedText = ref("");

const onLoaded = () => {
  console.log("loaded");
};

const onDecode = (text) => {
  decodedText.value = text;
};

const foundCode = computed(() => decodedText.value !== "");

</script>
