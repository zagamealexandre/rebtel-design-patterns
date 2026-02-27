'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import {
  Label,
  ActionLabel,
  Avatar,
  SearchIcon,
  GridIcon,
  EyeIcon,
  PhoneIcon,
  MoreIcon,
  BottomNavBar,
  BottomSheet,
  CallingScreenView,
} from '@/components';
import { mockContacts, Contact } from '@/data/mockContacts';

type FlowState = 'home' | 'out_of_minutes' | 'low_on_minutes' | 'connecting' | 'ringing' | 'in_call' | 'call_ended';

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

const recentCalls: RecentCall[] = [
  { contact: mockContacts[0], minutesLeft: 340, timestamp: '10 minutes ago', localTime: '2:30 PM' },
  { contact: mockContacts[1], minutesLeft: 2, timestamp: '1 days ago', localTime: '2:30 PM' },
  { contact: mockContacts[3], minutesLeft: 0, timestamp: '10 days ago', localTime: '5:15 PM' },
];

const recentTopUps: RecentTopUp[] = [
  {
    contact: mockContacts[4],
    phoneNumber: '+1 2133 3244 2323',
    planName: 'Monthly 1000 Min',
    amountReceived: '₦3000',
    timestamp: '12 days ago',
  },
];

export default function NewHomePage() {
  const router = useRouter();
  const [flowState, setFlowState] = useState<FlowState>('home');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [callDuration, setCallDuration] = useState(0);

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
    setFlowState('home');
    setSelectedContact(null);
  }, []);

  const handleCallAnyway = useCallback(() => {
    setFlowState('connecting');
  }, []);

  const handleDismissSheet = useCallback(() => {
    setFlowState('home');
    setSelectedContact(null);
  }, []);

  const handleEndCall = useCallback(() => {
    setFlowState('call_ended');
  }, []);

  const handleReturnHome = useCallback(() => {
    setFlowState('home');
    setSelectedContact(null);
    setCallDuration(0);
  }, []);

  const handleBottomNavChange = useCallback((tab: 'home' | 'services' | 'account') => {
    if (tab === 'home') {
      router.push('/new_home');
      return;
    }
    if (tab === 'services') {
      router.push('/services-bills');
      return;
    }
    router.push('/account');
  }, [router]);

  useEffect(() => {
    if (flowState === 'connecting') {
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
      const interval = setInterval(() => {
        setCallDuration((d) => d + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [flowState]);

  if (['connecting', 'ringing', 'in_call'].includes(flowState) && selectedContact) {
    return (
      <CallingScreenView
        contactName={selectedContact.name}
        contactFlag={selectedContact.flag}
        contactCountry={selectedContact.country}
        state={flowState as 'connecting' | 'ringing' | 'in_call'}
        duration={callDuration}
        onEndCall={handleEndCall}
      />
    );
  }

  if (flowState === 'call_ended' && selectedContact) {
    return (
      <CallingScreenView
        contactName={selectedContact.name}
        contactFlag={selectedContact.flag}
        contactCountry={selectedContact.country}
        state="ended"
        duration={callDuration}
        onReturnHome={handleReturnHome}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[var(--background)] pb-[120px] max-w-[390px] mx-auto">
      {/* Status bar spacer */}
      <div className="h-[54px]" />

      {/* Top bar - Figma: px-16, py-12, gap-8 */}
      <div className="flex items-center gap-[8px] px-[16px] py-[12px]">
        {/* Search input - Figma: white bg, 1px border #dcdce1, h-40, rounded-24 */}
        <div className="flex-1 relative">
          <SearchIcon className="absolute left-[12px] top-1/2 -translate-y-1/2 w-[24px] h-[24px] text-[var(--text-tertiary)]" />
          <input
            type="text"
            placeholder="Search contacts"
            className="w-full h-[40px] pl-[44px] pr-[12px] bg-white border border-[#dcdce1] rounded-[24px] text-label-md placeholder:text-[var(--text-tertiary)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)]"
          />
        </div>
        {/* Numpad icon - Figma: white bg, 1px border, 40x40, rounded-20 */}
        <button
          type="button"
          className="w-[40px] h-[40px] rounded-[20px] bg-white border border-[#dcdce1] flex items-center justify-center text-[var(--text-primary)] shrink-0"
        >
          <GridIcon className="w-[24px] h-[24px]" />
        </button>
        {/* Pill: Eye + Connection indicator - Figma: combined pill shape */}
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

      {/* Content area - Figma: left-16, top-118, w-358, gap-12 between card groups */}
      <div className="px-[16px] flex flex-col gap-[12px]">
        {/* Recent Activity label - Figma: label-sm 14px, secondary color */}
        <p className="text-label-sm text-[var(--text-secondary)] tracking-[0.28px]">
          Recent Activity
        </p>

        {/* Calling Cards */}
        {recentCalls.map((call, index) => (
          <CallingCardFigma
            key={`call-${index}`}
            call={call}
            onCallAgain={() => handleCallAgain(call)}
          />
        ))}

        {/* MTU Cards */}
        {recentTopUps.map((topup, index) => (
          <MTUCardFigma key={`mtu-${index}`} topup={topup} />
        ))}
      </div>

      <BottomNavBar activeTab="home" onTabChange={handleBottomNavChange} />

      {/* Bottom Sheet: Out of minutes */}
      <BottomSheet
        isOpen={flowState === 'out_of_minutes'}
        onClose={handleDismissSheet}
        title="You're out of minutes"
      >
        <div className="flex flex-col">
          <button
            type="button"
            onClick={handleAddMinutes}
            className="w-full h-[64px] bg-[#111] rounded-[32px] flex items-center justify-center text-label-xl text-white tracking-[0.4px] hover:bg-[#222] transition-colors"
          >
            Add minutes
          </button>
        </div>
      </BottomSheet>

      {/* Bottom Sheet: Low on minutes */}
      <BottomSheet
        isOpen={flowState === 'low_on_minutes'}
        onClose={handleDismissSheet}
        title="You're low on minutes"
      >
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
      </BottomSheet>
    </div>
  );
}

// ==================================================
// CALLING CARD - Matched to Figma node 12386:16319
// ==================================================
// Figma specs: bg #edeadd, rounded-12, shadow 4px 5px 10px rgba(0,0,0,0.02)
// Padding: pt-8 px-12 pb-12, inner gap-12
// "Call again" button: bg #111, white text, h-32, rounded-16

function CallingCardFigma({
  call,
  onCallAgain,
}: {
  call: RecentCall;
  onCallAgain: () => void;
}) {
  return (
    <div className="bg-[#edeadd] rounded-[12px] shadow-[4px_5px_10px_0px_rgba(0,0,0,0.02)] flex flex-col gap-[12px] pt-[8px] px-[12px] pb-[12px]">
      {/* Top row - Figma: justify-between */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          {/* Action label - Figma: bg rgba(17,17,17,0.6), px-8 py-4, rounded-12 */}
          <div className="bg-[rgba(17,17,17,0.6)] px-[8px] py-[4px] rounded-[12px]">
            <span className="text-label-xs text-white tracking-[0.22px]">Calling</span>
          </div>
          {/* Timestamp - Figma: label-xs, color #505055 */}
          <span className="text-label-xs text-[#505055] tracking-[0.22px]">{call.timestamp}</span>
        </div>
        <button type="button" className="w-[24px] h-[24px] flex items-center justify-center text-[var(--text-secondary)]">
          <MoreIcon className="w-full h-full" />
        </button>
      </div>

      {/* Contact info - Figma: flex-col gap-8 */}
      <div className="flex flex-col gap-[8px]">
        {/* Flag + Avatar + Name container - Figma: flex-col gap-4 */}
        <div className="flex flex-col gap-[4px]">
          {/* Flag & profile - Figma: 56x32 overlapping */}
          <div className="relative w-[56px] h-[32px]">
            <span className="absolute left-0 top-0 text-[24px] leading-none">{call.contact.flag}</span>
            <div className="absolute left-[24px] top-0">
              <Avatar fallback={call.contact.name} size="md" className="border-2 border-[#edeadd]" />
            </div>
          </div>
          {/* Name - Figma: label-xl 20px, primary */}
          <span className="text-label-xl text-[var(--text-primary)] tracking-[0.4px]">{call.contact.name}</span>
        </div>

        {/* Phone + local time / minutes - Figma: flex-col gap-4 */}
        <div className="flex flex-col gap-[4px]">
          {/* Phone row - Figma: label-md 16px primary, "Local time" label-xs #505055 */}
          <div className="flex items-end justify-between">
            <span className="text-label-md text-[var(--text-primary)] tracking-[0.32px]">{call.contact.phoneNumber}</span>
            <span className="text-label-xs text-[#505055] text-right tracking-[0.22px]">Local time</span>
          </div>
          {/* Minutes left row - Figma: h-14, label-sm 14px #505055, gap-2 for dot */}
          <div className="flex items-center justify-between h-[14px]">
            <div className="flex items-center gap-[2px]">
              <div className={`w-[8px] h-[8px] rounded-full shrink-0 ${call.minutesLeft > 3 ? 'bg-[var(--semantic-green)]' : call.minutesLeft > 0 ? 'bg-[var(--semantic-warning)]' : 'bg-[var(--brand-red)]'}`} />
              <span className="text-label-sm text-[#505055] tracking-[0.28px]">
                {call.minutesLeft} {call.minutesLeft === 1 ? 'minute' : 'minutes'} left
              </span>
            </div>
            <span className="text-label-sm text-[#505055] text-right tracking-[0.28px]">{call.localTime}</span>
          </div>
        </div>
      </div>

      {/* Call again button - Figma: bg #111, white text, h-32, rounded-16, full width */}
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

// ==================================================
// MTU CARD - Matched to Figma node 12386:16372
// ==================================================
// Figma specs: bg #dae2f4, rounded-12, shadow same
// "Product" button: border-2 border-white, rounded-32, w-138, h-32
// "Send again" button: bg #111, white text, rounded-16, w-190, h-32

function MTUCardFigma({ topup }: { topup: RecentTopUp }) {
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

      {/* Content - Figma: flex-col gap-8 */}
      <div className="flex flex-col gap-[8px]">
        {/* Flag */}
        <div className="relative w-[56px] h-[32px]">
          <span className="text-[24px] leading-none">{topup.contact.flag}</span>
        </div>

        {/* Name + info row - Figma: flex gap-4 items-center */}
        <div className="flex gap-[4px] items-start">
          {/* Left: phone + plan */}
          <div className="flex-1 flex flex-col gap-[4px]">
            <span className="text-label-xl text-[var(--text-primary)] tracking-[0.4px]">{topup.phoneNumber}</span>
            <span className="text-label-sm text-[#505055] tracking-[0.28px]">{topup.planName}</span>
          </div>
          {/* Right: "They got" + amount */}
          <div className="flex flex-col items-end shrink-0">
            <span className="text-label-xs text-[var(--text-secondary)] tracking-[0.22px]">They got</span>
            <span className="text-paragraph-sm text-[var(--text-primary)] tracking-[0.28px]">{topup.amountReceived}</span>
          </div>
        </div>
      </div>

      {/* Action buttons - Figma: flex justify-between */}
      <div className="flex items-center justify-between">
        {/* Product - Figma: border-2 border-white, rounded-32, w-138, h-32 */}
        <button
          type="button"
          className="w-[138px] h-[32px] rounded-[32px] border-2 border-white bg-transparent flex items-center justify-center text-label-sm text-[var(--text-primary)] tracking-[0.28px] hover:bg-white/20 transition-colors"
        >
          Product
        </button>
        {/* Send again - Figma: bg #111, rounded-16, w-190, h-32, white text */}
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
