<script setup lang="ts">
import CustomButton from '@/components/CustomButton.vue';
import ModelCard from '@/components/ModelCard.vue';

const emit = defineEmits(['save', 'increase', 'decrease', 'delete', 'prev-page']);
const props = defineProps({
  machineList: {
    type: Object,
    default: () => ({
      name: 'Нет данных',
      coffeeMachine: [],
    }),
  },
});

</script>

<template>
  <div>
    <div class="w-full max-w-2xl">
      <div class="bg-white shadow-md rounded my-6">
        <div class="flex flex-col md:flex-row justify-between items-center p-6">
          <CustomButton
            class="mr-3"
            @click="emit('prev-page')"
          >
            {{ '<' }}
          </CustomButton>

          <h2 class="text-xl font-semibold">
            Ваши конфигурации:
          </h2>
          <CustomButton
            class="ml-3"
            @click="emit('save')"
          >
            Сохранить
          </CustomButton>
        </div>
        <div class="px-6 py-4">
          <h3
            v-if="props.machineList?.coffeeMachine.length === 0"
            class="text-xl font-semibold text-center"
          >
            Конфигураций пока нет!
          </h3>
          <div v-else>
            <ModelCard
              v-for="(el, idx) in (props.machineList?.coffeeMachine ?? [])"
              :key="`${el.size}_${el.countMachine}_${el.countDrinks}_${idx}`"
              :model="el.size"
              :count-drinks="+el.countDrinks"
              :count-models="+el.countMachine"
              @increase="emit('increase', el)"
              @decrease="emit('decrease', el)"
              @delete="emit('delete', el)"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
