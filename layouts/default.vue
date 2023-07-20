<template>
  <div>
    <Header v-if="!mobile" />
    <MobileHeader v-else />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobile: true,
    }
  },
  watch: {
    window: () => {
      this.mobile = window.innerWidth < 768
    },
  },
}
</script>
