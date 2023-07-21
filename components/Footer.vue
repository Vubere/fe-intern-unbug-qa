<template>
  <footer class="w-full flex flex-col pt-[64px] md:flex-row justify-center md:gap-[64px] pb-[64px] md:px-[50px]">
    <div class="md:w-[200px]">
      <h1
        class="font-[700] text-[19.69px] flex gap-[11px] items-center justify-center md:justify-start text-headerBlack mb-[16px]"
      >
        <nuxt-img src="/logo.svg" class="w-[30px] h-[30px]" />
        UnbugQA
      </h1>
      <div class="flex flex-col items-center md:items-start mb-[64px]">
        <p class="text-lightAsh">Copyright 2023 UnbugQA</p>
        <p class="text-lightAsh">All rights reserved</p>
      </div>
    </div>
    <div class="flex flex-col gap-[32px] md:gap-[64px] md:flex-row md:flex-wrap md:flex-row">
      <div class="">
        <h4
          class="text-lightAsh text-center md:text-start font-[500] leading-[24px] mb-[15px]"
        >
          Services
        </h4>
        <ul class="flex flex-col items-center md:items-start gap-[8px]">
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
      <div class="">
        <h4
          class="text-lightAsh text-center md:text-start font-[500] leading-[24px] mb-[15px]"
        >
          Resources
        </h4>
        <ul class="flex flex-col items-center md:items-start gap-[8px]">
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
      <div class="">
        <h4
          class="text-lightAsh text-center md:text-start font-[500] leading-[24px] mb-[15px]"
        >
          Company
        </h4>
        <ul class="flex flex-col items-center md:items-start gap-[8px]">
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
      <div class="pb-[170px] md:pb-0 md:w-[200px] ">
        <h4
          class="text-lightAsh text-center md:text-start font-[500] leading-[24px] mb-[15px] w-full"
        >
          Follow us
        </h4>
        <ul class="flex items-center md:items-start justify-center md:justify-start gap-[16px] w-full">
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">
              <nuxt-img src="/facebook.svg" width="24px" height="24px" />
            </nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">
              <nuxt-img src="/twitter.svg" width="24px" height="24px"/>
            </nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">
              <nuxt-img src="/instagram.svg" width="24px" height="24px"/>
            </nuxt-link>
          </li>
          <li class="text-ash leading-[24px]">
            <nuxt-link to="/">
              <nuxt-img src="/linkedin.svg" width="24px" height="24px"/>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
