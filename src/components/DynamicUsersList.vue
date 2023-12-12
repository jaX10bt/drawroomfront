<template>
  <div>
    <div class="row justify-content-center">
      <div class="col col-4">
        <input v-model="searchText" @input="searchUsers" @keyup.enter="submitSearch" placeholder="Search users..."/>
        <ul>
          <li v-for="user in filteredUsers" :key="user.id" @click="navigateToOtherProfileView(user.userId)">
              <span style="cursor: pointer;">{{ user.userId + " " +  user.username }}</span>
          </li>
        </ul>
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

  data() {
    return {
      filteredUsers: [],
      searchText: '',
      users: []
    }
  },

  methods: {
    fetchActiveUsers() {
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
    }
  },

  mounted() {
    this.fetchActiveUsers()
  }


}
</script>
