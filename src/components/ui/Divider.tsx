interface DividerProps {
    light?: boolean
    className?: string
  }
  
  export default function Divider({ light = false, className = '' }: DividerProps) {
    return (
      <hr
        className={`
          border-0 border-t
          ${light ? 'border-brand-cream/16' : 'border-brand-smoke/12'}
          ${className}
        `}
      />
    )
  }
  