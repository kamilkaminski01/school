<template>
  <main class="blog-page">
    <div class="blog__header">
      <h1 class="header__title">Blog</h1>
      <p class="header__desc">Read my thoughts on software engineering, and more.</p>
    </div>
  </main>
</template>

<style lang="scss">
.blog-page {
  margin: 0 8em;

  .blog__header {
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
