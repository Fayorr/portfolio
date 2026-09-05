import type { Metadata } from 'next';
import { Montserrat, Open_Sans, Roboto } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { SiteEffects } from '@/components/SiteEffects';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
});
const openSans = Open_Sans({
	variable: '--font-open-sans',
	subsets: ['latin'],
});
const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		default: 'Fayokunmi Osho — Software Engineer',
		template: '%s — Fayokunmi Osho',
	},
	description:
		'Full-stack software engineer building dependable interfaces, APIs, and digital products with React, TypeScript, Node.js, and Go.',
	openGraph: {
		title: 'Fayokunmi Osho — Software Engineer',
		description:
			'Full-stack software engineer building dependable interfaces, APIs, and digital products.',
		url: 'https://www.fayokunmiosho.com',
		siteName: 'Fayokunmi Osho Portfolio',
		images: [
			{
				url: 'https://www.fayokunmiosho.com/og-image.png',
				width: 1200,
				height: 630,
				alt: 'Fayokunmi Osho - Frontend Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Fayokunmi Osho — Software Engineer',
		description:
			'Full-stack software engineer building dependable interfaces, APIs, and digital products.',
		images: ['https://www.fayokunmiosho.com/og-image.png'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning
		>
			<body className={`${montserrat.variable} ${openSans.variable} ${roboto.variable} antialiased`}>
				<ThemeProvider
					attribute='class'
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<SiteEffects />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
