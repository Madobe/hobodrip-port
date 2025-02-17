import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView,
        },
        {
            path: "/daily-checklist",
            name: "daily-checklist",
            component: () => import("@/views/DailyChecklist.vue"),
        },
        {
            path: "/team-builder",
            name: "team-builder",
            component: () => import("@/views/TeamBuilder.vue"),
        },
        {
            path: "/gift-boxes",
            name: "gift-boxes",
            component: () => import("@/views/GiftBoxes.vue"),
        },
    ],
})

export default router
