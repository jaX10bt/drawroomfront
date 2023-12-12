<template>
<div>
  <div>
<h1>{{userProfileInfo.username}}</h1>
  </div>
  <div class="container align-content-center">
    <CoverImageDisplay :image-data-base64="userProfileInfo.coverData"/>
  </div>
</div>
</template>

<script>
import DynamicUsersList from "@/components/DynamicUsersList.vue";
import {useRoute} from "vue-router";
import CoverImageDisplay from "@/components/image/CoverImageDisplay.vue";
export default {
  name: 'OtherProfileView',
  components: {CoverImageDisplay},

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
