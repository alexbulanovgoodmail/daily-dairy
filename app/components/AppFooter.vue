<script setup lang="ts"></script>

<template>
	<footer class="footer">
		<div class="container">
			<div class="footer__wrapper">
				<div class="footer__made made">
					<p class="made__name">Made by Steve</p>
				</div>
				<div class="footer__social social">
					<ul class="social__items">
						<li class="social__item">
							<a class="social__link" href="#">insta</a>
						</li>
						<li class="social__item">
							<a class="social__link" href="#">ebay</a>
						</li>
						<li class="social__item">
							<a class="social__link" href="#">facebook</a>
						</li>
						<li class="social__item">
							<a class="social__link" href="#">email</a>
						</li>
					</ul>
				</div>
				<div class="footer__copyright copyright">
					<div class="copyright__wrapper">
						<div class="copyright__name">DAILY DAIRY</div>
						<div class="copyright__date">©2025</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped lang="scss">
.footer {
	&__wrapper {
		margin-top: -1px;
		border-top: 1px solid currentcolor;

		@media screen and (min-width: $md) {
			padding-top: 50px;
		}
	}
}

.made {
	padding: 50px 0;
	text-align: center;

	@include typo-h3;
}

.social {
	padding: 50px 0;

	&__items {
		list-style: none;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	&__link {
		text-decoration: none;
		color: currentcolor;

		@include typo-h1;

		@media (hover: hover) {
			&:hover,
			&:focus-visible {
				opacity: 0.6;
			}
		}
	}
}

.copyright {
	padding: 50px 0;

	&__wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;

		@include typo-h3;
	}
}
</style>
