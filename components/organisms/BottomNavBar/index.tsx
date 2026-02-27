'use client';

import React from 'react';
import { NavHomeIcon, NavServicesIcon, NavAccountIcon } from '@/components/atoms/Icon';

// ============================================
// TYPE DEFINITIONS
// ============================================

type NavTab = 'home' | 'services' | 'account';

type BottomNavVariant = 'fixed' | 'inline';

interface BottomNavBarProps {
  activeTab?: NavTab;
  onTabChange?: (tab: NavTab) => void;
  className?: string;
  variant?: BottomNavVariant;
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
      <div className="w-[32px] h-[32px]">
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
  variant = 'fixed',
}: BottomNavBarProps) {
  const handleTabChange = (tab: NavTab) => {
    onTabChange?.(tab);
  };

  const wrapperClasses =
    variant === 'fixed'
      ? `fixed bottom-0 left-0 right-0 bg-[var(--grey-0)] border-t border-[var(--border-primary)] safe-area-pb ${className}`
      : `relative mt-auto bg-[var(--grey-0)] border-t border-[var(--border-primary)] ${className}`;

  const contentPadding = variant === 'fixed' ? 'py-[var(--spacing-xs)]' : 'py-[var(--spacing-xs)]';

  return (
    <nav className={wrapperClasses.replace(/\s+/g, ' ').trim()}>
      <div className={`max-w-[390px] mx-auto flex items-center justify-around ${contentPadding}`}>
        <NavItem
          icon={<NavHomeIcon className="w-full h-full" active={activeTab === 'home'} />}
          label="Home"
          isActive={activeTab === 'home'}
          onClick={() => handleTabChange('home')}
        />
        <NavItem
          icon={<NavServicesIcon className="w-full h-full" active={activeTab === 'services'} />}
          label="Services"
          isActive={activeTab === 'services'}
          onClick={() => handleTabChange('services')}
        />
        <NavItem
          icon={<NavAccountIcon className="w-full h-full" active={activeTab === 'account'} />}
          label="Account"
          isActive={activeTab === 'account'}
          onClick={() => handleTabChange('account')}
        />
      </div>

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
