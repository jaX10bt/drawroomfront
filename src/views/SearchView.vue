<template>
  <div class="d-flex justify-content-center">
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-6">
          <h1>{{ headerTitle }}</h1>
        </div>
      </div>
      <DynamicUsersList/>
    </div>
  </div>
</template>

<script>
import DynamicUsersList from "@/components/DynamicUsersList.vue";


export default {
  name: 'SearchView',
  components: {DynamicUsersList},
  data() {
    return {
      headerTitle: 'Find other fun people'
    }
  }
}

</script>






















