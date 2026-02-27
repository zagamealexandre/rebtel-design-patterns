'use client';

import React from 'react';
import { Avatar } from '@/components/atoms/Avatar';
import { CheckIcon } from '@/components/atoms/Icon';

// ============================================
// TYPE DEFINITIONS
// ============================================

interface ContactRowProps {
  name: string;
  country: string;
  flag: string;
  phoneNumber?: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

// ============================================
// CONTACT ROW COMPONENT
// ============================================

export function ContactRow({
  name,
  country,
  flag,
  phoneNumber,
  selected = false,
  onClick,
  className = '',
}: ContactRowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        w-full
        flex
        items-center
        gap-[var(--spacing-sm)]
        p-[var(--spacing-sm)]
        rounded-[var(--radius-md)]
        transition-colors
        ${selected 
          ? 'bg-[var(--red-10)]' 
          : 'bg-transparent hover:bg-[var(--grey-100)]'
        }
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      {/* Avatar */}
      <div className="relative">
        <Avatar fallback={name} size="lg" />
        {/* Flag badge */}
        <span className="absolute -bottom-1 -right-1 text-[16px]">
          {flag}
        </span>
      </div>

      {/* Contact Info */}
      <div className="flex-1 text-left">
        <div className="text-label-lg text-[var(--text-primary)]">
          {name}
        </div>
        <div className="text-label-sm text-[var(--text-secondary)]">
          {phoneNumber || country}
        </div>
      </div>

      {/* Selection Indicator */}
      {selected && (
        <div className="w-[24px] h-[24px] rounded-full bg-[var(--brand-red)] flex items-center justify-center">
          <CheckIcon className="w-[14px] h-[14px] text-white" />
        </div>
      )}
    </button>
  );
}

// ============================================
// EXPORTS
// ============================================

export default ContactRow;
