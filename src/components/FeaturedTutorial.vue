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
    <RouterLink :to="{ name: 'django-react-chat' }" class="featured-tutorial__info">
      <img src="@/assets/images/kamil-kaminski.jpg" alt="Kamil Kamiński" class="profile-img" />
      <DjangoIcon class="featured-tutorial__info-icon first" />
      <ReactIcon class="featured-tutorial__info-icon second" />
      <img :src="DjangoReactChatThumbnail" class="featured-tutorial__info-img" alt="thumbnail" />
      <h3 class="featured-tutorial__info-title">{{ BLOGS.djangoReactChat.title }}</h3>
      <p class="featured-tutorial__info-subtitle">{{ BLOGS.djangoReactChat.subtitle }}</p>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import DjangoIcon from '@/components/icons/DjangoIcon.vue'
import ReactIcon from '@/components/icons/ReactIcon.vue'
import { BLOGS } from '@/utils/consts'
import DjangoReactChatThumbnail from '@/assets/images/blogs/djangoReactChat/thumbnail.png'
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

  .featured-tutorial__info {
    position: relative;
    display: grid;
    padding: 0.75rem;
    text-align: center;
    border-radius: 0.75rem;
    border: 1px solid hsla(0, 0%, 100%, 0.05);
    background-color: hsla(0, 0%, 100%, 0.05);

    transition: 0.2s transform ease;

    .profile-img {
      @include profile-img;
      position: absolute;
      top: 3px;
      right: 3px;
      z-index: 1;
    }

    .featured-tutorial__info-icon {
      position: absolute;
      right: 3px;
      z-index: 1;

      &.first {
        top: 50px;
      }

      &.second {
        top: 95px;
      }
    }

    .featured-tutorial__info-img {
      width: 100%;
      padding: 1rem;
    }

    .featured-tutorial__info-title {
      color: $platinum;
    }

    .featured-tutorial__info-subtitle {
      color: $slate-gray;
    }

    &:hover {
      transform: scale(1.05);
    }
  }

  @include for-tablet {
    margin: 0 auto;
  }
}
</style>
