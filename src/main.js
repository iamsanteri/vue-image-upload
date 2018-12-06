import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import store from "./store/index";
import AuthHandler from "./components/AuthHandler";

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: "/oauth2/callback", component: AuthHandler }
    ]
});

new Vue({
    router, // Shortcut for router: router
    store,
    render: h => h(App)
}).$mount("#app");