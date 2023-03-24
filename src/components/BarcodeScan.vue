<template>
  <div class="scanner-wrapper">
    <div class="scanner">
      <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
    </div>
    <div class="scanner-status" :class="{ 'red-overlay': !foundCode, 'green-overlay': foundCode }">
      <h2>{{ foundCode ? "Barcode gelesen!" : "Bitte Code scannen!" }}</h2>
    </div>
    <div class="article" v-if="foundCode">
      <p class="barcode">Folgender Barcode wurde gelesen: {{ decodedString }}</p>
      <button @click="removeBarcode" class="remove-button">Barcode entfernen</button>
      <Article :barcodeString="decodedString"></Article>
      <button @click="addArticle">Artikel Hinzufügen!</button>
    </div>
  </div>
</template>

<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import Article from "./Article.vue";
import { addArticle } from "../data/Articledata";

export default {
  components: {
    StreamBarcodeReader,
    Article,
  },
  data() {
    return {
      decodedString: "",
      foundCode: false,
    };
  },
  methods: {
    onLoaded() {
      console.log("loaded");
    },
    onDecode(string) {
      this.decodedString = string;
      this.foundCode = this.decodedString !== "";
    },
    removeBarcode() {
      this.foundCode = false;
      this.decodedString = "";
    },
    addArticle() {
      const newArticle = { name: this.decodedString };
      addArticle(newArticle) 
      .then(data => {
        console.log("Artikel hinzugefügt: " + data);
      })
      .catch(error => {
        console.log(error);
      })
    }
  },
};
</script>

<style>
.scanner-wrapper {
  padding: 10px;
  position: relative;
  min-height: 800px;
  border: 2px solid gray;
  border-radius: 2%;
  background-color: gray;
}

.scanner {
  margin: 0 auto;
  width: 80%;
}

.scanner-status {
  margin: 0 auto;
  width: 40%;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
}

.barcode {
  margin: 20px auto;
  font-size: 20px;
}

.red-overlay {
  background-color: rgba(255, 0, 0, 0.8);
}

.green-overlay {
  background-color: rgba(0, 255, 0, 0.8);
}

.remove-button {
  background-color: #ff4b4b;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  padding: 10px;
  cursor: pointer;
  margin-top: 10px;
}

.remove-button:hover {
  background-color: #ff2b2b;
}
</style>
