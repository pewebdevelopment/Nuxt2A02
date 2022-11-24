<script setup>
import { ref, computed } from "vue";

import {
  mdiContrastCircle,
  mdiInformation,
  mdiCheckCircle,
  mdiAlert,
  mdiAlertCircle,
  mdiOpenInNew,
  mdiClose,
  mdiReload,
  mdiTrendingUp,
} from "@mdi/js";

import { useStyleStore } from "@/store/style.js";
import SectionMain from "@/components/SectionMain.vue";
import CardBox from "@/components/CardBox.vue";
import BaseButtons from "@/components/BaseButtons.vue";
import BaseButton from "@/components/BaseButton.vue";
import NotificationBar from "@/components/NotificationBar.vue";
import BaseDivider from "@/components/BaseDivider.vue";
import CardBoxModal from "@/components/CardBoxModal.vue";
import SectionTitle from "@/components/SectionTitle.vue";
import FormField from "@/components/FormField.vue";
import FormCheckRadioGroup from "@/components/FormCheckRadioGroup.vue";

import SectionTitleLineWithButton from "@/components/SectionTitleLineWithButton.vue";
import CardBoxComponentEmpty from "@/components/CardBoxComponentEmpty.vue";
import CardBoxComponentTitle from "@/components/CardBoxComponentTitle.vue";
import PillTag from "@/components/PillTag.vue";

const modalOneActive = ref(false);

const modalTwoActive = ref(false);

const modalThreeActive = ref(false);

const notificationSettingsModel = ref([]);

const notificationsOutline = computed(
  () => notificationSettingsModel.value.includes("outline") > -1
);

const buttonSettingsModel = ref([]);

const buttonsOutline = computed(
  () => buttonSettingsModel.value.includes("outline") > -1
);

const buttonsSmall = computed(
  () => buttonSettingsModel.value.includes("small") > -1
);

const buttonsDisabled = computed(
  () => buttonSettingsModel.value.includes("disabled") > -1
);

const buttonsRounded = computed(
  () => buttonSettingsModel.value.includes("rounded") > -1
);

const pillsSettingsModel = ref(["icon"]);

const pillsOutline = computed(
  () => pillsSettingsModel.value.includes("outline") > -1
);

const pillsSmall = computed(
  () => pillsSettingsModel.value.includes("small") > -1
);

const pillsIcon = computed(() =>
  pillsSettingsModel.value.includes("icon") > -1 ? mdiTrendingUp : null
);

const styleStore = useStyleStore();
</script>

<template>
  <div>
    <NuxtLayout name="zen">
      <SectionTitle>Buttons</SectionTitle>

      <SectionMain>
        <CardBox>
          <BaseButtons>
            <BaseButton
              color="lightDark"
              label="Button"
              :small="buttonsSmall"
              :outline="buttonsOutline"
              :disabled="buttonsDisabled"
              :rounded-full="buttonsRounded"
            />
          </BaseButtons>
        </CardBox>
      </SectionMain>
    </NuxtLayout>
  </div>
</template>
