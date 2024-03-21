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
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  z-index: 1;

  &:after {
    display: block;
    width: 3.75em;
    height: 3.75em;
    content: ' ';

    border-radius: 50%;
    border: 5px solid $platinum;
    border-top: 5px solid $vivid-cerulean;

    animation: spin 1s linear infinite;
  }
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
