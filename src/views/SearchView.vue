<template>
  <div>
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col col-4">
          <h1>{{ headerTitle }}</h1>
        </div>
      </div>
      <div>
        <div>
          <DynamicUsersList></DynamicUsersList>
        </div>

      </div>
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
      headerTitle: 'Search for users'
    }
  }
}

</script>






















