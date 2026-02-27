'use client';

import React from 'react';

// ============================================
// TYPE DEFINITIONS
// ============================================

type ButtonVariant = 'primary' | 'secondary' | 'secondary-white' | 'secondary-black';
type ButtonSize = 'default' | 'small';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// ============================================
// STYLE MAPPINGS
// ============================================

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-[var(--brand-red)] 
    text-[var(--text-white-constant)] 
    hover:bg-[var(--red-40)] 
    active:bg-[var(--red-50)]
  `,
  secondary: `
    bg-[var(--grey-200)] 
    text-[var(--text-primary)] 
    hover:bg-[var(--grey-300)] 
    active:bg-[var(--grey-400)]
  `,
  'secondary-white': `
    bg-[var(--grey-0)] 
    text-[var(--text-primary)] 
    hover:bg-[var(--grey-100)] 
    active:bg-[var(--grey-200)]
    border border-[var(--border-primary)]
  `,
  'secondary-black': `
    bg-[var(--grey-900)] 
    text-[var(--text-white-constant)] 
    hover:bg-[var(--grey-800)] 
    active:bg-[var(--grey-700)]
  `,
};

const sizeStyles: Record<ButtonSize, string> = {
  default: 'h-[64px] px-[var(--spacing-xxl)] text-label-xl',
  small: 'h-[48px] px-[var(--spacing-xl)] text-label-lg',
};

// ============================================
// BUTTON COMPONENT
// ============================================

export function Button({
  variant = 'primary',
  size = 'default',
  fullWidth = false,
  children,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles = `
    inline-flex 
    items-center 
    justify-center 
    gap-[var(--spacing-xs)]
    rounded-[var(--radius-xxl)]
    font-medium
    transition-colors
    duration-200
    cursor-pointer
    select-none
    focus:outline-none
    focus:ring-2
    focus:ring-[var(--brand-red)]
    focus:ring-offset-2
    disabled:opacity-50
    disabled:cursor-not-allowed
  `;

  const widthStyle = fullWidth ? 'w-full' : '';

  return (
    <button
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${widthStyle}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      disabled={disabled}
      {...props}
    >
      {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </button>
  );
}

// ============================================
// BUTTON GROUP COMPONENT
// ============================================

interface ButtonGroupProps {
  children: React.ReactNode;
  direction?: 'vertical' | 'horizontal';
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const gapStyles: Record<string, string> = {
  sm: 'gap-[var(--spacing-xs)]',
  md: 'gap-[var(--spacing-sm)]',
  lg: 'gap-[var(--spacing-md)]',
};

export function ButtonGroup({
  children,
  direction = 'vertical',
  gap = 'sm',
  className = '',
}: ButtonGroupProps) {
  const directionStyle = direction === 'vertical' ? 'flex-col' : 'flex-row';

  return (
    <div className={`flex ${directionStyle} ${gapStyles[gap]} ${className}`}>
      {children}
    </div>
  );
}

// ============================================
// EXPORTS
// ============================================

export default Button;
