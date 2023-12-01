<template>

  <div class="container text-center">
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
          <input v-model="password" type="password" class="form-control" id="floatingPassword">
          <label for="floatingPassword">Confirm password</label>
        </div>
        <button @click="registerNewUser" type="submit" class="btn btn-primary">Register</button>


      </div>

    </div>
  </div>

</template>

<script>

export default {

}

</script>