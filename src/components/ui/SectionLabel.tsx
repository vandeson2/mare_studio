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
          ${light ? 'text-bone/50' : 'text-muted'}
          ${className}
        `}
      >
        {children}
      </span>
    )
  }
  