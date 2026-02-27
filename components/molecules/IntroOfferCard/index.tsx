'use client';

import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/atoms/Badge';
import { Button } from '@/components/atoms/Button';

// ============================================
// TYPE DEFINITIONS
// ============================================

type OfferType = 'calling' | 'topup';

interface IntroOfferCardProps {
  type: OfferType;
  headline: string;
  description: string;
  ctaText: string;
  imageSrc?: string;
  imageAlt?: string;
  onClick?: () => void;
  className?: string;
}

// ============================================
// INTRO OFFER CARD COMPONENT
// ============================================

export function IntroOfferCard({
  type,
  headline,
  description,
  ctaText,
  imageSrc,
  imageAlt = 'Offer image',
  onClick,
  className = '',
}: IntroOfferCardProps) {
  const badgeLabel = type === 'calling' ? 'Calling' : 'Top-up';

  return (
    <div
      className={`
        relative
        bg-[var(--grey-0)]
        rounded-[var(--radius-lg)]
        shadow-[var(--shadow-elevation-1)]
        overflow-hidden
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      <div className="flex">
        {/* Content */}
        <div className="flex-1 p-[var(--spacing-md)] flex flex-col gap-[var(--spacing-sm)]">
          {/* Badge */}
          <div>
            <Badge variant="outline" size="sm">
              {badgeLabel}
            </Badge>
          </div>

          {/* Headline */}
          <h3 className="text-headline-xs text-[var(--text-primary)] pr-[var(--spacing-md)]">
            {headline}
          </h3>

          {/* Description */}
          <p className="text-paragraph-xs text-[var(--text-secondary)] pr-[var(--spacing-md)]">
            {description}
          </p>

          {/* CTA Button */}
          <div className="mt-auto pt-[var(--spacing-xs)]">
            <Button
              variant="primary"
              size="small"
              onClick={onClick}
              className="!h-[36px] !px-[var(--spacing-md)] !text-label-sm"
            >
              {ctaText}
            </Button>
          </div>
        </div>

        {/* Image */}
        {imageSrc && (
          <div className="relative w-[140px] h-[180px] flex-shrink-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
            />
          </div>
        )}

        {/* Placeholder image if no src */}
        {!imageSrc && (
          <div className="w-[140px] h-[180px] flex-shrink-0 bg-[var(--grey-200)] flex items-center justify-center">
            <span className="text-[48px]">
              {type === 'calling' ? '📞' : '📱'}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================
// EXPORTS
// ============================================

export default IntroOfferCard;
