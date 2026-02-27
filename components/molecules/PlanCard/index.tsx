'use client';

import React from 'react';
import { Headline, Paragraph, Badge, Pill } from '@/components';

interface PlanCardProps {
  badge: string;
  badgeVariant?: 'brand' | 'outline' | 'light' | 'dark' | 'success' | 'warning';
  price: string;
  title: string;
  description: string;
  features: string[];
  onClick: () => void;
  className?: string;
}

export function PlanCard({
  badge,
  badgeVariant = 'brand',
  price,
  title,
  description,
  features,
  onClick,
  className = '',
}: PlanCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full text-left bg-[var(--grey-0)] rounded-[var(--radius-lg)] shadow-[var(--shadow-elevation-1)] p-[var(--spacing-md)] border-2 border-transparent hover:border-[var(--brand-red)] transition-colors ${className}`}
    >
      <div className="flex items-start justify-between mb-[var(--spacing-sm)]">
        <Badge variant={badgeVariant} size="sm">{badge}</Badge>
        <Headline size="md">{price}</Headline>
      </div>
      <Headline size="xs" className="mb-[var(--spacing-xxs)]">
        {title}
      </Headline>
      <Paragraph size="sm" color="secondary" className="mb-[var(--spacing-sm)]">
        {description}
      </Paragraph>
      <div className="flex flex-wrap gap-[var(--spacing-xs)]">
        {features.map((feature, i) => (
          <Pill key={i} variant="light" size="sm">{feature}</Pill>
        ))}
      </div>
    </button>
  );
}

export default PlanCard;
