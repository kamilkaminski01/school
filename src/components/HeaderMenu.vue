<template>
  <div class="menu__bg" @click="toggleMenu" />
  <div class="menu">
    <div class="menu__tab"><div class="tab" /></div>
    <div class="menu__brand-wrapper">
      <RouterLink :to="{ name: 'home' }" class="menu__brand">
        <LogoIcon width="24" height="24" />School Kamil Kamiński
      </RouterLink>
    </div>
    <div class="menu__sites">
      <RouterLink :to="{ name: 'blog' }" class="site"> Blog & Tutorials </RouterLink>
      <RouterLink :to="{ name: 'django-react-chat' }" class="sub-site">
        <PhoneIcon />Django & React Chat
      </RouterLink>
      <RouterLink :to="{ name: 'gitlab-ci-cd-pipeline' }" class="sub-site">
        <GitlabFoxIcon />Gitlab CI/CD Pipeline
      </RouterLink>
      <RouterLink :to="{ name: 'jenkins-ci-cd-pipeline' }" class="sub-site">
        <CiCdIcon />Jenkins CI/CD Pipeline
      </RouterLink>
      <RouterLink :to="{ name: 'projects' }" class="site">Projects</RouterLink>
      <RouterLink :to="{ name: 'events-manager' }" class="sub-site">
        <EventIcon />Events Manager
      </RouterLink>
      <RouterLink :to="{ name: 'monitoring-system' }" class="sub-site">
        <DesktopIcon />Monitoring System
      </RouterLink>
      <div class="site">More</div>
      <RouterLink :to="{ name: 'about' }" class="sub-site"> <InfoIcon />About </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import LogoIcon from '@/components/icons/LogoIcon.vue'
import PhoneIcon from '@/components/icons/PhoneIcon.vue'
import DesktopIcon from '@/components/icons/DesktopIcon.vue'
import EventIcon from '@/components/icons/EventIcon.vue'
import CiCdIcon from '@/components/icons/CICdIcon.vue'
import InfoIcon from '@/components/icons/InfoIcon.vue'
import GitlabFoxIcon from '@/components/icons/GitlabFoxIcon.vue'

interface HeaderMenuProps {
  toggleMenu: () => void
}

defineProps<HeaderMenuProps>()
</script>

<style lang="scss">
.menu__bg {
  position: fixed;
  inset: 0;
  z-index: 2;

  width: 100%;
  height: 100%;

  user-select: none;
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
}

.menu {
  position: fixed;
  bottom: 0;
  transform: translateX(-1em);

  width: 100%;
  z-index: 2;
  background-color: $rich-black;

  .menu__tab {
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 1.75rem;
    background-color: $rich-black;
    border-top: 1px solid $independence;

    .tab {
      height: 0.25rem;
      width: 3rem;
      background-color: $platinum;
      border-radius: 0.5rem;
    }
  }

  .menu__brand-wrapper {
    padding: 0.75rem;
    border-bottom: 1px solid $yankees-blue;

    .menu__brand {
      @include brand;
      width: fit-content;
    }
  }

  .menu__sites {
    padding: 2.25rem 1rem;
    display: flex;
    flex-direction: column;

    .site {
      margin-bottom: 0.25rem;
      width: fit-content;
      color: $white;
      font-weight: 600;

      &:not(&:first-child) {
        margin-top: 1rem;
      }
    }

    .sub-site {
      display: flex;
      align-items: center;
      width: fit-content;
      padding: 0.5rem 0;
      color: $slate-gray;

      svg {
        margin-right: 0.75rem;
      }
    }
  }
}
</style>
