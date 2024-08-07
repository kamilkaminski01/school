<template>
  <main class="tutorial">
    <RouterLink :to="{ name: returnLink }" class="tutorial__return-link">
      <LeftArrowIcon /> Back
    </RouterLink>
    <div class="tutorial__info">
      <p class="tutorial__info-date">{{ tutorial.header.date }}</p>
      <p class="tutorial__info-read-time">{{ tutorial.header.readTime }}</p>
    </div>
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
      <template v-for="(content, contentIndex) in tutorial.content">
        <h2
          v-if="content.type === CONTENT_TYPE.title"
          :key="contentIndex"
          class="tutorial__content-title"
          v-html="content.text" />
        <template v-else />
        <h4
          v-if="content.type === CONTENT_TYPE.subtitle"
          :key="contentIndex"
          class="tutorial__content-subtitle"
          v-html="content.text" />
        <template v-else />
        <p
          v-if="content.type === CONTENT_TYPE.paragraph"
          :key="contentIndex"
          class="tutorial__content-paragraph"
          v-html="content.text" />
        <template v-else />
        <img
          v-if="content.type === CONTENT_TYPE.img"
          :key="contentIndex"
          :src="content.img"
          class="tutorial__content-img" />
        <template v-else />
        <div
          v-if="content.type === CONTENT_TYPE.code"
          :key="contentIndex"
          class="tutorial__content-code-items">
          <highlightjs
            :language="content.lang"
            :code="content.text"
            class="tutorial__content-code" />
          <div class="tutorial__content__clipboard">
            <div class="tutorial__content__clipboard-icon" @click="copyCode(contentIndex)">
              <CopyIcon v-if="!copied[contentIndex]" />
              <CheckmarkIcon v-if="copied[contentIndex]" />
            </div>
          </div>
        </div>
        <template v-else />
        <div
          v-if="content.type === CONTENT_TYPE.tree"
          :key="contentIndex"
          class="tutorial__content-tree">
          {{ content.text }}
        </div>
        <template v-else />
        <ul
          v-if="content.type === CONTENT_TYPE.unorderedList"
          :key="contentIndex"
          class="tutorial__content-list">
          <li v-for="(item, listIndex) in content.items" :key="listIndex" v-html="item" />
        </ul>
        <template v-else />
        <ol
          v-if="content.type === CONTENT_TYPE.orderedList"
          :key="contentIndex"
          class="tutorial__content-list">
          <li v-for="(item, listIndex) in content.items" :key="listIndex" v-html="item" />
        </ol>
        <template v-else />
        <blockquote
          v-if="content.type === CONTENT_TYPE.quote"
          :key="contentIndex"
          class="tutorial__content-quote"
          v-html="content.text" />
        <template v-else />
        <div
          v-if="content.type === CONTENT_TYPE.note || content.type === CONTENT_TYPE.warning"
          :key="contentIndex"
          class="tutorial__content-note"
          :class="{
            note: content.type === CONTENT_TYPE.note,
            warning: content.type === CONTENT_TYPE.warning
          }"
          v-html="content.text" />
        <template v-else />
        <div
          v-if="content.type === CONTENT_TYPE.icons"
          :key="contentIndex"
          class="tutorial__content-icons">
          <a
            v-for="(icon, iconIndex) in content.icons"
            :key="iconIndex"
            :href="icon.link"
            target="_blank"
            rel="noopener noreferrer"
            class="tutorial__content-icon"
            :class="{ github: icon.text === 'GitHub', live: icon.text === 'Live' }">
            <component :is="icon.icon" /> {{ icon.text }}
          </a>
        </div>
        <template v-else />
      </template>
      <p class="tutorial__content-return">
        <template v-if="returnLink === 'projects'">
          Go back to <RouterLink :to="{ name: 'projects' }">Projects</RouterLink>
        </template>
        <template v-else>
          Go back to <RouterLink :to="{ name: 'blog' }">Blog</RouterLink>
        </template>
      </p>
    </div>
  </main>
</template>
<!--
 Hackish workaround to prevent rendering empty comment strings
 in the DOM - use <template v-else /> after every v-if
 -->

<script setup lang="ts">
import 'highlight.js/styles/github-dark.css'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import LeftArrowIcon from '@/components/icons/LeftArrowIcon.vue'
import { CONTENT_TYPE, type ITutorial } from '@/models/tutorial'
import AppSpinner from '@/components/AppSpinner.vue'
import CopyIcon from '@/components/icons/CopyIcon.vue'
import CheckmarkIcon from '@/components/icons/CheckmarkIcon.vue'

