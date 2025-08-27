import { getProduct } from '~~/services/product/'

export default defineEventHandler(async event => {
	return await getProduct(event)
})
