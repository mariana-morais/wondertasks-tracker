<script setup lang="ts">
import type ITask from "../interfaces/ITask";
import Stopwatch from "./Stopwatch.vue";

interface Props {
  task: ITask;
}

const { task } = defineProps<Props>();
const emit = defineEmits(["deleteTask"]);

const deleteTask = () => {
  emit("deleteTask", task.id);
};
</script>

<template>
  <div
    class="flex flex-col justify-between relative h-auto  bg-[#fdf6e3] rounded-lg shadow-md text-[#322D26] rotate-[-1deg]"
  >
    <div class="flex flex-row self-end mr-4 my-4" @click="deleteTask">
      <small class="cursor-pointer">X</small>
    </div>
    <div class="flex flex-row justify-between px-10 pb-10">
      <div>📜 {{ task.description || 'Uma tarefa não descrita...' }}</div>
      <div>
        <Stopwatch :time-in-seconds="task.timeInSeconds" />
      </div>
      <div
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#cbb994] border border-[#5e4635]"
      ></div>
    </div>
  </div>
</template>
