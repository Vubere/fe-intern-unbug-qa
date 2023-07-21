<template>
  <div>
    <client-only>
      <Header v-if="!mobile" />
      <MobileHeader v-else />
    </client-only>
    <NuxtPage />
    <Footer />
  </div>
</template>
<script setup>
useHead({
  link: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/logo.svg",
    },
  ],
});
const mobile = ref(false);

const handleResize = () => {
  mobile.value = window.innerWidth < 768;
};
onMounted(() => {
  mobile.value = window.innerWidth < 768;
  window.addEventListener("resize", handleResize);
});
onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>
