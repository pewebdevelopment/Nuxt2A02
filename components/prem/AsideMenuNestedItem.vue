<script setup>
import { useAttrs } from 'vue'

const attrs = useAttrs();
onMounted(() => {
  console.log('attrs in nested  ', attrs);

})
</script>

<template>
  <a v-bind="$attrs">
    <slot> </slot>
  </a>
</template>
