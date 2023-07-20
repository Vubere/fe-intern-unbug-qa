<template>
  <article>
    <div class="relative">
      <nuxt-img :src="image" class="w-full h-[200px]"/>
    </div>
    <h3>
      {{ heading }}
    </h3>
    <p>
      {{ text }}
    </p>
  </article>
</template>
<script setup>
const props = defineProps(['heading', 'text', 'image'])
</script>
