import { defineAsyncComponent } from "vue";

let structure = [
    {
        title: "Accueil",
        anchor: "accueil",
        component: defineAsyncComponent(() => import("@/components/pages/Hero.vue")),
        visible: true,
    },
    {
        title: "Navbar",
        anchor: "navbar",
        component: defineAsyncComponent(() =>
            import("@/components/Navbar.vue")
        ),
        visible: false,
    },
    {
        title: "Infos",
        anchor: "infos",
        component: defineAsyncComponent(() => import("@/components/pages/Infos.vue")),
        visible: true,
    },
    {
        title: "Travaux",
        anchor: "travaux",
        component: defineAsyncComponent(() => import("@/components/pages/Travaux.vue")),
        visible: true,
    },
    {
        title: "Contact",
        anchor: "contact",
        component: defineAsyncComponent(() => import("@/components/pages/Contact.vue")),
        visible: true,
    },
    {
        title: "Footer",
        anchor: "footer",
        component: defineAsyncComponent(() => import("@/components/Footer.vue")),
        visible: false,
    },
];

export { structure };
