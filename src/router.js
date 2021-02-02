import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.use(VueRouter);

//어느 url 에서 어느 페이지를 routing 시킬지 여기서 정한다
const router = new VueRouter({
    mode: "history",
    routes:[
        {path: "/", component: Home},
        {path: "/about", component: About}
    ]
})

module.exports = router;