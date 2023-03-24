<template>
   <div v-for="article  in articles" :key="article.id">
         <Article :barcodeString="article.name"></Article>
         <button @click="deleteArticle(article.id)" class="delete-button">Artikel Löschen!</button>
        <hr />
   </div>
   
</template>

<script>
import { getArticle,deleteArticle } from '../data/Articledata.js';
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
        },
        async deleteArticle(id) {
            try{
                await deleteArticle(id);
                this.articles = this.articles.filter(article => article.id !== id);
            } catch (error) {
                console.log(error);
            }
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

.delete-button {
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 10px;
    font-size: 20px;
    cursor: pointer;
}

</style>