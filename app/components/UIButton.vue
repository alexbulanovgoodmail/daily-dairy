<script setup lang="ts">
interface Props {
	to?: string | undefined
	label?: string | undefined
	type?: 'button' | 'submit' | 'reset'
	variant?: 'primary' | 'secondary'
}

const {
	to = undefined,
	label = undefined,
	type = 'button',
	variant = 'primary'
} = defineProps<Props>()
</script>

<template>
	<template v-if="to">
		<NuxtLink class="ui-button" :class="variant" :href="to">
			{{ label }}
		</NuxtLink>
	</template>
	<template v-else>
		<button class="ui-button" :class="variant" :type="type">
			{{ label }}
		</button>
	</template>
</template>

<style scoped lang="scss">
.ui-button {
	appearance: none;
	border: 1px solid transparent;
	border-radius: 0;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	min-height: 67px;
	padding: 24px 96px;
	cursor: pointer;
	text-transform: uppercase;
	text-decoration: none;
	transition:
		border-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
		background-color 300ms cubic-bezier(0.4, 0, 0.2, 1),
		color 300ms cubic-bezier(0.4, 0, 0.2, 1);

	@include typo-p2;
}

.primary .ui-button.primary {
	color: var(--color-2);
	background-color: var(--color-1);

	@media (hover: hover) {
		&:hover,
		&:focus-visible {
			border-color: var(--color-1);
			color: var(--color-1);
			background-color: transparent;
		}
	}
}

.secondary .ui-button.primary {
	color: var(--color-1);
	background-color: var(--color-2);

	@media (hover: hover) {
		&:hover,
		&:focus-visible {
			border-color: var(--color-2);
			color: var(--color-2);
			background-color: var(--color-1);
		}
	}
}
</style>
