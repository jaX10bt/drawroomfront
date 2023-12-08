<template>
<!--  <CoverDrawModal ref="coverDrawModalRef" :cover-data="profileInfo.coverData"/>-->
<!--  <div class="container text-center position-fixed start-50 top-50 translate-middle">-->

  <div>

    <div v-if="isEditCover" class="container align-content-center">
      <CoverImageDraw :image-data-base64="profileInfo.coverData" @event-emit-image-data="setCoverImage"/>
    </div>
    <div v-else class="container align-content-center">
      <CoverImageDisplay :image-data-base64="profileInfo.coverData"/>
    </div>

    <div v-if="isProfileOwner">
      <button v-if="isEditCover === false" @click="editCoverImage" type="submit" class="btn btn-primary m-3">Edit cover image</button>
      <button v-if="isEditCover === true" @click="updateCoverImage" type="submit" class="btn btn-primary m-3">Save Cover</button>
    </div>

  </div>

</template>

<script>

import CoverImageDisplay from "@/components/image/CoverImageDisplay.vue";
import CoverImageDraw from "@/components/image/CoverImageDraw.vue";

export default {
  name: 'ProfileView',
  components: {CoverImageDraw, CoverImageDisplay},
  data() {
    return {
      isEditCover: false,
      isProfileOwner: false,
      userId: Number(sessionStorage.getItem('userId')),
      // profileId: Number(useRoute().query.profileUserId),
      profileInfo: {
        profileUserId: 0,
        coverData: '',
        avatarData: ''
      },
    }
  },
  methods: {
    async getProfileInfo() {
      await this.$http.get("/profile", {
            params: {
              userId: this.userId
            }
          }
      ).then(response => {
        this.profileInfo = response.data
        this.checkIfUserIsProfileOwner()
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    checkIfUserIsProfileOwner() {
      this.isProfileOwner = this.profileInfo.profileUserId === Number(sessionStorage.getItem('userId'));
    },

    editCoverImage() {
      this.isEditCover = true
    },

    setCoverImage(coverData) {
      this.profileInfo.coverData = coverData;
    },

    updateCoverImage() {
      this.$http.patch("/profile", this.profileInfo
      ).then(response => {
        this.profileInfo = response.data
        this.isEditCover = false
        this.getProfileInfo()
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },

    // setAndUpdateCoverImage() {
    //   this.setCoverImage();
    //   this.updateCoverImage();
    //   this.isEditCover = false;
    // },

  },
  mounted() {
    this.getProfileInfo()
  }
}

</script>