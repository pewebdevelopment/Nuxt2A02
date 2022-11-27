<script setup>
import { useAttrs } from "vue";

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

const menuClick = (event) => {
  emit("menu-click", event, props.item);
};

const attrs = useAttrs();
onMounted(() => {
  console.log("attrs in nested  ", attrs);
});
</script>

<template>
  <a v-bind="$attrs" @click="menuClick">
    <slot> </slot>
  </a>
</template>
