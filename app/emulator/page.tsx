'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  Label,
  Headline,
  Paragraph,
  Display,
  Button,
  Avatar,
  Badge,
  ActionLabel,
  SearchIcon,
  GridIcon,
  EyeIcon,
  PhoneIcon,
  MoreIcon,
  GlobeIcon,
  ChevronRightIcon,
  BottomSheet,
  CallingScreenView,
  IntroOfferCard,
  PlanCard,
  PhonePictogram,
  CashPictogram,
  GlobePictogram,
  PercentPictogram,
} from '@/components';
import { mockContacts, Contact } from '@/data/mockContacts';

// ============================================
// TYPES
// ============================================

type FlowState =
  | 'home'
  | 'services'
  | 'account'
  | 'out_of_minutes'
  | 'low_on_minutes'
  | 'connecting'
  | 'ringing'
  | 'in_call'
  | 'call_ended';

type NavTab = 'home' | 'services' | 'account';

interface RecentCall {
  contact: Contact;
  minutesLeft: number;
  timestamp: string;
  localTime: string;
}

interface RecentTopUp {
  contact: Contact;
  phoneNumber: string;
  planName: string;
  amountReceived: string;
  timestamp: string;
}

// ============================================
// MOCK DATA
// ============================================

const recentCalls: RecentCall[] = [
  { contact: mockContacts[0], minutesLeft: 340, timestamp: '10 min ago', localTime: '2:30 PM' },
  { contact: mockContacts[1], minutesLeft: 2, timestamp: '1 day ago', localTime: '9:15 AM' },
  { contact: mockContacts[3], minutesLeft: 0, timestamp: '10 days ago', localTime: '5:15 PM' },
];

const recentTopUps: RecentTopUp[] = [
  {
    contact: mockContacts[4],
    phoneNumber: '+91 98765 43210',
    planName: 'Monthly 1000 Min',
    amountReceived: '₹3000',
    timestamp: '12 days ago',
  },
];

// ============================================
// IPHONE FRAME COMPONENT
// ============================================

function IPhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-8">
      {/* Phone body */}
      <div className="relative">
        {/* Outer bezel */}
        <div
          className="relative bg-[#1a1a1a] rounded-[55px] p-[12px] shadow-2xl"
          style={{
            boxShadow:
              '0 0 0 2px #333, 0 0 0 4px #1a1a1a, 0 25px 60px rgba(0,0,0,0.5), inset 0 0 8px rgba(255,255,255,0.05)',
          }}
        >
          {/* Side buttons - left */}
          <div className="absolute left-[-3px] top-[120px] w-[3px] h-[32px] bg-[#2a2a2a] rounded-l-[2px]" />
          <div className="absolute left-[-3px] top-[175px] w-[3px] h-[55px] bg-[#2a2a2a] rounded-l-[2px]" />
          <div className="absolute left-[-3px] top-[240px] w-[3px] h-[55px] bg-[#2a2a2a] rounded-l-[2px]" />

          {/* Side button - right (power) */}
          <div className="absolute right-[-3px] top-[190px] w-[3px] h-[72px] bg-[#2a2a2a] rounded-r-[2px]" />

          {/* Screen area */}
          <div
            className="relative w-[390px] h-[844px] bg-[var(--background)] rounded-[44px] overflow-hidden"
            style={{ boxShadow: 'inset 0 0 1px rgba(255,255,255,0.1)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================
// STATUS BAR
// ============================================

function StatusBar({ dark = false }: { dark?: boolean }) {
  const textColor = dark ? 'text-white' : 'text-[var(--text-primary)]';
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div className="relative h-[54px] flex items-end justify-between px-[24px] pb-[6px]">
      {/* Dynamic Island */}
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-[20px] z-10" />

      {/* Time */}
      <span className={`text-[15px] font-semibold ${textColor} z-0`}>
        {timeString}
      </span>

      {/* Right icons */}
      <div className={`flex items-center gap-[5px] ${textColor} z-0`}>
        {/* Signal bars */}
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
          <rect x="0" y="9" width="3" height="3" rx="0.5" opacity="1" />
          <rect x="4.5" y="6" width="3" height="6" rx="0.5" opacity="1" />
          <rect x="9" y="3" width="3" height="9" rx="0.5" opacity="1" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="1" />
        </svg>
        {/* WiFi */}
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" transform="translate(0,-2)" />
          <path d="M4.93 8.46a4.5 4.5 0 016.14 0" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round" transform="translate(0,-1)" />
          <path d="M2.1 5.63a8.1 8.1 0 0111.8 0" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M.05 3.05a11 11 0 0115.9 0" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round" transform="translate(0,1)" />
        </svg>
        {/* Battery */}
        <svg width="27" height="12" viewBox="0 0 27 12" fill="currentColor">
          <rect x="0" y="0.5" width="23" height="11" rx="2.5" stroke="currentColor" fill="none" strokeWidth="1" opacity="0.35" />
          <rect x="1.5" y="2" width="18" height="8" rx="1.5" fill="currentColor" />
          <rect x="24" y="3.5" width="2.5" height="5" rx="1" opacity="0.4" fill="currentColor" />
        </svg>
      </div>
    </div>
  );
}

// ============================================
// BRANDED NAV ICONS (from icon-main-menu SVGs)
// ============================================

function NavIconHome({ active }: { active: boolean }) {
  // icon-main-menu.svg — Heart inside oval pill
  const fill = active ? '#111111' : 'none';
  const stroke = active ? 'none' : '#B9B9BE';
  const heartFill = active ? 'white' : '#B9B9BE';
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      {/* Oval pill background */}
      <path
        d="M4 20C4 17.8122 4.78096 15.7601 6.14632 13.9923C8.91455 10.4087 14.0811 8 20 8C28.8355 8 36 13.3732 36 20C36 26.6268 28.8373 32 20 32C11.1627 32 4 26.6268 4 20Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={active ? 0 : 1.8}
        strokeMiterlimit="10"
      />
      {/* Heart */}
      <path
        d="M19.927 16.0725C20.4814 15.5667 20.9537 14.9937 21.5681 14.6007C23.4554 13.3928 26.3654 14.0895 27.4481 15.9488C28.3648 17.5224 28.1446 19.4835 26.7497 20.8479C25.8951 21.6848 24.8804 22.3888 23.9217 23.1347C22.769 24.0315 21.5942 24.9048 20.4374 25.798C20.1712 26.0036 19.947 26.0963 19.6348 25.8617C17.9537 24.5919 16.2605 23.3366 14.5814 22.0631C13.5487 21.2809 12.6381 20.4149 12.2218 19.1997C11.4353 16.9039 12.8042 14.5789 15.3219 14.1077C17.2132 13.753 18.7082 14.3242 19.7649 15.8487C19.833 15.947 19.905 16.0434 19.927 16.0725Z"
        fill={heartFill}
      />
    </svg>
  );
}

function NavIconServices({ active }: { active: boolean }) {
  // icon-main-menu2.svg — "R" letter inside oval pill
  const fill = active ? '#111111' : 'none';
  const stroke = active ? 'none' : '#B9B9BE';
  const letterFill = active ? 'white' : '#B9B9BE';
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      {/* Oval pill outline */}
      <path
        d="M20 9C24.2222 9 28.0064 10.2856 30.7129 12.3154C33.4191 14.3451 35 17.072 35 20C35 22.9281 33.4198 25.656 30.7139 27.6855C28.0077 29.7152 24.223 31 20 31C15.777 31 11.9923 29.7152 9.28613 27.6855C6.58021 25.656 5 22.9281 5 20C5 18.0602 5.69009 16.2186 6.9375 14.6035C9.48103 11.3108 14.328 9 20 9Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={active ? 0 : 2}
        strokeMiterlimit="10"
      />
      {/* R letter */}
      <path
        d="M25.9957 15.0048V25H18.2026C15.8659 25 14.291 23.6418 14.291 21.7575C14.291 20.2989 15.2625 18.8594 17.3081 18.5007L14 15.0574L14.0385 15H16.9016L19.893 18.2712H23.6377V15H26L25.9957 15.0048ZM18.4722 22.9292H23.6334V20.3467H18.4722C17.3338 20.3467 16.5934 20.7915 16.5934 21.6475C16.5934 22.5036 17.3338 22.934 18.4722 22.934V22.9292Z"
        fill={letterFill}
      />
    </svg>
  );
}

