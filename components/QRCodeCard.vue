<script setup lang="ts">
const expanded = ref(false)
</script>

<template>
	<div class="bg-bg p-6 rounded-[21px] max-w-[25rem]">
		<div class="flex justify-between items-center">
			<h1 class="text-2xl font-bold">QR Code</h1>
			<div class="flex gap-6 items-center">
				<Icon name="radix-icons:eye-open" class="w-5 h-5 sm:w-6 sm:h-6 inline-block" />
				<Icon name="radix-icons:share-1" class="w-5 h-5 sm:w-6 sm:h-6 inline-block" />
				<Icon name="radix-icons:download" class="w-5 h-5 sm:w-6 sm:h-6 inline-block" />
				<button @click="expanded = !expanded" class="bg-gray-3 rounded-full w-5 h-5 sm:w-6 sm:h-6 sm:hidden">
					<Icon name="radix-icons:caret-down" class="w-5 h-5 sm:w-6 sm:h-6 text-fg inline-block" />
				</button>
			</div>
		</div>
		<div
			class="bg-yellow-1 text-secondary rounded-[18px] p-3 gap-1 items-center my-4 hidden sm:flex"
			:class="expanded && '!flex'"
		>
			<Icon name="radix-icons:file" class="w-6 h-6 inline-block" />
			<p class="text-fg text-xs inline-block">Download the QR code or share it with your friends.</p>
		</div>

		<div class="p-5 bg-primary-gradient rounded-[20px] hidden sm:flex" :class="expanded && '!flex'">
			<img src="/public/qr-code.png" alt="qr code" class="rounded-[18px]" />
		</div>
	</div>
</template>
