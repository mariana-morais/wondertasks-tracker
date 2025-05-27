<script setup lang="ts">
import { ref } from "vue";
import HeaderTwo from "@/components/HeaderTwo.vue";
import type IBusyTask from "../interfaces/IBusyTask";

const busyTaskName = ref("");
const busyTasks = ref<IBusyTask[]>([]);

function createBusyTask() {
  const busyTask: IBusyTask = {
    id: new Date().toISOString(),
    name: busyTaskName.value,
  };
  busyTasks.value.push(busyTask);
  busyTaskName.value = "";
  localStorage.setItem("busyTasks", JSON.stringify(busyTasks.value));
}
</script>

<template>
  <section class="relative">
    <HeaderTwo go-back="/tasks" />
    <div class="px-8">
      <h1 class="font-aliceWonderland text-3xl text-left">
        Tarefa Aterafada - Crie uma nova
      </h1>
      <p class="mb-8 text-sm">
        Tarefa Aterefada é um conjunto de tarefas que você pode criar.
      </p>
    </div>
    <section
      class="relative p-10 bg-[#322D26] text-[#fffaf0] rounded-md mt-10 mx-8 z-10"
    >
      <div
        class="absolute -left-3 top-1/2 w-6 h-6 -translate-y-1/2 bg-[#fdf2d5] border border-[#322D26] rounded-full shadow-inner"
      ></div>

      <form
        class="flex flex-row items-center gap-4 w-full justify-between"
        @submit.prevent="createBusyTask"
      >
        <div class="w-full">
          <label for="busyTaskName">Nome aterefado:</label>
          <div class="flex flex-row items-center gap-6">
            <input
              id="busyTaskName"
              type="text"
              v-model="busyTaskName"
              placeholder="Ex: Organizar ceia de natal..."
              class="w-full rounded-lg border-2 border-[#cbb994] bg-[#fffaf0] p-3 text-base font-alice text-[#322D26] placeholder-[#b5a788] focus:outline-none focus:ring-2 focus:ring-[#cbb994]"
              required
            />
            <button type="submit">Criar</button>
          </div>
        </div>
      </form>

      <!-- <transition name="fade">
        <p v-if="taskCreated" class="mt-4 text-sm text-[#fdf2d5] font-alice">
          Tarefa criada!
        </p>
      </transition> -->
    </section>
    <div class="absolute background h-[50rem] w-full top-32 z-0"></div>
  </section>
</template>

<style lang="css" scoped>
.background {
  background-image: url("../assets/images/alice.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
