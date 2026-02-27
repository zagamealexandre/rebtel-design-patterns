'use client';

import React from 'react';

interface BottomSheetProps {
  isOpen: boolean;
  onClose?: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function BottomSheet({
  isOpen,
  onClose,
  title,
  children,
  className = '',
}: BottomSheetProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`relative w-full max-w-[390px] animate-slide-up flex flex-col ${className}`}
      >
        {/* Title section */}
        <div className="bg-white rounded-t-[20px] flex flex-col items-center justify-end overflow-hidden pb-[var(--spacing-xl)] pt-[var(--spacing-lg)] px-[var(--spacing-md)]">
          <p className="text-headline-sm text-[var(--text-primary)] text-center">
            {title}
          </p>
        </div>
        {/* Button section */}
        <div className="bg-white border-t border-[var(--border-tertiary)] overflow-hidden pb-[var(--spacing-sm)] pt-[var(--spacing-xl)] px-[var(--spacing-md)]">
          {children}
        </div>
        {/* Home indicator */}
        <div className="bg-white flex justify-center">
          <div className="w-[134px] h-[5px] bg-[#111] rounded-[100px] mb-[8px]" />
        </div>
      </div>
    </div>
  );
}

export default BottomSheet;
