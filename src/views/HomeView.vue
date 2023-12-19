<script setup>
import ProductList from "../components/ProductList.vue";
</script>

<template>
  <div>
    <img src="../assets/salebanner.png" />
  </div>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl text-center font-bold tracking-tight text-gray-900">
        New Arrival
      </h2>
      <ProductList />
    </div>
  </div>

  <div>
    <img src="../assets/banner.jpg" />
  </div>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl text-center font-bold tracking-tight text-gray-900">
        Best Weekend Sallers
      </h2>
      <ProductList />
      <ProductList />
    </div>
  </div>
  <div class="py-4">
    <h2 class="text-2xl text-center font-bold tracking-tight text-gray-900">
      All product ->
    </h2>
  </div>
</template>
