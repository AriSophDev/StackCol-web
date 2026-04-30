/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'fade-in': 'fade-in 1s ease-out forwards',
				'shimmer': 'shimmer 2s linear infinite',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(20px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'shimmer': {
					'100%': { transform: 'translateX(100%)' },
				}
			},
			backgroundImage: {
				'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
			}
		},
	},
	plugins: [],
}
