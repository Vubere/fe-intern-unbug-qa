<template>
  <header
    class="flex justify-between w-[100vw] px-[16px] pb-[13px] pt-[21px] mb-[51px] fixed top-0 left-0 w-full bg-[#fff] z-20"
  >
    <h1
      class="font-[700] text-[19.69px] flex gap-[11px] items-center text-headerBlack"
    >
      <nuxt-img src="/logo.svg" class="w-[30px] h-[30px]" />
      UnbugQA
    </h1>
    <button
      class="bg-none active:outline-none focus:outline-none p-1 py-2 nav-component"
      @click="changeShow"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        class="nav-component"
      >
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="#111827"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="nav-component"
        />
      </svg>
    </button>
    <div
      class="absolute left-0 top-[60px] bg-[#fff] w-full shadow p-4 nav-component"
      v-if="show"
    >
      <nav class="w-full nav-component">
        <ul class="flex flex-col gap-2 items-center nav-component" :ref="nav">
          <li class="nav-component flex items-center gap-[4px]">
            <nuxt-link class="" to="">Products </nuxt-link>
            <nuxt-img src="/arrow-down.svg" class="w-[15px] h-[15px]" />
          </li>
          <li class="nav-component">
            <nuxt-link class="nav-component" to="">About us</nuxt-link>
          </li>
          <li class="nav-component">
            <nuxt-link class="nav-component" to="">Contact</nuxt-link>
          </li>
          <li class="nav-component">
            <nuxt-link class="nav-component" to="">Blog</nuxt-link>
          </li>
        </ul>
      </nav>
      <nuxt-link
        to="/"
        class="bg-primaryBlue h-[36px] w-[129px] rounded-[6px] text-[#fff] text-[14px] leading-[20px] font-[500] text-center flex items-center justify-center block mx-auto mt-4"
        >Talk to sales</nuxt-link
      >
    </div>
  </header>
</template>
<script setup>
import { ref } from "vue";

const show = ref(false);
const nav = ref(null);

const closeOnClickOutside = (e) => {
  if (!e.target.classList.contains("nav-component")) {
    changeShow();
  }
};
const changeShow = () => {
  show.value = !show.value;

  if (show.value) {
    window.addEventListener("click", closeOnClickOutside);
  } else {
    window.removeEventListener("click", closeOnClickOutside);
  }
};
</script>
