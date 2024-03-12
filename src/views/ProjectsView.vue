<template>
  <main class="projects-page">
    <div class="projects__header">
      <h1 class="header__title">Projects</h1>
      <p class="header__desc">
        Collection of projects, each showcases commitment to elegant coding practices.
      </p>
    </div>
  </main>
</template>

<style lang="scss">
.projects-page {
  margin: 0 8em;

  .projects__header {
    margin: 3rem 0;

    .header__title {
      @include title;
    }

    .header__desc {
      font-size: 1.5em;
      color: $auro-metal-saurus;
    }
  }
}
</style>
