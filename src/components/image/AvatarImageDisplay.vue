<template>
  <div>
    <canvas v-if="imageDataBase64 === ''" ref="imageCanvas" id="imageCanvas" width="200" height="200"></canvas>
    <img v-else :src="imageDataBase64">
  </div>
</template>

<script>
export default {
  name: 'AvatarImageDisplay',
  props: {
    imageDataBase64: String
  },
}
</script>