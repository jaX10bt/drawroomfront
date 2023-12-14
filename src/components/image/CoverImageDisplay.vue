<template>
  <div>
    <canvas v-if="imageDataBase64 === ''" ref="imageCanvas" id="imageCanvas" width="900" height="500"></canvas>
    <img v-else :src="imageDataBase64">
  </div>
</template>

<script>
export default {
  name: 'CoverImageDisplay',
  props: {
    imageDataBase64: String
  },
}
</script>