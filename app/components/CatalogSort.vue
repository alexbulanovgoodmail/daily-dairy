<script setup lang="ts">
import { SORT_OPTIONS } from '~~/constants'
import type { Option } from '~/types/Option'
import UISelect from '~/components/UISelect.vue'

const route = useRoute()
const router = useRouter()

const selected = computed<Option>({
	get() {
		if (route.query.sort) {
			const option = SORT_OPTIONS.find(o => o.value === route.query.sort)

			if (option) return option
			else return SORT_OPTIONS[0]!
		} else {
			return SORT_OPTIONS[0]!
		}
	},
	set(newValue: Option) {
		const query = { ...route.query }
		delete query.page

		query.sort = newValue.value

		router.push({ query })
	}
})
</script>

<template>
	<div class="catalog-sort">
		<div class="container">
			<div class="catalog-sort__wrapper">
				<UISelect v-model="selected" :options="SORT_OPTIONS" />
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.catalog-sort {
	margin: 24px 0;

	&__wrapper {
		display: flex;
		justify-content: flex-end;
	}
}
</style>
