<template>
  <div>
    <div v-if="imageDataBase64 === ''" class="image-placeholder" style="width: 200px; height: 200px">
      <!--      <p>-->
      <!--        Avatar image does not yet exist.-->
      <!--      </p>-->
    </div>
    <img v-else :src="imageDataBase64">
  </div>
</template>

<script>
export default {
  name: 'AvatarImageDisplay',
  props: {
    imageDataBase64: String
  }
}
</script>