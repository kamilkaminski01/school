<template>
  <section class="projects-section">
    <h1 class="projects-section__title">Explore my collection of latest projects</h1>
    <p class="projects-section__desc">
      Dive into my latest projects including fully functional solutions and comprehensive web apps
      available live on the web
    </p>
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
import { projects } from '@/utils/consts'
import { computed } from 'vue'

const projectsArray = Object.values(projects)

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

  .projects-section__title {
    @include title;
    padding: 0.25rem;
    max-width: 525px;
    font-size: 3em;
    line-height: 1;
  }

  .projects-section__desc {
    max-width: 450px;
    margin: 1.5rem 0;
    color: $slate-gray;
    line-height: 1.5;
  }

  .projects-section__cards {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1.5rem;
  }
}
</style>
