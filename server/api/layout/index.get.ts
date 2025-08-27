import { getLayout } from '~~/services/layout/'

export default defineEventHandler(async () => {
	return await getLayout()
})
