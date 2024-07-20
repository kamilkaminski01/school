<template>
  <RouterLink :to="{ name: link }" class="project__card">
    <div class="card__img-wrapper">
      <img :src="thumbnail" alt="project thumbnail" class="card__img" />
    </div>
    <div class="card__info">
      <p v-if="date" class="card__info-date">{{ date }}</p>
      <h3 class="card__info-title">{{ title }}</h3>
      <p class="card__info-desc">{{ desc }}</p>
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
interface ProjectCardProps {
  link: string
  thumbnail: string
  title: string
  desc: string
  date?: string
}

defineProps<ProjectCardProps>()
</script>

<style lang="scss">
.project__card {
  background-color: hsla(0, 0%, 100%, 0.05);
  border-radius: 2em;
  border: 1px solid hsla(0, 0%, 100%, 0.05);

  transition:
    0.1s transform ease,
    0.2s background-color ease;

  .card__img-wrapper {
    aspect-ratio: 16 / 9;

    .card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;

      border-top-left-radius: 2em;
      border-top-right-radius: 2em;
    }
  }

  .card__info {
    padding: 0.5rem 1.25rem 1.25rem 1.25rem;

    text-align: center;
    line-height: 1.5;

    .card__info-date {
      color: $auro-metal-saurus;
      font-size: 12px;
    }

    .card__info-title {
      font-size: inherit;
      font-weight: 600;
      color: $platinum;
      @include text-ellipsis;
    }

    .card__info-desc {
      color: $slate-gray;
      @include text-ellipsis;
    }
  }

  @media (min-width: 769px) {
    .projects-section__cards > &:hover {
      transform: scale(1.05);
    }
  }

  .projects-page__content > &:hover {
    background-color: rgba(248, 250, 252, 0.1);
  }
}
</style>
