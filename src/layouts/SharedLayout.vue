<template>
  <div class="shared-layout">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style lang="scss">
.shared-layout {
  min-height: 100vh;
  max-width: 1536px;

  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 1em;

  main:not(.tutorial) {
    flex: 1;
    padding-top: 5rem;
  }
}
</style>
