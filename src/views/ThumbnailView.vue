<template>
  <div class="thumbnail-page">
    <div class="thumbnail">
      <span class="vertical-grid-line left" />
      <span class="horizontal-grid-line top" />
      <div class="thumbnail__text">Job <br />Board</div>
      <span class="horizontal-grid-line bottom" />
      <span class="vertical-grid-line right" />
    </div>
  </div>
</template>

<style lang="scss">
.thumbnail-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(150px at 50% 50%, rgba(255, 255, 255, 0.1), transparent 80%);

  .thumbnail {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    //height: 240px;
    width: 400px;

    .thumbnail__text {
      color: transparent;
      background: -webkit-linear-gradient($white, $auro-metal-saurus);
      -webkit-background-clip: text;
      background-clip: text;
      text-align: center;
      font-weight: bolder;
      font-size: 4em;
    }

    .vertical-grid-line {
      $offset: 230px; // położenie całej linii wysokość

      position: absolute;
      width: 1px;
      height: calc(100% + #{$offset});
      top: calc(#{$offset} / 2 * -1);
      background: linear-gradient(
        to bottom,
        hsla(0, 0%, 100%, 0.25),
        hsla(0, 0%, 100%, 0.25) 45%,
        // odstęp między liniami
        transparent 0
      );
      background-size: 1px 20px; // szerokość linii
    }

    .horizontal-grid-line {
      $offset: 230px; // położenie całej linii szerokość

      position: absolute;
      width: calc(100% + #{$offset});
      height: 1px;
      left: calc(#{$offset} / 2 * -1);
      background: linear-gradient(
        to right,
        hsla(0, 0%, 100%, 0.25),
        hsla(0, 0%, 100%, 0.25) 45%,
        // odstęp między liniami
        transparent 0
      );
      background-size: 20px 1px; // szerokość linii
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
  }
}
</style>
