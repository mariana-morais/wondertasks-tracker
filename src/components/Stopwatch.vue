<script setup lang="ts">
import { computed } from 'vue';

interface Props {
    timeInSeconds: number
}

const props = withDefaults(defineProps<Props>(), {
  timeInSeconds: 0
});

const elapsedTime = computed(() => {
  return new Date(props.timeInSeconds * 1000).toISOString().substr(11, 8);
});
</script>

<template>
  <section>
    <span>{{ elapsedTime }}</span>
  </section>
</template>
