import React from 'react';

// ============================================
// TYPE DEFINITIONS
// ============================================

type IconSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
type IconColor = 
  | 'primary' 
  | 'secondary' 
  | 'tertiary' 
  | 'white' 
  | 'brand' 
  | 'success' 
  | 'warning'
  | 'inherit';

interface IconProps {
  children: React.ReactNode;
  size?: IconSize;
  color?: IconColor;
  className?: string;
}

// ============================================
// SIZE MAPPINGS
// ============================================

const sizeStyles: Record<IconSize, string> = {
  xxs: 'w-[var(--icon-xxs)] h-[var(--icon-xxs)]',
  xs: 'w-[var(--icon-xs)] h-[var(--icon-xs)]',
  sm: 'w-[var(--icon-sm)] h-[var(--icon-sm)]',
  md: 'w-[var(--icon-md)] h-[var(--icon-md)]',
  lg: 'w-[var(--icon-lg)] h-[var(--icon-lg)]',
  xl: 'w-[var(--icon-xl)] h-[var(--icon-xl)]',
};

const colorStyles: Record<IconColor, string> = {
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
// ICON WRAPPER COMPONENT
// ============================================

export function Icon({
  children,
  size = 'md',
  color = 'primary',
  className = '',
}: IconProps) {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center
        ${sizeStyles[size]}
        ${colorStyles[color]}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {children}
    </span>
  );
}

// ============================================
// COMMON ICONS (SVG components)
// ============================================

interface SVGIconProps {
  className?: string;
}

interface NavIconProps extends SVGIconProps {
  active?: boolean;
}

export function MoreIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <circle cx="12" cy="5" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="12" cy="19" r="2" />
    </svg>
  );
}

export function ChevronRightIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="9,18 15,12 9,6" />
    </svg>
  );
}

export function ChevronLeftIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="15,18 9,12 15,6" />
    </svg>
  );
}

export function PhoneIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </svg>
  );
}

export function CloseIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function CheckIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20,6 9,17 4,12" />
    </svg>
  );
}

export function SearchIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export function GridIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function EyeIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

export function HeartIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

export function GiftIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="20 12 20 22 4 22 4 12" />
      <rect x="2" y="7" width="20" height="5" />
      <line x1="12" y1="22" x2="12" y2="7" />
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
    </svg>
  );
}

export function PersonIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

export function GlobeIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function ChevronDownIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="6,9 12,15 18,9" />
    </svg>
  );
}

export function ContactsIcon({ className = '' }: SVGIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function NavHomeIcon({ className = '', active = false }: NavIconProps) {
  const fill = active ? '#111111' : 'none';
  const stroke = active ? 'none' : '#B9B9BE';
  const heartFill = active ? '#FFFFFF' : '#B9B9BE';

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <path
        d="M4 20C4 17.8122 4.78096 15.7601 6.14632 13.9923C8.91455 10.4087 14.0811 8 20 8C28.8355 8 36 13.3732 36 20C36 26.6268 28.8373 32 20 32C11.1627 32 4 26.6268 4 20Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={active ? 0 : 1.8}
        strokeMiterlimit={10}
      />
      <path
        d="M19.927 16.0725C20.4814 15.5667 20.9537 14.9937 21.5681 14.6007C23.4554 13.3928 26.3654 14.0895 27.4481 15.9488C28.3648 17.5224 28.1446 19.4835 26.7497 20.8479C25.8951 21.6848 24.8804 22.3888 23.9217 23.1347C22.769 24.0315 21.5942 24.9048 20.4374 25.798C20.1712 26.0036 19.947 26.0963 19.6348 25.8617C17.9537 24.5919 16.2605 23.3366 14.5814 22.0631C13.5487 21.2809 12.6381 20.4149 12.2218 19.1997C11.4353 16.9039 12.8042 14.5789 15.3219 14.1077C17.2132 13.753 18.7082 14.3242 19.7649 15.8487C19.833 15.947 19.905 16.0434 19.927 16.0725Z"
        fill={heartFill}
      />
    </svg>
  );
}

export function NavServicesIcon({ className = '', active = false }: NavIconProps) {
  const fill = active ? '#111111' : 'none';
  const stroke = active ? 'none' : '#B9B9BE';
  const letterFill = active ? '#FFFFFF' : '#B9B9BE';

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <path
        d="M20 9C24.2222 9 28.0064 10.2856 30.7129 12.3154C33.4191 14.3451 35 17.072 35 20C35 22.9281 33.4198 25.656 30.7139 27.6855C28.0077 29.7152 24.223 31 20 31C15.777 31 11.9923 29.7152 9.28613 27.6855C6.58021 25.656 5 22.9281 5 20C5 18.0602 5.69009 16.2186 6.9375 14.6035C9.48103 11.3108 14.328 9 20 9Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={active ? 0 : 2}
        strokeMiterlimit={10}
      />
      <path
        d="M25.9957 15.0048V25H18.2026C15.8659 25 14.291 23.6418 14.291 21.7575C14.291 20.2989 15.2625 18.8594 17.3081 18.5007L14 15.0574L14.0385 15H16.9016L19.893 18.2712H23.6377V15H26L25.9957 15.0048ZM18.4722 22.9292H23.6334V20.3467H18.4722C17.3338 20.3467 16.5934 20.7915 16.5934 21.6475C16.5934 22.5036 17.3338 22.934 18.4722 22.934V22.9292Z"
        fill={letterFill}
      />
    </svg>
  );
}

export function NavAccountIcon({ className = '', active = false }: NavIconProps) {
  const fill = active ? '#111111' : 'none';
  const outerStroke = active ? 'none' : '#B9B9BE';
  const personStroke = active ? '#FFFFFF' : '#B9B9BE';

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <path
        d="M20.0005 9.1333C24.4579 9.13336 28.4596 10.3997 31.3257 12.4058C34.1944 14.4139 35.8667 17.1119 35.8667 20.0005C35.8666 22.889 34.195 25.5863 31.3267 27.5942C28.4608 29.6004 24.459 30.8666 20.0005 30.8667C15.5418 30.8667 11.5393 29.6005 8.67334 27.5942C5.80507 25.5863 4.13343 22.889 4.1333 20.0005C4.1333 18.0875 4.86249 16.2666 6.18506 14.6685C8.88205 11.4101 14.0132 9.1333 20.0005 9.1333Z"
        fill={fill}
        stroke={outerStroke}
        strokeWidth={active ? 0 : 1.6}
        strokeMiterlimit={10}
      />
      <path
        d="M12.5 30C13.3346 27.1589 15.0001 23.3333 20.0001 23.3333C25.0001 23.3333 27.1656 27.1589 28.0002 30M23.4723 17.5014C23.4723 19.4352 21.9177 21.0028 20.0001 21.0028C18.0824 21.0028 16.5278 19.4352 16.5278 17.5014C16.5278 15.5676 18.0824 14 20.0001 14C21.9177 14 23.4723 15.5676 23.4723 17.5014Z"
        stroke={personStroke}
        strokeWidth={1.8}
        fill="none"
      />
    </svg>
  );
}

// ============================================
// EXPORTS
// ============================================

export default Icon;
