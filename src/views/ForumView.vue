<template>

  <div class="d-inline-flex">
<!--    <PostsFeed/>-->
    <PostImageDraw/>
  </div>

</template>

<script>
// import PostsFeed from "@/components/PostsFeed.vue";
import PostImageDraw from "@/components/image/PostImageDraw.vue";

export default {
  name: "ForumView",
  components: {PostImageDraw},
  data() {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      roleName: sessionStorage.getItem('roleName'),
    }
  },
  methods: {
  }
}
</script>