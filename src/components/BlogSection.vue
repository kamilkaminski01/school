<template>
  <section class="blog-section" id="blog">
    <h1 class="blog-section__title">Modern, well-explained, and high-quality tutorials</h1>
    <p class="blog-section__desc">
      Discover a wide range of topics and enhance your skills with extensive resources
    </p>
    <div class="blog-section__featured">
      <FeaturedTutorial />
    </div>
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
    font-size: clamp(30px, 5vw, 48px);
    line-height: 1;

    @include for-tablet {
      text-align: center;
    }
  }

  .blog-section__desc {
    margin: 1.5rem 0;
    color: $slate-gray;

    @include for-tablet {
      max-width: 350px;
      text-align: center;
    }
  }

  .blog-section__featured {
    overflow: scroll;
    scrollbar-width: none;
    width: 100%;
  }

  @include for-tablet {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
