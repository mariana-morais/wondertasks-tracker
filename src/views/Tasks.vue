<script setup lang="ts">
import HeaderTwo from "../components/HeaderTwo.vue";
import NewTask from "../components/NewTask.vue";
</script>

<template>
  <section class="">
    <HeaderTwo />
    <section class="flex flex-col justify-start px-8 gap-20">
        <NewTask />
        <footer class="flex flex-col gap-4 mt-10">
          <img
            src="../assets/images/rabbit1.png"
            alt="Rabbit"
            class="self-center h-[30rem]"
          />
        </footer>
    </section>
  </section>
</template>
