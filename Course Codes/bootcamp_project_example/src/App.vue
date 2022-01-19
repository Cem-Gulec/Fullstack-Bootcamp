<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  margin: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>
