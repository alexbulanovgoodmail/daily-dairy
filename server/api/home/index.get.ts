import { getHome } from '~~/services/home/'

export default defineEventHandler(async () => {
	return await getHome()
})
