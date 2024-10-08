<template>
	<div class="bg-bg p-6 rounded-[21px] max-w-[25rem]">
		<div class="flex justify-between">
			<h1 class="text-2xl font-bold">QR Code</h1>
			<div class="flex gap-6">
				<Icon name="radix-icons:eye-open" class="w-6 h-6 inline-block" />
				<Icon name="radix-icons:share-1" class="w-6 h-6 inline-block" />
				<Icon name="radix-icons:download" class="w-6 h-6 inline-block" />
			</div>
		</div>
		<div class="bg-yellow-1 text-secondary rounded-[18px] p-3 flex gap-1 items-center my-4">
			<Icon name="radix-icons:file" class="w-6 h-6 inline-block" />
			<p class="text-fg text-xs inline-block">Download the QR code or share it with your friends.</p>
		</div>

		<div class="p-5 bg-primary-gradient rounded-[20px]">
			<img src="/public/qr-code.png" alt="qr code" class="rounded-[18px]" />
		</div>
	</div>
</template>
