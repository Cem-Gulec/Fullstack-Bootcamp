import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        favoriteProducts: []
    },
    getters: {
        getFavoriteCount: state => {
            return state.favoriteProducts.length;
        },
        isFavorite: state => productID => {
            return state.favoriteProducts.some(product => product.id === productID);
        }
    },
    mutations: {
        addToFavorites(state, product) {
            state.favoriteProducts.push(product);
        },
        removeFromFavoritesById(state, productId) {
            state.favoriteProducts = state.favoriteProducts.filter(product => product.id !== productId);
        }
    },
    actions: {
        favoriteStatusChanged({commit, getters}, product) {
            const favorite = getters.isFavorite(product.id);
            favorite ? commit('removeFromFavoritesById', product.id) : commit('addToFavorites', product);
        }
    }
});