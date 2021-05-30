<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-secondary">
        <q-toolbar-title class="text-bold"> Credit Now </q-toolbar-title>
        <user-info :userData="userData"></user-info>
        <q-btn
          rounded
          align="between"
          color="primary"
          icon-right="logout"
          @click="onLogout"
          class="logout-btn"
          >Logout
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import UserInfo from "../components/UserInfo.vue";
import { defineComponent, onBeforeMount } from "vue";
import { useUser } from "../hooks/useUserInfo";
import router from "@/router";

export default defineComponent({
  components: {
    UserInfo,
  },
  setup() {
    const { userData, getUserData } = useUser();
    onBeforeMount(() => {
      getUserData();
    });
    const onLogout = () => {
      localStorage.setItem("token", "");
      router.push("/login");
    };
    return { userData, onLogout };
  },
});
</script>

<style lang="scss" scoped>
.logout-btn {
  width: 7.5rem;
}
</style>
