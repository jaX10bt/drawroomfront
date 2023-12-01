<template>
  <div class="login">
    <img src="../assets/ahvike-08.png" width="200"/>
    <div class="container text-center" @keydown.enter="login">
      <div class="row justify-content-center">

        <div class="col col-3">

          <div class="input-group mb-3">
            <input v-model="username" type="text" class="form-control" PLACEHOLDER="Username" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <input v-model="password" type="password" class="form-control" PLACEHOLDER="Password" aria-label="Password" aria-describedby="basic-addon1">
          </div>
          <button @click="login" type="submit" class="btn btn-primary">Log in</button>
          <h3>Not yet a member?</h3>
          <button @click="registerNewUser" type="button" class="btn btn-primary">JOIN THE FUN!</button>


        </div>

      </div>
    </div>

  </div>
</template>

<script>


import router from "@/router";

export default {
  name: 'LoginView',
  data() {
    return {
      username: '',
      password: '',
      loginResponse: {
        userId: 0,
        roleName: ''
      }
    }
  },
  methods: {
    login() {
      if (this.allRequiredFieldsAreFilled()) {
        this.sendLoginRequest()
      }

    },

    allRequiredFieldsAreFilled() {
      return this.username.length > 0 && this.password.length > 0
    },

    sendLoginRequest() {
      this.$http.get("/login", {
            params: {
              username: this.username,
              password: this.password
            }
          }
      ).then(response => {
        this.loginResponse = response.data
        this.handleSuccessfulLogin();
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    handleSuccessfulLogin() {
      sessionStorage.setItem('userId', this.loginResponse.userId)
      sessionStorage.setItem('roleName', this.loginResponse.roleName)
      this.$emit('event-update-nav-menu')
      router.push({name: 'homeRoute'})
    },

    registerNewUser() {
      router.push({name: 'registerRoute'})
    },
  }

}
</script>
