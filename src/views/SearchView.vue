<template>
  <DeleteUserModal ref="deleteUserModalRef" @event-user-deleted="updateActiveUsersList"  :user="user"/>
  <div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-4">
          <h1>{{ headerTitle }}</h1>
        </div>
      </div>
      <div>
        <div>
          <DynamicUsersList ref="dynamicUsersListRef" @event-open-delete-modal="handleOpenDeleteUserModal"/>
        </div>

      </div>
    </div>
  </div>


</template>

<script>
import DynamicUsersList from "@/components/DynamicUsersList.vue";
import DeleteUserModal from "@/components/modal/custom/DeleteUserModal.vue";


export default {
  name: 'SearchView',
  components: {DeleteUserModal, DynamicUsersList},
  data() {
    return {
      headerTitle: 'Find other fun people',
      user: {
        userId: 0,
        username: '',
        status: ''
      },
      isAdmin: false,
    }
  },

  methods: {
    handleOpenDeleteUserModal(user) {
      this.user = user
      this.$refs.deleteUserModalRef.$refs.modalRef.openModal()
    },

    updateActiveUsersList(){
      this.$refs.dynamicUsersListRef.getActiveUsers()
    }
  },
  mounted() {

  }
}

</script>






















