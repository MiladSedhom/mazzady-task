// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@nuxtjs/tailwindcss', 'radix-vue/nuxt', '@nuxt/icon', '@nuxt/fonts', '@nuxt/test-utils/module'],
	runtimeConfig: {
		public: {
			apiBase: 'https://staging.mazaady.com/api/v1/',
			privateKey: process.env.PRIVATE_KEY,
		},
	},
})
