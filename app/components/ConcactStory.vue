<script setup lang="ts">
import { useDialog } from '~/composables/useDialog'
import ContactForm from '~/components/ContactForm.vue'

const { openModal } = useDialog()

function handleSubmitSuccess() {
	openModal({
		modalProps: {
			title: 'Thank you for contacting us',
			description:
				'Your application has been accepted and is currently being processed.'
		}
	})
}

function handleSubmitFailure() {
	openModal({
		modalProps: {
			title: 'An error has occurred',
			description:
				'We are aware of the problem and are already addressing it. Please refresh the page or try to come back later...'
		}
	})
}
</script>

<template>
	<section class="contact-story">
		<div class="contact-story__wrapper">
			<ContactForm
				@submit-success="handleSubmitSuccess"
				@submit-failure="handleSubmitFailure"
			/>
		</div>
	</section>
</template>

<style scoped lang="scss">
.contact-story {
	margin: 0 0 50px;

	@media screen and (min-width: $md) {
		margin: 0 0 160px;
	}

	&__wrapper {
		margin: 0 auto;
		max-width: 640px;
	}
}
</style>
