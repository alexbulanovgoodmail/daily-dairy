// https://nuxt.com/docs/api/configuration/nuxt-config
import checker from 'vite-plugin-checker'

export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devServer: {
		host: '0.0.0.0'
	},
	devtools: { enabled: true },
	app: {
		pageTransition: { name: 'page', mode: 'out-in' }
	},
	css: ['~/assets/css/main.css', '~/assets/scss/main.scss'],
	vite: {
		plugins: [
			checker({
				eslint: {
					useFlatConfig: true,
					lintCommand: 'eslint "./**/*.{ts,js,vue}"'
				},
				stylelint: {
					lintCommand: 'stylelint "**/*.{vue,css,scss}"'
				}
			})
		],
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `@use "@/assets/scss/general/variables.scss" as *; @use "@/assets/scss/abstracts/mixins.scss" as *;`
				}
			}
		}
	},
	modules: ['@nuxt/eslint', '@nuxt/icon', '@pinia/nuxt', '@vee-validate/nuxt'],
	icon: {
		size: '24px',
		class: 'icon',
		mode: 'css',
		customCollections: [
			{
				prefix: 'icons',
				dir: './app/assets/icons/',
				normalizeIconName: false
			}
		]
	},
	runtimeConfig: {
		public: {
			datoCmsUrl: process.env.DATO_CMS_URL,
			datoCmsReadOnlyPublishToken: process.env.DATO_CMS_READ_ONLY_PUBLISH_TOKEN
		}
	}
})
