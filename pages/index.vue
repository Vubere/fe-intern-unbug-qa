<template>
  <main>
    <h1></h1>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'HomePage',
  head: {
    title: 'UnbugQA | Home',
    meta: [
      {
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'This is Nuxt.js project made in response to an assessment test from UnbugQA for the position of Frontend Developer'
      }
    ]
  }
})
</script>
