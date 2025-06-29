interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseClasses = 'font-medium rounded-full transition-colors inline-flex items-center justify-center'
  
  const variants = {
    primary: 'bg-primary hover:bg-primary/90 text-custom-white',
    secondary: 'bg-secondary hover:bg-secondary/90 text-custom-white',
    outline: 'border-2 border-custom-white text-custom-white hover:bg-custom-white hover:text-custom-black'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-2 text-base',
    lg: 'px-8 py-3 text-lg'
  }
  
  return (
    <button 
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </button>
  )
}