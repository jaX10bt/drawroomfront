<template>
  <div>
    <ul class="pagination justify-content-center">
<!--      <li class="page-item" v-if="pageNumber > 1" v-on:click="pageChange(pageNumber - 1)">-->
<!--        <a class="page-link" href="#">Previous</a>-->
<!--      </li>-->
      <li class="page-item cursor-pointer" v-for="page in range(firstButtonNumber, lastButtonNumber)" :key="page"
          :class="{active : page === pageNumber}">
        <a class="page-link" v-on:click="pageChange(page)">{{ page }}</a>
      </li>
<!--      <li class="page-item" v-if="pageNumber < totalPages" v-on:click="pageChange(pageNumber + 1)">-->
<!--        <a class="page-link" href="#">Next</a>-->
<!--      </li>-->
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    totalPages: {},
    pageNumber: {},
  },
  watch: {
    pageNumber() {
      this.createPaginationButtonValues(this.totalPages, this.pageNumber)
    },
    totalPages() {
      this.createPaginationButtonValues(this.totalPages, this.pageNumber)
    },
  },
  data() {
    return {
      changedPage: Number,
      firstButtonNumber: '',
      lastButtonNumber: ''
    }
  },
  methods: {
    pageChange(newPageNumber) {
      this.$emit('event-emit-new-page-number', newPageNumber);
    },

    createPaginationButtonValues(totalPages, pageNumber) {
      let window = 3;
      let start = pageNumber - window;
      let end = pageNumber + window - 1;
      if (start <= 0) {
        end = end - start + 1;
        start = 1;
      }
      if (end > totalPages) {
        end = totalPages;
        start = Math.max(end - (window * 2) + 1, 1);
      }
      this.firstButtonNumber = start;
      this.lastButtonNumber = end;
    },

    range(min, max) {
      let array = [],
          j = 0;
      for (let i = min; i <= max; i++) {
        array[j] = i;
        j++
      }
      return array;
    },
  },
  beforeMount() {
    this.createPaginationButtonValues(this.totalPages, this.pageNumber)
  }
}
</script>