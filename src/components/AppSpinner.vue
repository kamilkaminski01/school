<template>
  <div v-if="isLoading" class="spinner"></div>
</template>

<script setup lang="ts">
interface AppSpinnerProps {
  isLoading: boolean
}

defineProps<AppSpinnerProps>()
</script>

<style lang="scss">
.spinner {
  position: absolute;
  top: 47%;
  left: 47%;
  transform: translate(-50%, -50%);
  border: 5px solid $platinum;
  border-top: 5px solid $vivid-cerulean;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  z-index: 1;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
