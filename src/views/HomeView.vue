<template>
  <div class="home">
    <div>
      <h1>
      TEREKEST!
    </h1>
    </div>
    <div>
      <RandomPost></RandomPost>
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
