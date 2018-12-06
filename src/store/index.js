// Import Vue and Vuex
import Vuex from "vuex";
import Vue from "vue";
import auth from "./modules/auth";
import images from "./modules/images";

// Connect Vuex with Vue
Vue.use(Vuex);

// Initiate a new store that contins getters, setters, mutations, actions...
export default new Vuex.Store({
    modules: {
        auth,
        images
    }
});