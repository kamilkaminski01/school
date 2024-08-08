<template>
  <RouterLink :to="{ name: link }" :class="['tutorial-card', { featured: featured }]">
    <img
      v-if="featured"
      src="@/assets/images/kamil-kaminski.jpg"
      alt="Kamil Kamiński"
      class="profile-img" />
    <component
      v-for="(Icon, index) in icons"
      :key="index"
      :is="Icon"
      :class="`tutorial-card-icon icon-${featured ? index + 1 : 0}`" />
    <img
      :src="thumbnail"
      :class="['tutorial-card-img', { 'custom-img': customImg }]"
      alt="tutorial image" />
    <h3 class="tutorial-card-title">{{ title }}</h3>
    <p class="tutorial-card-subtitle">{{ subtitle }}</p>
  </RouterLink>
</template>

<script setup lang="ts">
interface TutorialCardProps {
  link: string
  thumbnail: string
  title: string
  subtitle: string
  featured?: boolean
  customImg?: boolean
  icons?: any[]
}

defineProps<TutorialCardProps>()
</script>

<style lang="scss">
.tutorial-card {
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

  .tutorial-card-icon {
    position: absolute;
    right: 3px;
    z-index: 1;

    &.icon-1 {
      top: 50px;
    }

    &.icon-2 {
      top: 95px;
    }
  }

  .tutorial-card-img {
    width: 100%;
    padding: 1rem;
  }

  .custom-img {
    object-fit: contain;
    max-height: clamp(135px, 18vw, 220px);

    @include for-tablet {
      max-height: clamp(140px, 27vw, 210px);
    }

    @include for-phone {
      max-height: clamp(140px, 48vw, 300px);
    }
  }

  .tutorial-card-title,
  .tutorial-card-subtitle {
    padding: 0.1rem;
    @include text-ellipsis;
  }

  .tutorial-card-title {
    color: $platinum;
  }

  .tutorial-card-subtitle {
    color: $slate-gray;
  }

  @media (min-width: 769px) {
    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>
