export async function useCategories() {
	const runtimeConfig = useRuntimeConfig()

	const catsReq = await useFetch<CatsReq>(runtimeConfig.public.apiBase + 'get_all_cats', {
		headers: { 'private-key': runtimeConfig.public.privateKey },
	})

	return { ...catsReq, data: catsReq?.data?.value?.data?.categories }
}

export async function useProperties(catId: number) {
	const runtimeConfig = useRuntimeConfig()

	const propsReq = await useFetch<PropertiesReq>(runtimeConfig.public.apiBase + `properties?cat=${catId}`, {
		headers: { 'private-key': runtimeConfig.public.privateKey },
	})

	return { ...propsReq, data: propsReq.data.value?.data }
}

type CatsReq = { data: { categories: Catogery[] } }
type PropertiesReq = { data: Property[] }
