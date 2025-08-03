import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default async function RSLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='mx-auto w-full max-w-7xl'>
			<Header />
			{/* Main Content */}
			<div>{children}</div>
			<Footer />
		</div>
	);
}
