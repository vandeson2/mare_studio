import { domainToASCII } from 'node:url'
import { Resend } from 'resend'

const DEFAULT_FROM = 'Maré Studio <onboarding@resend.dev>'

const DEFAULT_TO = 'info@xn--marstudio-d4a.es'

function emailForSending(address: string): string {
  const trimmed = address.trim()
  const at = trimmed.lastIndexOf('@')
  if (at <= 0) return DEFAULT_TO

  const local = trimmed.slice(0, at)
  const domain = trimmed.slice(at + 1).normalize('NFC')

  try {
    const ascii = `${local}@${domainToASCII(domain)}`
    if (!/[^\x00-\x7F]/.test(ascii)) return ascii
  } catch {
    /* fallback abajo */
  }

  return DEFAULT_TO
}

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

  const from = process.env.RESEND_FROM_EMAIL ?? DEFAULT_FROM
  const to = emailForSending(process.env.RESEND_TO_EMAIL ?? DEFAULT_TO)

  const resend = new Resend(apiKey)

  const { data, error: sendError } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: 'Nuevo contacto desde la web',
    html: `
      <h2>Nuevo mensaje</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Empresa:</strong> ${empresa || '-'}</p>
      <p><strong>Teléfono:</strong> ${telefono}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje.replace(/</g, '&lt;')}</p>
    `,
  })

  if (sendError) {
    console.error('[contacto] Resend:', sendError)
    return Response.json(
      { error: sendError.message ?? 'Error enviando email' },
      { status: 500 },
    )
  }

  if (!data?.id) {
    return Response.json({ error: 'Error enviando email' }, { status: 500 })
  }

  return Response.json({ ok: true })
}
