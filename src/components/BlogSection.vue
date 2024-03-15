<template>
  <section class="blog-section" id="blog">
    <h1 class="blog-section__title">Modern, well-explained, and high-quality tutorials</h1>
    <p class="blog-section__desc">
      Discover a wide range of topics and enhance your skills with comprehensive resources
    </p>
    <FeaturedTutorial />
  </section>
</template>

<script setup lang="ts">
import FeaturedTutorial from '@/components/FeaturedTutorial.vue'
</script>

<style lang="scss">
.blog-section {
  margin: 0 auto;
  padding-top: 5em;

  .blog-section__title {
    @include title;
    padding: 0.25rem;
    max-width: 479px;
    font-size: 3em;
    line-height: 1;
  }

  .blog-section__desc {
    margin: 1.5rem 0;
    color: $slate-gray;
  }
}
</style>
