<template>
  <nav>
    <template v-if="isLoggedIn">

      <router-link to="/profile">My Profile</router-link>
      <router-link to="/forum">DrawRoom</router-link>
      <router-link to="/users/active">Find Users</router-link>
      <a href="#" @click="handleLogOut">LOGI VÄLJA</a>

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  text-align: center;
  background-color: #c9c9c9;
  min-height: 100vh;
}

h3 {
  margin: 30px;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 30px;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
