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
          <div>
            <font-awesome-icon @click="handleDeletePostModal(post)" class="ms-3 cursor-pointer" :icon="['fas', 'trash']"
                               size="lg"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import router from "@/router";

export default {
  name: 'Post',
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
    handleDeletePostModal(post) {
      this.$emit("event-open-delete-modal", post)
    },
  }
}
</script>