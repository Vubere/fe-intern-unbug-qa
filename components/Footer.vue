<template>
  <footer class="w-full flex flex-col pt-[64px]">
    <h1
      class="font-[700] text-[19.69px] flex gap-[11px] items-center justify-center text-headerBlack mb-[16px]"
    >
      <nuxt-img src="/logo.svg" class="w-[30px] h-[30px]" />
      UnbugQA
    </h1>
    <div class="flex flex-col items-center mb-[64px]">
      <p class="text-lightAsh">Copyright 2023 UnbugQA</p>
      <p class="text-lightAsh">All rights reserved</p>
    </div>
    <div class="flex flex-col gap-[32px]">
      <div class="w-full">
        <h4
          class="text-lightAsh text-center font-[500] leading-[24px] mb-[15px]"
        >
          Services
        </h4>
        <ul class="flex flex-col items-center gap-[8px]">
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">Hire QA Engineer</nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">Join talent pool</nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">For employers</nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">For QA Engineers</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="w-full">
        <h4
          class="text-lightAsh text-center font-[500] leading-[24px] mb-[15px]"
        >
          Resources
        </h4>
        <ul class="flex flex-col items-center gap-[8px]">
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">Help center</nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">Affliate program</nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">Blog</nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">Academy</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
        <h4
          class="text-lightAsh text-center font-[500] leading-[24px] mb-[15px]"
        >
          Company
        </h4>
        <ul class="flex flex-col items-center gap-[8px]">
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">About us</nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">Contact us</nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">Privacy Policy</nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">Terms of Use</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="pb-[170px]">
        <h4
          class="text-lightAsh text-center font-[500] leading-[24px] mb-[15px]"
        >
          Follow us
        </h4>
        <ul class="flex items-center justify-center gap-[16px]">
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">
              <nuxt-img src="/facebook.svg" />
            </nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">
              <nuxt-img src="/twitter.svg" />
            </nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">
              <nuxt-img src="/instagram.svg" />
            </nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">
              <nuxt-img src="/linkedin.svg" />
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
