<template>
    <Slide>
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

<style></style>