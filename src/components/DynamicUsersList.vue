<template>
  <div class="row justify-content-center">
    <div class="col">
      <input v-model="searchText" @input="searchUsers" @keyup.enter="submitSearch" placeholder="Search users..." style="margin: 20px"/>
      <div v-for="user in filteredUsers" :key="user.id" class="row justify-content-center text-start">
        <div class="col">
          <a href="#" @click="navigateToOtherProfileView(user.userId)">{{ user.username }}</a>
          <font-awesome-icon v-if="isAdmin" @click="handleDeleteUserModal(user)"  class="ms-3 cursor-pointer" :icon="['fas', 'trash']" size="lg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router";
import OtherProfileView from "@/views/OtherProfileView.vue";

export default {
  name: 'DynamicUsersList',
  components: {OtherProfileView},
  props: {
    isAdmin: false
  },
  data() {
    return {
      filteredUsers: [],
      searchText: '',
      users: [
        {
          userId: 0,
          username: '',
          status: ''
        }
      ]
    }
  },
  methods: {
    handleDeleteUserModal(user) {
      this.$emit("event-open-delete-modal", user)
    },

    getActiveUsers() {
      this.$http.get("/users/active")
          .then(response => {
            this.users = response.data
            this.filteredUsers = this.users
          })
          .catch(error => {
            router.push({name: 'errorRoute'})
          })
    },

    submitSearch() {
      this.searchUsers();
    },


    searchUsers() {
      this.filteredUsers = this.users.filter((user) =>
          user.username.toLowerCase().includes(this.searchText.toLowerCase())
      )
    },

    navigateToOtherProfileView(userId) {
      router.push({name: 'otherProfileRoute', query: {userId: userId}});
    },
  },
  mounted() {
    this.getActiveUsers()
  }
}
</script>