const route = useRoute()

const tutorial = computed(() => {
  return route.meta.tutorial as ITutorial
})

const isImageLoading = ref(true)
const copied = ref(Array(tutorial.value.content.length).fill(false))

const returnLink = route.path.includes('projects') ? 'projects' : 'blog'

const onImageLoad = () => {
  isImageLoading.value = false
}

const copyCode = (contentIndex: number) => {
  const text = tutorial.value.content[contentIndex].text
  navigator.clipboard.writeText(text).then(() => {
    copied.value[contentIndex] = true
    setTimeout(() => {
      copied.value[contentIndex] = false
    }, 2000)
  })
}
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

  .tutorial__info {
    display: flex;
    justify-content: space-between;

    .tutorial__info-date,
    .tutorial__info-read-time {
      font-size: 14px;
      color: $slate-gray;
    }
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

    .tutorial__content-title,
    .tutorial__content-subtitle {
      margin-top: 1.5rem;
    }

    .tutorial__content-paragraph {
      line-height: 1.75;
      margin-top: 1.25rem;
    }

    .tutorial__content-img {
      width: 100%;
      height: 100%;
      max-width: 45em;
      object-fit: contain;
      border-radius: 0.25em;
      margin: 0.75rem 0 0 0;
    }

    .tutorial__content-code-items {
      display: flex;
      justify-content: space-between;
      margin: 1.5rem 0;

      border-radius: 0.5rem;
      background-color: $github-dark-dimmed;

      .tutorial__content-code {
        padding: 1rem 0 1rem 1rem;
        font-size: 14px;
        overflow-x: auto;
        line-height: 1.25rem;
        @include hide-scrollbar;

        code {
          padding: unset;
          @include hide-scrollbar;
        }
      }

      .tutorial__content__clipboard {
        display: flex;
        padding: 0.25em 0.5em;

        .tutorial__content__clipboard-icon {
          padding: 0.2em 0.3em;
          height: fit-content;

          border-radius: 0.25em;
          cursor: pointer;
          transition: background-color ease-in-out 0.1s;

          -webkit-tap-highlight-color: rgba(255, 255, 255, 0);

          &:hover {
            background-color: hsla(0, 0%, 100%, 0.1);
          }
        }
      }
    }

    .tutorial__content-tree {
      margin-top: 1.25rem;
      padding: 0.5rem;
      font-family: 'Fira code', 'Fira Mono', source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
      font-size: 15px;
      line-height: 1.4;
      white-space: pre;
    }

    .tutorial__content-list {
      margin: 1.5rem 0 1.5rem 1.5rem;
      padding: 0;

      li {
        margin-top: 0.5rem;
      }
    }

    .tutorial__content-quote {
      display: block;
      margin-top: 1.5rem;
      padding-left: 0.75rem;
      line-height: 1.75rem;
      border: 0 solid $yankees-blue;
      border-left-width: 2px;
    }

    .tutorial__content-note {
      margin: 2rem 0;
      padding: 1.35rem 1.5rem;
      border-radius: 0.5rem;
    }

    .note {
      background-color: rgba(34, 197, 94, 0.05);
    }

    .warning {
      background-color: rgba(133, 77, 14, 0.2);
    }

    .tutorial__content-icons {
      display: flex;
      gap: 0.75rem;

      .tutorial__content-icon {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem;
        padding: 0.5rem 1rem;
        border-radius: 0.375rem;
        font-size: 0.875em;

        transition:
          color ease-in-out 0.1s,
          background-color ease-in-out 0.1s;
      }

      .github {
        color: $rich-black;
        background-color: $white;

        &:hover {
          color: $anti-flash-white;
          background-color: $yankees-blue;
        }
      }

      .live {
        color: $anti-flash-white;
        border: 1px solid $yankees-blue;

        &:hover {
          background-color: $yankees-blue;
        }
      }
    }

    .inline-code {
      display: inline-block;
      word-break: break-all;
      padding: 0.1rem 0.3rem;
      font-size: 14px;
      color: #94a3b8;
      border-radius: 0.25rem;
      background-color: $github-dark-dimmed;
    }

    .tutorial__content-return {
      margin-top: 2rem;
    }

    a:not(.tutorial__content-icon) {
      color: $vivid-cerulean;

      &:hover {
        border-bottom: 1px solid $vivid-cerulean;
      }
    }
  }

  @include for-desktop {
    margin: 5rem auto 0;
  }
}
</style>
