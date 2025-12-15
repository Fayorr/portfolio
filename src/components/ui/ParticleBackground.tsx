'use client';
import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
	type Container,
	type ISourceOptions,
	MoveDirection,
	OutMode,
} from '@tsparticles/engine';
import { useTheme } from 'next-themes';
import { loadSlim } from '@tsparticles/slim';

export const ParticleBackground = () => {
	const [init, setInit] = useState(false);
	const [mounted, setMounted] = useState(false); // Add this
	const { resolvedTheme } = useTheme();

	// Wait for component to mount (client-side only)
	useEffect(() => {
		setMounted(true);
	}, []);

	// Initialize particles engine
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const particlesLoaded = async (container?: Container): Promise<void> => {
		console.log(container);
	};

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: {
					value: 'transparent',
				},
			},
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: 'push',
					},
					onHover: {
						enable: true,
						mode: 'repulse',
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: resolvedTheme === 'dark' ? '#ffffff' : '#000000',
				},
				links: {
					color: resolvedTheme === 'dark' ? '#ffffff' : '#000000',
					distance: 150,
					enable: true,
					opacity: 0.3,
					width: 1,
				},
				move: {
					direction: MoveDirection.none,
					enable: true,
					outModes: {
						default: OutMode.out,
					},
					random: false,
					speed: 2,
					straight: false,
				},
				number: {
					density: {
						enable: true,
					},
					value: 100,
				},
				opacity: {
					value: 0.25,
				},
				shape: {
					type: 'circle',
				},
				size: {
					value: { min: 0.5, max: 4 },
				},
			},
			detectRetina: true,
		}),
		[resolvedTheme]
	);

	// Don't render until both particles are initialized AND component is mounted
	if (!init || !mounted) {
		return <></>;
	}

	return (
		<Particles
			id='tsparticles'
			particlesLoaded={particlesLoaded}
			options={options}
		/>
	);
};
