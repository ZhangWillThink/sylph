import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import pluginOxlint from 'eslint-plugin-oxlint'
import pluginVue from 'eslint-plugin-vue'
import { globalIgnores } from 'eslint/config'
import withNuxt from './.nuxt/eslint.config.mjs'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default withNuxt(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  pluginVue.configs['flat/essential'],

  ...pluginOxlint.configs['flat/recommended'],
  {
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/order': [
        'error',
        {
          // Put `import type ...` first, then builtin, external, internal, etc.
          groups: ['type', 'builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          // Ensure specific path ordering for vue, api, components
          pathGroups: [
            { pattern: 'vue', group: 'external', position: 'before' },
            { pattern: '@/api/**', group: 'internal', position: 'after' },
            { pattern: '@/components/**', group: 'internal', position: 'after' },
          ],
          // Don't apply pathGroups to type-only imports
          pathGroupsExcludedImportTypes: ['type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',
      'vue/component-options-name-casing': ['error', 'PascalCase'],
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
        { registeredComponentsOnly: false },
      ],
      'vue/attribute-hyphenation': ['error', 'never'],
      'vue/no-use-v-if-with-v-for': ['off', { allowUsingIterationVar: false }],
    },
  },
  prettierConfig,
)
