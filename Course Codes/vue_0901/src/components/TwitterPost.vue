<template>
  <div>
    You are viewing {{this.$route.params.userid}} with post number {{this.$route.params.postid}}
  </div>
</template>

<script>
export default {
  name: "TwitterPost",
  mounted() {
    console.log(this.$route.params)
    console.log(this.$route.query)
  }
}
</script>

<style scoped>

</style>