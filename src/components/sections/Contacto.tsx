'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

type Form = { nombre: string; empresa: string; telefono: string; mensaje: string }
const empty: Form = { nombre: '', empresa: '', telefono: '', mensaje: '' }

const inputStyle = {
  background:  'transparent',
  border:      'none',
  borderBottom: '1px solid rgba(247,243,238,0.14)',
  paddingBottom: '1rem',
  paddingTop:  '0.25rem',
  width:       '100%',
  fontFamily:  'var(--font-inter), system-ui, sans-serif',
  fontSize:    '0.9rem',
  color:       '#F7F3EE',
  outline:     'none',
  transition:  'border-color 0.4s',
}

export default function Contacto() {
  const [form, setForm]     = useState<Form>(empty)
  const [sending, setSending] = useState(false)
  const [sent, setSent]     = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    await new Promise(r => setTimeout(r, 1200))
    setSent(true)
    setSending(false)
  }

  return (
    <section
      aria-labelledby="contacto-heading"
      className="bg-brand-smoke"
      style={{
        paddingTop:    'clamp(7rem, 14vw, 13rem)',
        paddingBottom: 'clamp(7rem, 14vw, 13rem)',
      }}
    >
      <div
        style={{
          paddingLeft:  'clamp(2rem, 6vw, 6rem)',
          paddingRight: 'clamp(2rem, 6vw, 6rem)',
        }}
      >

        <div
          style={{
            display:             'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap:                 'clamp(4rem, 8vw, 10rem)',
            alignItems:          'start',
          }}
          className="block md:grid"
        >

          {/* Columna izquierda */}
          <div className="mb-14 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.19, 1, 0.22, 1] }}
            >
              <p
                className="font-sans uppercase text-brand-cream/28"
                style={{ fontSize: '0.65rem', letterSpacing: '0.28em', marginBottom: '1.75rem' }}
              >
                Contacto
              </p>
              <h2
                id="contacto-heading"
                className="font-serif font-light tracking-[-0.025em] text-brand-cream"
                style={{ fontSize: 'clamp(2.4rem, 4.5vw, 4.5rem)', lineHeight: 0.95, marginBottom: 'clamp(3rem, 6vw, 6rem)' }}
              >
                Hablemos de
                <br />
                <span className="text-brand-cream/42">su próxima promoción.</span>
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <a
                  href="tel:+34639628867"
                  className="font-sans text-brand-cream/55 hover:text-brand-cream transition-colors duration-500"
                  style={{ fontSize: '0.82rem', letterSpacing: '0.02em' }}
                >
                  639 628 867
                </a>
                <a
                  href="tel:+34664817452"
                  className="font-sans text-brand-cream/55 hover:text-brand-cream transition-colors duration-500"
                  style={{ fontSize: '0.82rem', letterSpacing: '0.02em' }}
                >
                  664 817 452
                </a>
                <a
                  href="mailto:marestudio@gmail.es"
                  className="font-sans text-brand-cream/55 hover:text-brand-cream transition-colors duration-500"
                  style={{ fontSize: '0.82rem', letterSpacing: '0.02em' }}
                >
                  marestudio@gmail.es
                </a>
              </div>
            </motion.div>
          </div>

          {/* Columna derecha — formulario */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.0 }}
          >
            {sent ? (
              <div style={{ paddingTop: '2rem' }}>
                <p
                  className="font-serif font-light text-brand-cream"
                  style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', lineHeight: 1.2, marginBottom: '1.2rem' }}
                >
                  Gracias por escribirnos.
                </p>
                <p
                  className="font-sans text-brand-cream/45"
                  style={{ fontSize: '0.8rem', lineHeight: 1.85 }}
                >
                  Nos pondremos en contacto en las próximas horas.
                </p>
              </div>
            ) : (
              <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '2.8rem' }}>

                {[
                  { id: 'nombre',   label: 'Nombre',              type: 'text',  placeholder: 'Su nombre',              required: true  },
                  { id: 'empresa',  label: 'Empresa / Promotora', type: 'text',  placeholder: 'Nombre de la promotora',  required: true  },
                  { id: 'telefono', label: 'Teléfono',            type: 'tel',   placeholder: '600 000 000',             required: true  },
                ].map(f => (
                  <div key={f.id} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label
                      htmlFor={f.id}
                      className="font-sans uppercase text-brand-cream/28"
                      style={{ fontSize: '0.6rem', letterSpacing: '0.22em' }}
                    >
                      {f.label}
                    </label>
                    <input
                      id={f.id}
                      name={f.id}
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      value={form[f.id as keyof Form]}
                      onChange={handle}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderBottomColor = 'rgba(247,243,238,0.40)')}
                      onBlur={e => (e.target.style.borderBottomColor = 'rgba(247,243,238,0.14)')}
                    />
                  </div>
                ))}

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label
                    htmlFor="mensaje"
                    className="font-sans uppercase text-brand-cream/28"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.22em'}}
                  >
                    Proyecto
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={3}
                    placeholder="Cuéntenos brevemente su proyecto..."
                    value={form.mensaje}
                    onChange={handle}
                    style={{ ...inputStyle, resize: 'none', lineHeight: 1.7 }}
                    onFocus={e => (e.target.style.borderBottomColor = 'rgba(247,243,238,0.450)')}
                    onBlur={e => (e.target.style.borderBottomColor = 'rgba(247,243,238,0.14)')}
                  />
                </div>

                {/* Submit — texto puro, sin forma */}
                <button
                  type="submit"
                  disabled={sending}
                  className="font-sans uppercase text-left transition-colors duration-500"
                  style={{
                    background:    'none',
                    border:        'none',
                    padding:       0,
                    fontSize:      '0.68rem',
                    letterSpacing: '0.22em',
                    color:         sending ? 'rgba(247,243,238,0.28)' : 'rgba(247,243,238,0.60)',
                    cursor:        sending ? 'not-allowed' : 'pointer',
                    marginTop:     '0.5rem',
                  }}
                  onMouseEnter={e => !sending && (e.currentTarget.style.color = '#F7F3EE')}
                  onMouseLeave={e => !sending && (e.currentTarget.style.color = 'rgba(247,243,238,0.60)')}
                >
                  {sending ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'}
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
