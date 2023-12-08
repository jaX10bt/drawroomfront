<template>
  <div>
    <div class="row justify-content-center">
      <div class="col col-4">
    <input v-model="searchText" @input="searchUsers" placeholder="Search users..."/>
    <ul>
      <li v-for="user in filteredUsers" :key="user.id">
        {{ user.username }}
      </li>
    </ul>
    </div>
    </div>
    <div class="row justify-content-center">
      <div class="col col-4">
        <button type="button" class="btn btn-outline-secondary m-3">Search</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'DynamicUsersList',

  data() {
    return {
      filteredUsers: [],
      searchText: '',
      users: []
    }
  },

  methods: {
    fetchActiveUsers: function () {
      this.$http.get("/users/active")
          .then(response => {
            this.users = response.data
            this.filteredUsers = this.users
          })
          .catch(error => {
            console.error("Error fetching active users:", error);
            //const errorResponseBody = error.response.data
          })
    },

    searchUsers() {
      this.filteredUsers = this.users.filter((user) =>
          user.username.toLowerCase().includes(this.searchText.toLowerCase())
      )
    }
    ,
  },

  mounted() {
    this.fetchActiveUsers()
  }


}
</script>
