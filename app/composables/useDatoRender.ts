import { h } from 'vue'

export const useDatoRender = () => {
	const renderBlock = (context: any) => {
		const { record } = context

		if (record.__typename === 'ImageRecord') {
			return h(
				'div',
				{
					class: 'img-container'
				},
				[h('img', { src: record.image.url, alt: record.image.alt || ' ' })]
			)
		}

		return null
	}

	return {
		renderBlock
	}
}
