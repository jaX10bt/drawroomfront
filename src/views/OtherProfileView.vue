<template>
  <div class="d-flex justify-content-center">
    <div class="d-flex">
      <div class="container">
        <AvatarImageDisplay :image-data-base64="userProfileInfo.avatarData"/>
        <div>
          <h2>{{ userProfileInfo.username }}</h2>
        </div>
      </div>
    </div>
    <div class="d-flex">
      <div class="container">
        <CoverImageDisplay :image-data-base64="userProfileInfo.coverData"/>
      </div>
    </div>
  </div>
</template>

<script>
import DynamicUsersList from "@/components/DynamicUsersList.vue";
import {useRoute} from "vue-router";
import CoverImageDisplay from "@/components/image/CoverImageDisplay.vue";
import AvatarImageDisplay from "@/components/image/AvatarImageDisplay.vue";
import router from "@/router";

export default {
  name: 'OtherProfileView',
  components: {AvatarImageDisplay, CoverImageDisplay},

  data() {
    return {
      userId: Number(useRoute().query.userId),
      userProfileInfo: {
        profileId: 0,
        userId: 0,
        username: '',
        coverData: '',
        avatarData: ''
      },
    }
  },
  methods: {
    async getOtherProfileInfo() {
      await this.$http.get("/profile/other", {
            params: {
              userId: this.userId,
            }
          }
      ).then(response => {
        this.userProfileInfo = response.data
        this.checkIfRoutingToMyProfile()
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    checkIfRoutingToMyProfile() {
      if (Number(sessionStorage.getItem('userId')) === this.userProfileInfo.profileId) {
        router.push({name: 'profileRoute'});
      }
    }
  },
  mounted() {
    this.getOtherProfileInfo()
  }
}


</script>
