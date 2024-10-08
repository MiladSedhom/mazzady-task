<template>
	<header class="h-[3rem] lg:h-[4.25rem] px-4 lg:px-[5.25rem] flex items-center bg-bg justify-between">
		<div class="flex gap-9 items-center h-full">
			<div class="flex gap-3 items-center">
				<Icon name="radix-icons:hamburger-menu" class="lg:hidden w-6 h-6" />
				<img src="/public/logo.png" width="108" height="4" class="h-8 lg:h-[43px]" />
			</div>
			<nav class="h-full hidden lg:block">
				<ul class="flex gap-10 h-full">
					<li class="grid place-content-center relative">
						<NuxtLink class="text-lg text-primary font-bold" to="#">Home</NuxtLink>
						<div
							class="h-1.5 w-10/12 rounded-t-lg bg-primary absolute bottom-0 left-1/2 -translate-x-1/2"
						></div>
					</li>
					<li class="grid place-content-center">
						<NuxtLink class="text-lg text-gray-2" to="#">Blog</NuxtLink>
					</li>
					<li class="grid place-content-center">
						<NuxtLink class="text-lg text-gray-2" to="#">Gift</NuxtLink>
					</li>
				</ul>
			</nav>
		</div>
		<div class="flex items-center gap-8">
			<div class="flex items-center gap-6">
				<Icon name="radix-icons:magnifying-glass" class="w-6 h-6" />
				<div class="h-8 w-[2px] bg-gray-3"></div>
				<Icon name="radix-icons:bell" class="w-6 h-6" />
				<div class="h-8 w-[2px] bg-gray-3"></div>
				<img
					src="/public/placeholder.png"
					width="40"
					height="40"
					class="rounded-full w-6 h-6 lg:w-10 lg:h-10"
				/>
				<button
					class="bg-primary-gradient leading-10 text-bg text-sm font-bold px-4 rounded-[10px] hidden lg:block"
				>
					<Icon name="radix-icons:plus-circled" />
					Add New Product
				</button>
			</div>
			<div class="gap-2 items-center hidden lg:flex">
				<Icon name="radix-icons:globe" class="w-6 h-6 text-fg/75" />
				<div class="h-8 w-[2px] bg-gray-3"></div>
				<span class="w-6 h-6 font-bold">EN</span>
			</div>
		</div>
	</header>
</template>
