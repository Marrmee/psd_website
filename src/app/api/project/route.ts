import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(req) {

  sgMail.setApiKey(process.env.SENDGRID_API_KEY ?? "");

  try {
    const body = await req.json();
    console.log("body", body);
    const { txId, title, description, strategy, country, address, funds } = body;
    const send = await sgMail.send({
      from: "marco@poscidon.com",
      to: "marco@poscidon.com",
      subject: `You got a new project submission`,
      text: `
      A project with the following transaction id: ${txId} 
      has been submitted through the poscidon website.
      Project title: ${title}
      Project description: ${description}
      Go to market strategy: ${strategy}
      Research country: ${country}
      Ethereum address: ${address}
      Suggested funding amount: $${funds} 
      `
    });
    return NextResponse.json(send);
  } catch (error) {
    // console.log(error);
    return NextResponse.json({error})
  }

}