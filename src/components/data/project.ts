export interface Project {
	id: number;
	name: string;
	skills: string[];
	description: string;
	liveLink: string;
	githubLink: string; // Optional since you mentioned no-code projects
	image: string;
}
export const projects: Project[] = [
	{
		id: 1,
		name: 'Quizzical App',
		skills: ['ReactJS', 'TypeScript', 'Styled-Components', 'Rest API'],
		description:
			'Interactive quiz application built with React and TypeScript featuring dynamic question rendering from REST API integration. Includes real-time score calculation, user feedback system, and progress tracking with a polished responsive interface deployed on Vercel.',
		liveLink: 'https://quizzical-ts.vercel.app/',
		githubLink: 'https://github.com/Fayorr/Quizzical',
		image: '/images/projectImages/quizzical.png',
	},
	{
		id: 2,
		name: 'Wave Music Player',
		skills: ['ReactJS', 'SCSS', 'JavaScript', 'E-commerce'],
		description:
			'Responsive music player web application built with React featuring seamless audio playback controls including play/pause, track navigation, volume adjustment, and progress tracking. Modern SCSS-styled interface with smooth user experience and deployed on Vercel.',
		liveLink: 'https://wave-music-player-ten.vercel.app/',
		githubLink: 'https://github.com/Fayorr/wave-music-player',
		image: '/images/projectImages/waveMusicPlayer.png',
	},
	{
		id: 3,
		name: 'Capture Portfolio',
		skills: ['ReactJS', 'Styled-Components', 'React Router', 'Motion'],
		description:
			'Modern multi-page portfolio website built with React and React Router featuring smooth Motion animations and interactive elements. Responsive design with Styled Components, seamless page transitions, hover effects, and scroll animations to showcase creative work across all devices.',
		liveLink: 'https://capture-portfolio.vercel.app/',
		githubLink: 'https://github.com/Fayorr/capture-portfolio',
		image: '/images/projectImages/capturePortfolio.png',
	},
];
