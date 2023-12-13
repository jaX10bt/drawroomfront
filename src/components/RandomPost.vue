<template>
<div>

</div>
</template>

<script>
export default {
  name: 'RandomPost',

data() {
  return {
    imageData: ''
  }

},

methods: {
  getRandomPost () {
    this.$http.get("/post/random")
        .then(response => {
          this.imageData = response.data
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
