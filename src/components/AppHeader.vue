<template>
  <header class="header">
    <RouterLink :to="{ name: 'home' }" class="header__brand">
      <img alt="logo" src="@/assets/icons/logo.svg" width="24" height="24" />School Kamil Kamiński
    </RouterLink>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;

  display: flex;
  width: 100%;
  height: 3em;
  padding: 0.5em 1em;

  background-color: $dark-jungle-green;
  border-bottom: 1px solid $yankees-blue;

  .header__brand {
    display: flex;
    align-items: center;
    gap: 0.5em;

    color: $white;
    font-weight: 700;
  }
}
</style>
