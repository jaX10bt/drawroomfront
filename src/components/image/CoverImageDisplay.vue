<template>
  <div>
    <canvas v-if="imageDataBase64 === ''" ref="imageCanvas" id="imageCanvas" width="900" height="500">
<!--      <p>-->
<!--        Cover image does not yet exist.-->
<!--      </p>-->
    </canvas>
    <img v-else :src="imageDataBase64">
  </div>
</template>

<script>
export default {
  name: 'CoverImageDisplay',
  props: {
    imageDataBase64: String
  },
  data() {
    return {
      canvas: null
    }
  },
  mounted() {
    this.canvas = this.$refs.imageCanvas.getContext('2d');
  }
}
</script>