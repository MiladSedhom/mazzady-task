<script setup lang="ts">
interface Option {
	label: string
	value: string | number
}

const props = defineProps({
	modelValue: { type: [String, Number], default: '' },
	emptyMsg: { type: [String, Number], default: 'No options' },
	placeholder: { type: String, default: 'Placeholder...' },
	options: { type: Array<Option>, default: [] },
})

const emit = defineEmits<{
	'update:modelValue': [value: string | number]
}>()

const v = ref('')
const selectedLabel = computed(() => props.options.find(o => o.value === v.value)?.label!)

watchEffect(
	() => {
		emit('update:modelValue', v.value)
	},
	{ flush: 'pre' }
)
</script>

<template>
	<ComboboxRoot v-model="v" class="relative max-w-[20rem]" :displayValue="() => selectedLabel">
		<ComboboxAnchor
			class="min-w-[20rem] inline-flex items-center justify-between rounded px-4 text-sm leading-none h-10 gap-[5px] bg-bg text-fg shadow-[0_2px_10px] shadow-black/10 hover:bg-yellow-1/30 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-gray-2/50 outline-none"
		>
			<ComboboxInput
				class="!bg-transparent outline-none text-fg h-full placeholder-gray-2/50 grow"
				:placeholder="placeholder"
				v-bind="$attrs"
			/>
			<ComboboxTrigger>
				<Icon name="radix-icons:chevron-down" class="h-5 w-5 text-fg" />
			</ComboboxTrigger>
		</ComboboxAnchor>

		<ComboboxContent
			class="absolute z-10 w-full mt-2 min-w-[20rem] bg-bg overflow-hidden rounded shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
		>
			<ComboboxEmpty class="text-fg text-xs font-medium text-center py-2"> {{ emptyMsg }}</ComboboxEmpty>

			<ComboboxGroup>
				<ComboboxItem
					v-for="(option, index) in options"
					:key="index"
					class="text-sm leading-none text-fg rounded flex items-center h-8 px-6 relative select-none data-[disabled]:text-gray-2/50 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-primary/10 data-[highlighted]:text-fg"
					:value="option.value"
				>
					<ComboboxItemIndicator class="absolute left-0 px-1 inline-flex items-center justify-center">
						<Icon name="radix-icons:check" class="w-5 h-5" />
					</ComboboxItemIndicator>
					<span>
						{{ option.label }}
					</span>
				</ComboboxItem>
			</ComboboxGroup>
		</ComboboxContent>
	</ComboboxRoot>
</template>
