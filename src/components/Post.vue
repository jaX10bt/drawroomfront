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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
  }
}
</script>