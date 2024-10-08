<template>
	<div class="w-full h-full">
		<Header />
		<div class="p-4 lg:px-[5.25rem] lg:py-[3rem] flex gap-6 flex-col lg:flex-row items-center">
			<div class="w-[25rem]">
				<ProfileCard />
				<div class="mb-6"></div>
				<QRCodeCard />
			</div>
			<div class="bg-bg p-6 rounded-[21px] grow max-h-[125vh] overflow-y-auto">
				<div class="flex justify-between">
					<div class="flex gap-2.5">
						<button
							class="text-sm w-24 wlg:-[6.75rem] border border-seconday text-secondary bg-yellow-1 py-2 rounded-[14px]"
						>
							Products
						</button>
						<button class="text-sm w-24 lg:w-[6.75rem] border border-gray-3 py-2 rounded-[14px]">
							Articles
						</button>
						<button class="text-sm w-24 lg:w-[6.75rem] border border-gray-3 py-2 rounded-[14px]">
							Reviews
						</button>
					</div>
					<button
						class="bg-primary-gradient leading-10 text-bg text-sm font-bold px-4 rounded-[10px] hidden lg:block"
					>
						<Icon name="radix-icons:plus-circled" />
						Add Review
					</button>
				</div>
				<h1 class="font-extrabold text-xl lg:text-[2rem] my-4 lg:my-6">
					Products <span class="text-gray-2 text-sm font-medium">(12)</span>
				</h1>
				<div class="flex flex-col gap-6">
					<ProductCard v-for="i in Array(18)" />
				</div>
			</div>
		</div>
	</div>
</template>
