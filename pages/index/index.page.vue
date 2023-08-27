<template>
  <h1>Welcome</h1>
  This page is:
  <ul>
    <li>Rendered to HTML.</li>
    <li>Interactive. <Counter /></li>
  </ul>

  <div class="md:bg-red sm:bg-green p-16">I should be red on 768 and never green.</div>
  <div class="lg:bg-blue sm:bg-green p-16">I should be blue on 1440 and never green.</div>
</template>

<script lang="ts" setup>
import Counter from './Counter.vue'
</script>
