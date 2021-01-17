import Vue from "vue";
import Router from "vue-router";
import BaseLayout from "./layouts/default.vue";
import Login from "./views/Login.vue";
import SimpleList from "./views/SimpleList.vue";
import SearchList from "./views/SearchList.vue";
import CallSearchApiList from "./views/CallSearchApiList.vue";
import CallSearchApiListAndCsv from "./views/CallSearchApiListAndCsv.vue";
import UseCommonComponent from "./views/UseCommonComponent.vue";
import store from "./stores";

Vue.use(Router);

const router = new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/",
            component: BaseLayout,
            meta: { requiresAuth: true },
            children: [
                { path: "/", component: CallSearchApiList },
                { path: "/simple-list", component: SimpleList },
                { path: "/search-list", component: SearchList },
                { path: "/call-search-api-list", component: CallSearchApiList },
                { path: "/call-search-api-list-and-csv", component: CallSearchApiListAndCsv },
                { path: "/use-common-component", component: UseCommonComponent },
            ],
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.matched.some((record) => record.meta.requiresAuth) && !store.getters.isLogin) {
        next({ path: "/login", query: { redirect: to.fullPath } });
    } else {
        next();
    }
});

export default router;
