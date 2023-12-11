<template>

  <div class="d-inline-flex">
    <PostsFeed/>
  </div>

</template>

<script>
import PostsFeed from "@/components/PostsFeed.vue";

export default {
  name: "ForumView",
  components: {PostsFeed},
  data() {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      roleName: sessionStorage.getItem('roleName')
    }
  },
  methods: {

  }
}
</script>