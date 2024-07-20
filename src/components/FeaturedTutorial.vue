<template>
  <div class="featured-tutorial">
    <div class="featured-tutorial__sections">
      <h5 class="featured-tutorial__title">Featured Tutorial</h5>
      <RouterLink
        v-for="(section, index) in BLOGS.djangoReactChat.sections"
        :key="index"
        :to="{ name: BLOGS.djangoReactChat.link }"
        class="featured-tutorial__section">
        <h3 class="section__title">{{ section.title }}</h3>
        <p class="section__desc">{{ section.desc }}</p>
      </RouterLink>
    </div>
    <TutorialCard
      :link="BLOGS.djangoReactChat.link"
      :icons="[DjangoIcon, ReactIcon]"
      :thumbnail="DjangoReactChatThumbnail"
      :title="BLOGS.djangoReactChat.title"
      :subtitle="BLOGS.djangoReactChat.subtitle"
      :featured="true" />
  </div>
</template>

<script setup lang="ts">
import { BLOGS } from '@/utils/consts'
import TutorialCard from '@/components/TutorialCard.vue'
import DjangoReactChatThumbnail from '@/assets/images/blogs/djangoReactChat/thumbnail.png'
import DjangoIcon from '@/components/icons/DjangoIcon.vue'
import ReactIcon from '@/components/icons/ReactIcon.vue'
</script>

<style lang="scss">
.featured-tutorial {
  display: flex;
  gap: 1.25rem;
  padding: 1.25rem;
  width: 600px;
  border-radius: 2em;
  background-color: hsla(0, 0%, 100%, 0.05);
  @include hide-scrollbar;

  & > * {
    flex-basis: 50%;
  }

  .featured-tutorial__sections {
    max-height: 250px;
    overflow-y: scroll;
    @include hide-scrollbar;

    .featured-tutorial__title {
      font-size: 0.75rem;
      font-weight: 500;
      color: $slate-gray;
      text-transform: uppercase;
    }

    .featured-tutorial__section {
      display: flex;
      flex-direction: column;
      padding: 0.5em;
      border-radius: 0.5rem;

      transition: 0.1s ease-in-out background-color;

      .section__title {
        color: $platinum;
        font-size: inherit;
        font-weight: 700;
      }

      .section__desc {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        color: $slate-gray;
        line-height: 1.5;
        overflow: hidden;
      }

      &:hover {
        background-color: hsla(0, 0%, 100%, 0.05);
      }
    }
  }

  @include for-tablet {
    margin: 0 auto;
  }
}
</style>
