<script setup lang="ts">
import { ref } from "vue";
import Stopwatch from "@/components/Stopwatch.vue";
import ControlButton from "@/components/ControlButton.vue";

const timeInSeconds = ref(0);
const stopwatch = ref(0);
const stopwatchRunning = ref(false);

const emit = defineEmits(["stopwatchStopped"]);

const startTask = () => {
  //start count
  stopwatchRunning.value = true;
  stopwatch.value = setInterval(() => {
    timeInSeconds.value += 1;
  }, 1000);
};

const stopTask = () => {
  // stop count
  stopwatchRunning.value = false;
  clearInterval(stopwatch.value);
  emit("stopwatchStopped", timeInSeconds.value);
  timeInSeconds.value = 0;
};
</script>

<template>
  <div class="flex flex-row items-center gap-2 text-[#fdf2d5]">
    <Stopwatch :time-in-seconds="timeInSeconds" />
    <div class="flex flex-row gap-4">
      <ControlButton
        @handle-click="startTask"
        :disabled="stopwatchRunning"
        text="Começar?"
        icon="fa fa-play"
      />

      <ControlButton
        @handle-click="stopTask"
        :disabled="!stopwatchRunning"
        text="Parar?"
        icon="fa fa-stop"
      />
    </div>
  </div>
</template>
