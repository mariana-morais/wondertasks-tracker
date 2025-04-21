<script setup lang="ts">
import { ref } from 'vue';
import Timer from '@/components/Timer.vue';

const taskName = ref("");

function handleSubmit(e: Event) {
  e.preventDefault();
}

const endTask = (timeInSeconds: number): void => {
  console.log(timeInSeconds);
  console.log(taskName.value);
  taskName.value = "";
}
</script>

<template>
  <section>
    <form
      class="flex flex-row gap-4 w-full justify-between"
      aria-label="Formulário de adição de tarefas"
      @submit="handleSubmit"
    >
      <div class="w-full">
        <input
          id="nome"
          type="text"
          placeholder="Nome da tarefa aqui"
          class="w-full rounded-lg border-2 border-[#cbb994] p-2 text-base font-alice text-[#322D26] focus:outline-none"
          required
          v-model="taskName"
        />
      </div>
      <Timer @stopwatchStopped="endTask" />
    </form>
  </section>
</template>
