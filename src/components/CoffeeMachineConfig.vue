<script setup>
import { computed, ref } from 'vue';
import CustomButton from '@/components/CustomButton.vue';

const emit = defineEmits(['next-page', 'add']);

const amountDrinks = [6, 8, 12];
const selectedDrink = ref(6);
const sizeMachine = ref('small');

const machineImgSrc = computed(() => (
  sizeMachine.value === 'small'
    ? 'src/assets/machine_small.png'
    : 'src/assets/machine_big.png'));

</script>

<template>
  <div class="">
    <div class="w-full max-w-xs">
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="size"
          >
            Размер устройства:
          </label>
          <select
            id="size"
            class="shadow border rounded w-full
             py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="sizeMachine"
          >
            <option value="small">
              Стандартный
            </option>
            <option value="big">
              Увеличенный
            </option>
          </select>
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="drinks"
          >
            Количество напитков
          </label>
          <select
            id="drinks"
            class="shadow border rounded
             w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            v-model="selectedDrink"
          >
            <option
              v-for="drinks in amountDrinks"
              :key="drinks"
              :value="drinks"
            >
              {{ drinks }}
            </option>
          </select>
        </div>
        <div class="h-40">
          <img
            :width="216"
            :height="150"
            :src="machineImgSrc"
            alt="coffeeMachine"
          >
        </div>
        <div class="flex items-center flex-col mt-3">
          <CustomButton
            @click="emit('add', {
              countDrinks: selectedDrink,
              size: sizeMachine,
            })"
          >
            Добавить в хранилище
          </CustomButton>

          <CustomButton
            class="mt-3"
            @click="emit('next-page')"
          >
            Посмотреть хранилище
          </CustomButton>
        </div>
      </div>
    </div>
  </div>
</template>
