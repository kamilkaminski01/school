<template>
  <footer>
    <div class="footer__top">
      <div class="footer__top-left">
        <RouterLink :to="{ name: 'home' }" class="top-left__brand">
          <LogoIcon width="24" height="24" />School Kamil Kamiński
        </RouterLink>
        <a
          href="https://kamilkaminski.pl"
          target="_blank"
          rel="noopener noreferrer"
          class="top-left__brand">
          <PersonalSiteIcon />Kamil Kamiński
        </a>
      </div>
      <div class="footer__top-right">
        <div class="top-right__item">
          <h3 class="top-right__item-title">School Kamil Kamiński</h3>
          <RouterLink :to="{ name: 'blog' }" class="top-right__item-link">Blog</RouterLink>
          <span class="top-right__item-link">About</span>
        </div>
        <div class="top-right__item">
          <h3 class="top-right__item-title">Social Links</h3>
          <a
            href="https://www.linkedin.com/in/kamilkaminski01/"
            target="_blank"
            rel="noopener noreferrer"
            class="top-right__item-link">
            Linkedin
          </a>
          <a
            href="https://github.com/kamilkaminski01"
            target="_blank"
            rel="noopener noreferrer"
            class="top-right__item-link">
            GitHub
          </a>
        </div>
        <div class="top-right__item">
          <h3 class="top-right__item-title">About</h3>
          <a
            href="https://github.com/kamilkaminski01/school/issues/new"
            target="_blank"
            rel="noopener noreferrer"
            class="top-right__item-link">
            Report an issue
          </a>
          <a href="mailto:kamilkaminski39@gmail.com" class="top-right__item-link">Contact</a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <span>Kamil Kamiński 2024</span>
    </div>
  </footer>
</template>

<script setup lang="ts">
import PersonalSiteIcon from './icons/PersonalSiteIcon.vue'
import LogoIcon from './icons/LogoIcon.vue'
</script>

<style lang="scss">
footer {
  display: flex;
  flex-direction: column;
  gap: 2em;
  padding-bottom: 1.5em;

  .footer__top {
    display: flex;
    justify-content: space-between;
    padding: 2.5em 0;
    border-top: 1px solid $independence;
    border-bottom: 1px solid $independence;

    .footer__top-left {
      display: flex;
      flex-direction: column;
      gap: 0.5em;

      .top-left__brand {
        display: flex;
        gap: 0.5em;

        color: $white;
        font-weight: 500;

        svg {
          transform: translateY(-3px);
        }
      }
    }

    .footer__top-right {
      display: flex;
      justify-content: center;
      gap: 3em;
      margin-right: 3em;

      .top-right__item {
        display: flex;
        flex-direction: column;
        gap: 0.75em;

        .top-right__item-title {
          font-size: 1em;
          font-weight: 700;
          color: $white;
        }

        .top-right__item-link {
          width: fit-content;
          opacity: 0.6;
          color: $ghost-white;

          transition: 0.1s ease-in-out opacity;

          &:hover {
            opacity: 1;
          }
        }
      }
    }
  }

  .footer__bottom {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.875em;
  }
}
</style>
