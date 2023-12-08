<template>
  <div>
    <div v-if="imageDataBase64 === ''" class="container" style="width: 900px; height: 500px">
<!--      <p>-->
<!--        Cover image does not yet exist.-->
<!--      </p>-->
    </div>
    <img v-else :src="imageDataBase64">
  </div>
</template>

<script>
export default {
  name: 'CoverImage',
  props: {
    imageDataBase64: String
  }
}
</script>