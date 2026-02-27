'use client';

import { useEffect, useState } from 'react';
import {
  Display,
  Paragraph,
  Button,
  SearchIcon,
  GridIcon,
  EyeIcon,
  IntroOfferCard,
  BottomNavBar,
} from '@/components';
import { Contact } from '@/data/mockContacts';

export default function HomePage() {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  // Load selected contact from session storage
  useEffect(() => {
    const storedContact = sessionStorage.getItem('selectedContact');
    if (storedContact) {
      try {
        setSelectedContact(JSON.parse(storedContact));
      } catch (e) {
        console.error('Failed to parse stored contact');
      }
    }
  }, []);

  const destinationCountry = selectedContact?.country || 'Nigeria';

  return (
    <div className="min-h-screen bg-[var(--background)] pb-[120px] max-w-[390px] mx-auto">
      {/* Header / Search Bar */}
      <div className="p-[var(--spacing-md)]">
        <div className="flex items-center gap-[var(--spacing-xs)]">
          {/* Search input */}
          <div className="flex-1 relative">
            <SearchIcon className="absolute left-[var(--spacing-sm)] top-1/2 -translate-y-1/2 w-[20px] h-[20px] text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search contacts"
              className={`
                w-full
                h-[44px]
                pl-[44px]
                pr-[var(--spacing-md)]
                bg-[var(--grey-100)]
                border
                border-[var(--border-primary)]
                rounded-full
                text-paragraph-md
                placeholder:text-[var(--text-secondary)]
                focus:outline-none
                focus:ring-2
                focus:ring-[var(--brand-red)]
              `.replace(/\s+/g, ' ').trim()}
            />
          </div>

          {/* Action buttons */}
          <button
            type="button"
            className="w-[44px] h-[44px] rounded-full bg-[var(--grey-100)] flex items-center justify-center text-[var(--text-primary)]"
          >
            <GridIcon className="w-[20px] h-[20px]" />
          </button>
          
          <button
            type="button"
            className="w-[44px] h-[44px] rounded-full bg-[var(--grey-100)] flex items-center justify-center text-[var(--text-primary)]"
          >
            <EyeIcon className="w-[20px] h-[20px]" />
          </button>

          {/* Status indicator */}
          <div className="w-[12px] h-[12px] rounded-full bg-[var(--semantic-green)] border-2 border-white shadow-sm" />
        </div>
      </div>

      {/* Welcome Section */}
      <div className="px-[var(--spacing-md)] py-[var(--spacing-lg)] text-center">
        <Display size="sm" className="mb-[var(--spacing-xxs)]">
          Welcome to Rebtel
        </Display>
        <Paragraph size="md" color="secondary">
          The place for dual-culture people like you to connect their worlds.
        </Paragraph>
      </div>

      {/* Offer Cards */}
      <div className="px-[var(--spacing-md)] flex flex-col gap-[var(--spacing-md)]">
        {/* Calling Offer */}
        <IntroOfferCard
          type="calling"
          headline={`Get started with 7 days of free unlimited calls to ${destinationCountry}`}
          description="Then just $12/month. No contract, just connection. Cancel anytime."
          ctaText="Start free trial"
          onClick={() => console.log('Start free trial')}
        />

        {/* Top-up Offer */}
        <IntroOfferCard
          type="topup"
          headline="Take 20% off your first top-up"
          description="Keep your community effortlessly connected for less."
          ctaText="Send top-up"
          onClick={() => console.log('Send top-up')}
        />
      </div>

      {/* Bottom CTAs */}
      <div className="px-[var(--spacing-md)] py-[var(--spacing-xl)] flex flex-col gap-[var(--spacing-sm)]">
        <Button variant="secondary-black" fullWidth>
          Make your first call
        </Button>
        <Button variant="secondary-black" fullWidth>
          Send your first top-up
        </Button>
      </div>

      {/* Bottom Navigation */}
      <BottomNavBar activeTab="home" />
    </div>
  );
}
