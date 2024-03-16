<template>
  <div class="featured-tutorial">
    <div class="featured-tutorial__sections">
      <h5 class="featured-tutorial__title">Feature Tutorial</h5>
      <RouterLink
        v-for="(section, index) in blogs.djangoReactChat.sections"
        :key="index"
        :to="{ name: blogs.djangoReactChat.link }"
        class="featured-tutorial__section">
        <h3 class="section__title">{{ section.title }}</h3>
        <p class="section__desc">{{ section.desc }}</p>
      </RouterLink>
    </div>
    <RouterLink :to="{ name: 'django-react-chat' }" class="featured-tutorial__info">
      <img src="@/assets/images/kamil-kaminski.jpg" alt="Kamil Kamiński" class="profile-img" />
      <div class="featured-tutorial__info-img">
        <DjangoIcon />
        <ReactIcon />
      </div>
      <h3 class="featured-tutorial__info-title">{{ blogs.djangoReactChat.title }}</h3>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import DjangoIcon from '@/components/icons/DjangoIcon.vue'
import ReactIcon from '@/components/icons/ReactIcon.vue'
import { blogs } from '@/utils/consts'
</script>

<style lang="scss">
.featured-tutorial {
  display: flex;
  gap: 1.25rem;
  padding: 1.25rem;
  width: 600px;
  border-radius: 2em;
  background-color: hsla(0, 0%, 100%, 0.05);

  & > * {
    flex-basis: 50%;
  }

  .featured-tutorial__sections {
    max-height: 300px;
    overflow-y: scroll;

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
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 1.25em;
    border-radius: 0.75rem;
    border: 1px solid hsla(0, 0%, 100%, 0.05);
    background-color: hsla(0, 0%, 100%, 0.05);

    transition:
      0.2s transform ease,
      0.2s border-radius ease;

    .profile-img {
      position: absolute;
      top: 3px;
      right: 3px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .featured-tutorial__info-img {
      position: relative;
      height: 14.75em;
      display: flex;
      align-items: center;
      flex-direction: column;

      svg {
        position: absolute;

        &:first-child {
          transform: translate(-45px, -15px) rotate(25deg);
        }

        &:last-child {
          transform: translate(25px, 100px) rotate(-15deg);
        }
      }
    }

    .featured-tutorial__info-title {
      color: $platinum;
    }

    &:hover {
      border-radius: 0.9rem;
      transform: scale(1.05);
    }
  }
}
</style>
