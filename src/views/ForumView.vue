<template>

  <div>
    <PostsFeed ref="postsFeedRef" class="d-flex flex-column-reverse align-items-center"/>
    <PostImageDraw @event-update-feed="updateFeed" class="d-flex justify-content-center" style="padding: 20px"/>
  </div>

</template>

<script>
import PostsFeed from "@/components/PostsFeed.vue";
import PostImageDraw from "@/components/image/PostImageDraw.vue";

export default {
  name: "ForumView",
  components: {PostsFeed, PostImageDraw},
  data() {
    return {
      userId: Number(sessionStorage.getItem('userId')),
      roleName: sessionStorage.getItem('roleName'),
      isDrawing: false
    }
  },
  methods: {
    updateFeed() {
      this.$refs.postsFeedRef.getPosts()
    },
  }
}
</script>