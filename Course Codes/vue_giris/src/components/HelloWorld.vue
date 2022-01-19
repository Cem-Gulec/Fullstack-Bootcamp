<template>
  <div>
    <button v-show="canIncrease" @click="increaseCount">increase</button>
    <button v-show="canDecrease" @click="decreaseCount">decrease</button>
    <h1 :class="{'foo1': count>5}">count: {{ count }}</h1>
    <input
        v-model="count"
        type="text"
    >
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return{
      count: 1,
      canIncrease: true,
      canDecrease: false,
      foo: "<h1> my first tryout </h1>",
    }
  },
  methods:{
    increaseCount(){
      this.count++;
    },
    decreaseCount(){
      this.count--;
    }
  },
  mounted(){
    setTimeout(()=>{
      this.foo = "<h2> my first tryout </h2>";
      this.inputType = "color";
    }, 2000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
  .foo1{
    background-color: red;
  }
</style>
