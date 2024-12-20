import { createRouter, createWebHistory } from "vue-router";

import Home from "@/views/Home.vue";
import NotFound from "@/components/NotFound.vue";
import Job from "@/views/Job.vue";
import Jobs from "@/views/Jobs.vue";
import AddJob from "@/views/AddJob.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/jobs",
      name: "jobs",
      component: Jobs,
    },
    {
      path: "/jobs/:id",
      name: "job",
      component: Job,
    },
    {
      path: "/jobs/add",
      name: "add-jobs",
      component: AddJob,
    },
    {
      path: "/:catchAll(.*)",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;
