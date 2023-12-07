<template>

<!--  <div class="container text-center position-fixed start-50 top-50 translate-middle">-->
  <div class="container text-center">
    <CoverImage :image-data-base64="profileInfo.coverData"/>
  </div>

</template>

<script>

import CoverImage from "@/components/image/CoverImage.vue";
import CoverDrawModal from "@/components/modal/custom/CoverDrawModal.vue";
import {useRoute} from "vue-router";

export default {
  name: 'ProfileView',
  components: {CoverImage, CoverDrawModal},
  data() {
    return {
      isProfileOwner: false,
      userId: Number(sessionStorage.getItem('userId')),
      profileId: Number(useRoute().query.profileId),
      profileInfo: {
        profileUserId: 0,
        coverData: '',
        avatarData: ''
      }
    }
  },
  methods: {
    getProfileInfo() {
      this.$http.get("/profile", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.profileInfo = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    checkIfUserIsProfileOwner() {
      return this.isProfileOwner = this.profileInfo.profileUserId === sessionStorage.getItem('userId');
    },
  },
  mounted() {
    this.getProfileInfo()
    this.checkIfUserIsProfileOwner()
  }
}

</script>