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
		name: 'Blog API',
		skills: ['NodeJS', 'Express', 'MongoDB', 'Rest API'],
		description:
			'Blog API built with Node.js and Express.js featuring user authentication, blog post management, and RESTful API endpoints. Includes MongoDB integration for data storage and deployment on Render.',
		liveLink: 'https://blog-api-nine-liart.vercel.app/',
		githubLink: 'https://github.com/Fayorr/blog-api',
		image: '/images/projectImages/Blogify.png',
	},
	{
		id: 2,
		name: 'Taskflow App',
		skills: ['ReactJS', 'TypeScript', 'NodeJS', 'Express', 'MongoDB', 'Rest API'],
		description:
			'Blog API built with Node.js and Express.js featuring user authentication, blog post management, and RESTful API endpoints. Includes MongoDB integration for data storage and deployment on Render.',
		liveLink: 'https://my-todo-frontend-l8n8.onrender.com/',
		githubLink: 'https://github.com/Fayorr/todo-app',
		image: '/images/projectImages/taskify.png',
	},
	{
		id: 3,
		name: 'Quizzical App',
		skills: ['ReactJS', 'TypeScript', 'Styled-Components', 'Rest API'],
		description:
			'Interactive quiz application built with React and TypeScript featuring dynamic question rendering from REST API integration. Includes real-time score calculation, user feedback system, and progress tracking with a polished responsive interface deployed on Vercel.',
		liveLink: 'https://quizzical-ts.vercel.app/',
		githubLink: 'https://github.com/Fayorr/Quizzical',
		image: '/images/projectImages/quizzical.png',
	},
	{
		id: 4,
		name: 'Wave Music Player',
		skills: ['ReactJS', 'SCSS', 'JavaScript', 'E-commerce'],
		description:
			'Responsive music player web application built with React featuring seamless audio playback controls including play/pause, track navigation, volume adjustment, and progress tracking. Modern SCSS-styled interface with smooth user experience and deployed on Vercel.',
		liveLink: 'https://wave-music-player-ten.vercel.app/',
		githubLink: 'https://github.com/Fayorr/wave-music-player',
		image: '/images/projectImages/waveMusicPlayer.png',
	},
	{
		id: 5,
		name: 'Capture Portfolio',
		skills: ['ReactJS', 'Styled-Components', 'React Router', 'Motion'],
		description:
			'Modern multi-page portfolio website built with React and React Router featuring smooth Motion animations and interactive elements. Responsive design with Styled Components, seamless page transitions, hover effects, and scroll animations to showcase creative work across all devices.',
		liveLink: 'https://capture-portfolio.vercel.app/',
		githubLink: 'https://github.com/Fayorr/capture-portfolio',
		image: '/images/projectImages/capturePortfolio.png',
	},
];
