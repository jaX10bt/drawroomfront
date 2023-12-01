<template>

  <div class="container text-center position-fixed start-50 top-50 translate-middle">
    <div class="row justify-content-center">

      <div class="col col-4">

        <div class="form-floating mb-3">
          <input v-model="username" type="text" class="form-control" id="floatingInput">
          <label for="floatingInput">Choose a username</label>
        </div>
        <div class="form-floating">
          <input v-model="password" type="password" class="form-control" id="floatingPassword">
          <label for="floatingPassword">Choose a password</label>
        </div>
        <div class="form-floating">
          <input v-model="passwordVerify" type="password" class="form-control" id="floatingPassword">
          <label for="floatingPassword">Verify password</label>
        </div>
        <button @click="addNewUser" type="submit" class="btn btn-primary m-3">Register</button>


      </div>

    </div>
  </div>

</template>

<script>

export default {
  name: 'RegisterView',
  data() {
    return {
      username: '',
      password: '',
      passwordVerify: '',
    }
  },
  methods: {
    addNewUser() {
      if (this.verifyPasswordsMatch()) {
        this.sendAddNewUserRequest();
      }
    },

    verifyPasswordsMatch() {
        return  this.password === this.passwordVerify
    },


  }

}

</script>