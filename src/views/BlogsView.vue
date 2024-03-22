<template>
  <main class="blogs-page">
    <div class="content-page__header">
      <h1 class="header__title">Blog</h1>
      <p class="header__desc">Read my thoughts on software engineering, and more.</p>
    </div>
    <div class="blogs-page__content">
      <div v-for="(blog, index) in BLOGS" :key="index" class="content__blog">
        <RouterLink :to="{ name: blog.link }" class="content__blog-link">
          {{ blog.title }}
        </RouterLink>
        <p class="content__blog-date">{{ blog.date }}</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { BLOGS } from '@/utils/consts'
</script>

<style lang="scss">
.blogs-page {
  @include content-page;

  .blogs-page__content {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    .content__blog {
      line-height: 1.5;
      width: fit-content;

      .content__blog-link {
        color: $platinum;

        &:hover {
          text-decoration: underline;
        }
      }

      .content__blog-date {
        font-size: 0.875em;
        color: $slate-gray;
      }
    }
  }
}
</style>
