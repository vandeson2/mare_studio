import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'light' | 'outlineLight' | 'dark'
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
}: ButtonProps) {
  const base = 'group inline-flex w-fit items-center font-sans uppercase transition-all duration-500 ease-out disabled:pointer-events-none disabled:opacity-40'

  const variants = {
    primary: `
      gap-4 border border-brand-sand/50
      bg-brand-smoke/24 px-6 py-4
      text-brand-cream/95
      backdrop-blur-[3px]
      shadow-[0_12px_34px_rgba(0,0,0,0.14)]
      hover:-translate-y-[1px]
      hover:border-brand-clay/80
      hover:bg-brand-smoke/36
      hover:text-brand-cream
      hover:shadow-[0_16px_42px_rgba(0,0,0,0.18)]
    `,
    secondary: `
      gap-4 text-brand-smoke/65
      hover:text-brand-smoke
    `,
    light: `
      gap-4 text-brand-cream/50
      hover:text-brand-cream
    `,
    outlineLight: `
      border border-brand-sand/35
      px-6 py-4
      text-brand-cream/75
      hover:bg-brand-cream/8
      hover:text-brand-cream
    `,
    dark: `
      gap-4 border border-brand-smoke/20
      bg-brand-smoke text-brand-cream
      px-8 py-4
      shadow-[0_4px_14px_rgba(0,0,0,0.06)]
      hover:-translate-y-[1px]
      hover:bg-brand-smoke/90
      hover:shadow-[0_6px_20px_rgba(0,0,0,0.1)]
    `,
  }

  const textStyle = {
    fontSize: '0.68rem',
    letterSpacing: '0.24em'
  }

  const content = (
    <>
      <span 
        className={`
          block h-px w-8 shrink-0
          transition-all duration-700
          group-hover:w-12
          ${variant === 'primary'
            ? 'bg-brand-clay/60 group-hover:bg-brand-clay'
            : variant === 'light'
              ? 'bg-brand-clay/45 group-hover:bg-brand-clay'
              : variant === 'dark'
                ? 'bg-brand-cream/40 group-hover:bg-brand-cream' 
                : 'bg-brand-smoke/25 group-hover:bg-brand-clay'
        }
          }
        `}
        aria-hidden="true"
      />

      <span style={textStyle}>{children}</span>
    </>
  )

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes} aria-disabled={disabled}>
        {content}
      </Link>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </button>
  )
}
