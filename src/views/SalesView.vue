<template>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl text-center font-bold tracking-tight text-gray-900">
        Best Weekend Sallers
      </h2>
      <ProductList />
      <ProductList />
      <Paginiation />
    </div>
  </div>
</template>
<script setup>
import ProductList from "../components/ProductList.vue";
import Paginiation from "../components/Paginiation.vue";
</script>
