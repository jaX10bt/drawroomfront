<template>
  <div v-if="errorMessage.length > 0" class="position-fixed start-50 translate-middle alert alert-warning" role="alert">
  {{ errorMessage }}
  </div>
</template>

<script>
export default {
  name: 'ErrorAlert',
  props: {
    errorMessage: String
  }
}
</script>