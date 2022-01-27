<template>
  <div class="product-container">
    <img class="product-image" :src="product.image">
    <button class="favorite-button"
            :class="{'favorite-flag': isFavorite}"
            @click="favoriteClicked">Favorite</button>
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
  },
  data(){
    return {
      isFavorite: false
    }
  },
  methods: {
    favoriteClicked(){
      this.isFavorite = !this.isFavorite;
      this.$store.dispatch("favoriteStatusChanged", this.product);
    }
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
  position: relative;
}
.product-image{
  width: 100%;
  height: 100%;
}
.favorite-button{
  position: absolute;
  top: 0;
  right: 0;
}
.favorite-flag{
  background-color: orange;
}
</style>