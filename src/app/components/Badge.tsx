interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'purple' | 'success' | 'warning' | 'danger' | 'info'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  show?: boolean  // Add conditional visibility
}

export default function Badge({ 
  children, 
  variant = 'default', 
  size = 'md', 
  className = '',
  show = true
}: BadgeProps) {
  if (!show || !children) return null
  
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-full'
  
    const variants = {
    default: 'bg-gray-100 text-gray-800',
    purple: 'bg-primary text-custom-white',
    success: 'bg-green-500 text-custom-white',
    warning: 'bg-yellow-500 text-custom-white',
    danger: 'bg-red-500 text-custom-white',
    info: 'bg-blue-500 text-custom-white'
    }
  
  const sizes = {
    sm: 'px-2 py-1 text-xs min-w-[20px] h-5',
    md: 'px-3 py-1 text-sm min-w-[24px] h-6',
    lg: 'px-4 py-2 text-base min-w-[32px] h-8'
  }
  
  return (
    <span className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </span>
  )
}