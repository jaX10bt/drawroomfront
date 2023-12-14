<template>
  <Modal ref="modalRef" close-button-name="No">
    <template #header>
      <h1>Delete user?</h1>
    </template>
    <template #body>
      <p>Are you sure you want to delete user {{user.username}}?</p>
    </template>
    <template #footer>
      <button @click="deleteUser" type="button" class="btn btn-secondary">Yes</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
import router from "@/router";

export default {
  name: "DeleteUserModal",
  components: {Modal},
  props:{
    user:{}
  },

  methods: {
    deleteUser() {
      this.$http.delete("/user", {
            params: {
              userId: this.user.userId
            }
          }
      ).then(response => {
        this.$refs.modalRef.closeModal()
        this.$emit("event-user-deleted")
      }).catch(error => {
        router.push({name:'errorRoute'})
      })
    },
  },
}
</script>


