import { createRouter, createWebHistory } from "vue-router";
import About from "../views/About.vue";
import EventList from "../views/EventList.vue";
import EventDetails from "../views/event/Details.vue";
import EventLayout from "../views/event/Layout.vue";
import EventRegister from "../views/event/Register.vue";
import EventEdit from "../views/event/Edit.vue";

const routes = [
  {
    path: "/",
    name: "EventList",
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/events/:id",
    name: "EventLayout",
    props: true,
    component: EventLayout,
    children: [
      {
        path: "",
        name: "EventDetails",

        component: EventDetails,
      },
      {
        path: "register",
        name: "EventRegister",
        component: EventRegister,
      },
      {
        path: "edit",
        name: "EventEdit",
        component: EventEdit,
      },
    ],
  },
  {
    path: "/event/:afterEvent(.*)",
    redirect: (to) => {
      return { path: "/events/" + to.params.afterEvent };
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
