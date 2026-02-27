import React from 'react';
import { ActionLabel } from '@/components/atoms/Badge';
import { AvatarWithFlag, Avatar, Flag } from '@/components/atoms/Avatar';
import { Icon, MoreIcon } from '@/components/atoms/Icon';
import { Label } from '@/components/atoms/Typography';

// ============================================
// TYPE DEFINITIONS
// ============================================

type CardVariant = 'calling' | 'mtu';

interface BaseCardProps {
  className?: string;
  onClick?: () => void;
}

interface CallingCardProps extends BaseCardProps {
  type: 'calling';
  label?: string;
  timestamp: string;
  contactName: string;
  minutesLeft?: string;
  localTime?: string;
  profileImage?: string;
  flagImage?: string;
  countryCode?: string;
}

interface MTUCardProps extends BaseCardProps {
  type: 'mtu';
  label?: string;
  timestamp: string;
  phoneNumber: string;
  dataAmount?: string;
  operator?: string;
  flagImage?: string;
  countryCode?: string;
}

type CardProps = CallingCardProps | MTUCardProps;

// ============================================
// STYLE MAPPINGS
// ============================================

const variantStyles: Record<CardVariant, string> = {
  calling: 'bg-[var(--surface-calling)]',
  mtu: 'bg-[var(--surface-mtu)]',
};

// ============================================
// CARD HEADER COMPONENT
// ============================================

interface CardHeaderProps {
  label?: string;
  timestamp: string;
  onMoreClick?: () => void;
}

function CardHeader({ label, timestamp, onMoreClick }: CardHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-[var(--spacing-xs)]">
        {label && <ActionLabel>{label}</ActionLabel>}
        <Label size="xs" color="secondary">
          {timestamp}
        </Label>
      </div>
      <button
        onClick={onMoreClick}
        className="w-[24px] h-[24px] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        aria-label="More options"
      >
        <Icon size="md" color="inherit">
          <MoreIcon className="w-full h-full" />
        </Icon>
      </button>
    </div>
  );
}

// ============================================
// CALLING CARD COMPONENT
// ============================================

export function CallingCard({
  label = 'Calling',
  timestamp,
  contactName,
  minutesLeft,
  localTime,
  profileImage,
  flagImage,
  className = '',
  onClick,
}: Omit<CallingCardProps, 'type'>) {
  return (
    <div
      className={`
        ${variantStyles.calling}
        flex
        flex-col
        gap-[var(--spacing-sm)]
        pt-[var(--spacing-xs)]
        pb-[var(--spacing-sm)]
        px-[var(--spacing-sm)]
        rounded-[var(--radius-md)]
        shadow-[var(--shadow-elevation-1)]
        cursor-pointer
        transition-shadow
        hover:shadow-[var(--shadow-elevation-2)]
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      onClick={onClick}
    >
      {/* Header */}
      <CardHeader label={label} timestamp={timestamp} />

      {/* Content */}
      <div className="flex flex-col gap-[var(--spacing-xs)] w-full">
        {/* Avatar with Flag */}
        <div className="flex items-start w-full">
          {flagImage || profileImage ? (
            <AvatarWithFlag
              src={profileImage}
              alt={contactName}
              fallback={contactName}
              flagSrc={flagImage}
              size="md"
            />
          ) : (
            <Avatar fallback={contactName} size="md" />
          )}
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-[var(--spacing-xxs)] w-full">
          {/* Name and Local Time Label */}
          <div className="flex items-end justify-between w-full">
            <Label size="xl" color="primary">
              {contactName}
            </Label>
            {localTime && (
              <Label size="xs" color="secondary" className="text-right">
                Local time
              </Label>
            )}
          </div>

          {/* Minutes Left and Time */}
          <div className="flex items-start justify-between w-full">
            {minutesLeft && (
              <Label size="sm" className="text-[rgba(17,17,17,0.6)]">
                {minutesLeft}
              </Label>
            )}
            {localTime && (
              <Label size="sm" className="text-[rgba(17,17,17,0.6)] text-right">
                {localTime}
              </Label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// MTU CARD COMPONENT
// ============================================

export function MTUCard({
  label = 'Top-up',
  timestamp,
  phoneNumber,
  dataAmount,
  operator,
  flagImage,
  className = '',
  onClick,
}: Omit<MTUCardProps, 'type'>) {
  return (
    <div
      className={`
        ${variantStyles.mtu}
        flex
        flex-col
        gap-[var(--spacing-sm)]
        pt-[var(--spacing-xs)]
        pb-[var(--spacing-sm)]
        px-[var(--spacing-sm)]
        rounded-[var(--radius-md)]
        shadow-[var(--shadow-elevation-1)]
        cursor-pointer
        transition-shadow
        hover:shadow-[var(--shadow-elevation-2)]
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      onClick={onClick}
    >
      {/* Header */}
      <CardHeader label={label} timestamp={timestamp} />

      {/* Content */}
      <div className="flex flex-col gap-[var(--spacing-xs)] w-full">
        {/* Flag */}
        <div className="flex items-start w-full">
          {flagImage ? (
            <Flag src={flagImage} size="md" />
          ) : (
            <div className="w-[32px] h-[32px] rounded-full bg-[var(--grey-300)]" />
          )}
        </div>

        {/* Phone Info */}
        <div className="flex flex-col gap-[var(--spacing-xxs)] w-full">
          {/* Phone Number and Operator Label */}
          <div className="flex items-end justify-between w-full">
            <Label size="xl" color="primary">
              {phoneNumber}
            </Label>
            {operator && (
              <Label size="xs" color="secondary" className="text-right">
                Operator
              </Label>
            )}
          </div>

          {/* Data and Operator */}
          <div className="flex items-start justify-between w-full">
            {dataAmount && (
              <Label size="sm" color="secondary">
                {dataAmount}
              </Label>
            )}
            {operator && (
              <Label size="sm" color="secondary" className="text-right">
                {operator}
              </Label>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// GENERIC CARD COMPONENT
// ============================================

export function Card(props: CardProps) {
  if (props.type === 'calling') {
    const { type, ...rest } = props;
    return <CallingCard {...rest} />;
  }
  
  const { type, ...rest } = props;
  return <MTUCard {...rest} />;
}

// ============================================
// BASE CARD COMPONENT (for custom cards)
// ============================================

interface BaseCardComponentProps {
  variant?: CardVariant;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function BaseCard({
  variant = 'calling',
  children,
  className = '',
  onClick,
}: BaseCardComponentProps) {
  return (
    <div
      className={`
        ${variantStyles[variant]}
        flex
        flex-col
        gap-[var(--spacing-sm)]
        p-[var(--spacing-sm)]
        rounded-[var(--radius-md)]
        shadow-[var(--shadow-elevation-1)]
        ${onClick ? 'cursor-pointer hover:shadow-[var(--shadow-elevation-2)]' : ''}
        transition-shadow
        ${className}
      `.replace(/\s+/g, ' ').trim()}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

// ============================================
// EXPORTS
// ============================================

export default Card;
