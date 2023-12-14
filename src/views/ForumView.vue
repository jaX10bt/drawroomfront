<template>
  <DeletePostModal ref="deletePostModalRef" :post="selectedPost" @event-post-deleted="updateFeed"/>
  <div style="padding: 20px">
    <PostsFeed ref="postsFeedRef" class="d-flex flex-column-reverse align-items-center"
               @event-open-delete-modal="handleOpenDeletePostModal"/>
    <PostImageDraw @event-update-feed="updateFeed"/>
  </div>
</template>

<script>
import PostsFeed from "@/components/PostsFeed.vue";
import PostImageDraw from "@/components/image/PostImageDraw.vue";
import DeletePostModal from "@/components/modal/custom/DeletePostModal.vue";

export default {
  name: "ForumView",
  components: {DeletePostModal, PostsFeed, PostImageDraw},
  data() {
    return {
      selectedPost: {
        postId: 0,
        userId: 0,
        username: '',
        userAvatarImageData: '',
        postImageData: '',
        timestamp: '',
        likeCount: 0
      },
      userId: Number(sessionStorage.getItem('userId')),
      roleName: sessionStorage.getItem('roleName'),
      isDrawing: false
    }
  },
  methods: {
    updateFeed() {
      this.$refs.postsFeedRef.getPosts()
    },

    handleOpenDeletePostModal(post) {
      this.selectedPost = post
      this.$refs.deletePostModalRef.$refs.modalRef.openModal()
    },
  }
}
</script>