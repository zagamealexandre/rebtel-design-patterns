'use client';

import React from 'react';
import { HeartIcon, GiftIcon, PersonIcon } from '@/components/atoms/Icon';

// ============================================
// TYPE DEFINITIONS
// ============================================

type NavTab = 'home' | 'services' | 'account';

interface BottomNavBarProps {
  activeTab?: NavTab;
  onTabChange?: (tab: NavTab) => void;
  className?: string;
}

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

// ============================================
// NAV ITEM COMPONENT
// ============================================

function NavItem({ icon, label, isActive, onClick }: NavItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex
        flex-col
        items-center
        gap-[var(--spacing-xxs)]
        py-[var(--spacing-xs)]
        px-[var(--spacing-md)]
        transition-colors
        ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}
      `.replace(/\s+/g, ' ').trim()}
    >
      <div className="w-[24px] h-[24px]">
        {icon}
      </div>
      <span className="text-label-xs">
        {label}
      </span>
    </button>
  );
}

// ============================================
// BOTTOM NAV BAR COMPONENT
// ============================================

export function BottomNavBar({
  activeTab = 'home',
  onTabChange,
  className = '',
}: BottomNavBarProps) {
  const handleTabChange = (tab: NavTab) => {
    onTabChange?.(tab);
  };

  return (
    <nav
      className={`
        fixed
        bottom-0
        left-0
        right-0
        bg-[var(--grey-0)]
        border-t
        border-[var(--border-primary)]
        safe-area-pb
        ${className}
      `.replace(/\s+/g, ' ').trim()}
    >
      <div className="max-w-[390px] mx-auto flex items-center justify-around py-[var(--spacing-xs)]">
        <NavItem
          icon={<HeartIcon className="w-full h-full" />}
          label="Home"
          isActive={activeTab === 'home'}
          onClick={() => handleTabChange('home')}
        />
        <NavItem
          icon={<GiftIcon className="w-full h-full" />}
          label="Services"
          isActive={activeTab === 'services'}
          onClick={() => handleTabChange('services')}
        />
        <NavItem
          icon={<PersonIcon className="w-full h-full" />}
          label="Account"
          isActive={activeTab === 'account'}
          onClick={() => handleTabChange('account')}
        />
      </div>

      {/* Home indicator bar (iOS style) */}
      <div className="flex justify-center pb-[var(--spacing-xs)]">
        <div className="w-[134px] h-[5px] bg-[var(--grey-900)] rounded-full" />
      </div>
    </nav>
  );
}

// ============================================
// EXPORTS
// ============================================

export default BottomNavBar;
