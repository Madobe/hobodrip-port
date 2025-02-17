import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import DailyChecklist from "@/views/DailyChecklist.vue"
import TeamBuilder from "@/views/TeamBuilder.vue"
import GiftBoxes from "@/views/GiftBoxes.vue"

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
            component: DailyChecklist,
        },
        {
            path: "/team-builder",
            name: "team-builder",
            component: TeamBuilder,
        },
        {
            path: "/gift-boxes",
            name: "gift-boxes",
            component: GiftBoxes,
        },
    ],
})

export default router
