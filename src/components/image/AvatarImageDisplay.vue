<template>
  <div>
    <img v-if="imageDataBase64 === ''" src="../../assets/images/avatar-not-found.png" style="opacity: 0.5"/>
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