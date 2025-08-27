import { getCatalog } from '~~/services/catalog/'

export default defineEventHandler(async event => {
	return await getCatalog(event)
})