function NavIconAccount({ active }: { active: boolean }) {
  // icon-main-menu3.svg — Person inside oval pill
  const fill = active ? '#111111' : 'none';
  const outerStroke = active ? 'none' : '#B9B9BE';
  const personStroke = active ? 'white' : '#B9B9BE';
  return (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
      {/* Oval pill outline */}
      <path
        d="M20.0005 9.1333C24.4579 9.13336 28.4596 10.3997 31.3257 12.4058C34.1944 14.4139 35.8667 17.1119 35.8667 20.0005C35.8666 22.889 34.195 25.5863 31.3267 27.5942C28.4608 29.6004 24.459 30.8666 20.0005 30.8667C15.5418 30.8667 11.5393 29.6005 8.67334 27.5942C5.80507 25.5863 4.13343 22.889 4.1333 20.0005C4.1333 18.0875 4.86249 16.2666 6.18506 14.6685C8.88205 11.4101 14.0132 9.1333 20.0005 9.1333Z"
        fill={fill}
        stroke={outerStroke}
        strokeWidth={active ? 0 : 1.6}
        strokeMiterlimit="10"
      />
      {/* Person silhouette */}
      <path
        d="M12.5 30C13.3346 27.1589 15.0001 23.3333 20.0001 23.3333C25.0001 23.3333 27.1656 27.1589 28.0002 30M23.4723 17.5014C23.4723 19.4352 21.9177 21.0028 20.0001 21.0028C18.0824 21.0028 16.5278 19.4352 16.5278 17.5014C16.5278 15.5676 18.0824 14 20.0001 14C21.9177 14 23.4723 15.5676 23.4723 17.5014Z"
        stroke={personStroke}
        strokeWidth="1.8"
        fill="none"
      />
    </svg>
  );
}

// ============================================
// BOTTOM NAV BAR (inline for emulator)
// ============================================

function EmulatorNavBar({
  activeTab,
  onTabChange,
}: {
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
}) {
  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-[var(--grey-0)] border-t border-[var(--border-primary)]">
      <div className="flex items-center justify-around py-[8px]">
        {[
          { id: 'home' as NavTab, icon: <NavIconHome active={activeTab === 'home'} />, label: 'Home' },
          { id: 'services' as NavTab, icon: <NavIconServices active={activeTab === 'services'} />, label: 'Services' },
          { id: 'account' as NavTab, icon: <NavIconAccount active={activeTab === 'account'} />, label: 'Account' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => onTabChange(tab.id)}
            className={`flex flex-col items-center gap-[4px] py-[8px] px-[16px] transition-colors ${
              activeTab === tab.id ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
            }`}
          >
            <div className="w-[32px] h-[32px]">{tab.icon}</div>
            <span className="text-label-xs">{tab.label}</span>
          </button>
        ))}
      </div>
      {/* Home indicator */}
      <div className="flex justify-center pb-[8px]">
        <div className="w-[134px] h-[5px] bg-[var(--grey-900)] rounded-full" />
      </div>
    </nav>
  );
}

// ============================================
// HOME SCREEN - CALLING CARD
// ============================================

