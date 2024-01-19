<template>
  <transition name="fade">
    <div v-if="isVisible" class="modal" @click="closeModal">
      <div class="modal-content">
        <img :src="imageSrc" alt="Modal Image" style="width: 100%;" @click="closeModal"/>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
export default {
  props: {
    isVisible: Boolean,
    imageSrc: String
  },
  methods: {
    closeModal() {
        this.$emit("close");
    }
  }
};
</script>

<style scoped>
/* 모달 스타일 */
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  padding-top: 60px;
}

.modal-content {
  margin: auto;
  display: block;
  max-width: 80%;
  max-height: 80%;
}

</style>