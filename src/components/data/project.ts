export type Project = {
	id: number;
	slug: string;
	name: string;
	kicker: string;
	year: string;
	role: string;
	skills: string[];
	filters: string[];
	summary: string;
	description: string;
	challenge: string;
	solution: string;
	outcome: string;
	highlights: string[];
	liveLink?: string;
	githubLink: string;
	image: string;
	featured?: boolean;
};

export const projects: Project[] = [
	{
		id: 1,
		slug: 'eventful',
		name: 'Eventful',
		kicker: 'Full-stack ticketing platform',
		year: '2026',
		role: 'Full-stack engineer',
		skills: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Redis', 'Paystack'],
		filters: ['Full stack', 'Frontend', 'Backend', 'React', 'TypeScript', 'Node.js', 'MongoDB'],
		summary: 'A complete event marketplace for discovering experiences, selling tickets, and running the door—all from one product.',
		description: 'Eventful connects attendees and creators in a single ticketing workflow. Attendees can discover events, make secure payments, and receive unique QR-code tickets, while creators get a live dashboard for revenue, sales, and attendance.',
		challenge: 'Ticketing spans several failure-prone moments: payment confirmation, one-time ticket issuance, email delivery, and rapid validation at the venue. The product needed to keep those moments connected without making the interface feel operationally heavy.',
		solution: 'I separated the React customer experience from a TypeScript/Express API, then modelled events, payments, and tickets as distinct modules. Paystack handles payment, unique QR codes provide admission, BullMQ and Redis move email reminders off the request path, and rate limiting plus JWT authentication protect sensitive actions.',
		outcome: 'The result is a robust capstone product with a practical end-to-end journey for both sides of an event: browse, buy, receive, scan, and measure.',
		highlights: ['Paystack payment verification', 'Automated QR-code ticket generation', 'Creator revenue and attendance analytics', 'Queued email reminders with BullMQ and Redis'],
		liveLink: 'https://eventful-ecru.vercel.app',
		githubLink: 'https://github.com/Fayorr/eventful-web',
		image: '/images/projectImages/eventful.png',
		featured: true,
	},
	{
		id: 2,
		slug: 'taskflow',
		name: 'Taskflow',
		kicker: 'Private task management',
		year: '2026',
		role: 'Full-stack engineer',
		skills: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'JWT'],
		filters: ['Full stack', 'Frontend', 'Backend', 'React', 'TypeScript', 'Node.js', 'MongoDB'],
		summary: 'A secure personal task manager with authentication, full CRUD workflows, and completion tracking.',
		description: 'Taskflow gives every account a private workspace for creating, editing, completing, and deleting tasks. The React and TypeScript interface is backed by a Node.js, Express, and MongoDB API with JWT-based sessions.',
		challenge: 'Deploying the frontend and backend from a monorepo introduced cross-origin cookie issues: the browser treated the two services as separate security boundaries, so authenticated requests were unreliable.',
		solution: 'I revised the cookie and CORS configuration and introduced a reverse-proxy rewrite so the browser could interact with both halves of the application through one origin. This preserved secure authentication without compromising the user flow.',
		outcome: 'A deployed full-stack app with private per-user data and a reliable authentication boundary—plus a clearer understanding of how browser, proxy, and server security concerns intersect.',
		highlights: ['Private user workspaces', 'JWT authentication', 'Create, edit, complete, and delete tasks', 'Reverse-proxy deployment architecture'],
		liveLink: 'https://my-todo-frontend-l8n8.onrender.com/',
		githubLink: 'https://github.com/Fayorr/todo-app',
		image: '/images/projectImages/taskify.png',
		featured: true,
	},
	{
		id: 3,
		slug: 'blog-api',
		name: 'Blog API',
		kicker: 'Content platform API',
		year: '2026',
		role: 'Backend engineer',
		skills: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Jest', 'EJS'],
		filters: ['Backend', 'Node.js', 'MongoDB'],
		summary: 'A features-focused publishing API with ownership rules, draft workflows, reading analytics, and a responsive EJS interface.',
		description: 'This REST API supports the full publishing lifecycle: sign-up and sign-in, draft and published posts, ownership-protected editing, automatic reading-time calculation, read counts, pagination, filtering, sorting, and public or private views.',
		challenge: 'A useful blogging backend needs more than CRUD. Public discovery and private author workflows have different access rules, and the API still needs predictable querying as the content collection grows.',
		solution: 'I modelled explicit draft/published states, protected author-owned mutations with JWT authentication, and added pagination, filter, and sort parameters. Jest and Supertest integration tests exercise the HTTP boundary, while EJS views make the service usable without a separate client.',
		outcome: 'A deployed API that demonstrates product-aware backend design: authorization, content state, derived metrics, query ergonomics, and testability all work together.',
		highlights: ['Draft and published states', 'Owner-protected mutations', 'Pagination, filtering, and sorting', 'Jest/Supertest integration coverage'],
		liveLink: 'https://blog-api-nine-liart.vercel.app/',
		githubLink: 'https://github.com/Fayorr/blog-api',
		image: '/images/projectImages/Blogify.png',
		featured: true,
	},
	{
		id: 4,
		slug: 'greenlight-api',
		name: 'Greenlight API',
		kicker: 'Go HTTP service',
		year: '2026',
		role: 'Backend engineer',
		skills: ['Go', 'REST API', 'Middleware', 'JSON'],
		filters: ['Backend', 'Go'],
		summary: 'A compact, idiomatic Go API for working through production-minded HTTP routing, middleware, and data modelling.',
		description: 'Greenlight is a Go service organised around a clear cmd/internal boundary. It exposes movie resources and a health check while keeping routing, request helpers, error responses, middleware, and data types deliberately separated.',
		challenge: 'The goal was to build a small HTTP service without hiding the important mechanics behind a large framework, while keeping the codebase easy to extend.',
		solution: 'I used Go’s standard server model with focused packages for API delivery and domain data. Common response and parsing behaviour lives in helpers and middleware, leaving handlers small and explicit.',
		outcome: 'A lean foundation for deeper Go backend work, with clean boundaries and the core HTTP lifecycle visible in the code.',
		highlights: ['Idiomatic Go project structure', 'Composable middleware', 'Centralised error responses', 'Explicit API routing'],
		githubLink: 'https://github.com/Fayorr/greenlight-api',
		image: '/images/projectImages/og-image.png',
	},
	{
		id: 5,
		slug: 'quizzical',
		name: 'Quizzical',
		kicker: 'Interactive trivia experience',
		year: '2025',
		role: 'Frontend engineer',
		skills: ['React', 'TypeScript', 'Vite', 'Styled Components', 'REST API'],
		filters: ['Frontend', 'React', 'TypeScript'],
		summary: 'A responsive trivia app that turns remote question data into a focused, immediate feedback loop.',
		description: 'Quizzical fetches and renders trivia questions, safely decodes external content, tracks a player’s selected answers, and calculates the score at the end of each round.',
		challenge: 'Remote quiz data arrives with encoded characters and shuffled answers, while the interface must preserve a user’s selections and make the final correct/incorrect state instantly legible.',
		solution: 'I created typed question and answer state in React, normalised API content before rendering, and built clear selection and result states with Styled Components.',
		outcome: 'A fast, compact frontend project that shows careful state modelling, API integration, and feedback design.',
		highlights: ['Typed UI state', 'REST API integration', 'Real-time score calculation', 'Responsive answer feedback'],
		liveLink: 'https://quizzical-ts.vercel.app/',
		githubLink: 'https://github.com/Fayorr/Quizzical',
		image: '/images/projectImages/quizzical.png',
	},
	{
		id: 6,
		slug: 'capture-portfolio',
		name: 'Capture Portfolio',
		kicker: 'Motion-led creative portfolio',
		year: '2024',
		role: 'Frontend engineer',
		skills: ['React', 'Motion', 'React Router', 'Styled Components'],
		filters: ['Frontend', 'React'],
		summary: 'A multi-page creative portfolio exploring expressive transitions without sacrificing navigation clarity.',
		description: 'Capture is a responsive React portfolio built to explore route transitions, scroll-triggered reveals, and image-led storytelling across multiple pages.',
		challenge: 'Animation can quickly become decoration that slows people down. The core challenge was to make movement support hierarchy and orientation across route changes.',
		solution: 'I paired React Router with Motion and intersection observers, using reusable variants for entrances and exits and Styled Components for scoped, responsive layouts.',
		outcome: 'A cohesive study in purposeful frontend motion and reusable animation patterns that now informs the motion system in this portfolio.',
		highlights: ['Route-level page transitions', 'Scroll-triggered reveals', 'Reusable animation variants', 'Responsive image layouts'],
		liveLink: 'https://capture-portfolio.vercel.app/',
		githubLink: 'https://github.com/Fayorr/capture-portfolio',
		image: '/images/projectImages/capturePortfolio.png',
	},
	{
		id: 7,
		slug: 'wave-music-player',
		name: 'Wave Music Player',
		kicker: 'Browser audio interface',
		year: '2024',
		role: 'Frontend engineer',
		skills: ['React', 'JavaScript', 'Sass', 'Web Audio'],
		filters: ['Frontend', 'React'],
		summary: 'A tactile browser music player with transport controls, track navigation, and synchronised progress.',
		description: 'Wave turns a compact audio library into a responsive player with play and pause, next and previous track controls, volume handling, and progress updates.',
		challenge: 'Audio interfaces have multiple pieces of state moving at once: the selected track, playback status, elapsed time, duration, and user-driven seeking all need to stay in sync.',
		solution: 'I coordinated React state with the browser audio element and built a focused Sass interface that keeps the primary transport controls prominent on any screen size.',
		outcome: 'A practical exploration of media APIs and synchronised interface state in React.',
		highlights: ['HTML audio integration', 'Track and volume controls', 'Synchronised progress UI', 'Responsive Sass design'],
		liveLink: 'https://wave-music-player-ten.vercel.app/',
		githubLink: 'https://github.com/Fayorr/wave-music-player',
		image: '/images/projectImages/waveMusicPlayer.png',
	},
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

export const projectFilters = ['All', 'Full stack', 'Frontend', 'Backend', 'React', 'TypeScript', 'Node.js', 'MongoDB', 'Go'];