function CallingCardEmulator({
  call,
  onCallAgain,
}: {
  call: RecentCall;
  onCallAgain: () => void;
}) {
  return (
    <div className="bg-[#edeadd] rounded-[12px] shadow-[4px_5px_10px_0px_rgba(0,0,0,0.02)] flex flex-col gap-[12px] pt-[8px] px-[12px] pb-[12px]">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="bg-[rgba(17,17,17,0.6)] px-[8px] py-[4px] rounded-[12px]">
            <span className="text-label-xs text-white tracking-[0.22px]">Calling</span>
          </div>
          <span className="text-label-xs text-[#505055] tracking-[0.22px]">{call.timestamp}</span>
        </div>
        <button type="button" className="w-[24px] h-[24px] flex items-center justify-center text-[var(--text-secondary)]">
          <MoreIcon className="w-full h-full" />
        </button>
      </div>

      {/* Contact info */}
      <div className="flex flex-col gap-[8px]">
        <div className="flex flex-col gap-[4px]">
          {/* Flag & Avatar overlap */}
          <div className="relative w-[56px] h-[32px]">
            <span className="absolute left-0 top-0 text-[24px] leading-none">{call.contact.flag}</span>
            <div className="absolute left-[24px] top-0">
              <Avatar fallback={call.contact.name} size="md" className="border-2 border-[#edeadd]" />
            </div>
          </div>
          <span className="text-label-xl text-[var(--text-primary)] tracking-[0.4px]">{call.contact.name}</span>
        </div>

        <div className="flex flex-col gap-[4px]">
          <div className="flex items-end justify-between">
            <span className="text-label-md text-[var(--text-primary)] tracking-[0.32px]">{call.contact.phoneNumber}</span>
            <span className="text-label-xs text-[#505055] text-right tracking-[0.22px]">Local time</span>
          </div>
          <div className="flex items-center justify-between h-[14px]">
            <div className="flex items-center gap-[2px]">
              <div className={`w-[8px] h-[8px] rounded-full shrink-0 ${
                call.minutesLeft > 3
                  ? 'bg-[var(--semantic-green)]'
                  : call.minutesLeft > 0
                  ? 'bg-[var(--semantic-warning)]'
                  : 'bg-[var(--brand-red)]'
              }`} />
              <span className="text-label-sm text-[#505055] tracking-[0.28px]">
                {call.minutesLeft} {call.minutesLeft === 1 ? 'minute' : 'minutes'} left
              </span>
            </div>
            <span className="text-label-sm text-[#505055] text-right tracking-[0.28px]">{call.localTime}</span>
          </div>
        </div>
      </div>

      {/* Call again button */}
      <button
        type="button"
        onClick={onCallAgain}
        className="w-full h-[32px] rounded-[16px] bg-[#111] flex items-center justify-center text-label-sm text-white tracking-[0.28px] hover:bg-[#222] transition-colors"
      >
        Call again
      </button>
    </div>
  );
}

// ============================================
// HOME SCREEN - MTU CARD
// ============================================

function MTUCardEmulator({ topup }: { topup: RecentTopUp }) {
  return (
    <div className="bg-[#dae2f4] rounded-[12px] shadow-[4px_5px_10px_0px_rgba(0,0,0,0.02)] flex flex-col gap-[12px] pt-[8px] px-[12px] pb-[12px]">
      {/* Top row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <div className="bg-[rgba(17,17,17,0.6)] px-[8px] py-[4px] rounded-[12px]">
            <span className="text-label-xs text-white tracking-[0.22px]">Top-up</span>
          </div>
          <span className="text-label-xs text-[#505055] tracking-[0.22px]">{topup.timestamp}</span>
        </div>
        <button type="button" className="w-[24px] h-[24px] flex items-center justify-center text-[var(--text-secondary)]">
          <MoreIcon className="w-full h-full" />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-[8px]">
        <div className="relative w-[56px] h-[32px]">
          <span className="text-[24px] leading-none">{topup.contact.flag}</span>
        </div>
        <div className="flex gap-[4px] items-start">
          <div className="flex-1 flex flex-col gap-[4px]">
            <span className="text-label-xl text-[var(--text-primary)] tracking-[0.4px]">{topup.phoneNumber}</span>
            <span className="text-label-sm text-[#505055] tracking-[0.28px]">{topup.planName}</span>
          </div>
          <div className="flex flex-col items-end shrink-0">
            <span className="text-label-xs text-[var(--text-secondary)] tracking-[0.22px]">They got</span>
            <span className="text-paragraph-sm text-[var(--text-primary)] tracking-[0.28px]">{topup.amountReceived}</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between">
        <button
          type="button"
          className="w-[138px] h-[32px] rounded-[32px] border-2 border-white bg-transparent flex items-center justify-center text-label-sm text-[var(--text-primary)] tracking-[0.28px] hover:bg-white/20 transition-colors"
        >
          Product
        </button>
        <button
          type="button"
          className="w-[190px] h-[32px] rounded-[16px] bg-[#111] flex items-center justify-center text-label-sm text-white tracking-[0.28px] hover:bg-[#222] transition-colors"
        >
          Send again
        </button>
      </div>
    </div>
  );
}

// ============================================
// HOME TAB CONTENT
// ============================================

function HomeTab({
  onCallAgain,
}: {
  onCallAgain: (call: RecentCall) => void;
}) {
  return (
    <div className="flex-1 overflow-y-auto pb-[100px]">
      {/* Top bar */}
      <div className="flex items-center gap-[8px] px-[16px] py-[12px]">
        {/* Search */}
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] text-[var(--text-tertiary)]" />
          <input
            type="text"
            placeholder="Search contacts"
            className="w-full h-[40px] pl-[44px] pr-[12px] bg-white border border-[#dcdce1] rounded-[24px] text-label-md placeholder:text-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
          />
        </div>
        {/* Numpad button */}
        <button
          type="button"
          className="w-[40px] h-[40px] rounded-[20px] bg-white border border-[#dcdce1] flex items-center justify-center text-[var(--text-primary)] shrink-0"
        >
          <GridIcon className="w-[24px] h-[24px]" />
        </button>
        {/* Eye + connection */}
        <div className="flex items-center shrink-0">
          <div className="h-[40px] bg-white border border-[#dcdce1] border-r-0 rounded-l-[20px] flex items-center pl-[12px] pr-[8px]">
            <EyeIcon className="w-[24px] h-[24px] text-[var(--text-primary)]" />
          </div>
          <div className="h-[40px] bg-white border border-[#dcdce1] border-l-0 rounded-r-[20px] flex items-center pl-[12px] pr-[8px]">
            <div className="w-[20px] h-[20px] relative">
              <div className="absolute inset-[2px] rounded-full border-2 border-[var(--semantic-green)] opacity-30" />
              <div className="absolute inset-[6px] rounded-full border-2 border-[var(--semantic-green)] opacity-60" />
              <div className="absolute inset-[10px] rounded-full bg-[var(--semantic-green)]" />
            </div>
          </div>
        </div>
      </div>

      {/* Activity feed */}
      <div className="px-[16px] flex flex-col gap-[12px]">
        <p className="text-label-sm text-[var(--text-secondary)] tracking-[0.28px]">
          Recent Activity
        </p>

        {recentCalls.map((call, index) => (
          <CallingCardEmulator
            key={`call-${index}`}
            call={call}
            onCallAgain={() => onCallAgain(call)}
          />
        ))}

        {recentTopUps.map((topup, index) => (
          <MTUCardEmulator key={`mtu-${index}`} topup={topup} />
        ))}
      </div>
    </div>
  );
}

