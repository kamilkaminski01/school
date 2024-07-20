<template>
  <section class="projects-section">
    <div class="projects-section__header">
      <h1 class="projects-section__title">Explore my collection of latest projects</h1>
      <p class="projects-section__desc">
        Dive into my latest projects including fully functional solutions and open source web apps
        available live
      </p>
    </div>
    <div class="projects-section__cards">
      <ProjectCard
        v-for="(project, index) in featuredProjects"
        :key="index"
        :link="project.link"
        :thumbnail="project.thumbnail"
        :title="project.title"
        :desc="project.desc" />
    </div>
  </section>
</template>

<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { PROJECTS } from '@/utils/consts'
import { computed } from 'vue'

const projectsArray = Object.values(PROJECTS)

const featuredProjects = computed(() => {
  return projectsArray.filter((project) => project.feature)
})
</script>

<style lang="scss">
.projects-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  padding-top: 5em;
  text-align: right;

  .projects-section__header {
    display: flex;
    align-items: center;
    flex-direction: column;

    .projects-section__title {
      @include title;
      padding: 0.25rem;
      max-width: 525px;
      font-size: clamp(30px, 5vw, 48px);
      line-height: 1;

      @include for-tablet {
        max-width: 390px;
      }
    }

    .projects-section__desc {
      max-width: 450px;
      margin: 1.5rem 0;
      color: $slate-gray;
      line-height: 1.5;
    }
  }

  .projects-section__cards {
    gap: 1.5rem;
    height: fit-content;

    @include grid-section;
  }

  @include for-tablet {
    display: unset;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}
</style>
