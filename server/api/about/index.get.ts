import { getAbout } from '~~/services/about/'

export default defineEventHandler(async () => {
	return await getAbout()
})
