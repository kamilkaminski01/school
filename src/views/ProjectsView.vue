<template>
  <main class="projects-page">
    <div class="projects-page__header">
      <h1 class="header__title">Projects</h1>
      <p class="header__desc">
        Collection of projects, each showcases commitment to elegant coding practices.
      </p>
    </div>
    <div class="projects-page__content">
      <ProjectCard
        v-for="(project, index) in projects"
        :key="index"
        :link="project.link"
        :thumbnail="project.thumbnail"
        :title="project.title"
        :desc="project.desc"
        :date="project.date" />
    </div>
    <p class="projects-page__info">More coming soon...</p>
  </main>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { projects } from '@/utils/consts'
</script>

<style lang="scss">
.projects-page {
  margin: 0 8em;

  .projects-page__header {
    margin: 3rem 0;

    .header__title {
      @include title;
    }

    .header__desc {
      font-size: 1.5em;
      color: $auro-metal-saurus;
    }
  }

  .projects-page__content {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;

    @include for-desktop {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @include for-tablet {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }

  .projects-page__info {
    text-align: center;
    margin: 1.5rem 0;
    color: $slate-gray;
  }
}
</style>
