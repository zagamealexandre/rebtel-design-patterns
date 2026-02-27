'use client';

import React from 'react';
import { Headline, Paragraph, Label, Button, Badge, Avatar } from '@/components';
import { PhoneIcon, ChevronLeftIcon } from '@/components/atoms/Icon';

interface OutOfCreditPanelProps {
  contactName: string;
  contactFlag: string;
  contactCountry: string;
  balance?: string;
  callRate?: string;
  onBuyAndCall: () => void;
  onDismiss: () => void;
  className?: string;
}

export function OutOfCreditPanel({
  contactName,
  contactFlag,
  contactCountry,
  balance = '$0.00',
  callRate = '$0.02/min',
  onBuyAndCall,
  onDismiss,
  className = '',
}: OutOfCreditPanelProps) {
  return (
    <div className={`min-h-screen bg-[var(--background)] max-w-[390px] mx-auto flex flex-col ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-[var(--spacing-md)]">
        <button
          type="button"
          onClick={onDismiss}
          className="w-[40px] h-[40px] flex items-center justify-center text-[var(--text-primary)]"
        >
          <ChevronLeftIcon className="w-[24px] h-[24px]" />
        </button>
        <Headline size="xs">Call {contactName}</Headline>
        <div className="w-[40px]" />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-[var(--spacing-xl)] text-center">
        <div className="mb-[var(--spacing-lg)]">
          <Avatar fallback={contactName} size="xl" />
          <div className="mt-[var(--spacing-xs)] text-center">
            <span className="text-[24px]">{contactFlag}</span>
          </div>
        </div>

        <Headline size="md" className="mb-[var(--spacing-xs)]">
          You&apos;re out of credit
        </Headline>
        <Paragraph size="md" color="secondary" className="mb-[var(--spacing-xxl)]">
          To call {contactName} in {contactCountry}, you need an active calling plan or credit.
        </Paragraph>

        {/* Info card */}
        <div className="w-full bg-[var(--grey-100)] rounded-[var(--radius-lg)] p-[var(--spacing-md)] mb-[var(--spacing-xl)]">
          <div className="flex items-center justify-between mb-[var(--spacing-xs)]">
            <Label size="sm" color="secondary">Destination</Label>
            <Label size="sm" color="primary">{contactFlag} {contactCountry}</Label>
          </div>
          <div className="flex items-center justify-between mb-[var(--spacing-xs)]">
            <Label size="sm" color="secondary">Your balance</Label>
            <Label size="sm" className="text-[var(--brand-red)]">{balance}</Label>
          </div>
          <div className="flex items-center justify-between">
            <Label size="sm" color="secondary">Call rate</Label>
            <Label size="sm" color="primary">{callRate}</Label>
          </div>
        </div>
      </div>

      {/* Bottom CTAs */}
      <div className="p-[var(--spacing-md)] flex flex-col gap-[var(--spacing-sm)]">
        <Button variant="primary" fullWidth onClick={onBuyAndCall}>
          Buy a plan &amp; call
        </Button>
        <Button variant="secondary" fullWidth onClick={onDismiss}>
          Maybe later
        </Button>
      </div>
    </div>
  );
}

export default OutOfCreditPanel;
