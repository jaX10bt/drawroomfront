<template>
  <!--  <div class="flex-container">-->
  <div class="d-flex justify-content-center">
    <div v-if="isEditAvatar" class="d-flex image-wrap">
      <div class="container">
        <AvatarImageDraw :image-data-base64="profileInfo.avatarData" @event-emit-image-data="setAvatarImage"/>
        <button v-if="isProfileOwner" @click="updateAvatarImage" type="submit" class="btn btn-primary button-inline">
          Save avatar
        </button>
      </div>
    </div>
    <div v-else class="d-flex image-wrap">
      <div class="container">
        <AvatarImageDisplay :image-data-base64="profileInfo.avatarData"/>
        <button v-if="isProfileOwner && !isEditCover" @click="editAvatarImage" type="submit" class="btn btn-primary button-inline">Edit avatar</button>
        <div>
          <h2>{{ profileInfo.username }}</h2>
        </div>
      </div>
    </div>
    <div v-if="isEditCover" class="d-flex image-wrap">
      <div class="container">
        <CoverImageDraw :image-data-base64="profileInfo.coverData" @event-emit-image-data="setCoverImage"/>
        <button v-if="isProfileOwner" @click="updateCoverImage" type="submit" class="btn btn-primary button-inline">
          Save cover
        </button>
      </div>
    </div>
    <div v-else class="d-flex image-wrap">
      <div class="container">
        <CoverImageDisplay :image-data-base64="profileInfo.coverData"/>
        <button v-if="isProfileOwner && !isEditAvatar" @click="editCoverImage" type="submit" class="btn btn-primary button-inline">Edit
          cover
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CoverImageDisplay from "@/components/image/CoverImageDisplay.vue";
import CoverImageDraw from "@/components/image/CoverImageDraw.vue";
import AvatarImageDisplay from "@/components/image/AvatarImageDisplay.vue";
import AvatarImageDraw from "@/components/image/AvatarImageDraw.vue";

export default {
  name: 'ProfileView',
  components: {AvatarImageDraw, AvatarImageDisplay, CoverImageDraw, CoverImageDisplay},
  data() {
    return {
      isProfileOwner: false,
      isEditCover: false,
      isEditAvatar: false,
      userId: Number(sessionStorage.getItem('userId')),
      profileInfo: {
        username: '',
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

    editAvatarImage() {
      this.isEditAvatar = true
    },

    setAvatarImage(avatarData) {
      this.profileInfo.avatarData = avatarData;
    },

    updateAvatarImage() {
      this.$http.patch("/profile", this.profileInfo
      ).then(response => {
        this.profileInfo = response.data
        this.isEditAvatar = false
        this.getProfileInfo()
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
  },
  mounted() {
    this.getProfileInfo()
  }
}
</script>