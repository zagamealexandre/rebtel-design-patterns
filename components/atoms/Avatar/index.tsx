import React from 'react';
import Image from 'next/image';

// ============================================
// TYPE DEFINITIONS
// ============================================

type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: AvatarSize;
  fallback?: string;
  className?: string;
}

interface AvatarWithFlagProps extends AvatarProps {
  flagSrc?: string;
  flagAlt?: string;
}

// ============================================
// SIZE MAPPINGS
// ============================================

const sizeStyles: Record<AvatarSize, { container: string; size: number }> = {
  xs: { container: 'w-[16px] h-[16px]', size: 16 },
  sm: { container: 'w-[24px] h-[24px]', size: 24 },
  md: { container: 'w-[32px] h-[32px]', size: 32 },
  lg: { container: 'w-[48px] h-[48px]', size: 48 },
  xl: { container: 'w-[64px] h-[64px]', size: 64 },
};

// ============================================
// GET INITIALS HELPER
// ============================================

function getInitials(name: string): string {
  const parts = name.trim().split(' ');
  if (parts.length === 1) {
    return parts[0].charAt(0).toUpperCase();
  }
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

// ============================================
// AVATAR COMPONENT
// ============================================

export function Avatar({
  src,
  alt = 'Avatar',
  size = 'md',
  fallback,
  className = '',
}: AvatarProps) {
  const { container, size: pixelSize } = sizeStyles[size];

  const baseStyles = `
    relative
    rounded-full
    overflow-hidden
    bg-[var(--grey-300)]
    flex
    items-center
    justify-center
  `;

  if (src) {
    return (
      <div className={`${baseStyles} ${container} ${className}`.replace(/\s+/g, ' ').trim()}>
        <Image
          src={src}
          alt={alt}
          width={pixelSize}
          height={pixelSize}
          className="object-cover w-full h-full"
        />
      </div>
    );
  }

  // Fallback with initials
  const initials = fallback ? getInitials(fallback) : '?';
  const textSizeClass = size === 'xs' || size === 'sm' ? 'text-label-xs' : 'text-label-sm';

  return (
    <div className={`${baseStyles} ${container} ${className}`.replace(/\s+/g, ' ').trim()}>
      <span className={`${textSizeClass} text-[var(--text-secondary)]`}>
        {initials}
      </span>
    </div>
  );
}

// ============================================
// FLAG COMPONENT
// ============================================

interface FlagProps {
  src: string;
  alt?: string;
  size?: AvatarSize;
  className?: string;
}

export function Flag({
  src,
  alt = 'Flag',
  size = 'md',
  className = '',
}: FlagProps) {
  const { container, size: pixelSize } = sizeStyles[size];

  return (
    <div
      className={`
        relative
        rounded-full
        overflow-hidden
        ${container}
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      <Image
        src={src}
        alt={alt}
        width={pixelSize}
        height={pixelSize}
        className="object-cover w-full h-full"
      />
    </div>
  );
}

// ============================================
// AVATAR WITH FLAG COMPONENT
// ============================================

export function AvatarWithFlag({
  src,
  alt = 'Profile',
  size = 'md',
  fallback,
  flagSrc,
  flagAlt = 'Country flag',
  className = '',
}: AvatarWithFlagProps) {
  // Container width needs to accommodate both elements
  const containerWidth = size === 'md' ? 'w-[56px]' : size === 'lg' ? 'w-[72px]' : 'w-[56px]';
  const { size: pixelSize } = sizeStyles[size];

  return (
    <div className={`relative ${containerWidth} h-[${pixelSize}px] ${className}`}>
      {/* Flag (left/behind) */}
      {flagSrc && (
        <div className="absolute left-0 top-0 z-0">
          <Flag src={flagSrc} alt={flagAlt} size={size} />
        </div>
      )}
      
      {/* Avatar (right/front) */}
      <div className={`absolute ${flagSrc ? 'left-[24px]' : 'left-0'} top-0 z-10`}>
        <Avatar src={src} alt={alt} size={size} fallback={fallback} />
      </div>
    </div>
  );
}

// ============================================
// AVATAR GROUP COMPONENT
// ============================================

interface AvatarGroupProps {
  avatars: Array<{ src?: string; alt?: string; fallback?: string }>;
  size?: AvatarSize;
  max?: number;
  className?: string;
}

export function AvatarGroup({
  avatars,
  size = 'sm',
  max = 3,
  className = '',
}: AvatarGroupProps) {
  const displayAvatars = avatars.slice(0, max);
  const remaining = avatars.length - max;
  const { size: pixelSize } = sizeStyles[size];
  const overlap = Math.floor(pixelSize / 3);

  return (
    <div className={`flex items-center ${className}`}>
      {displayAvatars.map((avatar, index) => (
        <div
          key={index}
          className="relative border-2 border-white rounded-full"
          style={{ marginLeft: index === 0 ? 0 : -overlap }}
        >
          <Avatar
            src={avatar.src}
            alt={avatar.alt}
            fallback={avatar.fallback}
            size={size}
          />
        </div>
      ))}
      {remaining > 0 && (
        <div
          className={`
            relative
            rounded-full
            bg-[var(--grey-200)]
            flex
            items-center
            justify-center
            border-2
            border-white
            ${sizeStyles[size].container}
          `.replace(/\s+/g, ' ').trim()}
          style={{ marginLeft: -overlap }}
        >
          <span className="text-label-xs text-[var(--text-secondary)]">
            +{remaining}
          </span>
        </div>
      )}
    </div>
  );
}

// ============================================
// EXPORTS
// ============================================

export default Avatar;
