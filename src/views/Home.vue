<script setup lang="ts">
  import HeaderOne from '@/components/HeaderOne.vue'
</script>
<template>
    <section class="flex flex-col justify-center h-screen">
        <HeaderOne />
        <section>
          <h1 class="text-4xl font-aliceWonderland text-[#322D26] text-center">O que você vai escolher?</h1>
          <div class="flex flex-col md:flex-row gap-6 mt-10 justify-center items-center">

            <router-link to="/tasks">
                <button class="relative w-72 h-32 bg-[#fdf6e3] border-4 border-[#cbb994] rounded-lg shadow-md flex items-center justify-center font-aliceWonderland text-2xl text-[#322D26] hover:bg-[#f4e2c4]  transition-all">
                    <span>Tarefas, para não perder a cabeça</span>
                    <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#cbb994] border border-[#5e4635]"></div>
                </button>
            </router-link>

            <button
              class="relative w-72 h-32 bg-[#fdf6e3] border-4 border-[#cbb994] rounded-lg shadow-md flex items-center justify-center font-aliceWonderland text-2xl text-[#322D26] opacity-60 cursor-not-allowed text-center"
              title="Segredo bem guardado..."
            >
              <span>Ainda, um segredo bem guardado</span>
              <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[#cbb994] border border-[#5e4635]"></div>
            </button>
          </div>
        </section>
    </section>
  </template>