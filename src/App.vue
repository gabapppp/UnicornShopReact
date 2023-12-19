<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Header />
  <Banner />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
