// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import prettierPlugin from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'

export default withNuxt({
	plugins: {
		prettier: prettierPlugin
	},
	rules: {
		'prettier/prettier': 'error',
		'vue/multi-word-component-names': 'off',
		'@typescript-eslint/no-explicit-any': 'off',

		...prettierConfig.rules
	}
})
