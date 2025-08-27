<script setup lang="ts">
import { storeLayout } from '~/stores/storeLayout'

const { navigations } = storeLayout()
</script>

<template>
	<header class="header">
		<div class="container">
			<nav class="header__navigation navigation">
				<div class="navigation__wrapper">
					<NuxtLink class="navigation__link" to="/">
						<Icon name="icons:home" />
						<span>Home</span>
					</NuxtLink>

					<ul class="navigation__items">
						<li
							v-for="nav in navigations"
							:key="nav.id"
							class="navigation__item"
						>
							<NuxtLink
								class="navigation__link"
								:to="nav.to"
								exact-active-class="active"
							>
								{{ nav.label }}
							</NuxtLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	</header>
</template>

<style scoped lang="scss">
.header {
	padding: 24px 0 16px;
	color: var(--color-1);
	background-color: var(--color-2);
}

.navigation {
	&__wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	&__items {
		list-style: none;
		display: flex;
		align-items: center;

		& > * + * {
			margin-left: 24px;
		}
	}

	&__item {
		display: flex;
		align-items: center;
	}

	&__link {
		display: flex;
		align-items: center;
		color: var(--color-1);
		text-decoration: none;
		transition: opacity 300ms cubic-bezier(0.075, 0.82, 0.165, 1);

		@include typo-link;

		@media (hover: hover) {
			&:hover,
			&:focus-visible {
				opacity: 0.6;
			}
		}

		.icon {
			width: 20px;
			height: 20px;
			transform: translateY(-3px);

			@media screen and (min-width: $md) {
				width: 24px;
				height: 24px;
				transform: translateY(-2px);
			}

			@media screen and (min-width: $xl) {
				width: 30px;
				height: 30px;
				transform: translateY(-3px);
			}
		}

		& > * + * {
			margin-left: 4px;
		}
	}
}
</style>
