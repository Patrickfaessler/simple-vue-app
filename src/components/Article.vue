<template>
    <div class="article">
        <div v-if="article">
            <div class="article-image-container">
                <img :src="article.image" alt="Bild" class="article-image" />
            </div>
            <div class="article-details">
               <h1> {{ article.description }} 
                {{ article.price }} </h1>
               <h2>{{ article.ean }} </h2>
            </div>
        </div>
        <div class="article-details" v-if="!article">
            Kein passendes Produkt in der Datenbank gefunden!
        </div>
    </div>
</template>

<script>
import mockProducts from "@/assets/MockDatabase/MockProducts.js";
export default {
    props: {
        barcodeString: {
            type: String,
            required: true
        }
    },
    computed: {
        article() {
            return mockProducts.find((article) => article.ean === this.barcodeString);
        }
    },
}
</script>

<style scoped>
.article {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.article-image-container {
    width: 400px;
    height: 400px;
    justify-content: center;
    align-items: center;
}

.article-image {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.article-details {
    margin-top: 20px;
    width: 100%;
    font-size: 30px;
}
</style>