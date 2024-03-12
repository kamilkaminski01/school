<template>
  <header>
    <div class="header__links">
      <RouterLink :to="{ name: 'home' }" class="header__brand">
        <LogoIcon width="24" height="24" />School Kamil Kamiński
      </RouterLink>
      <RouterLink :to="{ name: 'blog' }" class="header__link">Blog</RouterLink>
    </div>
  </header>
</template>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;

  width: 100%;
  height: 3em;
  padding: 0.5em 1em;

  background-color: rgba(15, 23, 42, 0.5);
  border-bottom: 1px solid $yankees-blue;
  backdrop-filter: blur(12px);

  .header__links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 72em;

    .header__brand {
      display: flex;
      align-items: center;
      gap: 0.5em;

      color: $white;
      font-weight: 700;
    }

    .header__link {
      color: $ghost-white;
    }
  }
}
</style>
<script setup lang="ts">
import LogoIcon from './icons/LogoIcon.vue'
</script>
