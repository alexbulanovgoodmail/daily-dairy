<script setup lang="ts">
interface Props {
	slogan?: string
}

const { slogan = 'Dive into my collection — A milk cap a day, every day.' } =
	defineProps<Props>()
</script>

<template>
	<div class="hero">
		<div class="container">
			<div class="hero__wordmark wordmark">
				<svg
					width="339"
					height="36"
					viewBox="0 0 339 36"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M324.61 35.3913H312.788V21.6566L298.184 0H311.772L318.833 11.7799H319.047L326.108 0H339L324.61 21.6566V35.3913Z"
						fill="currentColor"
					/>
					<path
						d="M300.573 10.854C300.573 13.0145 299.966 14.9693 298.754 16.7183C297.541 18.4672 295.776 19.7533 293.458 20.5763L301.642 35.3913H288.376L281.85 22.4796H277.463V35.3913H265.641V0H288.162C290.801 0 293.048 0.497261 294.902 1.49178C296.792 2.45201 298.201 3.77232 299.128 5.45272C300.091 7.09883 300.573 8.89926 300.573 10.854ZM288.537 11.317C288.537 10.391 288.216 9.61943 287.574 9.00214C286.932 8.38485 286.147 8.0762 285.22 8.0762H277.463V14.6092H285.22C286.147 14.6092 286.932 14.3005 287.574 13.6832C288.216 13.0317 288.537 12.2429 288.537 11.317Z"
						fill="currentColor"
					/>
					<path
						d="M248.595 35.3913V0H260.417V35.3913H248.595Z"
						fill="currentColor"
					/>
					<path
						d="M234.295 35.3913L232.743 30.4015H219.851L218.3 35.3913H206.21L219.637 0H233.385L246.812 35.3913H234.295ZM222.312 22.4796H230.283L226.431 9.87663H226.217L222.312 22.4796Z"
						fill="currentColor"
					/>
					<path
						d="M189.448 0C202.322 0 208.759 5.89854 208.759 17.6956C208.759 29.4927 202.322 35.3913 189.448 35.3913H173.507V0H189.448ZM185.329 26.9035H189.234C194.191 26.9035 196.67 24.3486 196.67 19.2389V16.1524C196.67 11.0426 194.191 8.48773 189.234 8.48773H185.329V26.9035Z"
						fill="currentColor"
					/>
					<path
						d="M143.319 35.3913H131.497V21.6566L116.893 0H130.481L137.542 11.7799H137.756L144.817 0H157.709L143.319 21.6566V35.3913Z"
						fill="currentColor"
					/>
					<path
						d="M92.1343 0H103.956V26.3377H122.84V35.3913H92.1343V0Z"
						fill="currentColor"
					/>
					<path
						d="M75.0871 35.3913V0H86.9092V35.3913H75.0871Z"
						fill="currentColor"
					/>
					<path
						d="M60.7878 35.3913L59.2365 30.4015H46.3445L44.7932 35.3913H32.7036L46.1305 0H59.8784L73.3053 35.3913H60.7878ZM48.8052 22.4796H56.7757L52.9242 9.87663H52.7102L48.8052 22.4796Z"
						fill="currentColor"
					/>
					<path
						d="M15.9411 0C28.8152 0 35.2523 5.89854 35.2523 17.6956C35.2523 29.4927 28.8152 35.3913 15.9411 35.3913H0V0H15.9411ZM11.8221 26.9035H15.7271C20.6842 26.9035 23.1627 24.3486 23.1627 19.2389V16.1524C23.1627 11.0426 20.6842 8.48773 15.7271 8.48773H11.8221V26.9035Z"
						fill="currentColor"
					/>
				</svg>
			</div>
			<div class="hero__slogan slogan">
				{{ slogan }}
			</div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.hero {
	padding-top: 86px;

	&__wordmark {
		margin-bottom: 48px;

		@media screen and (min-width: $md) {
			margin-bottom: 65px;
		}
	}
}

.wordmark {
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		width: 100%;
		height: auto;
	}
}

.slogan {
	border-top: 1px solid currentcolor;
	padding: 40px 0;
	text-align: center;

	@include typo-h4;
}
</style>
