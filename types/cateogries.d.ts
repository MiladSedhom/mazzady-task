declare interface Catogery {
	id: number
	name: string
	description: string | null
	image: string
	slug: 'cars'
	children: Catogery[] | null
	circle_icon: string
	disable_shipping: number
}

declare interface Property {
	id: number
	name: string
	description: string
	slug: 'string'
	parent: number
	value: ''
	other_value: null
	options: Option[]
}

declare interface Option {
	id: number
	name: string
	slug: string
	parent: number
	child: Option | false
}
