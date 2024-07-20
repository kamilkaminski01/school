<template>
  <section class="tutorials-section" id="tutorials">
    <h1 class="tutorials-section__title">Modern, well-explained, and high-quality tutorials</h1>
    <p class="tutorials-section__desc">
      Discover a wide range of topics and enhance your skills with extensive resources
    </p>
    <div class="tutorials-section__featured">
      <FeaturedTutorial />
    </div>
  </section>
</template>

<script setup lang="ts">
import FeaturedTutorial from '@/components/FeaturedTutorial.vue'
</script>

<style lang="scss">
.tutorials-section {
  margin: 0 auto;
  padding-top: 5em;
  @include hide-scrollbar;

  .tutorials-section__title {
    @include title;
    padding: 0.25rem;
    max-width: 479px;
    font-size: clamp(30px, 5vw, 48px);
    line-height: 1;

    @include for-tablet {
      text-align: center;
    }
  }

  .tutorials-section__desc {
    margin: 1.5rem 0;
    color: $slate-gray;

    @include for-tablet {
      max-width: 350px;
      text-align: center;
    }
  }

  .tutorials-section__featured {
    overflow: scroll;
    width: 100%;
    @include hide-scrollbar;
  }

  @include for-tablet {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
}
</style>
