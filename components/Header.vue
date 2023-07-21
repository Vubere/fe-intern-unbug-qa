<template>
  <header class="flex justify-between gap-2 p-2 py-[24px] px-[5%] lg:px-[11.45%] h-[80px] items-center fixed top-0 left-0 w-full bg-[#fff] z-20 hidden md:flex">
    <div class="flex gap-[30px] items-center">
      <h1
        class="font-[700] text-[19.69px] flex gap-[11px] items-center text-headerBlack"
      >
        <nuxt-img src="/logo.svg" class="w-[30px] h-[30px]" />
        UnbugQA
      </h1>
      <nav class="w-[24.13%]">
        <ul class="flex gap-[7.84%] w-[full] min-w-[340px]">
          <li class="flex items-center gap-[4px] font-[500] text-[14px] leading-[20px]">
            <nuxt-link class="" to="">Products 
            </nuxt-link>
            <nuxt-img src="/arrow-down.svg" class="w-[15px] h-[15px]" />
          </li>
          <li class="flex items-center gap-[4px] font-[500] text-[14px] leading-[20px]">
            <nuxt-link to="">About us</nuxt-link>
          </li>
          <li class="flex items-center gap-[4px] font-[500] text-[14px] leading-[20px]">
            <nuxt-link to="">Contact</nuxt-link>
          </li>
          <li class="flex items-center gap-[4px] font-[500] text-[14px] leading-[20px]">
            <nuxt-link to="">Blog</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
    <nuxt-link
      to="/"
      class="bg-primaryBlue h-[36px] w-[159px] rounded-[6px] text-[#fff] text-[14px] leading-[20px] font-[500] text-center flex items-center justify-center block"
      >Talk to sales</nuxt-link
    >
  </header>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>
