<template>
  <dashboard-customer v-if="userType === UserTypes.Customer" />
  <dashboard-admin v-if="userType === UserTypes.Admin" />
</template>

<script>
import DashboardCustomer from "./DashboardCustomer.vue";
import DashboardAdmin from "./DashboardAdmin.vue";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { UserTypes } from "@/static/UserTypes";
export default {
  components: { DashboardCustomer, DashboardAdmin },
  setup() {
    const { storedValue: userType } = useLocalStorage("userType");

    return { userType, UserTypes };
  },
};
</script>

<style></style>
