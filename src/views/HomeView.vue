<template>
    <div class="d-flex flex-column justify-content-center position-fixed start-50 top-50 translate-middle" style="padding: 20px">
      <div class="text-center mb-2">
        <h4 class="m-3">Enjoy this random post from the vault!</h4>
      </div>
      <div class="d-flex">
        <div class="container text-center">
          <div class="row justify-content-center">
            <!--          <h1>-->
            <!--            TEREKEST!-->
            <!--          </h1>-->
            <RandomPost></RandomPost>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import RandomPost from "@/components/RandomPost.vue";

export default {
  name: 'HomeView',
  components: {RandomPost}
}
</script>
