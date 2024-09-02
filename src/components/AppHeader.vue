<template>
  <header>
    <div v-if="!isPhone" class="header__items">
      <RouterLink :to="{ name: 'home' }" class="header__brand">
        <LogoIcon width="24" height="24" />School Kamil Kamiński
      </RouterLink>
      <div class="header__links">
        <RouterLink :to="{ name: 'blog' }" class="header__link">Blog</RouterLink>
        <RouterLink :to="{ name: 'projects' }" class="header__link">Projects</RouterLink>
      </div>
    </div>
    <div v-else class="header__icon" @click="toggleMenu">
      <HamburgerIcon />
    </div>
  </header>
  <HeaderMenu v-if="isMenuVisible" :toggleMenu="toggleMenu" />
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import LogoIcon from './icons/LogoIcon.vue'
import HamburgerIcon from '@/components/icons/HamburgerIcon.vue'
import { useIsPhone } from '@/composables/phone'
import HeaderMenu from '@/components/HeaderMenu.vue'
import { useRouter } from 'vue-router'

const { isPhone } = useIsPhone()
const router = useRouter()
const isMenuVisible = ref(false)

const toggleMenu = () => {
  isMenuVisible.value = !isMenuVisible.value
}

watch(isPhone, (newVal) => {
  if (!newVal) {
    isMenuVisible.value = false
  }
})

watch(isMenuVisible, (newVal) => {
  if (newVal) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
})

router.afterEach(() => {
  isMenuVisible.value = false
})
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;

  width: 100%;
  height: 3em;
  padding: 0.5em 1em;

  background-color: rgba(15, 23, 42, 0.5);
  border-bottom: 1px solid $yankees-blue;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  .header__items {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 72em;

    .header__brand {
      @include brand;
    }

    .header__links {
      display: flex;
      gap: 1em;

      .header__link {
        color: $ghost-white;
        opacity: 0.6;

        transition: 0.1s ease-in-out opacity;

        &:hover {
          opacity: 1;
        }

        &.router-link-exact-active {
          opacity: 1;
        }
      }
    }
  }

  .header__icon {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.2rem;

    transition: transform ease-in-out 0.05s;
    cursor: pointer;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

    &:hover {
      background-color: hsla(0, 0%, 100%, 0.05);
    }

    &:active {
      transform: scale(0.9);
    }
  }

  @include for-phone {
    justify-content: unset;
  }
}
</style>
