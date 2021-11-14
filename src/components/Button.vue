<template>
    <button
        class="
            bg-gray-200
			text-gray-800
			hover:bg-gray-300
			hover:text-black
			dark:bg-gray-800
			dark:text-gray-200
			dark:hover:bg-gray-700
			dark:hover:text-white
			focus:outline-none focus:ring-1 focus:ring-inset focus:ring-white dark:focus:ring-black
            drop-shadow-lg
            outline-none
            rounded-md
            py-2
            px-3
            lg:text-lg sm:text-sm text-xs
            items-center
            text-center flex flex-col
            mt-2.5
            font-semibold
        "
    >
        {{ props.text }}
    </button>
</template>
<script setup lang="ts">
	import { defineProps } from 'vue'
	const props = defineProps<{ text: string }>()
</script>