<template>
  <div>
    <div v-for="post in postsFeed.posts">
        <Post :post="post" :key="post.postId"/>
    </div>
    <Pagination :totalPages="postsFeed.totalPages" :pageNumber="pageNumber" @event-emit-new-page-number="setPageNumber"/>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: 'PostsFeed',
  components: {Pagination, Post},
  data() {
    return {
      pageNumber: 1,
      postsPerPage: 6,
      postsFeed: {
        totalPages: 0,
        posts: []
      }
    }
  },
  watch: {
    pageNumber() {
      this.getPosts();
    },
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

    setPageNumber(pageNumber) {
      this.pageNumber = pageNumber;
    },
  },
  beforeMount() {
    this.getPosts()
  }
}
</script>