<template>
  <div class="d-flex justify-content-center">
    <div class="d-flex">
      <div class="container">
        <AvatarImageDisplay :image-data-base64="userProfileInfo.avatarData"/>
        <div>
          <h3>{{userProfileInfo.username}}</h3>
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
export default {
  name: 'OtherProfileView',
  components: {AvatarImageDisplay, CoverImageDisplay},

  data () {
    return {
      userId: Number(useRoute().query.userId),
      userProfileInfo: {
        profileUserId: 0,
        username: '',
        coverData: '',
        avatarData: ''
      },
    }
  },
methods: {
      getOtherProfileInfo() {
        this.$http.get("/profile/other", {
              params: {
                userId: this.userId,
              }
            }
        ).then(response => {
          this.userProfileInfo = response.data
        }).catch(error => {
          const errorResponseBody = error.response.data
        })
      }
    },
  mounted() {
    this.getOtherProfileInfo()
  }
}


</script>
