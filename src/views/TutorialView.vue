<template>
  <main class="tutorial">
    <RouterLink :to="{ name: returnLink }" class="tutorial__return-link">
      <LeftArrowIcon /> Back
    </RouterLink>
    <p class="tutorial__date">{{ tutorial.header.date }}</p>
    <h1 class="tutorial__title">{{ tutorial.header.title }}</h1>
    <div class="tutorial__author">
      <img src="@/assets/images/kamil-kaminski.jpg" alt="Kamil Kamiński" class="author__img" />
      <a
        href="https://www.linkedin.com/in/kamilkaminski01/"
        target="_blank"
        rel="noopener noreferrer"
        class="author__link">
        Kamil Kamiński
      </a>
    </div>
    <div v-if="tutorial.header.demo" class="tutorial__demo">
      <AppSpinner :isLoading="isImageLoading" />
      <img :src="tutorial.header.demo" @load="onImageLoad" alt="tutorial demo" class="demo__img" />
    </div>
    <div class="tutorial__content">
      <template v-for="(content, index) in tutorial.content">
        <h2 v-if="content.type === 'title'" :key="index" class="tutorial__content-title">
          {{ content.text }}
        </h2>
        <p v-if="content.type === 'paragraph'" :key="index" class="tutorial__content-paragraph">
          {{ content.text }}
        </p>
        <pre v-if="content.type === 'code'" :key="index"><code>{{ content.text }}</code></pre>
      </template>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import LeftArrowIcon from '@/components/icons/LeftArrowIcon.vue'
import type { ITutorial } from '@/models/tutorial'
import AppSpinner from '@/components/AppSpinner.vue'

const route = useRoute()
const returnLink = route.path.includes('projects') ? 'projects' : 'blog'

const isImageLoading = ref(true)

const onImageLoad = () => {
  isImageLoading.value = false
}

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
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    gap: 0.25em;
    color: $vivid-cerulean;

    svg {
      transition: 0.1s transform ease-in-out;
    }

    &:hover {
      svg {
        transform: translateX(-5px);
      }
    }

    @include for-desktop {
      position: relative;
      display: flex;
      margin: 0 auto 0.85rem;
      transform: translateX(-2px);
    }
  }

  .tutorial__date {
    font-size: 14px;
    color: $slate-gray;
  }

  .tutorial__title {
    font-size: 1.875em;
    margin: 0.75rem auto 1.5rem;
  }

  .tutorial__author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin: 0.75rem auto 1.5rem;

    .author__img {
      @include profile-img;
    }

    .author__link {
      color: $platinum;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .tutorial__demo {
    position: relative;

    .demo__img {
      width: 100%;
      height: 100%;
      min-height: 20em;
      max-width: 45em;
      object-fit: contain;
      border-radius: 0.25em;

      @include for-phone {
        min-height: 10em;
      }
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

  @include for-desktop {
    margin: 5rem auto 0;
  }
}
</style>
