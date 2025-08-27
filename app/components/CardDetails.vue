<script setup lang="ts">
import type { ProductDetail } from '~/types/ProductDetail'
import { StructuredText as DatocmsStructuredText } from 'vue-datocms'
import { useDialog } from '~/composables/useDialog'
import { useDatoRender } from '~/composables/useDatoRender'
import UIButton from '~/components/UIButton.vue'
import ContactForm from '~/components/ContactForm.vue'

interface Props {
	details: ProductDetail
}

defineProps<Props>()

const { openModal } = useDialog()
const { renderBlock } = useDatoRender()

function handleInquire() {
	openModal({
		modalProps: {
			title: 'Send an Inquiry',
			description: 'Fill out the form below, and we’ll get back to you shortly.'
		},
		component: ContactForm,
		componentProps: {
			onSubmitSuccess: handleSubmitSuccess,
			onSubmitFailure: handleSubmitFailure
		}
	})
}

function handleSubmitSuccess(response: any) {
	const { message, receivedData } = response
	const { name, email, message: comment } = receivedData

	openModal({
		modalProps: {
			title: 'Thank you for contacting us',
			description: `
			${message}\n
			Your application has been accepted and is currently being processed.
			name:  ${name},
			e-mail: ${email},
			message: ${comment}
			`
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
	<div class="card-details">
		<div class="card-details__content">
			<p>{{ details.title }}</p>
			<p>{{ details.caption }}</p>
			<p>{{ details.description }}</p>
			<DatocmsStructuredText
				:data="details.content"
				:render-block="renderBlock"
			/>
		</div>
		<div class="card-details__action">
			<UIButton label="Inquire" @click="handleInquire" />
		</div>
	</div>
</template>

<style scoped lang="scss">
.card-details {
	display: flex;
	flex-direction: column;
	height: 100%;
	padding: 36px;

	&__content,
	&__content :deep(div) {
		text-wrap: pretty;

		@include user-content;
	}

	&__content:not(:last-child) {
		margin-bottom: 50px;
	}

	&__action {
		margin-top: auto;
		display: flex;

		& > * {
			width: 100%;
		}
	}
}
</style>
