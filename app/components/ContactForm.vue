<script setup lang="ts">
import * as Yup from 'yup'
import UIButton from '~/components/UIButton.vue'

const formRef = ref<any>(undefined)
const loading = ref<boolean>(false)

const formState = reactive({
	name: undefined,
	email: undefined,
	message: undefined
})

const schema = Yup.object().shape({
	name: Yup.string().trim().required('required'),
	email: Yup.string().trim().email('incorrect e-mail').required('required'),
	message: Yup.string().trim().required('required')
})

const emits = defineEmits<{
	(e: 'submit-success', response?: any): void
	(e: 'submit-failure', error: any): void
}>()

async function handleSubmit(values: any, actions: any) {
	try {
		loading.value = true
		const response = await $fetch(`/api/callback/`, {
			method: 'POST',
			body: {
				...values
			}
		})

		actions.resetForm()
		emits('submit-success', response)
	} catch (error: any) {
		emits('submit-failure', error)
	} finally {
		loading.value = false
	}
}
</script>

<template>
	<Form
		ref="formRef"
		class="contact-form"
		:validation-schema="schema"
		@submit="handleSubmit"
	>
		<div class="contact-form__wrapper">
			<Field
				v-slot="{ field, meta, errorMessage }"
				v-model="formState.name"
				name="name"
			>
				<div class="form-group" :class="{ disabled: loading }">
					<label class="form-label" for="name">Your name</label>
					<input
						id="name"
						v-bind="field"
						class="form-input"
						type="text"
						placeholder="Your name"
						:disabled="loading"
					/>

					<div
						v-if="meta.validated && !meta.valid"
						class="form-help-message form-help-message_error"
					>
						{{ errorMessage }}
					</div>
				</div>
			</Field>

			<Field
				v-slot="{ field, meta, errorMessage }"
				v-model="formState.email"
				name="email"
			>
				<div class="form-group" :class="{ disabled: loading }">
					<label class="form-label" for="email">Your e-mail</label>
					<input
						id="email"
						v-bind="field"
						class="form-input"
						type="email"
						placeholder="Your e-mail"
						:disabled="loading"
					/>

					<div
						v-if="meta.validated && !meta.valid"
						class="form-help-message form-help-message_error"
					>
						{{ errorMessage }}
					</div>
				</div>
			</Field>

			<Field
				v-slot="{ field, meta, errorMessage }"
				v-model="formState.message"
				name="message"
			>
				<div class="form-group" :class="{ disabled: loading }">
					<label class="form-label" for="message">Your message</label>
					<textarea
						id="message"
						v-bind="field"
						class="form-textrea"
						name="message"
						placeholder="Your message"
						:disabled="loading"
					></textarea>

					<div
						v-if="meta.validated && !meta.valid"
						class="form-help-message form-help-message_error"
					>
						{{ errorMessage }}
					</div>
				</div>
			</Field>
		</div>
		<div class="contact-form__submit">
			<UIButton type="submit" label="Submit" :disabled="loading" />
		</div>
	</Form>
</template>

<style scoped lang="scss">
.contact-form {
	&__wrapper {
		margin-bottom: 24px;
		display: grid;
		gap: 16px;
	}

	&__submit > * {
		width: 100%;
	}
}

.form-group {
	position: relative;
	margin: 0 0 10px;
}

.form-label {
	margin-bottom: 5px;
	display: block;
	font-size: 18px;
	font-weight: 800;
	line-height: 24px;

	@media screen and (min-width: $lg) {
		font-size: 20px;
		line-height: 26px;
	}
}

.form-group.disabled > .form-label {
	opacity: 0.6;
	pointer-events: none;
}

.form-input {
	outline: none;
	border: 1px solid currentcolor;
	display: block;
	width: 100%;
	height: 60px;
	padding: 8px 16px;
	font-size: 18px;
	font-weight: 600;
	line-height: 24px;
	color: currentcolor;
	background-color: var(--color-theme);

	&::input-placeholder {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
	}

	&::placeholder {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
	}

	&:placeholder {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
	}

	&:input-placeholder {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
	}

	/* &:not(:placeholder-shown), */
	&:focus-visible {
		background-color: var(--color-bg);
	}

	&:disabled {
		opacity: 0.6;
		pointer-events: none;
	}
}

.form-textrea {
	outline: none;
	border: 1px solid currentcolor;
	display: block;
	width: 100%;
	height: 88px;
	resize: none;
	padding: 16px;
	font-size: 18px;
	font-weight: 600;
	line-height: 24px;
	color: currentcolor;
	background-color: var(--color-theme);

	&::input-placeholder {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
	}

	&::placeholder {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
	}

	&:placeholder {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
	}

	&:input-placeholder {
		font-size: 18px;
		font-weight: 600;
		line-height: 24px;
	}

	/* &:not(:placeholder-shown), */
	&:focus-visible {
		background-color: var(--color-2);
	}

	&:disabled {
		opacity: 0.6;
		pointer-events: none;
	}
}

.form-help-message {
	margin-top: 2px;
	position: absolute;
	top: 100%;
	text-transform: lowercase;

	&_error {
		color: var(--color-error);
	}
}

/* autofill fix */

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus-visible,
textarea:-webkit-autofill,
textarea:-webkit-autofill:hover,
textarea:-webkit-autofill:focus-visible,
select:-webkit-autofill,
select:-webkit-autofill:hover,
select:-webkit-autofill:focus-visible {
	-webkit-text-fill-color: var(--color-1) !important;
	box-shadow: 0 0 0 1000px var(--color-2) inset;
	transition:
		background-color 50000s ease-in-out 0s,
		color 5000s ease-in-out 0s;
	background-color: transparent !important;
}
</style>
