<template>
	<div class="rounded-[34xp] flex items-start lg:items-center gap-2 w-full relative">
		<img
			class="rounded-[28px] lg:m-4 w-22 h-18 lg:w-[145px] lg:h-[127px]"
			src="/public/product.png"
			alt="product"
			width="88"
			height="72"
		/>
		<div class="grow">
			<div class="flex justify-between">
				<p class="text-xs lg:text-sm font-medium">Six-piece clothing set (blouse - pants - hat and ...</p>
				<div
					class="w-6 h-6 lg:w-10 lg:h-10 rounded-full bg-bg absolute lg:static grid place-content-center top-1 left-1"
				>
					<Icon name="radix-icons:heart" class="w-3 h-3 lg:w-6 lg:h-6" />
				</div>
			</div>
			<p class="text-xs lg:text-lg font-normal text-gray-1 my-2">
				Starting Price <span class="font-bold text-xs lg:text-xl text-fg">1000 EGP</span>
			</p>
			<div class="flex flex-col gap-2">
				<span class="text-xs lg:text-lg font-normal text-gray-1">Lot starts in </span>

				<div class="inline-flex gap-2 lg:gap-4">
					<div
						class="leading-7 lg:leading-10 bg-yellow-1 text-secondary rounded-3xl text-[0.5rem] lg:text-sm px-3"
					>
						<span class="text-xs lg:text-xl font-bold"> 2 </span> Days
					</div>
					<div
						class="leading-7 lg:leading-10 bg-yellow-1 text-secondary rounded-3xl text-[0.5rem] lg:text-sm px-3"
					>
						<span class="text-xs lg:text-xl font-bold"> 10 </span> Hours
					</div>
					<div
						class="leading-7 lg:leading-10 bg-yellow-1 text-secondary rounded-3xl text-[0.5rem] lg:text-sm px-3"
					>
						<span class="text-xs lg:text-xl font-bold"> 50 </span> Minutes
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
