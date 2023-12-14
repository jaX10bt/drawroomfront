<template>
  <div class="container">
    <div class="row d-inline-flex">
      <div class="d-flex">
        <div class="card">
          <div class="card-title">
            <a href="#" @click="navigateToOtherProfileView(post.userId)">{{ post.username }}</a>
          </div>
          <div class="card-body">
            <canvas v-if="post.userAvatarImageData === ''" ref="imageCanvas" width="100" height="100" class="card-img"></canvas>
            <img v-else :src="post.userAvatarImageData" class="card-img">
          </div>
        </div>
        <div class="card text-end">
          <div class="card-title">
            {{ post.timestamp }}
          </div>
          <div class="card-body">
            <img :src="post.postImageData" class="card-img">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";
import AvatarImageDisplay from "@/components/image/AvatarImageDisplay.vue";

export default {
  name: 'Post',
  components: {AvatarImageDisplay},
  props: {
    post: {
      postId: 0,
      userId: 0,
      username: '',
      userAvatarImageData: '',
      postImageData: '',
      timestamp: '',
      likeCount: 0
    }
  },
  data() {
    return {
      canvas: null,
    }
  },
  methods: {
    navigateToOtherProfileView(userId) {
      router.push({name: 'otherProfileRoute', query: {userId: userId}});
    },
  },
  mounted() {

  }
}
</script>