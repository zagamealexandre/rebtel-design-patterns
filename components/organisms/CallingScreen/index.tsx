'use client';

import React from 'react';
import { Display, Headline, Paragraph, Button } from '@/components';
import { PhoneIcon, CheckIcon } from '@/components/atoms/Icon';

type CallingState = 'connecting' | 'ringing' | 'in_call' | 'ended';

interface CallingScreenProps {
  contactName: string;
  contactFlag: string;
  contactCountry: string;
  state: CallingState;
  duration?: number;
  onEndCall?: () => void;
  onReturnHome?: () => void;
  className?: string;
}

function formatDuration(secs: number) {
  const m = Math.floor(secs / 60).toString().padStart(2, '0');
  const s = (secs % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

export function CallingScreenView({
  contactName,
  contactFlag,
  contactCountry,
  state,
  duration = 0,
  onEndCall,
  onReturnHome,
  className = '',
}: CallingScreenProps) {
  const statusLabel = {
    connecting: 'Connecting...',
    ringing: 'Ringing...',
    in_call: formatDuration(duration),
    ended: 'Call ended',
  }[state];

  if (state === 'ended') {
    return (
      <div className={`min-h-screen bg-[var(--grey-900)] max-w-[390px] mx-auto flex flex-col items-center justify-center px-[var(--spacing-xl)] ${className}`}>
        <div className="w-[64px] h-[64px] rounded-full bg-[var(--grey-700)] flex items-center justify-center mb-[var(--spacing-lg)]">
          <PhoneIcon className="w-[28px] h-[28px] text-white" />
        </div>

        <Headline size="md" className="text-white mb-[var(--spacing-xs)]">
          Call ended
        </Headline>
        <Paragraph size="md" className="text-[var(--grey-400)] mb-[var(--spacing-xxs)]">
          {contactName}
        </Paragraph>
        <Paragraph size="sm" className="text-[var(--grey-500)] mb-[var(--spacing-xxxl)]">
          Duration: {formatDuration(duration)}
        </Paragraph>

        <Button variant="secondary-white" fullWidth onClick={onReturnHome}>
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-[var(--grey-900)] max-w-[390px] mx-auto flex flex-col items-center justify-between py-[var(--spacing-xxxl)] ${className}`}>
      {/* Contact info */}
      <div className="flex flex-col items-center gap-[var(--spacing-md)] mt-[var(--spacing-xxxl)]">
        <Headline size="sm" className="text-[var(--grey-400)]">
          {contactFlag} {contactCountry}
        </Headline>
        <Display size="md" className="text-white text-center">
          {contactName}
        </Display>
        <Paragraph size="md" className="text-[var(--grey-400)]">
          {statusLabel}
        </Paragraph>
      </div>

      {/* Call animation ring */}
      <div className="relative flex items-center justify-center my-[var(--spacing-xxxl)]">
        {(state === 'connecting' || state === 'ringing') && (
          <>
            <div className="absolute w-[160px] h-[160px] rounded-full border-2 border-[var(--grey-700)] animate-ping opacity-20" />
            <div className="absolute w-[120px] h-[120px] rounded-full border-2 border-[var(--grey-600)] animate-ping opacity-30" style={{ animationDelay: '0.3s' }} />
          </>
        )}
        <div className={`w-[80px] h-[80px] rounded-full flex items-center justify-center ${state === 'in_call' ? 'bg-[var(--semantic-green)]' : 'bg-[var(--grey-700)]'} transition-colors duration-500`}>
          <PhoneIcon className="w-[32px] h-[32px] text-white" />
        </div>
      </div>

      {/* End call button */}
      <button
        type="button"
        onClick={onEndCall}
        className="w-[64px] h-[64px] rounded-full bg-[var(--brand-red)] flex items-center justify-center shadow-lg"
      >
        <PhoneIcon className="w-[28px] h-[28px] text-white rotate-[135deg]" />
      </button>
    </div>
  );
}

export default CallingScreenView;
