<script setup lang="ts">
import { ref } from "vue";
import HeaderTwo from "@/components/HeaderTwo.vue";
import NewTask from "@/components/NewTask.vue";
import Task from "@/components/Task.vue";
import type ITask from "../interfaces/ITask";

const tasks = ref<ITask[]>([]);

const endTask = (task: ITask) => {
  tasks.value.push(task);
  console.log(tasks, "puxou??");
}
</script>

<template>
  <section class="relative">
    <HeaderTwo />
    <section class="flex flex-col justify-start gap-8 px-8 z-20 relative">
        <NewTask @endTask="endTask" />
        <h1 class="font-aliceWonderland text-3xl text-[#322D26] text-left">A lista, tudo feito?</h1>
        <Task v-for="(task, index) in tasks" :key="index" :task="task" />
    </section>
    <div class="absolute background h-[50rem] w-full top-32 z-0"></div>
  </section>
</template>

<style lang="css" scoped>
.background {
  background-image: url("../assets/images/rabbit1.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
