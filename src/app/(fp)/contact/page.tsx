'use client';

import { ArrowUpRight, CheckCircle2, Loader2, Mail } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

type ContactFields = { name: string; email: string; projectType: string; message: string; website: string };

export default function ContactPage() {
	const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
	const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFields>();

	const onSubmit = async (values: ContactFields) => {
		setStatus('sending');
		try {
			const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(values) });
			const data = await response.json();
			if (!response.ok) throw new Error(data.error || 'Unable to send message');
			if (data.fallbackMailto) window.location.href = data.fallbackMailto;
			setStatus('sent');
			reset();
		} catch {
			setStatus('error');
		}
	};

	return (
		<main className='site-shell page-main contact-page'>
			<div className='contact-intro'>
				<p className='section-index'>06 / CONTACT</p>
				<h1>Let&apos;s make something <span>worth using.</span></h1>
				<p>Tell me what you&apos;re building, where you are in the process, and what a useful outcome looks like. I&apos;ll reply with clear next steps.</p>
				<a href='mailto:fayokunmiosho@gmail.com' className='contact-email'><Mail size={18} /> fayokunmiosho@gmail.com <ArrowUpRight size={17} /></a>
				<div className='availability-card'><span className='status-dot' /><div><strong>Currently available</strong><p>For selected freelance and product collaborations.</p></div></div>
			</div>

			<form className='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className='form-field'>
					<label htmlFor='name'>Your name</label>
					<input id='name' placeholder='Ada Lovelace' aria-invalid={!!errors.name} {...register('name', { required: 'Please tell me your name.' })} />
					{errors.name && <span className='field-error'>{errors.name.message}</span>}
				</div>
				<div className='form-field'>
					<label htmlFor='email'>Email address</label>
					<input id='email' type='email' placeholder='ada@company.com' aria-invalid={!!errors.email} {...register('email', { required: 'Please enter your email.', pattern: { value: /^\S+@\S+\.\S+$/, message: 'Enter a valid email address.' } })} />
					{errors.email && <span className='field-error'>{errors.email.message}</span>}
				</div>
				<div className='form-field full-field'>
					<label htmlFor='projectType'>What are we building?</label>
					<select id='projectType' defaultValue='' {...register('projectType', { required: 'Choose the closest project type.' })}>
						<option value='' disabled>Select a project type</option><option>Product or web app</option><option>Frontend engineering</option><option>Backend or API</option><option>Website</option><option>Something else</option>
					</select>
					{errors.projectType && <span className='field-error'>{errors.projectType.message}</span>}
				</div>
				<div className='form-field full-field'>
					<label htmlFor='message'>A little context</label>
					<textarea id='message' rows={6} placeholder='The product, the challenge, your timeline…' aria-invalid={!!errors.message} {...register('message', { required: 'Share a little about the project.', minLength: { value: 20, message: 'A few more details will help me respond well.' } })} />
					{errors.message && <span className='field-error'>{errors.message.message}</span>}
				</div>
				<input className='honeypot' tabIndex={-1} autoComplete='off' aria-hidden='true' {...register('website')} />
				<div className='form-submit full-field'>
					<button type='submit' className='button button-primary' disabled={status === 'sending'}>{status === 'sending' ? <><Loader2 className='spin' size={18} /> Sending</> : <>Send enquiry <ArrowUpRight size={17} /></>}</button>
					<p role='status'>{status === 'sent' && <><CheckCircle2 size={17} /> Your message is ready—thanks, I&apos;ll be in touch.</>}{status === 'error' && 'Something went wrong. Please email me directly instead.'}</p>
				</div>
			</form>
		</main>
	);
}
