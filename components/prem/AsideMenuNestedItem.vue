<script setup>
import { ref, computed, watch } from "vue";
import { RouterLink } from "vue-router";
import { mdiMinus, mdiPlus, mdiChevronRight } from "@mdi/js";
import { useStyleStore } from "@/store/style.js";
import { getButtonColor } from "@/configs/colors.js";
import BaseIcon from "@/components/BaseIcon.vue";
import PremAsideMenuList from "@/components/prem/AsideMenuList.vue";
import PremUpdateMark from "@/components/prem/UpdateMark.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  activeSecondaryMenuKey: {
    type: String,
    default: null,
  },
  isDropdownList: Boolean,
  isCompact: Boolean,
});

const emit = defineEmits(["menu-click"]);

const styleStore = useStyleStore();

const asideMenuItemInactiveStyle = computed(() =>
  hasColor.value ? "" : `${styleStore.asideMenuItemInactiveStyle} dark:text-gray-300`
);

const asideMenuItemActiveBgStyle = computed(() => {
  return `${styleStore.asideMenuItemActiveBgStyle} dark:bg-slate-700/25`;
});

const asideMenuItemActiveStyle = computed(() => {
  console.log("stylestore:", stylestore);
  hasColor.value ? "" : styleStore.asideMenuItemActiveStyle;
});

const isAsideCompact = computed(() => props.isCompact);

watch(isAsideCompact, (value) => {
  if (value) {
    isDropdownActive.value = false;
  }
});

const isDropdownActive = ref(false);

const isSecondaryMenuActive = computed(
  () =>
    props.activeSecondaryMenuKey &&
    props.item?.key &&
    props.item?.key === props.activeSecondaryMenuKey
);

const hasColor = computed(() => props.item && props.item.color);

const componentClass = computed(() => {
  const base = [
    props.isDropdownList ? "py-3 px-6 text-sm" : "py-3",
    hasColor.value
      ? getButtonColor(props.item.color, false, true)
      : `${styleStore.asideMenuItemStyle} dark:hover:bg-gray-700/50`,
  ];

  if (!hasColor.value && (isDropdownActive.value || isSecondaryMenuActive.value)) {
    base.push(asideMenuItemActiveBgStyle.value);
  }

  return base;
});

const hasDropdown = computed(() => !!props.item.menu);

const hasSecondary = computed(() => !!props.item.menuSecondary);

const hasSub = computed(() => hasDropdown.value || hasSecondary.value);

const subIcon = computed(() => {
  if (hasSecondary.value) {
    return mdiChevronRight;
  }

  return isDropdownActive.value ? mdiMinus : mdiPlus;
});

const menuClick = (event) => {
  emit("menu-click", event, props.item);

  if (hasDropdown.value) {
    isDropdownActive.value = !isDropdownActive.value;
  }
};

const updateMarkPosition = computed(() => {
  const base = "top-0.5 right-4";

  return props.isCompact ? `${base} lg:right-6` : base;
});
</script>

<template>
  <a>
    <slot> </slot>
  </a>
</template>
:to="item.to ?? null" :href="item.href ?? null" :target="item.target ?? null"
:exact-active-class="activeSecondaryMenuKey ? null : asideMenuItemActiveBgStyle"
class="flex cursor-pointer" :class="componentClass" @click="menuClick"
