'use client';

import { useTheme } from 'next-themes';
import { useState } from 'react';
import { GitHubCalendar } from 'react-github-calendar';
import { MotionReveal } from './MotionReveal';

const years = [2026, 2025, 2024, 2023, 2022];

export default function GithubCalender() {
	const [year, setYear] = useState(2026);
	const { resolvedTheme } = useTheme();

	return (
		<section className='site-shell github-section' aria-labelledby='github-heading'>
			<MotionReveal className='section-heading'>
				<div><p className='section-index'>04 / OPEN SOURCE</p><h2 id='github-heading'>Building in public.</h2></div>
				<p>My contribution graph is a record of consistent practice, experiments, and products moving forward one commit at a time.</p>
			</MotionReveal>
			<MotionReveal className='calendar-panel' delay={.08}>
				<div className='year-tabs' role='group' aria-label='Contribution year'>
					{years.map((value) => (
						<button key={value} onClick={() => setYear(value)} aria-pressed={value === year} className={value === year ? 'is-active' : ''}>{value}</button>
					))}
				</div>
				<div className='calendar-scroll'>
					<GitHubCalendar username='Fayorr' year={year} colorScheme={resolvedTheme === 'dark' ? 'dark' : 'light'} fontSize={14} blockSize={13} blockMargin={4} theme={{ light: ['#e6ebf2', '#c7d5ff', '#8fa8ff', '#5878ef', '#3155d9'], dark: ['#202a3a', '#35476c', '#526ba4', '#7892df', '#ffb31a'] }} />
				</div>
			</MotionReveal>
		</section>
	);
}
