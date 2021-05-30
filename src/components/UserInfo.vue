<template>
  <q-chip size="18px" color="white" text-color="accent">
    <q-avatar>
      <img :src="userData?.data?.avatar" :alt="userData?.data?.first_name" />
    </q-avatar>
    {{ `${userData?.data?.first_name} ${userData?.data?.last_name}` }}
  </q-chip>
</template>

<script lang="ts">
export default {
  name: "user-info",
  props: {
    userData: {
      type: Object,
    },
  },
};
</script>

<style></style>
