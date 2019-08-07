import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import Notfound from "./views/Notfound";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layout/basicLayout"),
      children: [
        {
          path: "/dashboard",
          name: "dashboard",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/dashboard/s1",
              name: "dash1",
              component: () =>
                import(/* webpackChunkName: "dash" */ "./views/Dashboard/dash1.vue")
            },
            {
              path: "/dashboard/s2",
              name: "dash2",
              component: () =>
                import(/* webpackChunkName: "dash" */ "./views/Dashboard/dash2.vue")
            }
          ]
        },
        {
          path: "/forms",
          name: "forms",
          component: { render: h => h("router-view") },
          children: [
            {
              path: "/forms/step1",
              name: "step1",
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/step1.vue")
            },
            {
              path: "/forms/step2",
              name: "step2",
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/step2.vue")
            },
            {
              path: "/forms/step3",
              name: "step3",
              component: () =>
                import(/* webpackChunkName: "form" */ "./views/Forms/step3.vue")
            }
          ]
        }
      ]
    },
    {
      path: "/user",
      name: "user",
      component: () =>
        import(/* webpackChunkName: "layout" */ "./layout/userLayout"),
      children: [
        {
          path: "",
          redirect: "/user/login"
        },
        {
          path: "/user/login",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/user/login")
        },
        {
          path: "/user/register",
          component: () =>
            import(/* webpackChunkName: "user" */ "./views/user/register")
        }
      ]
    },
    { path: "*", name: "404", component: Notfound }
  ]
});

router.beforeEach((to, form, next) => {
  NProgress.start();
  next();
});
router.afterEach((to, form, next) => {
  NProgress.done();
});

export default router;
