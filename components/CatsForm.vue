<script setup lang="ts">
import { useCategories, useProperties } from '~/api/categories'

const { data: cats } = await useCategories()

const selectedCatId = ref()
const subCats = computed(() => cats?.find(c => c.id === selectedCatId.value)?.children)
const selectedSubCatId = ref()

//{propertyId: optionsId | 'other'}
const selectedProperties = ref<Record<number, number | string>>({})

// {propertyId: value}
const otherOptions = ref<Record<number, string>>({})

let properties = ref<Awaited<ReturnType<typeof useProperties>>>()

watchEffect(async () => {
	if (selectedSubCatId.value) {
		properties.value = await useProperties(selectedSubCatId.value)
	}
})
</script>

<template>
	<form action="" class="bg-bg rounded-[21px] w-[30rem] h-96 p-8 flex flex-col gap-4 overflow-auto items-center">
		<div>
			<label for="main-cat" class="text-sm font-medium"> Main Category</label>
			<Combobox
				v-model="selectedCatId"
				:options="cats?.map(c => ({ label: c.name, value: c.id }))"
				placeholder="Category..."
				name="main-cat"
			/>
		</div>
		<div>
			<label for="sub-cat" class="text-sm font-medium"> Sub Category</label>
			<Combobox
				v-model="selectedSubCatId"
				:options="subCats?.map(c => ({ label: c.name, value: c.id }))"
				placeholder="Subcategory..."
				emptyMsg="No subcategories, try choosing a main categorey."
				name="sub-cat"
			/>
		</div>

		<div v-for="p in properties?.data">
			<label :for="p.slug" class="text-sm font-medium"> {{ p.name }}</label>
			<Combobox
				@update:modelValue="
					v => {
						if (v !== '') selectedProperties[p.id] = v
					}
				"
				:options="[
					...p.options?.map(o => ({ label: o.name, value: o.id })),
					{ label: 'other', value: 'other' },
				]"
				placeholder="Subcategory..."
				emptyMsg="No subcategories, try choosing a main categorey."
				:name="p.slug"
			/>
			<input
				v-bind:value="otherOptions[p.id]"
				v-if="selectedProperties[p.id] === 'other'"
				class="h-10 w-full text-2 px-4 text-fg placeholder-gray-2/50 grow shadow-[0_2px_10px] shadow-black/10 hover:bg-yellow-1/30 data-[placeholder]:text-gray-2/50 outline-none"
				type="text"
				placeholder="Enter a value..."
			/>
		</div>
	</form>
</template>
