<template>
  <svg
    :width="width"
    :height="height"
    viewBox="-2.4 -2.4 28.80 28.80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#ffffff">
    <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)">
      <rect
        x="-2.4"
        y="-2.4"
        width="28.80"
        height="28.80"
        rx="5.76"
        fill="#1e293b"
        stroke-width="0" />
    </g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
    <g id="SVGRepo_iconCarrier">
      <path
        d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
        stroke="#ffffff"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round" />
    </g>
  </svg>
</template>

<script setup lang="ts">
interface LogoIconProps {
  width: string
  height: string
}

defineProps<LogoIconProps>()
</script>
