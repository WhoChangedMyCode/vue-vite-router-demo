<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()
console.log(route.path)
</script>

<template>
  <div>{{ route.path }}
  </div>
</template>