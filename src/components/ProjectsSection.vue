<template>
  <section class="projects-section">
    <h1 class="projects-section__title">Dive into my latest projects showcase</h1>
    <p class="projects-section__desc">
      Explore my collection of latest projects including comprehensive web apps available live and
      fully functional solutions
    </p>
  </section>
</template>

<style lang="scss">
.projects-section {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0 auto;
  padding-top: 5em;
  text-align: right;

  .projects-section__title {
    @include title;
    padding: 0.25rem;
    max-width: 541px;
    font-size: 3em;
    line-height: 1;
  }

  .projects-section__desc {
    max-width: 475px;
    margin: 1.5rem 0;
    color: $slate-gray;
  }
}
</style>
