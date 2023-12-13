<template>
    <div class="card">
      <div class="card-header">
        {{ post.username }}
      </div>
      <div class="card-body d-inline-flex">
        <img :src="post.userAvatarImageData" class="card-img" style="height: 100px">
        <img :src="post.postImageData" class="card-img">
      </div>
      <!--    <div class="card-body">-->
      <!--      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>-->
      <!--    </div>-->
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