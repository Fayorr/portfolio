import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ParticleBackground } from '@/components/ui/ParticleBackground';

export default async function RSLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className='mx-auto w-full max-w-7xl'>
			<ParticleBackground />
			<Header />
			{/* Main Content */}
			<div>{children}</div>
			<Footer />
		</div>
	);
}
