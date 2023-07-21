<template>
  <nuxt-link :to="to">
    <button
      :class="'bg-primaryBlue h-[36px] md:h-[40px] w-[118px] md:w-[138px] rounded-[6px] text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] font-[500] text-center text-[#fff] flex items-center justify-center block '+className"
    >
     <slot/>
    </button>
  </nuxt-link>
</template>
<script setup>
  const {className, to } = defineProps([ 'className','to']);
</script>