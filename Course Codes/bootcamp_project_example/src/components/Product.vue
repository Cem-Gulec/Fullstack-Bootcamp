<template>
  <div class="product-container">
    <img class="product-image" :src="product.image">
    <span>{{product.name}}</span>
    <span>{{product.description}}</span>
    <button>Go to detail</button>
  </div>
</template>

<script>
export default {
  name: "Product",
  props: {
    product: Object
  }
}
</script>

<style scoped>
.product-container{
   width: 220px;
  margin-right: 40px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
}
.product-image{
  width: 100%;
  height: 100%;
}
</style>