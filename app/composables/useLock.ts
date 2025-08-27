export default function useLock() {
	let scrollOffset = 0
	const documentElement = document.documentElement as HTMLElement
	const body = document.body

	function scrollLock(): void {
		scrollOffset = window.scrollY

		const lockPaddingOffset = window.innerWidth - documentElement.offsetWidth

		body.style.position = 'fixed'
		body.style.top = `-${scrollOffset}px`
		body.style.left = '0'
		body.style.right = '0'
		body.style.width = '100%'
		body.style.overflow = 'hidden'
		body.style.paddingRight = `${lockPaddingOffset}px`

		documentElement.style.scrollBehavior = 'unset'

		const matches = document.querySelectorAll<HTMLElement>('.lock-padding')
		matches.forEach(elem => {
			elem.style.paddingRight = `${lockPaddingOffset}px`
		})
	}

	function scrollUnLock(): void {
		body.style.position = ''
		body.style.top = ''
		body.style.left = ''
		body.style.right = ''
		body.style.width = ''
		body.style.overflow = ''
		body.style.paddingRight = ''

		documentElement.style.scrollBehavior = ''

		const matches = document.querySelectorAll<HTMLElement>('.lock-padding')
		matches.forEach(elem => {
			elem.style.paddingRight = ''
		})

		requestAnimationFrame(() => {
			window.scrollTo({ top: scrollOffset })
		})
	}

	return {
		scrollLock,
		scrollUnLock
	}
}
