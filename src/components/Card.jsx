const Card = ({ children, className = '', hover = true, ...props }) => {
  const baseStyles = 'bg-white rounded-xl p-6 shadow-sm border border-gray-300 transition-all duration-200'
  const hoverStyles = hover ? 'hover:shadow-md hover:-translate-y-1' : ''
  
  const classes = `${baseStyles} ${hoverStyles} ${className}`
  
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export default Card