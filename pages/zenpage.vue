<script setup>
import { computed } from "vue";
import { mdiForwardburger, mdiBackburger, mdiMenu } from "@mdi/js";
// import { useRouter } from "vue-router";
import VueRouter from "vue-router";
import menuAside from "@/configs/menuAside.js";
import menuNavBar from "@/configs/menuNavBar.js";
import { useMainStore } from "@/store/main.js";
import { useLayoutStore } from "@/store/layout.js";
import { useStyleStore } from "@/store/style.js";
import BaseIcon from "@/components/BaseIcon.vue";
import FormControl from "@/components/FormControl.vue";
import NavBar from "@/components/NavBar.vue";
import NavBarItemPlain from "@/components/NavBarItemPlain.vue";
import FooterBar from "@/components/FooterBar.vue";
import PremAsideMenu from "@/components/prem/AsideMenu.vue";

useMainStore().setUser({
  name: "Zen Athang",
  email: "john@example.com",
  avatar:
    "https://avatars.dicebear.com/api/avataaars/example.svg?options[top][]=shortHair&options[accessoriesChance]=93",
});

const layoutAsidePadding = computed(() =>
  layoutStore.isAsideLgActive ? "lg:pl-20" : "xl:pl-20"
);

const styleStore = useStyleStore();

const layoutStore = useLayoutStore();

const router = new VueRouter();

// router = Vue.use(VueRouter);

router.beforeEach(() => {
  layoutStore.isAsideMobileExpanded = false;
});

const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    styleStore.setDarkMode();
  }

  if (item.isLogout) {
    //
  }
};
</script>

<template>
  <div>
    <PremAsideMenu :menu="menuAside" @menu-click="menuClick" />

    <!-- Use the Nuxt tag in Nuxt 2 Instead of the slot Tag -->
    <Nuxt />
  </div>
</template>
