<template>
  <Modal ref="modalRef" close-button-name="No">
    <template #header>
      <h1>Delete post?</h1>
    </template>
    <template #body>
      <p>Are you sure you want to delete this post from {{ post.username }}?</p>
    </template>
    <template #footer>
      <button @click="deletePost" type="button" class="btn btn-secondary">Yes</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: "DeletePostModal",
  components: {Modal},
  props: {
    post: {}
  },
  methods: {
    deletePost() {
      this.$http.delete("/post", {
            params: {
              postId: this.post.postId,
            }
          }
      ).then(response => {
        this.$emit("event-post-deleted")
        this.$refs.modalRef.closeModal()
      }).catch(error => {
        router.push({name: 'errorRoute'})
      })
    }
  }
}
</script>


