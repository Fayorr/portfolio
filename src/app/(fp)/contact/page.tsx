'use client';
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

const Contact = () => {
	interface IFormInput {
		name: string;
		email: string;
		message: string;
	}
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInput>();

	const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);
	return (
		<div className='w-full flex flex-col md:flex-row items-center justify-center  px-8 pt-20 md:px-20  pb-20 md:py-35  font-[Montserrat] dark:bg-[#0f172a] m-0'>
			<div id='particles-js'></div>
			<div className='flex flex-col items-center md:items-start pt-13 md:pt-5  justify-center min-h-auto p-0  gap-8 md:gap-14 md:p-0 w-[100%] md:w-1/2 '>
				<div className='flex md:flex-row flex-col-reverse gap-0 '>
					<p className='flex justify-center items-center text-1xl font-bold text-orange-500'>
						______
					</p>
					<p className='text-black dark:text-white text-2xl md:text-2xl'>
						Contact
					</p>
				</div>
				<h2 className='flex flex-col justify-center md:justify-start items-center md:items-start text-4xl md:text-5xl font-bold text-black dark:text-white  w-[100%]'>
					Have a project? <span>Lets talk</span>
				</h2>
			</div>
			<div className='flex justify-center items-center w-[80vw] md:w-1/2  h-[auto] '>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className='flex flex-col grow pt-6 '
				>
					<label>Name</label>
					<input
						{...register('name', { required: true })}
						className='border-b-2 border-b-orange-500 dark:border-b-white '
					/>
					{errors.name && <span>This field is required</span>}
					<label className='pt-3'>Email</label>
					<input
						{...register('email')}
						className='border-b-2 border-b-orange-500 dark:border-b-white'
					/>
					{errors.email && <span>This field is required</span>}
					<label className='pt-3'>Message</label>
					<input
						{...register('message')}
						className='border-b-2 border-b-orange-500 dark:border-b-white'
					/>
					{errors.message && <span>This field is required</span>}
					<input
						type='submit'
						className='cursor-pointer rounded-none py-2 px-3 bg-orange-500 border-2 border-orange-500 text-black dark:text-white hover:bg-transparent md:self-start  mt-4 md:w-[]'
					/>
				</form>
			</div>
		</div>
	);
};

export default Contact;
