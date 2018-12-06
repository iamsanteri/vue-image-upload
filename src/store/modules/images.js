import api from "../../api/imgur";
import {router} from "../../main";

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
    },
    async uploadImages({ rootState }, images) {
        // Get the access token
        const { token } = rootState.auth;

        // Call our API module to do the upload
        await api.uploadImages(images, token);

        // Reditect user to ImageList component
        router.push("/");
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
