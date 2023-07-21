<template>
  <header class="flex gap-2 p-2 border-b h-[80px] items-center">
    <h1 class="font-[700] text-[19.69px] flex gap-[11px] items-center text-headerBlack">
      <img src="/logo.svg" class="w-[30px] h-[30px]" />
      UnbugQA
    </h1>
    <nav>
      <ul class="flex gap-1">
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
  </header>
</template>

<script>
export default {
  data() {
    return {}
  },
}
</script>
