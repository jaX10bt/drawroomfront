<template>

  <div>
    <div v-for="post in postsFeed.posts">
        <Post ref="postRef" @event-open-delete-modal="handleOpenDeletePostModal" :post="post" :key="post.postId"/>
    </div>
    <Pagination :totalPages="postsFeed.totalPages" :pageNumber="pageNumber" @event-emit-new-page-number="setPageNumber"/>
  </div>
</template>

<script>
import Post from "@/components/Post.vue";
import Pagination from "@/components/Pagination.vue";
import {post} from "axios";

export default {
  name: 'PostsFeed',
  components: {Pagination, Post},
  data() {
    return {
      pageNumber: 1,
      postsPerPage: 6,
      postsFeed: {
        totalPages: 0,
        posts: [
          {
            postId: 0,
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
  watch: {
    pageNumber() {
      this.getPosts();
    },
  },
  methods: {
    post,
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

    handleOpenDeletePostModal(post) {
      this.$emit("event-open-delete-modal", post)
    },
  },
  beforeMount() {
    this.getPosts()
  }
}
</script>