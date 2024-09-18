import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(req) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

  try {
    const body = await req.json();
    console.log('body', body);
    const { email, name } = body;
    const send = await sgMail.sendMultiple({
      from: 'marco@poscidon.com',
      to: ['marco@poscidon.com', 'hello@poscidon.com'],
      subject: `You got a new lead`,
      text: `New lead with ${email}, from ${name}`,
    });

    return NextResponse.json(send);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
