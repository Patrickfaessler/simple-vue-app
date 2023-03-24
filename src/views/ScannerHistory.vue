<template>
   <div v-for="article in articles" :key="article.id">
    {{ article.name }}
   </div>
</template>

<script>
import { getArticle } from '../data/Articledata.js';

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
    }
}
</script>

<style>

</style>