import api from "../../api/imgur";
import qs from "qs";
import {router} from "../../main";

// Initial state
const state = {
    token: window.localStorage.getItem("imgur_token")
};

// Getting boolean if logged in or not
const getters = {
    isLoggedIn: state => !!state.token      
};

// Never call mutation directly, but rather via commit! Put complexity and most of code into actions
const actions = {
    login: () => {
        api.login();
    },
    finalizeLogin({ commit }, hash) {
        const parsed = qs.parse(hash.replace("#", ""));
        commit("setToken", parsed.access_token);
        window.localStorage.setItem("imgur_token", parsed.access_token);
        router.push("/");
    },
    logout: ({ commit }) => {
        commit("setToken", null);
        window.localStorage.removeItem("imgur_token");
    }
};

// Mutating by adding token when needed
const mutations = {
    setToken: (state, token) => {
        state.token = token;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
};