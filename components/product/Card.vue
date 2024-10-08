<template>
	<div class="rounded-[34xp] flex items-start sm:items-center gap-2 w-full relative">
		<img
			class="rounded-[28px] sm:m-4 w-22 h-18 sm:w-[145px] sm:h-[127px]"
			src="/public/product.png"
			alt="product"
			width="88"
			height="72"
		/>
		<div class="grow">
			<div class="flex justify-between">
				<p class="text-xs sm:text-sm font-medium">Six-piece clothing set (blouse - pants - hat and ...</p>
				<div
					class="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-bg absolute sm:static grid place-content-center top-1 left-1"
				>
					<Icon name="radix-icons:heart" class="w-3 h-3 sm:w-6 sm:h-6" />
				</div>
			</div>
			<p class="text-xs sm:text-lg font-normal text-gray-1 my-2">
				Starting Price <span class="font-bold text-xs sm:text-xl text-fg">1000 EGP</span>
			</p>
			<div class="flex flex-col gap-2">
				<span class="text-xs sm:text-lg font-normal text-gray-1">Lot starts in </span>

				<div class="inline-flex gap-2 sm:gap-4">
					<div
						class="leading-7 sm:leading-10 bg-yellow-1 text-secondary rounded-3xl text-[0.5rem] sm:text-sm px-3"
					>
						<span class="text-xs sm:text-xl font-bold"> 2 </span> Days
					</div>
					<div
						class="leading-7 sm:leading-10 bg-yellow-1 text-secondary rounded-3xl text-[0.5rem] sm:text-sm px-3"
					>
						<span class="text-xs sm:text-xl font-bold"> 10 </span> Hours
					</div>
					<div
						class="leading-7 sm:leading-10 bg-yellow-1 text-secondary rounded-3xl text-[0.5rem] sm:text-sm px-3"
					>
						<span class="text-xs sm:text-xl font-bold"> 50 </span> Minutes
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
