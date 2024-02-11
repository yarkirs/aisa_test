<script setup>
import { computed } from 'vue';

const emit = defineEmits(['delete', 'increase', 'decrease']);
const props = defineProps({
  countDrinks: {
    type: Number,
    default: 0,
  },
  countModels: {
    type: Number,
    default: 0,
  },
  model: {
    type: String,
    default: '',
  },
});

const converModel = computed(() => (
  props.model === 'small'
    ? 'Стандартная'
    : 'Увеличенная'
));
</script>

<template>
  <div class="flex items-center justify-between border-b-2 border-gray-200 py-2">
    <div class="flex">
      <button
        class="text-gray-500 focus:outline-none focus:text-gray-600 mr-3"
        @click="emit('delete')"
      >
        <svg
          class="w-6 h-6 text-gray-800 dark:text-red-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M8.6 2.6A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1
             0-2h3V4c0-.5.2-1 .6-1.4ZM10 6h4V4h-4v2Zm1 4a1 1 0
              1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>

      <div>
        <p class="text-sm font-semibold">
          Модель: {{ converModel }}
        </p>
        <p class="text-sm text-gray-600">
          Количество напитков: {{ props.countDrinks }}
        </p>
      </div>
    </div>

    <div class="flex items-center">
      <button
        class="text-gray-500 focus:outline-none focus:text-gray-600"
        @click="emit('decrease')"
      >
        <svg
          class="w-6 h-6 text-gray-800 dark:text-blue-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14"
          />
        </svg>
      </button>

      <span class="mx-2">{{ countModels }}</span>

      <button
        class="text-gray-500 focus:outline-none focus:text-gray-600"
        @click="emit('increase')"
      >
        <svg
          class="w-6 h-6 text-gray-800 dark:text-blue-500"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 12h14m-7 7V5"
          />
        </svg>
      </button>
    </div>
  </div>
</template>
