<template>
   <div v-for="article  in articles" :key="article.id">
         <Article :barcodeString="article.name"></Article>
   </div>
</template>

<script>
import { getArticle } from '../data/Articledata.js';
import Article from '../components/Article.vue';

export default {
    data() {
        return {
            articles: [],
        }
    },

    methods: {
        async getArticles() {
            this.articles = await getArticle();
        }
    },

    created() {
        this.getArticles();
    },
    components: {
        Article
    }
}
</script>

<style>

</style>