interface SectionLabelProps {
    children: string
    light?: boolean
    className?: string
  }
  
  export default function SectionLabel({ children, light = false, className = '' }: SectionLabelProps) {
    return (
      <span
        className={`
          block text-label-lg font-sans font-medium tracking-[0.25em] uppercase
          ${light ? 'text-brand-cream/45' : 'text-brand-smoke/45'}
          ${className}
        `}
      >
        {children}
      </span>
    )
  }
  