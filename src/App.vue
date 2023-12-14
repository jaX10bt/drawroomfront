<template>
  <LogoutModal ref="logoutModalRef" @event-execute-logout="executeLogOut"/>
  <nav class="navbar navbar-expand-sm justify-content-center">
    <template v-if="isLoggedIn">
      <a class="home-button" href="#">
        <img src="@/assets/images/ahvike-08.png" width="70" @click="routeToHomeView"/>
      </a>
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
import LogoutModal from "@/components/modal/custom/LogoutModal.vue";

export default {
  components: {LogoutModal},
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

    routeToHomeView() {
      router.push({name: 'homeRoute'})
    },

    handleLogOut() {
      this.$refs.logoutModalRef.$refs.modalRef.openModal()
    },

    executeLogOut() {
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