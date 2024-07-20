<template>
  <main class="home-page">
    <LandingSection />
    <TutorialsSection />
    <ProjectsSection />
  </main>
</template>

<script setup lang="ts">
import LandingSection from '@/components/LandingSection.vue'
import TutorialsSection from '@/components/TutorialsSection.vue'
import ProjectsSection from '@/components/ProjectsSection.vue'
</script>

<style lang="scss">
.home-page {
  display: flex;
  flex-direction: column;

  section {
    width: 100%;
    max-width: 72rem;
  }
}
</style>
