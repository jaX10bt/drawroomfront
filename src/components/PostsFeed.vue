<template>
  <div>

  </div>
</template>

<script>
export default {
  name: 'PostsFeed',
  data() {
    return {
      pageNumber: 0,
      postsPerPage: 0,
      postsFeed: {
        totalPages: 0,
        posts: [
          {
            userId: 0,
            username: '',
            userAvatarImageData: '',
            postImageData: '',
            timestamp: '',
            likeCount: 0
          }
        ]
      }
    }
  },
  methods: {
    getPosts() {
      this.$http.get("/posts", {
            params: {
              pageNumber: this.pageNumber,
              postsPerPage: this.postsPerPage
            }
          }
      ).then(response => {
        this.postsFeed = response.data
      }).catch(error => {
        const errorResponseBody = error.response.data
      })
    },
  },
  mounted() {
    this.getPosts()
  }
}
</script>