<script setup lang="ts">
const options = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple']

const selectedValue = ref('')
</script>

<template>
	<NuxtRouteAnnouncer />
	<div class="bg-lightGray text-fg w-screen h-screen">
		<div class="p-8">
			<h1 class="text-2xl">Hiiiii🍫🍫</h1>
			<Combobox v-model="selectedValue" :options="options.map(o => ({ label: o, value: o }))" />
			<h1 class="text-xl">{{ selectedValue }}</h1>
			<h1 class="text-2xl text-primary">Hiiiii🍫🍫</h1>
			<h1 class="text-2xl text-secondary">Hiiiii🍫🍫</h1>
			<h1 class="text-2xl text-yellow-1">Hiiiii🍫🍫</h1>
			<h1 class="text-2xl text-fg">Hiiiii🍫🍫</h1>
			<h1 class="text-2xl text-gray-1">Hiiiii🍫🍫</h1>
			<h1 class="text-2xl text-gray-2">Hiiiii🍫🍫</h1>
			<h1 class="text-2xl text-fg bg-primary-gradient">Hiiiii🍫🍫</h1>
		</div>
	</div>
</template>
