<template>
	<div class="w-full h-full">
		<Header />
		<div class="px-[5.25rem] py-[3rem] flex gap-6">
			<div>
				<ProfileCard />
				<div class="mb-6"></div>
				<QRCodeCard />
			</div>
			<div class="bg-bg p-6 rounded-[21px] grow max-h-[125vh] overflow-y-auto">
				<div class="flex justify-between">
					<div class="flex gap-2.5">
						<button
							class="w-[6.75rem] border border-seconday text-secondary bg-yellow-1 py-2 rounded-[14px]"
						>
							Products
						</button>
						<button class="w-[6.75rem] border border-gray-3 py-2 rounded-[14px]">Articles</button>
						<button class="w-[6.75rem] border border-gray-3 py-2 rounded-[14px]">Reviews</button>
					</div>
					<button
						class="bg-primary-gradient leading-10 text-bg text-sm font-bold px-4 rounded-[10px] hidden sm:block"
					>
						<Icon name="radix-icons:plus-circled" />
						Add Review
					</button>
				</div>
				<h1 class="font-extrabold text-[2rem] my-6">
					Products <span class="text-gray-2 text-sm font-medium">(12)</span>
					<div>
						<ProductCard v-for="i in Array(18)" />
					</div>
				</h1>
			</div>
		</div>
	</div>
</template>
