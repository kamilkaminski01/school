<template>
  <RouterLink :to="{ name: link }" class="projects-section__card">
    <div class="card__img-wrapper">
      <img :src="thumbnail" alt="project thumbnail" class="card__img" />
    </div>
    <div class="card__info">
      <h3 class="card__info-title">{{ title }}</h3>
      <p class="card__info-desc">{{ desc }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
interface ProjectsSectionCardProps {
  link: string
  thumbnail: string
  title: string
  desc: string
}

defineProps<ProjectsSectionCardProps>()
</script>

<style lang="scss">
.projects-section__card {
  background-color: hsla(0, 0%, 100%, 0.05);
  border-radius: 2em;
  border: 1px solid hsla(0, 0%, 100%, 0.05);

  transition: 0.3s transform ease;

  .card__img-wrapper {
    .card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      border-top-left-radius: 2em;
      border-top-right-radius: 2em;
    }
  }

  .card__info {
    text-align: center;
    line-height: 1.5;
    padding: 1.25rem;

    .card__info-title {
      font-size: inherit;
      font-weight: 600;
      color: $platinum;
    }

    .card__info-desc {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: $slate-gray;
    }
  }

  &:hover {
    transform: scale(1.05);
  }
}
</style>
