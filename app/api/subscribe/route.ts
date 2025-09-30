import { NextResponse } from "next/server";
import mailchimp from "@mailchimp/mailchimp_marketing";


mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY as string,
  server: process.env.MAILCHIMP_SERVER_PREFIX as string, // should be "us11"
});

export async function POST(req: Request) {
  try {
    const { email, phone } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const listId = process.env.MAILCHIMP_AUDIENCE_ID as string;

    const response = await mailchimp.lists.addListMember(listId, {
      email_address: email,
      status: "subscribed",
      merge_fields: { PHONE: phone || "" },
    });

    return NextResponse.json({ success: true, response });
  } catch (error: any) {
  console.error("Mailchimp API error:", error);  // ⬅️ Add this line

  return NextResponse.json(
    { error: error.message || "Something went wrong" },
    { status: 500 }
  );
}

}
