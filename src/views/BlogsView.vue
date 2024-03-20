<template>
  <main class="blogs-page">
    <div class="content-page__header">
      <h1 class="header__title">Blog</h1>
      <p class="header__desc">Read my thoughts on software engineering, and more.</p>
    </div>
    <div class="blogs-page__content">
      <RouterLink
        v-for="(blog, index) in BLOGS"
        :key="index"
        :to="{ name: blog.link }"
        class="content__blog">
        <h3 class="content__blog-title">{{ blog.title }}</h3>
        <p class="content__blog-date">{{ blog.date }}</p>
      </RouterLink>
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

      .content__blog-title {
        font-weight: normal;
        font-size: inherit;
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
