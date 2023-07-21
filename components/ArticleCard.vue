<template>
  <article class="rounded-[12px] shadow-blogShadow w-[100%] overflow-hidden">
    <img :src="image" class="min-w-full  mb-[24px]  "/>
    <div class="p-[24px]">
      <h3 class="font-[700] text-darkBlack text-start mb-[8px] text-[18px] w-[80%]">
        {{ heading }}
      </h3>
      <p class="leading-[20px] text-[14px] text-textBlack">
        {{ text }}
      </p>
    </div>
  </article>
</template>
<script setup>
const props = defineProps(['heading', 'text', 'image'])
</script>
