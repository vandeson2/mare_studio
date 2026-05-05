interface SectionHeadingProps {
    children: React.ReactNode
    id?: string
    size?: 'md' | 'lg' | 'xl'
    align?: 'left' | 'center' | 'right'
    light?: boolean
    className?: string
    as?: 'h1' | 'h2' | 'h3'
  }
  
  const sizeMap = {
    md: 'text-display-md',
    lg: 'text-display-lg',
    xl: 'text-display-xl',
  }
  
  const alignMap = {
    left:   'text-left',
    center: 'text-center',
    right:  'text-right',
  }
  
  export default function SectionHeading({
    children,
    id,
    size = 'lg',
    align = 'left',
    light = false,
    className = '',
    as: Tag = 'h2',
  }: SectionHeadingProps) {
    return (
      <Tag
        id={id}
        className={`
          font-serif font-light leading-none tracking-tight text-balance
          ${sizeMap[size]}
          ${alignMap[align]}
          ${light ? 'text-brand-cream' : 'text-brand-smoke'}
          ${className}
        `}
      >
        {children}
      </Tag>
    )
  }