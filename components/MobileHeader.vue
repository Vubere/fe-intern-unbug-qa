<template>
  <header
    class="flex justify-between w-[100vw] px-[16px] pb-[13px] pt-[21px]  mb-[51px] fixed top-0 left-0 w-full bg-[#fff] z-20"
  >
    <h1 class="font-[700] text-[19.69px] flex gap-[11px] items-center text-headerBlack">
      <img src="/logo.svg" class="w-[30px] h-[30px]" />
      UnbugQA
    </h1>
    <button class="bg-none active:outline-none focus:outline-none p-1 py-2" @click="changeShow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="#111827"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <div
      class="absolute left-0 top-[60px] bg-[#fff] w-full shadow p-4"
      v-if="show"
    >
      <nav class="w-full">
        <ul class="flex flex-col gap-2 items-center">
          <li>
            <nuxt-link class="" to="">Products</nuxt-link>
          </li>
          <li>
            <nuxt-link to="">About us</nuxt-link>
          </li>
          <li>
            <nuxt-link to="">Contact</nuxt-link>
          </li>
          <li>
            <nuxt-link to="">Blog</nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'

const show = ref(false)

const changeShow = () => {
  show.value = !show.value
}
</script>
