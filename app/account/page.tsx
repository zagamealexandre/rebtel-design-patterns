'use client';

import { useRouter } from 'next/navigation';
import {
  IPhoneFrame,
  StatusBar,
  Display,
  Paragraph,
  Button,
  BottomNavBar,
} from '@/components';

export default function AccountHub() {
  const router = useRouter();

  const handleNavChange = (tab: 'home' | 'services' | 'account') => {
    if (tab === 'home') {
      router.push('/new_home');
      return;
    }
    if (tab === 'services') {
      router.push('/services-bills');
      return;
    }
    router.push('/account');
  };

  return (
    <IPhoneFrame>
      <div className="flex flex-col h-full bg-[var(--background)]">
        <StatusBar />
        <div className="flex-1 overflow-y-auto px-[16px] pt-[24px] pb-[120px]">
          <Display size="sm">Account</Display>
          <Paragraph size="sm" color="secondary" className="mb-[32px]">
            Manage plan settings, saved payment methods, and receipts. This is a placeholder view for the account tab.
          </Paragraph>
          <div className="flex flex-col gap-[12px]">
            <Button variant="primary" fullWidth onClick={() => router.push('/services-bills')}>
              Pay a Nigeria bill
            </Button>
            <Button variant="secondary" fullWidth onClick={() => router.push('/new_home')}>
              Back to recent activity
            </Button>
          </div>
        </div>
        <BottomNavBar activeTab="account" variant="inline" onTabChange={handleNavChange} />
      </div>
    </IPhoneFrame>
  );
}
