<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import HeaderTwo from "@/components/HeaderTwo.vue";
import NewTask from "@/components/NewTask.vue";
import Task from "@/components/Task.vue";
import type ITask from "../interfaces/ITask";

const tasks = ref<ITask[]>([]);

const emptyList = computed(() => {
  return tasks.value.length === 0;
});

const saveTasks = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks.value));
}

const endTask = (task: ITask) => {
  tasks.value.unshift(task);
  saveTasks();
}

const deleteTask = (id: string) => {
  tasks.value = tasks.value.filter((task) => task.id !== id);
  saveTasks();
}

onMounted(() => {
  const savedTasks = localStorage.getItem("tasks");
  if (savedTasks) {
    tasks.value = JSON.parse(savedTasks);
  }
});
</script>

<template>
  <section class="relative text-[#322D26]">
    <HeaderTwo go-back="/" go-to="/busy-tasks" title="Tarefas atarefadas"  />
    <h1 class="font-aliceWonderland text-3xl text-left px-8">Tarefas - Escreva uma nova</h1>
    <section class="flex flex-col justify-start gap-8 px-8 z-20 relative mb-8">
        <NewTask @endTask="endTask" />
        <h1 class="font-aliceWonderland text-2xl text-left">A lista, tudo feito?</h1>
        <small v-if="emptyList" class="font-aliceWonderland text-xl">
            - Não tem nada para fazer, ainda?
        </small>
        <Task v-else v-for="task in tasks" :key="task.id" :task="task" @deleteTask="(id: string) => deleteTask(id)" />
    </section>
    <div class="absolute background h-[50rem] w-full top-32 z-0"></div>
  </section>
</template>

<style lang="css" scoped>
.background {
  background-image: url("../assets/images/rabbit.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
