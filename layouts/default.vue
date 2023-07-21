<template>
  <div>
    <template v-if="client">
      <Header v-if="!mobile" />
      <MobileHeader v-else />
    </template>
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      mobile: false,
      client: false,
    }
  },
  mounted() {
    this.mobile = window.innerWidth < 768
    this.client = true
  },
}
</script>
