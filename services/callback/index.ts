import type { H3Event } from 'h3'
import { readBody } from 'h3'

export async function sendCallback(event?: H3Event) {
	if (!event) {
		throw new Error('Event parameter is required')
	}

	const body = await readBody(event)
	const { name, email, message } = body

	// Можно здесь добавить логику обработки name, email, message

	return new Promise(resolve => {
		setTimeout(() => {
			resolve({
				success: true,
				message: 'Callback request received (mock).',
				receivedData: { name, email, message }
			})
		}, 1000) // имитация задержки 1 секунда
	})
}
