interface DividerProps {
    light?: boolean
    className?: string
  }
  
  export default function Divider({ light = false, className = '' }: DividerProps) {
    return (
      <hr
        className={`
          border-0 border-t
          ${light ? 'border-bone/20' : 'border-line'}
          ${className}
        `}
      />
    )
  }
  