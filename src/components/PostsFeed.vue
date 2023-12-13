<template>
  <div>
    <div v-for="post in postsFeed.posts">
        <Post :post="post" :key="post.postId"/>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: 'PostsFeed',
  components: {Post},
  data() {
    return {
      pageNumber: 1,
      postsPerPage: 4,
      postsFeed: {
        totalPages: 0,
        posts: []
      }
    }
  },
  methods: {
    getPosts() {
      this.$http.get("/posts", {
            params: {
              pageNumber: this.pageNumber -1,
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