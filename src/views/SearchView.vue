<template>
  <DeleteUserModal ref="deleteUserModalRef" @event-user-deleted="updateActiveUsersList" :user="user"/>


<!--  <div class="d-flex justify-content-center" style="padding: 20px">-->
<!--    <div class="d-flex">-->
<!--      <div class="container text-center">-->
<!--        <div class="row justify-content-center">-->
<!--          <h1>-->
<!--            TEREKEST!-->
<!--          </h1>-->
<!--        </div>-->
<!--        <div class="container">-->
<!--          <RandomPost></RandomPost>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->


  <div class="d-flex justify-content-center" style="padding: 20px">

    <div class="d-flex">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col col-6">
            <h2>{{ headerTitle }}</h2>
          </div>
        </div>
        <DynamicUsersList ref="dynamicUsersListRef" @event-open-delete-modal="handleOpenDeleteUserModal" :isAdmin="isAdmin"/>
      </div>
    </div>

  </div>
</template>

<script>
import DynamicUsersList from "@/components/DynamicUsersList.vue";
import DeleteUserModal from "@/components/modal/custom/DeleteUserModal.vue";
import RandomPost from "@/components/RandomPost.vue";

export default {
  name: 'SearchView',
  components: {RandomPost, DeleteUserModal, DynamicUsersList},
  data() {
    return {
      isAdmin: false,
      headerTitle: 'Find other fun people',
      user: {
        userId: 0,
        username: '',
        status: ''
      },
    }
  },
  methods: {
    handleOpenDeleteUserModal(user) {
      this.user = user
      this.$refs.deleteUserModalRef.$refs.modalRef.openModal()
    },

    updateActiveUsersList() {
      this.$refs.dynamicUsersListRef.getActiveUsers()
    },

    getAndSetIsAdmin() {
      const roleName = sessionStorage.getItem('roleName')
      this.isAdmin = roleName === 'admin'
    },
  },
  mounted() {
    this.getAndSetIsAdmin()
  }
}

</script>






















