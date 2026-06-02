'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

type Form = { nombre: string; empresa: string; telefono: string; email: string; mensaje: string; website: string}
const empty: Form = { nombre: '', empresa: '', telefono: '',email: '', mensaje: '', website: ''}

const autocompleteByField: Record<string, string> = {
  nombre: 'name',
  empresa: 'organization',
  telefono: 'tel',
  email: 'email',
}

export default function Contacto() {
  const [form, setForm]       = useState<Form>(empty)
  const [sending, setSending] = useState(false)
  const [sent, setSent]       = useState(false)
  const [error, setError]     = useState<string | null>(null)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  /** Chrome rellena el DOM pero a veces no dispara onChange en inputs controlados */
  const syncAutofill = (
    e: React.AnimationEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (e.animationName !== 'contact-field-autofill') return
    const { name, value } = e.currentTarget
    if (name in empty) {
      setForm(p => ({ ...p, [name]: value }))
    }
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setSending(true)

    try {
      const res = await fetch('/api/contacto', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = (await res.json().catch(() => ({}))) as { error?: string }

      if (res.ok) {
        setSent(true)
        setForm(empty)
      } else {
        setError(data.error ?? 'No se pudo enviar el mensaje. Inténtalo de nuevo.')
      }
    } catch {
      setError('Error de conexión. Comprueba tu red e inténtalo de nuevo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      id='contacto'
      aria-labelledby="contacto-heading"
      className="bg-brand-smoke"
      style={{
        paddingTop:    'clamp(6rem, 10vw, 10rem)',
        paddingBottom: 'clamp(6rem, 10vw, 10rem)',
      }}
    >
      <div
        className='max-w-content mx-auto'
        style={{
          paddingLeft:  'clamp(2rem, 6vw, 6rem)',
          paddingRight: 'clamp(2rem, 6vw, 6rem)',
        }}
      >

        <div
          style={{
            gridTemplateColumns: '0.9fr 1.15fr',
            gap:                 'clamp(4rem, 8vw, 10rem)',
            alignItems:          'start',
          }}
          className="block md:grid"
        >

          {/* Columna izquierda */}
          <div className="mb-14 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true,  margin: '-80px' }}
              transition={{ duration: 0.95, ease: [0.19, 1, 0.22, 1] }}
            >
              <p
                className="font-sans uppercase text-brand-cream/32"
                style={{ fontSize: '0.62rem', letterSpacing: '0.32em', marginBottom: '1.8rem' }}
              >
                Contacto
              </p>
              <h2
                id="contacto-heading"
                className="font-serif font-light tracking-[-0.035em] text-brand-cream"
                style={{ fontSize: 'clamp(2.9rem, 5vw, 5.5rem)', lineHeight: 0.92, marginBottom: 'clamp(3rem, 6vw, 6rem)' }}
              >
                Demos vida
                <br />
                <span className="text-brand-cream/32">a tu próximo proyecto.</span>
              </h2>

              <div className="flex flex-col gap-4">
                {[
                  ['tel:+34639628867', '639 628 867'],
                  ['tel:+34664817452', '664 817 452'],
                  ['mailto:info@maréstudio.es', 'info@maréstudio.es'],
                ].map(([href, label]) =>(
                  <a
                    key={href}
                    href={href}
                    className="font-sans text-brand-cream/58 hover:text-brand-cream transition-colors duration-500"
                    style={{ fontSize: '0.88rem', letterSpacing: '0.03em' }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Columna derecha — formulario */}
          <motion.div
            initial={{ opacity: 0, y: 18}}
            whileInView={{ opacity: 1, y: 0}}
            viewport={{ once: true,  margin: '-80px' }}
            transition={{ delay: 0.12, duration: 0.95,  ease: [0.19, 1, 0.22, 1] }}
            className="border-t border-brand-sand/18 pt-10"
          >
            {sent ? (
              <div style={{ paddingTop: '2rem' }}>
                <p
                  className="font-serif font-light text-brand-cream"
                  style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)', lineHeight: 1.15, marginBottom: '1.2rem' }}
                >
                  Gracias por escribirnos.
                </p>
                <p
                  className="font-sans text-brand-cream/50"
                  style={{ fontSize: '0.9rem', lineHeight: 1.85 }}
                >
                  Nos pondremos en contacto en las próximas horas.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                <input
                  type="text"
                  name="website"
                  value={form.website}
                  onChange={handle}
                  tabIndex={-1}
                  autoComplete="off"
                  style={{display: 'none'}}
                />
                
                {[
                  { id: 'nombre',   label: 'Nombre',              type: 'text',  placeholder: 'Tu nombre',               required: true  },
                  { id: 'empresa',  label: 'Empresa / Promotora', type: 'text',  placeholder: 'Empresa o particular',    required: true  },
                  { id: 'telefono', label: 'Teléfono',            type: 'tel',   placeholder: '600 000 000',             required: true  },
                  { id: 'email',    label: 'Email',               type: 'email', placeholder: 'su@email.com',            required: true},
                ].map(f => (
                  <div key={f.id} className='flex flex-col gap-2'>
                    <label
                      htmlFor={f.id}
                      className="font-sans uppercase text-brand-cream/30"
                      style={{ fontSize: '0.6rem', letterSpacing: '0.26em' }}
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      autoComplete={autocompleteByField[f.id]}
                      value={form[f.id as keyof Form]}
                      onChange={handle}
                      onAnimationStart={syncAutofill}
                      className="contact-field"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="mensaje"
                    className="font-sans uppercase text-brand-cream/30"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.26em'}}
                  >
                    Proyecto
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    required
                    autoComplete="off"
                    placeholder="Cuéntenos brevemente su proyecto..."
                    value={form.mensaje}
                    onChange={handle}
                    onAnimationStart={syncAutofill}
                    className="contact-field resize-none leading-[1.7]"
                  />
                </div>

                {error && (
                  <p
                    role="alert"
                    className="font-sans text-red-300/90"
                    style={{ fontSize: '0.85rem', lineHeight: 1.6 }}
                  >
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="outlineLight"
                  disabled={sending}
                  className="mt-2"
                >
                  {sending ? 'ENVIANDO...' : 'ENVIAR MENSAJE'}
                </Button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
