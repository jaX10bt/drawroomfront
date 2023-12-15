<template>
  <div class="container">
    <div class="row d-inline-flex">
      <div class="d-flex">
        <div class="card">
          <div class="card-title">
            <a href="#" @click="navigateToOtherProfileView(post.userId)" class="text-custom-light">{{ post.username }}</a>
          </div>
          <div class="card-body">
            <img v-if="post.userAvatarImageData === ''" src="../assets/images/avatar-not-found.png" class="card-img" style="opacity: 0.2"/>
            <img v-else :src="post.userAvatarImageData" class="card-img">
          </div>
        </div>
        <div class="card text-end">
          <div class="card-title">
            {{ post.timestamp }}
          </div>
          <div class="card-body">
            <img :src="post.postImageData" class="card-img">
            <font-awesome-icon class="cursor-pointer button-inline-top" :icon="['fas', 'heart']" size="lg"/>
          </div>
          <div>
            <font-awesome-icon v-if="isAdmin" class="cursor-pointer button-inline-bottom" @click="handleDeletePostModal(post)" :icon="['fas', 'trash']" size="lg"/>
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
    post: {},
    isAdmin: false
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