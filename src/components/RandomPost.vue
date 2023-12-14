<template>
  <img :src="PostImage.imageData" style="max-height: 100px; max-width: 500px">
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
