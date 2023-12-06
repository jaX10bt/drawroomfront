<template>

  <div class="container text-center position-fixed start-50 top-50 translate-middle">
    <CoverImage/>
  </div>

</template>

<script>

import CoverImage from "@/components/CoverImage.vue";

export default {
  name: 'ProfileView',
  components: {CoverImage},
  data() {
    return {

    }
  },
}

</script>