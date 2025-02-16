import { NextResponse } from 'next/server';
import sgMail from '@sendgrid/mail';

export async function POST(req) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? '');

  try {
    const body = await req.json();
    console.log('body', body);
    const {
      txId,
      title,
      stage,
      description,
      strategy,
      country,
      address,
      funds,
      name,
      email,
      phone,
      telegram,
      referralSource,
      referrerName,
      referrerEmail,
    } = body;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #333; padding-bottom: 10px;">New Project Submission</h2>
        
        <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <h3 style="color: #2c5282; margin-top: 0;">Transaction Details</h3>
          <p style="margin: 5px 0;"><strong>Transaction ID:</strong> ${txId}</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <h3 style="color: #2c5282; margin-top: 0;">Contact Information</h3>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 5px 0;"><strong>Telegram:</strong> ${telegram}</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <h3 style="color: #2c5282; margin-top: 0;">Referral Information</h3>
          <p style="margin: 5px 0;"><strong>Source:</strong> ${referralSource}</p>
          ${
            referralSource === 'reference'
              ? `
          <p style="margin: 5px 0;"><strong>Referrer Name:</strong> ${referrerName}</p>
          <p style="margin: 5px 0;"><strong>Referrer Email:</strong> ${referrerEmail}</p>
          `
              : ''
          }
        </div>

        <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <h3 style="color: #2c5282; margin-top: 0;">Project Details</h3>
          <p style="margin: 5px 0;"><strong>Title:</strong> ${title}</p>
          <p style="margin: 5px 0;"><strong>Stage:</strong> ${stage}</p>
          <p style="margin: 5px 0;"><strong>Country:</strong> ${country}</p>
          <p style="margin: 5px 0;"><strong>Funding Amount:</strong> $${funds}</p>
          <p style="margin: 5px 0;"><strong>Ethereum Address:</strong> ${address || 'Not provided'}</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <h3 style="color: #2c5282; margin-top: 0;">Project Description</h3>
          <p style="margin: 5px 0; white-space: pre-wrap;">${description}</p>
        </div>

        <div style="background-color: #f5f5f5; padding: 15px; margin: 20px 0; border-radius: 5px;">
          <h3 style="color: #2c5282; margin-top: 0;">Go to Market Strategy</h3>
          <p style="margin: 5px 0; white-space: pre-wrap;">${strategy}</p>
        </div>

        <div style="color: #666; font-size: 12px; margin-top: 30px; padding-top: 10px; border-top: 1px solid #eee;">
          <p>This is an automated email from the Poscidon Project Submission System.</p>
        </div>
      </div>
    `;

    const send = await sgMail.sendMultiple({
      from: 'marco@poscidon.com',
      to: ['hello@poscidon.com', 'ayat@poscidon.com', 'marco@poscidon.com'],
      subject: `New Project Submission: ${title}`,
      html: emailHtml,
      text: `New project submission received from ${name}. Transaction ID: ${txId}`, // Fallback plain text version
    });
    return NextResponse.json(send);
  } catch (error) {
    // console.log(error);
    return NextResponse.json({ error });
  }
}
