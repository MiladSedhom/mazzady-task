<script setup lang="ts">
import { useCategories, useProperties } from '~/api/categories'

const { data: cats } = await useCategories()

const selectedCatId = ref()
const subCats = computed(() => cats?.find(c => c.id === selectedCatId.value)?.children)
const selectedSubCatId = ref()

const properties = ref<Property[]>([])
watchEffect(async () => {
	if (selectedSubCatId.value) {
		const { data } = await useProperties(selectedSubCatId.value)
		properties.value = data ?? []
	}
})

const selectedPropertiesIds = ref<number[]>([])

watchEffect(() => {
	console.log(selectedPropertiesIds.value)
})
</script>

<template>
	<form action="" class="bg-bg rounded-[21px] w-96 h-96 p-8 flex flex-col gap-4 overflow-auto">
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

		<div v-for="p in properties">
			<label :for="p.slug" class="text-sm font-medium"> {{ p.name }}</label>
			<Combobox
				@update:modelValue="v => {selectedPropertiesIds.push(v as number)
					console.log(selectedPropertiesIds)
				}"
				:options="[
					...p.options?.map(o => ({ label: o.name, value: o.id })),
					{ label: 'other', value: 'other' },
				]"
				placeholder="Subcategory..."
				emptyMsg="No subcategories, try choosing a main categorey."
				:name="p.slug"
			/>
		</div>
	</form>
</template>
