<script setup lang="ts">
import type ITask from "../interfaces/ITask";
import Stopwatch from "./Stopwatch.vue";

interface Props {
  task: ITask;
}

const { task } = defineProps<Props>();
</script>

<template>
  <div
    class="flex flex-row justify-between relative h-auto p-10 bg-[#fdf6e3] rounded-lg shadow-md text-[#322D26] rotate-[-1deg]"
  >
    <div>📜 {{ task.description }}</div>
    <div>
      <Stopwatch :time-in-seconds="task.timeInSeconds" />
    </div>
    <div
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#cbb994] border border-[#5e4635]"
    ></div>
  </div>
</template>
