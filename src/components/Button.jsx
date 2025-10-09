const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-lg hover:-translate-y-0.5 focus:ring-primary-500/20',
    secondary: 'border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white focus:ring-primary-500/20',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500/20'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm rounded-lg',
    md: 'px-6 py-3 text-base rounded-xl',
    lg: 'px-8 py-4 text-lg rounded-xl'
  }
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`
  
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}

export default Button