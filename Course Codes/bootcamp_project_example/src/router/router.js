import VueRouter from "vue-router";
import Vue from "vue";
import ProductListingPage from "@/views/ProductListingPage";
import FavoritesPage from "@/views/FavoritesPage";

Vue.use(VueRouter)

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: ProductListingPage},
        {path: "/favorites/:userid", component: FavoritesPage}
    ]
});

export default router;