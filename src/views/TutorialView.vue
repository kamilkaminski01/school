<template>
  <main class="tutorial">
    <RouterLink :to="{ name: returnLink }" class="tutorial__return-link">
      <LeftArrowIcon /> Back
    </RouterLink>
    <div class="tutorial__header">
      <p class="tutorial__header-date">{{ tutorial.header.date }}</p>
      <h1 class="tutorial__header-title">{{ tutorial.header.title }}</h1>
      <img :src="tutorial.header.demo" alt="tutorial demo" class="tutorial__header-demo" />
    </div>
    <div class="tutorial__content">
      <template v-for="(content, index) in tutorial.content">
        <h2 v-if="content.type === 'title'" :key="index" class="tutorial__content-title">
          {{ content.text }}
        </h2>
        <p v-if="content.type === 'paragraph'" :key="index" class="tutorial__content-paragraph">
          {{ content.text }}
        </p>
      </template>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import LeftArrowIcon from '@/components/icons/LeftArrowIcon.vue'
import type { ITutorial } from '@/models/tutorial'

const route = useRoute()
const returnLink = route.path.includes('projects') ? 'projects' : 'blog'

const tutorial = computed(() => {
  return route.meta.tutorial as ITutorial
})
</script>

<style lang="scss">
.tutorial {
  flex: 1;
  position: relative;
  margin: 7rem auto 0;
  width: 100%;
  max-width: 72rem;

  & > * {
    margin: 0 auto;
    max-width: 48rem;
  }

  .tutorial__return-link {
    @include return-link;
  }

  .tutorial__header {
    .tutorial__header-date {
      font-size: 14px;
      color: $slate-gray;
    }

    .tutorial__header-title {
      font-size: 1.875em;
      margin: 0.75rem 0 1.5rem;
    }

    .tutorial__header-demo {
      width: 100%;
      height: 100%;
      aspect-ratio: 16 / 9;
    }
  }

  .tutorial__content {
    color: $columbia-blue;

    .tutorial__content-title {
      margin-top: 1.5rem;
    }

    .tutorial__content-paragraph {
      line-height: 1.75;
      margin-top: 1.25rem;
    }
  }
}
</style>
