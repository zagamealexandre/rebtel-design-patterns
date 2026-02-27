import React from 'react';
import type { JSX } from 'react';

// ============================================
// TYPE DEFINITIONS
// ============================================

type DisplaySize = 'lg' | 'md' | 'sm' | 'xs';
type HeadlineSize = 'lg' | 'md' | 'sm' | 'xs';
type ParagraphSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';
type LabelSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

type TextColor = 
  | 'primary' 
  | 'secondary' 
  | 'tertiary' 
  | 'white' 
  | 'brand' 
  | 'success' 
  | 'warning' 
  | 'inherit';

interface BaseTypographyProps {
  children: React.ReactNode;
  color?: TextColor;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

// ============================================
// COLOR MAPPING
// ============================================

const colorClasses: Record<TextColor, string> = {
  primary: 'text-[var(--text-primary)]',
  secondary: 'text-[var(--text-secondary)]',
  tertiary: 'text-[var(--text-tertiary)]',
  white: 'text-[var(--text-white-constant)]',
  brand: 'text-[var(--brand-red)]',
  success: 'text-[var(--semantic-green)]',
  warning: 'text-[var(--semantic-warning)]',
  inherit: 'text-inherit',
};

// ============================================
// DISPLAY COMPONENT
// ============================================

interface DisplayProps extends BaseTypographyProps {
  size?: DisplaySize;
}

export function Display({ 
  children, 
  size = 'lg', 
  color = 'primary',
  className = '',
  as: Component = 'h1',
}: DisplayProps) {
  const sizeClass = `text-display-${size}`;
  const colorClass = colorClasses[color];
  
  return (
    <Component className={`${sizeClass} ${colorClass} ${className}`}>
      {children}
    </Component>
  );
}

// ============================================
// HEADLINE COMPONENT
// ============================================

interface HeadlineProps extends BaseTypographyProps {
  size?: HeadlineSize;
}

export function Headline({ 
  children, 
  size = 'lg', 
  color = 'primary',
  className = '',
  as,
}: HeadlineProps) {
  // Default element based on size
  const defaultElements: Record<HeadlineSize, keyof JSX.IntrinsicElements> = {
    lg: 'h1',
    md: 'h2',
    sm: 'h3',
    xs: 'h4',
  };
  
  const Component = as || defaultElements[size];
  const sizeClass = `text-headline-${size}`;
  const colorClass = colorClasses[color];
  
  return (
    <Component className={`${sizeClass} ${colorClass} ${className}`}>
      {children}
    </Component>
  );
}

// ============================================
// PARAGRAPH COMPONENT
// ============================================

interface ParagraphProps extends BaseTypographyProps {
  size?: ParagraphSize;
}

export function Paragraph({ 
  children, 
  size = 'md', 
  color = 'primary',
  className = '',
  as: Component = 'p',
}: ParagraphProps) {
  const sizeClass = `text-paragraph-${size}`;
  const colorClass = colorClasses[color];
  
  return (
    <Component className={`${sizeClass} ${colorClass} ${className}`}>
      {children}
    </Component>
  );
}

// ============================================
// LABEL COMPONENT
// ============================================

interface LabelProps extends BaseTypographyProps {
  size?: LabelSize;
}

export function Label({ 
  children, 
  size = 'md', 
  color = 'primary',
  className = '',
  as: Component = 'span',
}: LabelProps) {
  const sizeClass = `text-label-${size}`;
  const colorClass = colorClasses[color];
  
  return (
    <Component className={`${sizeClass} ${colorClass} ${className}`}>
      {children}
    </Component>
  );
}

// ============================================
// TEXT COMPONENT (Generic)
// ============================================

type TypographyVariant = 'display' | 'headline' | 'paragraph' | 'label';

interface TextProps extends BaseTypographyProps {
  variant?: TypographyVariant;
  size?: DisplaySize | HeadlineSize | ParagraphSize | LabelSize;
}

export function Text({
  children,
  variant = 'paragraph',
  size = 'md',
  color = 'primary',
  className = '',
  as,
}: TextProps) {
  const sizeClass = `text-${variant}-${size}`;
  const colorClass = colorClasses[color];
  
  // Default elements based on variant
  const defaultElements: Record<TypographyVariant, keyof JSX.IntrinsicElements> = {
    display: 'h1',
    headline: 'h2',
    paragraph: 'p',
    label: 'span',
  };
  
  const Component = as || defaultElements[variant];
  
  return (
    <Component className={`${sizeClass} ${colorClass} ${className}`}>
      {children}
    </Component>
  );
}

// ============================================
// EXPORTS
// ============================================

export default {
  Display,
  Headline,
  Paragraph,
  Label,
  Text,
};
