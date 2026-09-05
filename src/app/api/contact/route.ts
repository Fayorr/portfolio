import { NextResponse } from 'next/server';

const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const { name, email, projectType, message, website } = body as Record<string, string>;
		if (website) return NextResponse.json({ ok: true });
		if (!name?.trim() || !EMAIL_PATTERN.test(email || '') || !projectType?.trim() || !message?.trim() || message.trim().length < 20) {
			return NextResponse.json({ error: 'Please complete every field with valid information.' }, { status: 400 });
		}

		const apiKey = process.env.RESEND_API_KEY;
		if (!apiKey) {
			const subject = encodeURIComponent(`${projectType} enquiry from ${name}`);
			const bodyText = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`);
			return NextResponse.json({ ok: true, fallbackMailto: `mailto:fayokunmiosho@gmail.com?subject=${subject}&body=${bodyText}` });
		}

		const response = await fetch('https://api.resend.com/emails', {
			method: 'POST',
			headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
			body: JSON.stringify({
				from: process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
				to: ['fayokunmiosho@gmail.com'],
				reply_to: email,
				subject: `${projectType} enquiry from ${name}`,
				text: `Name: ${name}\nEmail: ${email}\nProject type: ${projectType}\n\n${message}`,
			}),
		});
		if (!response.ok) throw new Error('Email provider rejected the request');
		return NextResponse.json({ ok: true });
	} catch {
		return NextResponse.json({ error: 'Unable to send your message right now.' }, { status: 500 });
	}
}
