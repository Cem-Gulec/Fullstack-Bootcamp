import Vue from 'vue'
import VueRouter from "vue-router";
import App from './App.vue'
import Student from "@/components/Student";
import TwitterPost from "@/components/TwitterPost";

const Foo = {template: "<div>foo</div>"}
const Bar = {template: "<div>bar</div>"}

const router = new VueRouter({
  mode: "history",
  routes: [
    {path: "/foo", component: Foo},
    {path: "/bar", component: Bar},
    {path: "/user/:userid/post/:postid", component: TwitterPost}
  ]
});

Vue.config.productionTip = false
Vue.component("Student", Student);
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
