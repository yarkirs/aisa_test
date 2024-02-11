<script setup>
import { onMounted, ref } from 'vue';
import CoffeeMachineConfig from '@/components/CoffeeMachineConfig.vue';
import ConfigList from '@/components/ConfigList.vue';
import ApiController from '@/helpers/ApiController.js';

// хорошо бы vue-router, но и так пойдёт
const page = ref('configurator');

const data = ref({});

const checkMachine = (oldMachine, newMachine) => ((oldMachine.size === newMachine.size)
      && (oldMachine.countDrinks === newMachine.countDrinks));
const iterateData = (callback, machine) => {
  data.value.coffeeMachine.forEach((el) => {
    if (checkMachine(el, machine)) {
      el.countMachine = callback(el.countMachine);
    }
  });
};
const deleteMachine = (machine) => {
  if (data.value.coffeeMachine.length === 1) {
    data.value.coffeeMachine = [];
  } else {
    data.value.coffeeMachine = data.value.coffeeMachine.filter((el) => !checkMachine(el, machine));
  }
};

const increaseMachine = (machine) => {
  iterateData((el) => el + 1, machine);
};
const decreaseMachine = (machine) => {
  const deleteCallback = (el) => {
    if ((el - 1) <= 0) {
      deleteMachine(machine);
    }

    return el - 1;
  };

  iterateData(deleteCallback, machine);
};
const saveMachine = async () => {
  await ApiController.saveMachine(data.value);
};
const addMachine = async (machine) => {
  if (data.value.coffeeMachine.some((el) => checkMachine(el, machine))) {
    increaseMachine(machine);
  } else {
    data.value.coffeeMachine.push({
      countDrinks: machine.countDrinks,
      countMachine: 1,
      size: machine.size,
    });
  }

  await saveMachine();
};
const loadData = async () => {
  data.value = await ApiController.getMachine();
};

onMounted(async () => {
  await loadData();
});
</script>

<template>
  <div class="flex justify-center content-center items-center w-full h-screen">
    <CoffeeMachineConfig
      v-if="page === 'configurator'"
      @next-page="page = 'config-list'"
      @add="addMachine($event)"
    />
    <ConfigList
      v-if="page === 'config-list'"
      :machine-list="data"
      @save="saveMachine()"
      @prev-page="page = 'configurator'"
      @delete="deleteMachine($event)"
      @increase="increaseMachine($event)"
      @decrease="decreaseMachine($event)"
    />
  </div>
</template>
