<template>
  <div class="d-flex justify-content-center" style="padding: 20px">
    <div class="d-flex">
      <div class="container text-center">
        <div class="row justify-content-center">
          <h1>
            TEREKEST!
          </h1>
        </div>
        <div class="container">
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
