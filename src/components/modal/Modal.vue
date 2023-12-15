<template>
  <div v-if="isOpen" class="modal fade show d-block" tabindex="-1" @click="closeModal">
    <div class="modal-dialog translate-middle-x" @click.stop>
      <div class="modal-content" style="border: black 1px solid; background-color: #f0f6f0">
        <div class="modal-header border-0">
          <h2 class="modal-title w-100 text-center" id="exampleModalLabel">
            <slot name="header">
              Default title
            </slot>
          </h2>
          <button type="button" class="btn-close p-4 position-fixed top-0 end-0" aria-label="Close"
                  @click="closeModal"></button>
        </div>
        <div class="modal-body">
          <slot name="body">
            default body
          </slot>
        </div>
        <div class="modal-footer border-0 justify-content-center">
          <slot name="footer">
          </slot>
          <button type="button" class="btn btn-secondary" @click="closeModal">{{ closeButtonName }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    closeButtonName: String
  },
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    openModal() {
      this.isOpen = true
    },

    closeModal() {
      this.isOpen = false
    }
  }
}
</script>