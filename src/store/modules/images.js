import api from "../../api/imgur";

const state = {
    images: []
};

const getters = {
    allImages: state => state.images // Return images
};

const actions = {
    async fetchImages({ rootState, commit }) {
        const { token } = rootState.auth // Allows to reach out to the root state of Vue instance
        const response = await api.fetchImages(token);
        commit("setImages", response.data.data);
    }
};

const mutations = {
    setImages: (state, images) => {
        state.images = images;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
