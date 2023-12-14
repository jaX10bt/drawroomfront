<template>

  <div class="container">

    <div class="row d-inline-flex">
      <div class="d-flex">
        <div class="card">
          <div class="card-title">
            {{ post.username }}
          </div>
          <div class="card-body">
            <img :src="post.userAvatarImageData" class="card-img" style="max-height: 100px">
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
export default {
  name: 'Post',
  props: {
    post: {}
  },

  methods: {
    handleDeletePostModal(post) {
      this.$emit("event-open-delete-modal", post)
    },
  }
}
</script>