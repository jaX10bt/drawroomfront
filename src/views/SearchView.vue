<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <div class="col col-4">
        <h1>{{ headerTitle }}</h1>
      </div>
    </div>

    <div>
      <input v-model="searchText" @input="searchUsers" placeholder="Search users..."/>
      <ul>
        <li v-for="user in filteredUsers" :key="user.id">
          {{ user.username }}
        </li>
      </ul>
    </div>

    <!--    <div class="row justify-content-center">-->
    <!--      <div class="col col-4">-->
    <!--      <div>-->
    <!--        <div>-->
    <!--          <input type="text" class="form-control" placeholder="Search for users">-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      </div>-->
    <!--    </div>-->


    <div class="row justify-content-center">
      <div class="col col-2">
        <button type="button" class="btn btn-outline-secondary m-3">Search</button>
      </div>
    </div>
  </div>
  <!--  </div>-->

</template>

<script>


export default {
  name: 'SearchView',

  data() {
    return {
      headerTitle: 'Search for users',
      filteredUsers: [],
      searchText: '',
      users: [{
        userId: 0,
        username: ''
      }
      ]
    }
  },

  methods: {
      fetchActiveUsers: function () {
        this.$http.get("/users")
            .then(response => {
              this.users = response.data
              this.filteredUsers = this.users
            })
            .catch(error => {
              const errorResponseBody = error.response.data
            })
      },

      searchUsers() {
        this.filteredUsers = this.users.filter(() =>
            users.username.includes(this.searchText)
        )
      }
    ,
    },

  mounted() {
    this.fetchActiveUsers()
  }


}

</script>






















