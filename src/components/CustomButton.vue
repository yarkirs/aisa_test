<template>
  <button
    class="bg-blue-500 hover:bg-blue-700
           text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="button"
    @click="emit('click')"
  >
    <slot />
  </button>
</template>

<script setup>
const emit = defineEmits(['click']);
</script>
