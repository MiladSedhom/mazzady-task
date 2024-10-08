import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, it, vi } from 'vitest'
import { useProperties } from '~/api/categories'
import CatsForm from '~/components/CatsForm.vue'

describe('CatsForm', () => {
	it('renders a form element', async () => {
		const component = await mountSuspended(CatsForm)
		expect(component.findAll('form')).toHaveLength(1)
	})

	it('renders main category and sub category comboboxes', async () => {
		const component = await mountSuspended(CatsForm)

		const comboboxes = component.findAllComponents({ name: 'Combobox' })
		expect(comboboxes).toHaveLength(2)
	})

	it('populates subcategories when main category is selected', async () => {
		const component = await mountSuspended(CatsForm)

		const mainCatCombobox = component.findAllComponents({ name: 'Combobox' })[0]
		await mainCatCombobox.setValue(1)

		const subCatCombobox = component.findAllComponents({ name: 'Combobox' })[1]
		const subCatOptions = subCatCombobox.props('options')

		expect(subCatOptions).toHaveLength(2)
		expect(subCatOptions).toContainEqual({ label: 'Phones', value: 11 })
		expect(subCatOptions).toContainEqual({ label: 'Computers', value: 12 })
	})

	it('fetches properties when subcategory is selected', async () => {
		const component = await mountSuspended(CatsForm)

		const mainCatCombobox = component.findAllComponents({ name: 'Combobox' })[0]
		await mainCatCombobox.setValue(1)

		const subCatCombobox = component.findAllComponents({ name: 'Combobox' })[1]
		await subCatCombobox.setValue(11)

		expect(vi.mocked(useProperties)).toHaveBeenCalledWith(11)

		await component.vm.$nextTick()

		const allComboboxes = component.findAllComponents({ name: 'Combobox' })
		expect(allComboboxes).toHaveLength(4) // 2 category + 2 property comboboxes
	})

	it('shows "other" input field when "other" is selected for a property', async () => {
		const component = await mountSuspended(CatsForm)

		let comboboxes = component.findAllComponents({ name: 'Combobox' })
		await comboboxes[0].setValue(1)
		await comboboxes[1].setValue(11)

		await component.vm.$nextTick()

		comboboxes = component.findAllComponents({ name: 'Combobox' })
		await comboboxes[2].setValue('other')

		//the placeholder is the unique thing about the "other" input field
		const otherInput = component.find('input[placeholder="Enter a value..."]')
		expect(otherInput?.exists()).toBe(true)
	})
})

vi.mock('~/api/categories', () => ({
	useCategories: vi.fn().mockResolvedValue({
		data: [
			{
				id: 1,
				name: 'Electronics',
				children: [
					{ id: 11, name: 'Phones' },
					{ id: 12, name: 'Computers' },
				],
			},
			{
				id: 2,
				name: 'Clothing',
				children: [
					{ id: 21, name: 'Men' },
					{ id: 22, name: 'Women' },
				],
			},
		],
	}),
	useProperties: vi.fn().mockResolvedValue({
		data: [
			{
				id: 1,
				name: 'Brand',
				slug: 'brand',
				options: [
					{ id: 101, name: 'Apple' },
					{ id: 102, name: 'Samsung' },
				],
			},
			{
				id: 2,
				name: 'Color',
				slug: 'color',
				options: [
					{ id: 201, name: 'Black' },
					{ id: 202, name: 'White' },
				],
			},
		],
	}),
}))
