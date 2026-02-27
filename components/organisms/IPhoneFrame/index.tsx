'use client';

import React from 'react';

interface IPhoneFrameProps {
  children: React.ReactNode;
}

export function IPhoneFrame({ children }: IPhoneFrameProps) {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460] p-4 sm:p-8">
      <div className="relative">
        <div
          className="relative bg-[#1a1a1a] rounded-[55px] p-[12px] shadow-2xl"
          style={{
            boxShadow:
              '0 0 0 2px #333, 0 0 0 4px #1a1a1a, 0 25px 60px rgba(0,0,0,0.5), inset 0 0 8px rgba(255,255,255,0.05)',
          }}
        >
          <div className="absolute left-[-3px] top-[120px] w-[3px] h-[32px] bg-[#2a2a2a] rounded-l-[2px]" />
          <div className="absolute left-[-3px] top-[175px] w-[3px] h-[55px] bg-[#2a2a2a] rounded-l-[2px]" />
          <div className="absolute left-[-3px] top-[240px] w-[3px] h-[55px] bg-[#2a2a2a] rounded-l-[2px]" />
          <div className="absolute right-[-3px] top-[190px] w-[3px] h-[72px] bg-[#2a2a2a] rounded-r-[2px]" />

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

interface StatusBarProps {
  dark?: boolean;
}

export function StatusBar({ dark = false }: StatusBarProps) {
  const textColor = dark ? 'text-white' : 'text-[var(--text-primary)]';
  const now = new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  });

  return (
    <div className="relative h-[54px] flex items-end justify-between px-[24px] pb-[6px]">
      <div className="absolute top-[10px] left-1/2 -translate-x-1/2 w-[126px] h-[37px] bg-black rounded-[20px] z-10" />
      <span className={`text-[15px] font-semibold ${textColor} z-0`}>
        {timeString}
      </span>
      <div className={`flex items-center gap-[5px] ${textColor} z-0`}>
        <svg width="17" height="12" viewBox="0 0 17 12" fill="currentColor">
          <rect x="0" y="9" width="3" height="3" rx="0.5" opacity="1" />
          <rect x="4.5" y="6" width="3" height="6" rx="0.5" opacity="1" />
          <rect x="9" y="3" width="3" height="9" rx="0.5" opacity="1" />
          <rect x="13.5" y="0" width="3" height="12" rx="0.5" opacity="1" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor">
          <path d="M8 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" transform="translate(0,-2)" />
          <path d="M4.93 8.46a4.5 4.5 0 016.14 0" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round" transform="translate(0,-1)" />
          <path d="M2.1 5.63a8.1 8.1 0 0111.8 0" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M.05 3.05a11 11 0 0115.9 0" stroke="currentColor" fill="none" strokeWidth="1.4" strokeLinecap="round" transform="translate(0,1)" />
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12" fill="none" stroke="currentColor" strokeWidth="1.2">
          <rect x="0.6" y="0.6" width="21.8" height="10.8" rx="2.5" />
          <rect x="23" y="4" width="2" height="4" rx="1" fill="currentColor" stroke="none" />
          <rect
            x="2.3"
            y="2.3"
            width="18.1"
            height="7.2"
            rx="1.5"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}

export default IPhoneFrame;
