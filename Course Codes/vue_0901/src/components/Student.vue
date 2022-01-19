<template>
  <div>
    {{ data.score }}
  </div>
</template>

<script>
export default {
  name: "Student",
  props: {
    data: {
      type: Object
    }
  },
  mounted() {
    setTimeout(()=>{
      this.$emit('foo', this.data);
    },2000);
  }

}
</script>

<style scoped>

</style>