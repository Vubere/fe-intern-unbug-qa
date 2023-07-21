<template>
  <article
    class="rounded-[12px] shadow-blogShadow w-[100%] overflow-hidden sm:h-[428px]"
  >
    <div class="h-[50%] w-full">
      <nuxt-img :src="image" class="min-w-full min-h-[200px]" fill="cover" preload loading="lazy"/>
    </div>

    <div class="w-full p-[24px]">
      <h3
        class="font-[700] text-darkBlack text-start mb-[8px] text-[18px] md:text-[20px] w-[80%] sm:w-[100%] md:tracking-[-0.4px]"
      >
        {{ heading }}
      </h3>
      <p
        class="leading-[20px] text-[14px] md:text-[16px] md:leading-[24px] text-textBlack"
      >
        {{ text }}
      </p>
    </div>
  </article>
</template>
<script setup>
const { image, heading, text } = defineProps(["heading", "text", "image"]);
</script>
