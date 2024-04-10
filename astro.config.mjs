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
				github: 'https://github.com/KnoxMajor',
				linkedin: 'https://www.linkedin.com/in/knoxmajor/',
				'x.com': 'https://x.com/Knoxmajor_',
			},
			sidebar: [
				{
					label: 'Getting Started',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'What is Camp Nine Design Ui', link: '/getting_started/introduction/' },
						{ label: 'Contact', link: '/getting_started/contact/' },
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
								{ label: 'Passwords', link: '/components/clerk/passwords/' },
							],
						}
					]
				},
				// {
				// 	label: 'Reference',
				// 	autogenerate: { directory: 'reference' },
				// },
			],
			head: [
				// Convert the Google Analytics gtag.js script
				{
					tag: 'script',
					attrs: {
						src: 'https://www.googletagmanager.com/gtag/js?id=G-YPB5R6KRWV',
						async: true,
					},
				},
				// Convert the Google Analytics configuration script
				{
					tag: 'script',
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-YPB5R6KRWV');
					`,
				},
			],
		}),
	],
});
