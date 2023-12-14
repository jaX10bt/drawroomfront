<template>
  <Modal ref="modalRef" close-button-name="No">
    <template #header>
      Log out?
    </template>
    <template #body>
      Do you want to log out?
    </template>
    <template #footer>
      <button @click="executeLogout" class="btn btn-success" type="submit">Yes</button>
    </template>
  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";
export default {
  name: "LogoutModal",
  components: {Modal},
  methods: {
    executeLogout() {
      this.$emit('event-execute-logout')
      this.$refs.modalRef.closeModal()
    },
  }
}
</script>