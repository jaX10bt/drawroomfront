<template>
  <nav class="navbar navbar-expand-sm justify-content-center">
    <template v-if="isLoggedIn">

      <router-link to="/profile">My Profile</router-link>
      <router-link to="/forum">DrawRoom</router-link>
      <router-link to="/users/active">Find Users</router-link>
      <a class="logout-button" href="#" @click="handleLogOut">LOGI VÄLJA</a>

    </template>
  </nav>
  <router-view @event-update-nav-menu="updateNavMenu"/>
</template>

<script>

import router from "@/router";

export default {
  data() {
    return {
      isLoggedIn: false,
      isAdmin: false
    }
  },
  methods: {
    updateNavMenu() {
      const userId = sessionStorage.getItem('userId')
      this.isLoggedIn = userId !== null
      const roleName = sessionStorage.getItem('roleName')
      this.isAdmin = roleName === 'admin'
    },

    handleLogOut() {
      sessionStorage.clear()
      this.updateNavMenu()
      router.push({name: 'loginRoute'})

    },
  },

  mounted() {
    this.updateNavMenu()
  }
}

</script>

<style>

</style>
