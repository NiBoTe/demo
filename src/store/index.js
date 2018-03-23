import Vue from 'vue';
import Vuex from 'vuex';




Vue.use(Vuex);
const getters = {
    count: function (state) {
        return state.count += 100;
    }
}

export default new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment: state => state.count++,
        decrement: state => state.count--
    },
    getters,
    strict: process.env.NODE_ENV !== 'production'
})