<template>

  <ErrorAlert :error-message="errorMessage"/>
  <div class="container text-center position-fixed start-50 top-50 translate-middle">
    <div class="row justify-content-center">
      <div class="col col-3">

        <div class="form-floating mb-3">
          <input v-model="username" type="text" class="form-control" id="floatingInput">
          <label for="floatingInput">Choose a username</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="password" type="password" class="form-control" id="floatingPassword">
          <label for="floatingPassword">Choose a password</label>
        </div>
        <div class="form-floating mb-3">
          <input v-model="passwordVerify" type="password" class="form-control" id="floatingPassword">
          <label for="floatingPassword">Verify password</label>
        </div>
        <div class="d-flex justify-content-between">
          <button type="button" @click="$router.go(-1)" class="btn btn-secondary mt-3">Go back</button>
          <button @click="addNewUser" type="submit" class="btn btn-primary mt-3">Register</button>
        </div>

      </div>

    </div>
  </div>

</template>

<script>

import ErrorAlert from "@/components/ErrorAlert.vue";
import router from "@/router";

export default {
  name: 'RegisterView',
  components: {ErrorAlert},
  data() {
    return {
      username: '',
      password: '',
      passwordVerify: '',
      errorMessage: ''
    }
  },
  methods: {
    addNewUser() {
      if (this.allRequiredFieldsAreFilled()) {
        if (this.verifyPasswordsMatch()) {
          this.postNewUserInfo();
        } else {
          this.handlePasswordsNotMatchingError()
        }
      } else {
        this.handleRequiredFieldsError()
      }
    },

    verifyPasswordsMatch() {
      return this.password === this.passwordVerify;
    },

    allRequiredFieldsAreFilled() {
      return this.username.length > 0 && this.password.length > 0 && this.passwordVerify.length > 0;
    },

    postNewUserInfo() {
      this.$http.post("/user", null, {
            params: {
              username: this.username,
              password: this.password
            }
          }
      ).then(response => {
        this.navigateToLoginView()
        // const responseBody = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    handleRequiredFieldsError() {
      this.errorMessage = 'Please fill all required fields'
      setTimeout(this.resetErrorMessage, 4000)
    },

    handlePasswordsNotMatchingError() {
      this.errorMessage = 'Please enter matching passwords.'
      setTimeout(this.resetErrorMessage, 4000)
    },

    resetErrorMessage() {
      this.errorMessage = ''
    },

    navigateToLoginView() {
      router.push({name: 'loginRoute'})
    },

  }

}

</script>