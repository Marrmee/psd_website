import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(req) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

  try {
    const { email, name } = await req.json();

    const send = await sgMail.send({
      from: 'marco@poscidon.com',
      to: email,
      subject: `Welcome onboard ${name} 🔱!`,
      templateId: 'd-a3c611c0c56a45ce8648c3cfc341519d',
    });

    return NextResponse.json({ success: true, send: send });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' });
  }
}
