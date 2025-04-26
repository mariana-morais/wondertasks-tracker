<script setup lang="ts">
interface Props {
  disabled: boolean;
  text: string;
  icon: string;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: true,
});

const emit = defineEmits(["handleClick"]);

const handleClick = () => {
  emit("handleClick");
};
</script>

<template>
  <button
    class="flex flex-row items-center gap-2 border-2 border-[#cbb994] rounded-lg shadow-md p-2 bg-[#cbb994]"
    :class="{ 'opacity-50 cursor-not-allowed': props.disabled }"
    @click="handleClick"
    :disabled="props.disabled"
  >
    <span>
      <i :class="props.icon"></i>
    </span>
    <span>
      {{ props.text }}
    </span>
  </button>
</template>
