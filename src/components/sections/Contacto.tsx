'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'

type Form = { nombre: string; empresa: string; telefono: string; email: string; mensaje: string; website: string}
const empty: Form = { nombre: '', empresa: '', telefono: '',email: '', mensaje: '', website: ''}

const inputStyle = {
  background:  'transparent',
  border:      'none',
  borderBottom: '1px solid rgba(220,205,190,0.18)',
  paddingBottom: '1rem',
  paddingTop:  '0.25rem',
  width:       '100%',
  fontFamily:  'var(--font-inter), system-ui, sans-serif',
  fontSize:    '0.9rem',
  color:       '#F7F3EE',
  outline:     'none',
  transition:  'border-color 0.4s, color 0.4s',
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
  const res = await fetch('/api/contacto', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(form),
  })
  
  if (res.ok){
    setSent(true)
    setForm(empty)
  }
    setSending(false)
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
                      value={form[f.id as keyof Form]}
                      onChange={handle}
                      style={inputStyle}
                      onFocus={e => (e.target.style.borderBottomColor = 'rgba(220,205,190,0.48)')}
                      onBlur={e => (e.target.style.borderBottomColor = 'rgba(220,205,190,0.18)')}
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
                    placeholder="Cuéntenos brevemente su proyecto..."
                    value={form.mensaje}
                    onChange={handle}
                    style={{ ...inputStyle, resize: 'none', lineHeight: 1.7 }}
                    onFocus={e => (e.target.style.borderBottomColor = 'rgba(220,205,190,0.48)')}
                    onBlur={e => (e.target.style.borderBottomColor = 'rgba(220,205,190,0.18)')}
                  />
                </div>

                {/* Submit  */}
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
