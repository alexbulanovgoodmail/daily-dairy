import { getContact } from '~~/services/contact/'

export default defineEventHandler(async () => {
	return await getContact()
})
