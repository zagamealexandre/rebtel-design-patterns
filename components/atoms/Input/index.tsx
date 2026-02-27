'use client';

import React, { forwardRef } from 'react';

// ============================================
// TYPE DEFINITIONS
// ============================================

type InputSize = 'default' | 'large';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  hint?: string;
  size?: InputSize;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

// ============================================
// SIZE MAPPINGS
// ============================================

const sizeStyles: Record<InputSize, string> = {
  default: 'h-[48px] text-paragraph-md',
  large: 'h-[56px] text-paragraph-lg',
};

// ============================================
// INPUT COMPONENT
// ============================================

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      hint,
      size = 'default',
      leftElement,
      rightElement,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const hasError = !!error;

    const baseInputStyles = `
      w-full
      bg-[var(--grey-0)]
      text-[var(--text-primary)]
      placeholder:text-[var(--text-secondary)]
      rounded-[var(--radius-md)]
      border
      transition-colors
      duration-200
      focus:outline-none
      focus:ring-2
      focus:ring-[var(--brand-red)]
      focus:ring-offset-1
      disabled:bg-[var(--grey-200)]
      disabled:text-[var(--text-secondary)]
      disabled:cursor-not-allowed
    `;

    const borderStyle = hasError
      ? 'border-[var(--brand-red)]'
      : 'border-[var(--border-primary)] focus:border-[var(--brand-red)]';

    const paddingStyle = leftElement
      ? 'pl-[44px] pr-[var(--spacing-md)]'
      : rightElement
      ? 'pl-[var(--spacing-md)] pr-[44px]'
      : 'px-[var(--spacing-md)]';

    return (
      <div className={`flex flex-col gap-[var(--spacing-xxs)] ${className}`}>
        {label && (
          <label className="text-label-sm text-[var(--text-primary)]">
            {label}
          </label>
        )}

        <div className="relative">
          {leftElement && (
            <div className="absolute left-[var(--spacing-sm)] top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
              {leftElement}
            </div>
          )}

          <input
            ref={ref}
            className={`
              ${baseInputStyles}
              ${sizeStyles[size]}
              ${borderStyle}
              ${paddingStyle}
            `.replace(/\s+/g, ' ').trim()}
            disabled={disabled}
            {...props}
          />

          {rightElement && (
            <div className="absolute right-[var(--spacing-sm)] top-1/2 -translate-y-1/2 text-[var(--text-secondary)]">
              {rightElement}
            </div>
          )}
        </div>

        {(error || hint) && (
          <span
            className={`text-label-xs ${
              hasError ? 'text-[var(--brand-red)]' : 'text-[var(--text-secondary)]'
            }`}
          >
            {error || hint}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

// ============================================
// EXPORTS
// ============================================

export default Input;
