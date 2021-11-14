<template>
	<router-link
		class="mx-auto"
		:to="'/wallet/' + props.address"
	>
		<code class="
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
			p-4
			lg:text-lg sm:text-sm text-xs
			rounded-md shadow flex items-center"
			>
			<span
			style="white-space: nowrap;"
			class="block
			overflow-hidden
			drop-shadow-lg
			font-bold
			w-60 sm:w-auto mr-2">{{ props.address }}</span>
			<router-link
				to=""
			>
				<button ref="copyButton" class="drop-shadow-lg focus:outline-none" aria-label="Copy install command">
					<heroicons-outline-clipboard-copy
						v-if="!copied"
						class="inline-block fill-current cursor-pointer hover:text-white mb-1"
						aria-hidden="true"
						@click="copyInstallCmd"
					/>
					<heroicons-outline-clipboard-check
						v-else
						class="inline-block fill-current text-green-500 cursor-pointer mb-1"
						aria-hidden="true"
						@click="copyInstallCmd"
					/>
				</button>
			</router-link>
		</code>
	</router-link>
</template>
<script setup lang="ts">
	import { defineProps, ref } from 'vue'
	import { useTippy } from 'vue-tippy'
	import debounce from 'lodash/debounce'
	const copyButton = ref()
	const copied = ref(false)
	const props = defineProps<{ address: string }>()
	const resetCopied = debounce((hide: () => void) => {
		hide()
		copied.value = false
	}, 1000)
	const { show: showTooltip, hide: hideTooltip } = useTippy(copyButton, {
		content: 'Copied',
		trigger: 'manual',
		hideOnClick: false,
	})
	const copyInstallCmd = async () => {
		try {
			await navigator.clipboard.writeText(props.address)
			showTooltip()
		}
		catch {}
		copied.value = true
		resetCopied(hideTooltip)
	}
</script>