// ============================================
// SERVICES TAB CONTENT
// ============================================

function ServicesTab() {
  return (
    <div className="flex-1 overflow-y-auto pb-[100px]">
      <div className="px-[16px] pt-[8px]">
        <Display size="sm" className="mb-[4px]">Services</Display>
        <Paragraph size="sm" color="secondary" className="mb-[24px]">
          Explore calling plans and mobile top-ups
        </Paragraph>

        {/* Calling section */}
        <div className="mb-[24px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <PhonePictogram size="sm" className="text-[var(--text-primary)]" />
            <Headline size="xs">Calling Plans</Headline>
          </div>

          <div className="flex flex-col gap-[12px]">
            <PlanCard
              badge="Best value"
              badgeVariant="brand"
              price="$10"
              title="7-day free trial"
              description="Unlimited calls. Then $12/month."
              features={['Unlimited mins', '30+ countries', 'HD quality']}
              onClick={() => {}}
            />
            <PlanCard
              badge="Popular"
              badgeVariant="outline"
              price="$5"
              title="Pay as you go"
              description="$0.02/min to most destinations"
              features={['No contract', 'Global reach']}
              onClick={() => {}}
            />
          </div>
        </div>

        {/* Top-up section */}
        <div className="mb-[24px]">
          <div className="flex items-center gap-[8px] mb-[12px]">
            <CashPictogram size="sm" className="text-[var(--text-primary)]" />
            <Headline size="xs">Mobile Top-up</Headline>
          </div>

          <div className="bg-[var(--grey-0)] rounded-[var(--radius-lg)] shadow-[var(--shadow-elevation-1)] p-[16px]">
            <div className="flex items-center gap-[12px] mb-[12px]">
              <div className="w-[48px] h-[48px] rounded-full bg-[var(--surface-mtu)] flex items-center justify-center">
                <GlobeIcon className="w-[24px] h-[24px] text-[var(--text-primary)]" />
              </div>
              <div className="flex-1">
                <Headline size="xs">Send airtime & data</Headline>
                <Paragraph size="xs" color="secondary">200+ countries supported</Paragraph>
              </div>
              <ChevronRightIcon className="w-[20px] h-[20px] text-[var(--text-secondary)]" />
            </div>

            <div className="flex gap-[8px]">
              <Badge variant="light" size="sm">Airtel</Badge>
              <Badge variant="light" size="sm">MTN</Badge>
              <Badge variant="light" size="sm">Safaricom</Badge>
              <Badge variant="light" size="sm">+200</Badge>
            </div>
          </div>
        </div>

        {/* Promo */}
        <div className="bg-gradient-to-r from-[var(--brand-red)] to-[#B6162F] rounded-[var(--radius-lg)] p-[20px] text-white">
          <div className="flex items-center gap-[8px] mb-[8px]">
            <PercentPictogram size="sm" className="text-white" />
            <Headline size="xs" className="text-white">20% off first top-up</Headline>
          </div>
          <Paragraph size="sm" className="text-white/80 mb-[16px]">
            Keep your community connected for less. Limited time offer.
          </Paragraph>
          <button className="bg-white text-[var(--brand-red)] h-[40px] px-[24px] rounded-[20px] text-label-md font-semibold hover:bg-white/90 transition-colors">
            Claim offer
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================
// ACCOUNT TAB CONTENT
// ============================================

function AccountTab() {
  return (
    <div className="flex-1 overflow-y-auto pb-[100px]">
      <div className="px-[16px] pt-[8px]">
        {/* Profile header */}
        <div className="flex items-center gap-[16px] mb-[32px]">
          <Avatar fallback="Alex Z" size="xl" />
          <div className="flex-1">
            <Headline size="sm">Alex Zagame</Headline>
            <Paragraph size="sm" color="secondary">+46 70 123 4567</Paragraph>
          </div>
        </div>

        {/* Balance card */}
        <div className="bg-[var(--grey-900)] rounded-[var(--radius-lg)] p-[20px] mb-[24px]">
          <Paragraph size="xs" className="text-[var(--grey-400)] mb-[4px]">Your balance</Paragraph>
          <Display size="md" className="text-white mb-[12px]">$24.50</Display>
          <div className="flex gap-[8px]">
            <button className="flex-1 h-[40px] bg-white rounded-[20px] text-label-md text-[var(--grey-900)] font-semibold hover:bg-white/90 transition-colors">
              Add credit
            </button>
            <button className="flex-1 h-[40px] bg-[var(--grey-700)] rounded-[20px] text-label-md text-white font-semibold hover:bg-[var(--grey-600)] transition-colors">
              History
            </button>
          </div>
        </div>

        {/* Settings list */}
        <div className="flex flex-col">
          {[
            { label: 'My plans', detail: '1 active plan' },
            { label: 'Payment methods', detail: 'Visa •••• 4242' },
            { label: 'Notifications', detail: 'On' },
            { label: 'Language', detail: 'English' },
            { label: 'Help & Support', detail: '' },
            { label: 'About Rebtel', detail: 'v3.0' },
          ].map((item, i) => (
            <button
              key={i}
              type="button"
              className="flex items-center justify-between py-[16px] border-b border-[var(--border-primary)] last:border-b-0"
            >
              <span className="text-label-md text-[var(--text-primary)] tracking-[0.32px]">{item.label}</span>
              <div className="flex items-center gap-[8px]">
                {item.detail && (
                  <span className="text-label-sm text-[var(--text-secondary)] tracking-[0.28px]">{item.detail}</span>
                )}
                <ChevronRightIcon className="w-[16px] h-[16px] text-[var(--text-secondary)]" />
              </div>
            </button>
          ))}
        </div>

        {/* Sign out */}
        <button
          type="button"
          className="w-full mt-[24px] py-[16px] text-label-md text-[var(--brand-red)] text-center tracking-[0.32px]"
        >
          Sign out
        </button>
      </div>
    </div>
  );
}

// ============================================
// CALLING SCREEN WRAPPER (fitted inside frame)
// ============================================

function CallingScreenInFrame({
  contact,
  state,
  duration,
  onEndCall,
  onReturnHome,
}: {
  contact: Contact;
  state: 'connecting' | 'ringing' | 'in_call' | 'ended';
  duration: number;
  onEndCall: () => void;
  onReturnHome: () => void;
}) {
  const formatDuration = (secs: number) => {
    const m = Math.floor(secs / 60).toString().padStart(2, '0');
    const s = (secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const statusLabel = {
    connecting: 'Connecting...',
    ringing: 'Ringing...',
    in_call: formatDuration(duration),
    ended: 'Call ended',
  }[state];

  if (state === 'ended') {
    return (
      <div className="absolute inset-0 bg-[var(--grey-900)] flex flex-col items-center justify-center px-[24px] z-50 rounded-[44px]">
        <StatusBar dark />
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-[64px] h-[64px] rounded-full bg-[var(--grey-700)] flex items-center justify-center mb-[20px]">
            <PhoneIcon className="w-[28px] h-[28px] text-white" />
          </div>
          <Headline size="md" className="text-white mb-[8px]">Call ended</Headline>
          <Paragraph size="md" className="text-[var(--grey-400)] mb-[4px]">{contact.name}</Paragraph>
          <Paragraph size="sm" className="text-[var(--grey-500)] mb-[52px]">
            Duration: {formatDuration(duration)}
          </Paragraph>
          <Button variant="secondary-white" fullWidth onClick={onReturnHome}>
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-[var(--grey-900)] flex flex-col items-center justify-between py-[52px] z-50 rounded-[44px]">
      <StatusBar dark />

      {/* Contact info */}
      <div className="flex flex-col items-center gap-[16px] mt-[32px]">
        <Headline size="sm" className="text-[var(--grey-400)]">
          {contact.flag} {contact.country}
        </Headline>
        <Display size="md" className="text-white text-center">{contact.name}</Display>
        <Paragraph size="md" className="text-[var(--grey-400)]">{statusLabel}</Paragraph>
      </div>

      {/* Animated ring */}
      <div className="relative flex items-center justify-center my-[52px]">
        {(state === 'connecting' || state === 'ringing') && (
          <>
            <div className="absolute w-[160px] h-[160px] rounded-full border-2 border-[var(--grey-700)] animate-ping opacity-20" />
            <div
              className="absolute w-[120px] h-[120px] rounded-full border-2 border-[var(--grey-600)] animate-ping opacity-30"
              style={{ animationDelay: '0.3s' }}
            />
          </>
        )}
        <div className={`w-[80px] h-[80px] rounded-full flex items-center justify-center ${
          state === 'in_call' ? 'bg-[var(--semantic-green)]' : 'bg-[var(--grey-700)]'
        } transition-colors duration-500`}>
          <PhoneIcon className="w-[32px] h-[32px] text-white" />
        </div>
      </div>

      {/* End call */}
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

// ============================================
// MAIN EMULATOR PAGE
// ============================================

export default function EmulatorPage() {
  const [flowState, setFlowState] = useState<FlowState>('home');
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [callDuration, setCallDuration] = useState(0);

  // Tab switching
  const handleTabChange = useCallback((tab: NavTab) => {
    setActiveTab(tab);
    setFlowState(tab);
  }, []);

  // Call again handler
  const handleCallAgain = useCallback((call: RecentCall) => {
    setSelectedContact(call.contact);
    if (call.minutesLeft === 0) {
      setFlowState('out_of_minutes');
    } else if (call.minutesLeft <= 3) {
      setFlowState('low_on_minutes');
    } else {
      setFlowState('connecting');
    }
  }, []);

  const handleAddMinutes = useCallback(() => {
    setFlowState('services');
    setActiveTab('services');
    setSelectedContact(null);
  }, []);

  const handleCallAnyway = useCallback(() => {
    setFlowState('connecting');
  }, []);

  const handleDismissSheet = useCallback(() => {
    setFlowState('home');
    setActiveTab('home');
    setSelectedContact(null);
  }, []);

  const handleEndCall = useCallback(() => {
    setFlowState('call_ended');
  }, []);

  const handleReturnHome = useCallback(() => {
    setFlowState('home');
    setActiveTab('home');
    setSelectedContact(null);
    setCallDuration(0);
  }, []);

  // Call flow timers
  useEffect(() => {
    if (flowState === 'connecting') {
      setCallDuration(0);
      const timer = setTimeout(() => setFlowState('ringing'), 2000);
      return () => clearTimeout(timer);
    }
    if (flowState === 'ringing') {
      const timer = setTimeout(() => setFlowState('in_call'), 2500);
      return () => clearTimeout(timer);
    }
  }, [flowState]);

  useEffect(() => {
    if (flowState === 'in_call') {
      const interval = setInterval(() => setCallDuration((d) => d + 1), 1000);
      return () => clearInterval(interval);
    }
  }, [flowState]);

  // Determine if we're in calling screens
  const isCallingFlow = ['connecting', 'ringing', 'in_call', 'call_ended'].includes(flowState);

  return (
    <IPhoneFrame>
      {/* Status bar - shown in normal screens */}
      {!isCallingFlow && <StatusBar />}

      {/* Calling screen overlay */}
      {isCallingFlow && selectedContact && (
        <CallingScreenInFrame
          contact={selectedContact}
          state={flowState as 'connecting' | 'ringing' | 'in_call' | 'ended'}
          duration={callDuration}
          onEndCall={handleEndCall}
          onReturnHome={handleReturnHome}
        />
      )}

      {/* Tab content */}
      {!isCallingFlow && (
        <div className="flex flex-col h-[calc(100%-54px)]">
          {activeTab === 'home' && <HomeTab onCallAgain={handleCallAgain} />}
          {activeTab === 'services' && <ServicesTab />}
          {activeTab === 'account' && <AccountTab />}

          <EmulatorNavBar activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
      )}

      {/* Bottom Sheet: Out of minutes */}
      {flowState === 'out_of_minutes' && (
        <div className="absolute inset-0 z-50 flex items-end rounded-[44px] overflow-hidden">
          <div
            className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"
            onClick={handleDismissSheet}
            aria-hidden="true"
          />
          <div className="relative w-full animate-slide-up flex flex-col">
            <div className="bg-white rounded-t-[20px] flex flex-col items-center justify-end overflow-hidden pb-[24px] pt-[20px] px-[16px]">
              <p className="text-headline-sm text-[var(--text-primary)] text-center">
                You&apos;re out of minutes
              </p>
            </div>
            <div className="bg-white overflow-hidden pb-[12px] pt-[24px] px-[16px]">
              <button
                type="button"
                onClick={handleAddMinutes}
                className="w-full h-[64px] bg-[#111] rounded-[32px] flex items-center justify-center text-label-xl text-white tracking-[0.4px] hover:bg-[#222] transition-colors"
              >
                Add minutes
              </button>
            </div>
            <div className="bg-white flex justify-center">
              <div className="w-[134px] h-[5px] bg-[#111] rounded-[100px] mb-[8px]" />
            </div>
          </div>
        </div>
      )}

      {/* Bottom Sheet: Low on minutes */}
      {flowState === 'low_on_minutes' && (
        <div className="absolute inset-0 z-50 flex items-end rounded-[44px] overflow-hidden">
          <div
            className="absolute inset-0 bg-[rgba(0,0,0,0.4)]"
            onClick={handleDismissSheet}
            aria-hidden="true"
          />
          <div className="relative w-full animate-slide-up flex flex-col">
            <div className="bg-white rounded-t-[20px] flex flex-col items-center justify-end overflow-hidden pb-[24px] pt-[20px] px-[16px]">
              <p className="text-headline-sm text-[var(--text-primary)] text-center">
                You&apos;re low on minutes
              </p>
            </div>
            <div className="bg-white overflow-hidden pb-[12px] pt-[24px] px-[16px]">
              <div className="flex flex-col gap-[10px]">
                <button
                  type="button"
                  onClick={handleAddMinutes}
                  className="w-full h-[64px] bg-[#111] rounded-[32px] flex items-center justify-center text-label-xl text-white tracking-[0.4px] hover:bg-[#222] transition-colors"
                >
                  Add minutes
                </button>
                <button
                  type="button"
                  onClick={handleCallAnyway}
                  className="w-full h-[64px] bg-[#111] rounded-[32px] flex items-center justify-center gap-[8px] text-label-xl text-white tracking-[0.4px] hover:bg-[#222] transition-colors"
                >
                  <PhoneIcon className="w-[32px] h-[32px]" />
                  Call {selectedContact?.name.split(' ')[0]} anyway
                </button>
              </div>
            </div>
            <div className="bg-white flex justify-center">
              <div className="w-[134px] h-[5px] bg-[#111] rounded-[100px] mb-[8px]" />
            </div>
          </div>
        </div>
      )}
    </IPhoneFrame>
  );
}
