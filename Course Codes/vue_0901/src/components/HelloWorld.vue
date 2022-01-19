<template>
  <div>
    <!-- students.filter(x => x.passed).filter(x => x.retakeCount === 1) -->
    <Student
        :key="student.id"
        v-for="student in filteredStudents"
        :data="student"
        @foo="childCalledMethod">
      <!-- v-if="student.passed === true" -->
    </Student>
  </div>
</template>

<script>


export default {
  name: 'HelloWorld',
  props: ["count"],
  data() {
    return {
      passScore: 50,
      students: [
        {id: 1, name: "student1", retakeCount: 1, score: 68, passed: true},
        {id: 2, name: "student2", retakeCount: 5, score: 90, passed: true},
        {id: 3, name: "student3", retakeCount: 4, score: 50, passed: false},
        {id: 4, name: "student4", retakeCount: 2, score: 90, passed: true},
        {id: 5, name: "student5", retakeCount: 2, score: 40, passed: false},
        {id: 6, name: "student6", retakeCount: 3, score: 67, passed: true},
        {id: 7, name: "student7", retakeCount: 1, score: 32, passed: false},
        {id: 8, name: "student8", retakeCount: 1, score: 15, passed: false},
      ]
    }
  },
  methods: {
    childCalledMethod(arg1){
      console.log("child called foo method", arg1)
    }
  },
  computed: {
    filteredStudents(){
      return this.students.filter(student => student.retakeCount > 1 && student.score > this.passScore)
    }
  },
  watch: {
    passScore(newValue, oldValue) {
      console.log("passed score changed");
      console.log("new value: ", newValue, " old value: ", oldValue)
    }
  },
  mounted() {
    setTimeout(()=>{
      this.passScore = 20;
    }, 2000);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
