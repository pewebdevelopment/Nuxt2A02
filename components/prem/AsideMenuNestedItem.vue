<script setup>
import { useAttrs } from "vue";

const emit = defineEmits(["menu-click"]);

const menuClick = (event) => {
  console.log("menu-click", event);

  emit("menu-click", event);
  // emit("menu-click", event, props.item);

  // if (hasDropdown.value) {
  //   isDropdownActive.value = !isDropdownActive.value;
  // }
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
