<template>
  <svg
    fill="#ffffff"
    :width="width"
    :height="height"
    viewBox="0 0 24.00 24.00"
    xmlns="http://www.w3.org/2000/svg"
    stroke="#ffffff"
    stroke-width="0.00024000000000000003">
    <g id="SVGRepo_bgCarrier" stroke-width="0" />
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
    <g id="SVGRepo_iconCarrier">
      <path
        d="M1.293,11.293l4-4A1,1,0,1,1,6.707,8.707L3.414,12l3.293,3.293a1,1,0,1,1-1.414,1.414l-4-4A1,1,0,0,1,1.293,11.293Zm17.414-4a1,1,0,1,0-1.414,1.414L20.586,12l-3.293,3.293a1,1,0,1,0,1.414,1.414l4-4a1,1,0,0,0,0-1.414ZM13.039,4.726l-4,14a1,1,0,0,0,.686,1.236A1.053,1.053,0,0,0,10,20a1,1,0,0,0,.961-.726l4-14a1,1,0,1,0-1.922-.548Z" />
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
