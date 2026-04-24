import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Here you would typically send an email using a service like Resend, SendGrid, etc.
    // For now, we'll simulate a successful submission and log the data.
    console.log('Contact Form Submission:', { name, email, subject, message });

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Contact Form Error:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
