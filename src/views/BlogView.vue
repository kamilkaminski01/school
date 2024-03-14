<template>
  <main class="blog-page">
    <div class="blog__header">
      <h1 class="header__title">Blog</h1>
      <p class="header__desc">Read my thoughts on software engineering, and more.</p>
    </div>
    <div class="blog__content">
      <RouterLink
        v-for="(tutorial, index) in blogs"
        :key="index"
        :to="{ name: tutorial.link }"
        class="content__tutorial">
        <h3 class="content__tutorial-title">{{ tutorial.title }}</h3>
        <p class="content__tutorial-date">{{ tutorial.date }}</p>
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { blogs } from '@/blogs'
</script>

<style lang="scss">
.blog-page {
  margin: 0 8em;

  .blog__header {
    margin: 3rem 0;

    .header__title {
      @include title;
    }

    .header__desc {
      font-size: 1.5em;
      color: $auro-metal-saurus;
    }
  }

  .blog__content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    .content__tutorial {
      width: fit-content;

      .content__tutorial-title {
        font-weight: normal;
        font-size: inherit;
        color: $platinum;

        &:hover {
          text-decoration: underline;
        }
      }

      .content__tutorial-date {
        font-size: 0.875em;
        color: $slate-gray;
      }
    }
  }
}
</style>
