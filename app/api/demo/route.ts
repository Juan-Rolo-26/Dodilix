import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nombre, empresa, email, pais, comentario } = body;

    if (!nombre || !empresa || !email || !pais) {
      return NextResponse.json(
        { message: "Rellene todos los campos" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: "El email ingresado no es válido." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const fecha = new Date().toLocaleString("es-AR", {
      timeZone: "America/Argentina/Buenos_Aires",
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Email 1: Confirmación al usuario que llenó el formulario
    const confirmacionHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #7c3aed, #6d28d9); padding: 36px 32px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 22px; font-weight: 700; }
            .body { padding: 36px 32px; }
            .body p { color: #333; font-size: 16px; line-height: 1.7; margin: 0 0 16px; }
            .footer { background: #f8f5ff; padding: 20px 32px; text-align: center; font-size: 12px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Solicitud de demo recibida – Dodilix</h1>
            </div>
            <div class="body">
              <p>Hola ${nombre},</p>
              <p>Gracias por tu interés en Dodilix.</p>
              <p>Recibimos tu solicitud de demo y en breve nos pondremos en contacto para coordinar una presentación enfocada en tu proceso de gestión de siniestros.</p>
              <p>Saludos,<br/>Equipo Dodilix 👋</p>
            </div>
            <div class="footer">
              Dodilix – Soluciones inteligentes para la gestión de siniestros
            </div>
          </div>
        </body>
      </html>
    `;

    // Email 2: Notificación interna a Dodilix
    const notificacionHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; background: #f5f5f5; margin: 0; padding: 20px; }
            .container { max-width: 600px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1); }
            .header { background: linear-gradient(135deg, #7c3aed, #6d28d9); padding: 32px; text-align: center; }
            .header h1 { color: white; margin: 0; font-size: 22px; font-weight: 700; }
            .header p { color: rgba(255,255,255,0.8); margin: 8px 0 0; font-size: 14px; }
            .body { padding: 32px; }
            .field { margin-bottom: 20px; border-bottom: 1px solid #f0f0f0; padding-bottom: 20px; }
            .field:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
            .label { font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: #7c3aed; margin-bottom: 4px; }
            .value { font-size: 16px; color: #1a1a2e; font-weight: 500; }
            .accion { background: #f8f5ff; border-left: 3px solid #7c3aed; padding: 16px 20px; border-radius: 0 8px 8px 0; margin-top: 28px; }
            .accion p { margin: 0; font-size: 14px; color: #4b5563; line-height: 1.6; }
            .footer { background: #f8f5ff; padding: 20px 32px; text-align: center; font-size: 12px; color: #9ca3af; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nueva solicitud de demo recibida</h1>
              <p>Datos del contacto</p>
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
              <div class="field">
                <div class="label">Fecha</div>
                <div class="value">${fecha}</div>
              </div>
              ${comentario ? `
              <div class="field">
                <div class="label">Comentario</div>
                <div class="value">${comentario}</div>
              </div>` : ""}
              <div class="accion">
                <p><strong>Acción sugerida:</strong> Contactar al solicitante dentro de las próximas 24 horas y coordinar una demo personalizada.</p>
              </div>
            </div>
            <div class="footer">
              Dodilix – Este email fue generado automáticamente desde el formulario de contacto.
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar ambos emails en paralelo
    await Promise.all([
      transporter.sendMail({
        from: `"Dodilix" <${process.env.GMAIL_USER}>`,
        to: email,
        subject: "Solicitud de demo recibida – Dodilix",
        html: confirmacionHtml,
      }),
      transporter.sendMail({
        from: `"Dodilix Web" <${process.env.GMAIL_USER}>`,
        to: process.env.RECIPIENT_EMAIL || process.env.GMAIL_USER,
        subject: `🚀 Nueva solicitud de demo – ${empresa} – ${pais}`,
        html: notificacionHtml,
        replyTo: email,
      }),
    ]);

    return NextResponse.json({ message: "Enviado correctamente" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error interno. Por favor intentá nuevamente." },
      { status: 500 }
    );
  }
}
