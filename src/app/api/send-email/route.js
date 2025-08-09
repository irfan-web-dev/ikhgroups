import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, subject, message, phone, formType } =
    await request.json();

  // Configure transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Both emails should always receive the message
  const recipients = ["info@ikhgroups.com", "sales@ikhgroups.com"];

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: recipients, // Send to both emails
    subject:
      formType === "career"
        ? `Career Inquiry: ${subject}`
        : `Contact Form: ${subject}`,
    text: `
      ${formType === "career" ? "CAREER APPLICATION\n" : "CONTACT FORM\n"}
      Name: ${name}
      Email: ${email}
      ${phone ? `Phone: ${phone}\n` : ""}
      Subject: ${subject}
      Message: ${message}
    `,
    html: `
      <h1>${formType === "career" ? "Career Application" : "Contact Form"}</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, "<br>")}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
