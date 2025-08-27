import { sendCallback } from '~~/services/callback/'

export default defineEventHandler(async event => {
	return await sendCallback(event)
})
