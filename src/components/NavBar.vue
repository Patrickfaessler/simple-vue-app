<template>
    <Slide class="burger-menu" width="200">
        <h1>MENU</h1>
        <router-link to="/">Scanner</router-link>
        <router-link to="/scannerhistory">Scanner History</router-link>
    </Slide>
</template>

<script>
import { Slide } from "vue3-burger-menu";

export default {
    components: {
        Slide
    }
}
</script>

<style>
h1 {
    text-align: center;
    justify-content: center;
}

    .burger-menu a{
        text-decoration: none;
        color: aliceblue;
        text-align: center;
        justify-content: center;
        font-size: 20px;
    }

    a:hover {
        transform: scale(1.2)
    }


</style>