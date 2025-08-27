import { Fancybox } from '@fancyapps/ui'
import '@fancyapps/ui/dist/fancybox/fancybox.css'

import useLock from '~/composables/useLock'

export default defineNuxtPlugin(() => {
	const { scrollLock, scrollUnLock } = useLock()

	if (!scrollLock || !scrollUnLock) {
		throw new Error('Lock functions are not available')
	}

	// Добавление кастомного CSS прямо в плагине
	const style = document.createElement('style')
	style.textContent = `
		html.with-fancybox body.hide-scrollbar {
			margin: 0 !important;
		}

		/* For compact mode */
		.fancybox__content:has(iframe) {
			position: relative;
			width: 100% !important;
			height: 100% !important;

			&::before {
				content: '';
				display: block;
				width: 100% !important;
				padding-top: calc(100% / (16 / 9));
			}

			iframe {
				position: absolute;
				top: 0;
				left: 0;
			}
		}
	`
	document.head.appendChild(style)

	const fancyboxConfig = {
		Hash: false as const,
		Carousel: {
			Toolbar: {
				display: {
					left: [],
					middle: ['prev', 'next'],
					right: ['close']
				}
			}
		},
		on: {
			init: (): void => {
				scrollLock()
			},
			destroy: (): void => {
				scrollUnLock()
			}
		}
	}

	const FANCYBOX_SELECTOR = '[data-fancybox]'

	Fancybox.bind(FANCYBOX_SELECTOR, fancyboxConfig)
})
