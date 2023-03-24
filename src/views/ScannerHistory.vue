<template>
    <h1>Test</h1>
</template>

<script>
import { getArticle } from '../data/Articledata';

export default {
    data() {
        return {
            article: [],
        }
    },

    methods: {
        async getArticle() {
            this.article = await getArticle();
        }
    }
}
</script>

<style>

</style>