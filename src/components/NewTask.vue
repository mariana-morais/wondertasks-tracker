<script setup lang="ts">
import { ref } from "vue";
import Timer from "@/components/Timer.vue";

const taskDescription = ref("");
const taskCreated = ref(false);

const generateId = () => Date.now().toString() + Math.random().toString(36).substring(2);

const emit = defineEmits(["endTask"]);

const endTask = (timeInSeconds: number): void => {
  emit("endTask", {
    id: generateId(),
    description: taskDescription.value,
    timeInSeconds: timeInSeconds,
  });

  taskDescription.value = "";
  taskCreated.value = true;
  setTimeout(() => (taskCreated.value = false), 1000);
};

function handleSubmit(e: Event) {
  e.preventDefault();
}
</script>

<template>
  <section
    class="relative p-10 bg-[#322D26] rounded-md shadow-md mt-10"
    aria-label="Convite para nova tarefa"
  >
    <div
      class="absolute -left-3 top-1/2 w-6 h-6 -translate-y-1/2 bg-[#fdf2d5] border border-[#322D26] rounded-full shadow-inner"
    ></div>

    <form
      class="flex flex-col md:flex-row gap-4 w-full justify-between"
      @submit="handleSubmit"
    >
      <div class="w-full">
        <input
          id="nome"
          type="text"
          placeholder="Ex: Encontrar relógio de bolso perdido"
          class="w-full rounded-lg border-2 border-[#cbb994] bg-[#fffaf0] p-3 text-base font-alice text-[#322D26] placeholder-[#b5a788] focus:outline-none focus:ring-2 focus:ring-[#cbb994]"
          required
          v-model="taskDescription"
        />
      </div>
      <Timer @stopwatchStopped="endTask" />
    </form>

    <transition name="fade">
      <p
        v-if="taskCreated"
        class="mt-4 text-sm text-[#fdf2d5] font-alice"
      >
        Tarefa criada!
      </p>
    </transition>
  </section>
</template>