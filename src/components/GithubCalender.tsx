import React, { useState } from 'react';

import GitHubCalendar from 'react-github-calendar';
import YearButton from './YearButton';

const years: number[] = [2025, 2024, 2023, 2022];

export default function GithubCalender() {
	const [year, setYear] = useState(2025);
	return (
		<div className='px-8 md:px-20 w-full h-full flex flex-col md:flex-row justify-between md:items-center dark:bg-[#0f172a] gap-4 md:gap-0'>
			<div className='border border-slate-600  p-8 rounded-2xl'>
				<GitHubCalendar
					username='Fayorr'
					year={year}
					colorScheme='light'
					fontSize={15}
					blockSize={13}
				/>
			</div>
			<div className=' flex md:flex-col flex-row justify-start md:justify-between  items-center gap-4 '>
				{years.map((yearValue: number, index: number) => (
					<div
						key={index}
						onClick={() => setYear(yearValue)}
						className='cursor-pointer flex flex-row  md:flex-col justify-center items-center'
					>
						<YearButton
							year={yearValue}
							currentYear={year}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
