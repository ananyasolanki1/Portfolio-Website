import { NextResponse } from "next/server"
import { Resend } from "resend"

// Check if API key exists, otherwise use a placeholder for development
const resendApiKey = process.env.RESEND_API_KEY || null
const resend = resendApiKey ? new Resend(resendApiKey) : null

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // If no API key is available, simulate success in development
    if (!resend) {
      console.log("Development mode: Email would be sent with the following data:", { name, email, message })
      return NextResponse.json(
        {
          success: true,
          message: "Email simulation successful (development mode)",
        },
        { status: 200 },
      )
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "ananya.solanki10@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}
Email: ${email}
Message: ${message}`,
    })

    if (error) {
      console.error("Resend API error:", error)
      return NextResponse.json({ error: "Failed to send email. Please try again later." }, { status: 500 })
    }

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error("Server error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
