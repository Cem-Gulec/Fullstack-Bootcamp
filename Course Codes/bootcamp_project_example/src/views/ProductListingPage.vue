<template>
  <div>
    <Header @searchChanged="changeSearch"></Header>
    <div id="product-list-container">
      <Product
          v-for="product in filteredProducts"
          :product="product"
          :key="product.id">
      </Product>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Product from "@/components/Product";
import axios from "axios";
export default {
  name: "ProductListingPage",
  components:{
    Header,
    Product
  },
  data(){
    return {
      products: [],
      searchText: ""
    }
  },
  methods: {
    changeSearch(newVal){
      this.searchText = newVal;
    }
  },
  computed: {
    filteredProducts(){
      return this.products.filter(product => product.name.includes(this.searchText));
    }
  },
  async mounted(){
    const _path = "https://my-json-server.typicode.com/modanisa/bootcamp-db/products";
    const { data } = await axios.get(_path);
    this.products = data;
    console.log(data);
  }
}
</script>

<style scoped>
#product-list-container{
  display: flex;
  flex-wrap: wrap;
  width: 800px;
  margin-left: 30px;
  margin-top: 20px;
}
</style>