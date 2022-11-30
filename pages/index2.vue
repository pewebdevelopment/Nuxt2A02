<script setup>
import { reactive } from "vue";
import { mdiAccount, mdiAsterisk } from "@mdi/js";

import BaseButton from "@/components/BaseButton.vue";
import VueRouter from "vue-router";
// import { useRouter } from "vue-router";

const form = reactive({
  login: "john.doe",
  pass: "highly-secure-password-fYjUw-",
  remember: true,
});
const router = VueRouter;

// Vue.use(VueRouter);
const submit = () => {
  router.push("/dashboard");
};
</script>

<template>
  <div>
    <BaseButtons
      ><h1>Hello World</h1>
      <BaseButton type="submit" color="info" label="Login"></BaseButton
    ></BaseButtons>
  </div>
</template>
