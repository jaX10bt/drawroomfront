<template>
  <LogoutModal ref="logoutModalRef" @event-execute-logout="executeLogOut"/>
  <nav class="navbar navbar-expand-md justify-content-center">
    <template v-if="isLoggedIn">
      <div class="container-fluid justify-content-center">
        <a class="home-button" href="#" @click="navigateToHomeView">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarToggler">
          <router-link to="/profile">My Profile</router-link>
          <router-link to="/forum">DrawRoom</router-link>
          <router-link to="/users/active">Find Users</router-link>
        </div>
        <a class="logout-button" href="#" @click="handleLogOut">Log Out</a>
      </div>
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

    navigateToHomeView() {
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