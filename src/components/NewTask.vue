<template>
  <section>
    <form
      class="flex flex-row gap-4 w-full justify-between"
      aria-label="Formulário de adição de tarefas"
    >
      <div class="w-full">
        <input
          id="nome"
          type="text"
          placeholder="Nome da tarefa aqui"
          class="w-full rounded-lg border-2 border-[#cbb994] p-2 text-base font-alice text-[#322D26] focus:outline-none"
        />
      </div>
      <div class="flex flex-row items-center gap-2">
        <section>
          <span>00:00:00</span>
        </section>
        <div class="flex flex-row gap-4">
          <button class="flex flex-row items-center gap-2">
            <span>
              <i class="fas fa-play"></i>
            </span>
            <span>Play</span>
          </button>
          <button class="flex flex-row items-center gap-2">
            <span>
              <i class="fas fa-stop"></i>
            </span>
            <span>Parar</span>
          </button>
        </div>
      </div>
    </form>
  </section>
</template>
