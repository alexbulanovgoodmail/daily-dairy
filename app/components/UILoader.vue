<script setup lang="ts">
interface Props {
	size?: number
}

const { size = 24 } = defineProps<Props>()
</script>

<template>
	<div class="ui-loader">
		<Icon name="icons:loading" :size="size" />
	</div>
</template>

<style scoped lang="scss">
.ui-loader {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
