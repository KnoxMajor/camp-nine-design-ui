import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	renderers: [react()],
	integrations: [
		react(),
		starlight({
			title: 'Camp Nine Design Ui',
			social: {
				// github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What the heck is this', link: '/getting_started/introduction/' },
					],
				},
				{
					label: 'Components',
					items: [
						{
							label: 'clerk.com',
							items: [
								// Each item here is one entry in the navigation menu.
								{ label: '1 time code', link: '/components/clerk/one_time_code/' },
							],
						}
					]
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
		}),
	],
});
