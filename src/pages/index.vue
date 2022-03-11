<script setup>
import { useJokes } from "../composables/useJokes"

const {joke, getJokes} = useJokes()
</script>


<template>
<div class="flex flex-row items-center justify center">
  <button @click="getJokes" class="px-4 py-6 mt-8 bg-orange-500 rounded-xl">
    Click here for a funny joke
  </button>
</div>
<p>{{ joke }}</p>
</template>