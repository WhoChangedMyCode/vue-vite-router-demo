<script setup>
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
  <div class="about">
    <RouterLink to="/about/one">AboutOneView</RouterLink>
    <RouterLink to="/about/two">AboutTwoView</RouterLink>
    <RouterLink to="/about/three">AboutThreeView</RouterLink>
    <h1>This is an about page</h1>
    <RouterView />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
