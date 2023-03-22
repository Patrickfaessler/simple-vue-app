<template>
    <div>
      <h2>{{ article.description + "\t" + article.price || "Kein Artikel gefunden!" }}</h2>
    </div>
</template>

<script>
import productsData from '@/assets/database.json';

export default{
    props:{
        barcodeText: {
            type: String,
            required: true
        }
    },
    computed:{
        article(){
            const foundProduct = productsData.products.find((product) => product.ean === this.barcodeText);
            return foundProduct ? foundProduct : null;
        }
    }
}
</script>

<style>
</style>