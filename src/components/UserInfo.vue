<template>
  <q-chip size="18px" color="white" text-color="accent" v-if="user">
    <q-avatar>
      <img :src="user?.avatar" :alt="user?.first_name" />
    </q-avatar>
    {{ `${user?.first_name} ${user?.last_name}` }}
  </q-chip>
</template>

<script lang="ts">
import { PropType } from "vue";
import { User } from "@/models/User";
export default {
  name: "user-info",
  props: {
    user: {
      type: Object as PropType<User>,
    },
  },
};
</script>

<style></style>
