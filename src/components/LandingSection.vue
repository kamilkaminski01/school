<template>
  <section class="landing-section" ref="landing">
    <div class="landing-section__item">
      <div class="landing-section__item-notification">
        <span v-if="!isTablet" class="vertical-grid-line left" />
        <div class="item-notification__wrapper">
          <span class="item-notification__status" />
          <p class="item-notification__msg">Check out the Django & React Chat tutorial</p>
        </div>
        <span v-if="!isTablet" class="vertical-grid-line right" />
      </div>
    </div>
    <span class="vertical-grid-line left" />
    <span class="vertical-grid-line right" />
    <div class="landing-section__item">
      <span class="horizontal-grid-line top" />
      <h1 class="landing-section__item-title">Educational resources for software engineers</h1>
    </div>
    <div class="landing-section__item">
      <span class="horizontal-grid-line top" />
      <p class="landing-section__desc">
        Explore online <strong>projects</strong>, <strong>templates</strong>,
        <strong>coding examples</strong>, <strong>tutorials</strong>, and much more - all in one
        place
      </p>
      <span class="horizontal-grid-line bottom" />
    </div>
    <div class="landing-section__item">
      <div class="landing-section__item-btns">
        <span v-if="!isTablet" class="vertical-grid-line left" />
        <button class="landing-section__item-btn btn--highlight" @click="openBlogPage">
          Get started
        </button>
        <button class="landing-section__item-btn btn--outline" @click="scrollToTutorialsSection">
          Learn more
        </button>
        <span v-if="!isTablet" class="vertical-grid-line right" />
      </div>
      <span class="horizontal-grid-line bottom" />
    </div>
  </section>
</template>

<script setup lang="ts">
import router from '@/router'
import { useIsTablet } from '@/composables/tablet'

const { isTablet } = useIsTablet()

const openBlogPage = () => {
  router.push({ name: 'blog' })
}

const scrollToTutorialsSection = () => {
  const tutorialsSection = document.getElementById('tutorials')
  if (tutorialsSection) tutorialsSection.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss">
.landing-section {
  position: relative;
  margin: 6rem auto 6rem;

  .landing-section__item {
    position: relative;
    display: flex;
    justify-content: center;

    padding: 2.25em;

    .landing-section__item-title {
      @include title;
      text-align: center;
      max-width: clamp(450px, 55vw, 650px);

      @include for-small-phone {
        max-width: unset;
      }
    }

    .landing-section__desc {
      font-size: 1.125em;
      color: $slate-gray;
      line-height: 1.3;

      @include for-desktop {
        text-align: center;
        font-size: inherit;
      }

      @include for-tablet {
        max-width: 405px;
      }

      @include for-phone {
        max-width: 280px;
      }
    }

    .landing-section__item-notification {
      position: relative;
      padding: 0 1.5em 1.5em;

      overflow: clip;

      .item-notification__wrapper {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.25rem;

        border-radius: 2em;
        background-color: hsla(0, 0%, 100%, 0.05);
        border: 1px solid hsla(0, 0%, 100%, 0.05);

        .item-notification__status {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background-color: $vivid-cerulean;
        }

        .item-notification__msg {
          font-size: 0.75rem;
          color: $platinum;
        }
      }
    }

    .landing-section__item-btns {
      position: relative;
      display: flex;
      gap: 0.75rem;
      width: 100%;
      max-width: 28rem;
      padding: 2.25em;

      overflow: clip;

      .landing-section__item-btn {
        width: 100%;
        height: 2.25rem;

        font-size: 1rem;
        font-family: inherit;
        font-weight: 500;
        color: $rich-black;

        border-radius: 0.375rem;
      }

      .btn--highlight {
        border: none;
        background: linear-gradient(133.85deg, #73dcec 20.72%, #22d3ee 36.26%, #27b0ed 81.99%);
        box-shadow:
          0 0 44px rgba(142, 227, 240, 0.3),
          inset 0 1px 0 hsla(0, 0%, 100%, 0.4);

        transition: 0.1s ease-in-out color;

        &:hover {
          color: $anti-flash-white;
        }
      }

      .btn--outline {
        color: $anti-flash-white;
        background: transparent;
        border: 1px solid $yankees-blue;

        transition: 0.1s ease-in-out background-color;

        &:hover {
          background-color: $yankees-blue;
        }
      }

      @include for-tablet {
        display: flex;
        flex-direction: column;
        max-width: unset;
      }
    }

    &:first-child,
    &:last-child {
      padding: 0;
    }

    &:nth-child(4) {
      @include for-phone {
        padding: 1.25em;
      }
    }
  }

  .vertical-grid-line {
    $offset: 50px;

    position: absolute;
    width: 1px;
    height: calc(100% + #{$offset});
    top: calc(#{$offset} / 2 * -1);
    background: linear-gradient(
      to bottom,
      hsla(0, 0%, 56%, 0.3),
      hsla(0, 0%, 56%, 0.3) 50%,
      transparent 0
    );
    background-size: 1px 5px;
  }

  .horizontal-grid-line {
    $offset: 20px;

    position: absolute;
    width: calc(100% + #{$offset});
    height: 1px;
    left: calc(#{$offset} / 2 * -1);
    background: linear-gradient(
      to right,
      hsla(0, 0%, 56%, 0.3),
      hsla(0, 0%, 56%, 0.3) 50%,
      transparent 0
    );
    background-size: 5px 1px;
  }

  .top {
    top: 0;
  }

  .bottom {
    bottom: 0;
  }

  .right {
    right: 0;
  }

  .left {
    left: 0;
  }

  @include for-tablet {
    margin-top: unset;
  }
}
</style>
