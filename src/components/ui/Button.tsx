import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  href?: string
  asLink?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  asLink = false,
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 will-change-transform cursor-pointer'
  
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-800',
    secondary: 'bg-gray-100 text-black hover:bg-gray-200',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(href)
      if (element) {
        const offset = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth'
        })
      }
    }
    if (props.onClick && !asLink) {
      props.onClick(e as React.MouseEvent<HTMLButtonElement>)
    }
  }

  if (asLink && href) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  )
}
