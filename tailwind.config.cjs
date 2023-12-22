// @ts-check
import { join } from 'path';
import { myCustomTheme } from './theme';
import { skeleton } from '@skeletonlabs/tw-plugin';
import form from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 3. Append the path to the Skeleton package
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {}
	},

	plugins: [
		form,
		skeleton({
			themes: { custom: [myCustomTheme] }
		})
	]
};
