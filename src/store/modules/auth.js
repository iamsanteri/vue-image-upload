import api from "../../api/imgur";

// Initial state
const state = {
    token: null
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
    logout: ({ commit }) => {
        commit("setToken", null);
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