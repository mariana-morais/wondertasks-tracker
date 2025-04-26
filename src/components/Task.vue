<script setup lang="ts">
import Stopwatch from "./Stopwatch.vue";
</script>

<template>
  <div
    class="flex flex-row justify-between relative h-auto p-10 bg-[#fdf6e3] rounded-lg shadow-md text-[#322D26] rotate-[-1deg]"
  >
    <div>📜 Descrição da tarefa</div>
    <div>
      <Stopwatch :time-in-seconds="15" />
    </div>
    <div
      class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#cbb994] border border-[#5e4635]"
    ></div>
  </div>
</template>
