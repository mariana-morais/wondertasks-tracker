<script setup lang="ts">
    import { useRouter } from 'vue-router'
    const router = useRouter()

    const props = defineProps<{
        goTo: string
        goBack: string
        title: string
    }>()

    const goTo = () => {
        if (props.goTo) {
            router.push(props.goTo)
        }
    }

    const goBack = () => {
        if (props.goBack) {
            router.push(props.goBack)
        }
    }
</script>

<template>
    <header class="mb-10 flex flex-row justify-between items-center py-2 px-8 font-aliceWonderland text-[#322D26]">
        <p @click="goBack" class="cursor-pointer hover:underline flex flex-row gap-1 items-center">
            <img src="../assets/images/hand.png" alt="Voltar" class="h-4" />
            <span class="text-2xl">Voltar</span>
        </p>
        <h1 class="text-4xl text-center flex-1">WonderTasks - Tracker</h1>
        <p v-if="props.goTo" @click="goTo" class="cursor-pointer hover:underline flex flex-row gap-1 items-center">
            <img  src="../assets/images/hand.png" alt="Voltar" class="h-4" />
            <span class="text-2xl"><slot>{{ props.title }}</slot></span>
        </p>
    </header>
</template>