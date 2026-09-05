import type { Metadata } from 'next';
import { ProjectsGrid } from '@/components/ProjectsGrid';

export const metadata: Metadata = {
	title: 'Projects',
	description: 'Selected frontend, backend, full-stack, and Go projects by Fayokunmi Osho.',
};

export default function ProjectsPage() {
	return (
		<main className='site-shell page-main'>
			<header className='page-hero'>
				<p className='section-index'>02 / PROJECT ARCHIVE</p>
				<h1>Selected work, <span>with the thinking included.</span></h1>
				<p>From event ticketing and publishing platforms to playful interface studies. Filter by discipline or technology, then open any project for the decisions behind the build.</p>
			</header>
			<ProjectsGrid />
		</main>
	);
}
