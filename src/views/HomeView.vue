<template>
  <div>
    <img src="../assets/salebanner.png" />
  </div>
  <div class="bg-white">
    <div class="mx-auto max-w-2xl px-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl text-center font-bold tracking-tight text-gray-900">
        New Arrival
      </h2>
      <ProductList :products="newArrivalProduct"></ProductList>
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
      <ProductList :products="bestSallerProduct"></ProductList>
    </div>
  </div>
  <!-- <div class="py-4 text-center">
    <a href="/new">
      New Arrivals, click here
    </a>
  </div> -->
</template>

<script>
import axios from "axios";
import ProductList from "../components/ProductList.vue";
export default {
  components: {
    ProductList
  },
  data() {
    return {
      newArrivalProduct: null,
      bestSallerProduct: null,
    }
  },
  mounted() {
    const API_URL = "http://localhost:5000/api/product"
    axios.get(API_URL + "?page=2&size=4").then(response => {
      this.newArrivalProduct = response.data.docs
      this.newArrivalProduct.forEach(element => {
        element.href = "/products/" + element.productID
      });
    }).catch(e => {
      console.log(e)
    })
    axios.get(API_URL + "?page=2&size=8").then(response => {
      this.bestSallerProduct = response.data.docs
      this.newArrivalProduct.forEach(element => {
        element.href = "/products/" + element.productID
      });
    }).catch(e => {
      console.log(e)
    })
  }
}
</script>

