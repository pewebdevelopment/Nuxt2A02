<script setup>
import PremAsideMenuItem from "@/components/prem/AsideMenuItem.vue";
import { onMounted } from "vue";

const props = defineProps({
  isDropdownList: Boolean,
  isCompact: Boolean,
  menu: {
    type: Array,
    default: () => [],
  },
  activeSecondaryMenuKey: {
    type: String,
    default: null,
  },
});

const emit = defineEmits(["menu-click"]);

const menuClick = (event, item) => {
  emit("menu-click", event, item);
};

onMounted(() => {
  console.log("menu:", props.menu);
});
</script>

<template>
  <ul>
    <PremAsideMenuItem
      v-for="(item, index) in menu"
      :key="index"
      :item="item"
      :is-dropdown-list="isDropdownList"
      :is-compact="isCompact"
      :active-secondary-menu-key="activeSecondaryMenuKey"
      @menu-click="menuClick"
    />
  </ul>
</template>
