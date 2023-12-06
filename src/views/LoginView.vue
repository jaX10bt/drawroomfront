<template>
  <div class="login">
<!--    <img src="../assets/ahvike-08.png" width="200"/>-->
    <div class="container text-center position-fixed start-50 top-50 translate-middle" @keydown.enter="login">
      <div class="row justify-content-center">

        <div class="col col-3">

          <div class="input-group mb-3">
            <input v-model="username" type="text" class="form-control" PLACEHOLDER="Username" aria-label="Username" aria-describedby="basic-addon1">
          </div>
          <div class="input-group mb-3">
            <input v-model="password" type="password" class="form-control" PLACEHOLDER="Password" aria-label="Password" aria-describedby="basic-addon1">
          </div>
          <button @click="login" type="submit" class="btn btn-primary">Log in</button>

        </div>

      </div>
    </div>
    <footer class="text-center fixed-bottom mb-5">
      <h5 class="m-3">Not yet a member?</h5>
      <button @click="registerNewUser" type="button" class="btn btn-primary mb-5">JOIN THE FUN!</button>
    </footer>

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
      },
      errorResponse: {
        message:'',
        errorCode: 0
      }
    }
  },
  methods: {
    login() {
      if (this.allRequiredFieldsAreFilled()) {
        this.sendLoginRequest();
      } else {
        this.handleRequiredFieldsAlert();
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
        this.handleUnSuccessfulLogin(error);
      })
    },

    handleSuccessfulLogin() {
      sessionStorage.setItem('userId', this.loginResponse.userId)
      sessionStorage.setItem('roleName', this.loginResponse.roleName)
      this.$emit('event-update-nav-menu')
      router.push({name: 'homeRoute'})
    },

    handleUnSuccessfulLogin (error) {
      this.errorResponse = error.response.data
      const httpStatusCode = error.response.status
      if (httpStatusCode === 403 && this.errorResponse.errorCode === 111) {
        this.errorMessage = this.errorResponse.message
      } else {
        router.push ({name: 'errorRoute'})
      }
    },

    handleRequiredFieldsAlert() {
      this.errorMessage = 'Täida kõik väljad'

    },

    resetErrorMessage() {
      this.errorMessage = ''
    },

    registerNewUser() {
      router.push({name: 'registerRoute'})
    },
  }

}
</script>
