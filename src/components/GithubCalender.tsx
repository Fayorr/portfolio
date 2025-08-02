import React, { useState } from 'react';

import GitHubCalendar from 'react-github-calendar';
import YearButton from './YearButton';

const years: number[] = [2025, 2024, 2023, 2022];

export default function GithubCalender() {
	const [year, setYear] = useState(2025);
	return (
		<div className='w-full h-full flex justify-around items-center bg-[#0f172a]'>
			<GitHubCalendar
				username='Fayorr'
				year={year}
			/>
			<div className='flex flex-col justify-center items-center gap-2'>
				{years.map((yearValue: number, index: number) => (
					<div
						key={index}
						onClick={() => setYear(yearValue)}
						className='cursor-pointer flex flex-row  md:flex-col justify-center items-center'
					>
						<YearButton year={yearValue} currentYear={year} />
					</div>
				))}
			</div>
		</div>
	);
}
