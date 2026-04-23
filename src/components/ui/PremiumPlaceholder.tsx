type PremiumPlaceholderProps = {
    label: string
    note?: string
    tone?: 'light' | 'dark'
    bordered?: boolean
    className?: string
  }
  
  export default function PremiumPlaceholder({
    label,
    note = 'Visual temporal',
    tone = 'light',
    bordered = false,
    className = '',
  }: PremiumPlaceholderProps) {
    const palette =
      tone === 'dark'
        ? {
            base: '#2F2A28',
            soft: '#3A3431',
            accent: '#B8A89A',
            text: 'rgba(247,243,238,0.88)',
            subtext: 'rgba(247,243,238,0.50)',
            border: 'rgba(247,243,238,0.16)',
          }
        : {
            base: '#F7F3EE',
            soft: '#DCCDBE',
            accent: '#B8A89A',
            text: 'rgba(47,42,40,0.84)',
            subtext: 'rgba(47,42,40,0.48)',
            border: 'rgba(47,42,40,0.10)',
          }
  
    return (
      <div
        aria-hidden="true"
        className={`absolute inset-0 overflow-hidden ${className}`}
        style={{
          background: palette.base,
          border: bordered ? `0.5px solid ${palette.border}` : 'none',
        }}
      >
        <div
          className="absolute inset-[6%]"
          style={{
            border: `0.5px solid ${palette.border}`,
            background: palette.soft,
          }}
        />
  
        <div
          className="absolute left-[clamp(1.4rem,2.8vw,2.3rem)] top-[clamp(1.4rem,2.8vw,2.3rem)]"
          style={{
            border: `0.5px solid ${palette.border}`,
            color: palette.text,
            background: 'transparent',
            fontSize: '0.58rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            padding: '0.38rem 0.62rem',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
          }}
        >
          {label}
        </div>
  
        <p
          className="absolute left-[clamp(1.4rem,2.8vw,2.3rem)] bottom-[clamp(1.4rem,2.8vw,2.3rem)]"
          style={{
            color: palette.subtext,
            fontSize: '0.62rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
          }}
        >
          {note}
        </p>
  
        <div
          className="absolute right-[clamp(1.4rem,2.8vw,2.3rem)] bottom-[clamp(1.65rem,3.2vw,2.7rem)]"
          style={{
            width: 'clamp(3rem,7vw,5.4rem)',
            height: 0.5,
            background: palette.accent,
            opacity: 0.9,
          }}
        />
      </div>
    )
  }