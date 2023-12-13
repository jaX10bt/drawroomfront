<template>
  <img :src="PostImage.imageData">
</template>

<script>
export default {
  name: 'RandomPost',

data() {
  return {
    PostImage: {
      imageData: ''
    }
  }

},

methods: {
  getRandomPost () {
    this.$http.get("/post/random")
        .then(response => {
          this.PostImage = response.data
        })
        .catch(error => {
          const errorResponseBody = error.response.data
        })
  },
},
mounted() {
  this.getRandomPost()
}
}
</script>
