import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, empresa, email, pais, comentario } = body;

    // Basic validation
    if (!nombre || !empresa || !email || !pais) {
      return NextResponse.json(
        { message: "Rellene todos los campos" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "El email ingresado no es válido." },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const htmlBody = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #7c3aed, #6d28d9); padding: 32px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 24px; }
            .header p { color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px; }
            .body { padding: 32px; }
            .field { margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 20px; }
            .field:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
            .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #7c3aed; margin-bottom: 4px; }
            .value { font-size: 16px; color: #1a1a2e; font-weight: 500; }
            .footer { background: #f8f5ff; padding: 20px 32px; text-align: center; font-size: 12px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nueva solicitud de demo</h1>
              <p>Recibiste una nueva consulta a través del formulario de Dodilix</p>
            </div>
            <div class="body">
              <div class="field">
                <div class="label">Nombre y apellido</div>
                <div class="value">${nombre}</div>
              </div>
              <div class="field">
                <div class="label">Empresa</div>
                <div class="value">${empresa}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #7c3aed;">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">País</div>
                <div class="value">${pais}</div>
              </div>
              ${
                comentario
                  ? `<div class="field">
                <div class="label">Comentario</div>
                <div class="value">${comentario}</div>
              </div>`
                  : ""
              }
            </div>
            <div class="footer">
              Dodilix – Soluciones inteligentes para la gestión de siniestros<br/>
              Este email fue generado automáticamente desde el formulario de contacto.
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: `"Dodilix Web" <${process.env.GMAIL_USER}>`,
      to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER,
      subject: `Nueva solicitud de demo – ${nombre} (${empresa})`,
      html: htmlBody,
      replyTo: email,
    });

    return NextResponse.json({ message: "Enviado correctamente" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error interno. Por favor intentá nuevamente." },
      { status: 500 }
    );
  }
}
