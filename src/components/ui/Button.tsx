import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost' | 'light'
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
  const base = 'inline-flex items-center gap-3 font-sans text-sm font-medium tracking-wide transition-all duration-300 cursor-pointer'

  const variants = {
    primary: `
      bg-brand-smoke text-brand-cream px-8 py-4
      hover:bg-brand-taupe
      disabled:opacity-40 disabled:cursor-not-allowed
    `,
    ghost: `
      text-brand-smoke underline-animate pb-0.5
      hover:text-brand-taupe
    `,
    light: `
      text-brand-cream underline-animate pb-0.5
      hover:text-brand-cream/70
    `,
  }

  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
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
      {children}
    </button>
  )
}
