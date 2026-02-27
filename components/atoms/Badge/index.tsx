import React from 'react';

// ============================================
// TYPE DEFINITIONS
// ============================================

type BadgeVariant = 
  | 'dark' 
  | 'light' 
  | 'brand' 
  | 'success' 
  | 'warning' 
  | 'outline';

type BadgeSize = 'sm' | 'md';

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

// ============================================
// STYLE MAPPINGS
// ============================================

const variantStyles: Record<BadgeVariant, string> = {
  dark: `
    bg-[var(--surface-darker-transparent)]
    text-[var(--text-white-constant)]
  `,
  light: `
    bg-[var(--grey-200)]
    text-[var(--text-primary)]
  `,
  brand: `
    bg-[var(--brand-red)]
    text-[var(--text-white-constant)]
  `,
  success: `
    bg-[var(--semantic-green)]
    text-[var(--text-white-constant)]
  `,
  warning: `
    bg-[var(--semantic-warning)]
    text-[var(--text-white-constant)]
  `,
  outline: `
    bg-transparent
    text-[var(--text-primary)]
    border
    border-[var(--border-primary)]
  `,
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: 'px-[var(--spacing-xs)] py-[var(--spacing-xxs)] text-label-xs',
  md: 'px-[var(--spacing-sm)] py-[var(--spacing-xs)] text-label-sm',
};

// ============================================
// BADGE COMPONENT
// ============================================

export function Badge({
  children,
  variant = 'dark',
  size = 'sm',
  className = '',
}: BadgeProps) {
  const baseStyles = `
    inline-flex
    items-center
    justify-center
    rounded-[var(--radius-md)]
    whitespace-nowrap
  `;

  return (
    <span
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </span>
  );
}

// ============================================
// PILL COMPONENT (Alias for Badge with full rounded)
// ============================================

interface PillProps extends BadgeProps {}

export function Pill({
  children,
  variant = 'dark',
  size = 'sm',
  className = '',
}: PillProps) {
  return (
    <Badge
      variant={variant}
      size={size}
      className={`rounded-full ${className}`}
    >
      {children}
    </Badge>
  );
}

// ============================================
// ACTION LABEL COMPONENT (Specific for card labels)
// ============================================

interface ActionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function ActionLabel({ children, className = '' }: ActionLabelProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        px-[var(--spacing-xs)]
        py-[var(--spacing-xxs)]
        bg-[var(--surface-darker-transparent)]
        text-[var(--text-white-constant)]
        text-label-xs
        rounded-[var(--radius-md)]
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </span>
  );
}

// ============================================
// EXPORTS
// ============================================

export default Badge;
