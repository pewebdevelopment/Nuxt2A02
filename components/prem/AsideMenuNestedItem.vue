<script setup></script>

<template>
  <a>
    <slot> </slot>
  </a>
</template>

:to="item.to ?? null" :href="item.href ?? null" :target="item.target ?? null"
:exact-active-class="activeSecondaryMenuKey ? null : asideMenuItemActiveBgStyle"
class="flex cursor-pointer" :class="componentClass" @click="menuClick"
