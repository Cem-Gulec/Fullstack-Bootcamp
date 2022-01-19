<template>
  <div class="header-container">
    <input v-model="searchText" id="search-input" type="text">
    <span @click="navigateToFavoritePage">asd</span>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchText: ""
    }
  },
  methods: {
    navigateToFavoritePage() {
      this.$router.push("/favorites/bootcamp")
    }
  },
  watch: {
    searchText(){
      this.$emit("searchChanged", this.searchText);
    }
  }
}
</script>

<style scoped>
.header-container{
  display: flex;
  background-color: deeppink;
  width: 800px;
  justify-content: space-between;
  padding: 10px 20px;
  margin-top: 50px;
}
#search-input{
  height: 50px;
  width: 500px;
}
</style>