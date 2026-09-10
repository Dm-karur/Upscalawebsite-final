import React from 'react';

const Button = ({ children, variant = 'primary', href, icon: Icon, className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 rounded-full';
  const sizeClasses = 'px-6 py-3 text-sm';
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary-hover shadow-sm',
    secondary: 'bg-secondary text-foreground hover:bg-secondary-hover',
    ghost: 'bg-transparent text-primary hover:bg-secondary',
  };

  const classes = `${baseClasses} ${sizeClasses} ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}
      {Icon && <Icon className="ml-2 h-4 w-4" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default Button;
