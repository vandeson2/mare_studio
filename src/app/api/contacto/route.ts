import { Resend } from 'resend'

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return Response.json(
      { error: 'Servicio de email no configurado' },
      { status: 503 },
    )
  }

  const { nombre, empresa, telefono, email, mensaje, website } = await req.json()

  if (website) return Response.json({ ok: true })
  if (!nombre || !telefono || !email || !mensaje) {
    return Response.json({ error: 'Faltan campos obligatorios' }, { status: 400 })
  }

  const resend = new Resend(apiKey)

  try {
    await resend.emails.send({
      from: 'Maré Studio <onboarding@resend.dev>',
      to: 'info@maréstudio.es',
      replyTo: email,
      subject: 'Nuevo contacto desde la web',
      html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Empresa:</strong> ${empresa || '-'}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    })
    return Response.json({ ok: true })
  } catch {
    return Response.json({ error: 'Error enviando email' }, { status: 500 })
  }
}
