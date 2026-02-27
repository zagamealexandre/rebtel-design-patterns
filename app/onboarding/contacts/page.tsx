'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Headline,
  Paragraph,
  Button,
  ProgressDots,
  ContactList,
  ContactsIcon,
  ChevronLeftIcon,
  Input,
  CountrySelector,
} from '@/components';
import { mockContacts, Contact } from '@/data/mockContacts';
import { countries, Country } from '@/data/countries';

export default function ContactsPage() {
  const router = useRouter();
  const [hasPermission, setHasPermission] = useState(false);
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [manualNumber, setManualNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]); // Afghanistan - first in CSV ranking

  const handleBack = () => {
    router.push('/onboarding');
  };

  const handleConnectContacts = () => {
    setShowPermissionModal(true);
  };

  const handleAllowContacts = () => {
    setShowPermissionModal(false);
    setHasPermission(true);
  };

  const handleDenyContacts = () => {
    setShowPermissionModal(false);
  };

  const handleContinue = () => {
    // Store selected contact in sessionStorage for later use
    if (selectedContact) {
      sessionStorage.setItem('selectedContact', JSON.stringify(selectedContact));
    } else if (manualNumber) {
      // Create a manual contact entry
      const manualContact: Contact = {
        id: 'manual',
        name: 'Manual Entry',
        country: selectedCountry.name,
        countryCode: selectedCountry.code,
        phoneNumber: `${selectedCountry.dialCode} ${manualNumber}`,
        flag: selectedCountry.flag,
      };
      sessionStorage.setItem('selectedContact', JSON.stringify(manualContact));
    }
    router.push('/onboarding/verify');
  };

  const handleManualEntry = () => {
    setShowManualEntry(true);
    setSelectedContact(null);
  };

  const handleBackToContacts = () => {
    setShowManualEntry(false);
    setManualNumber('');
  };

  const canContinue = selectedContact !== null || manualNumber.length >= 6;

  const handleSelectContact = (contact: Contact) => {
    // Store contact and immediately navigate to next screen
    sessionStorage.setItem('selectedContact', JSON.stringify(contact));
    router.push('/onboarding/verify');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] max-w-[390px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-[var(--spacing-md)]">
        <button
          type="button"
          onClick={handleBack}
          className="w-[40px] h-[40px] flex items-center justify-center text-[var(--text-primary)]"
        >
          <ChevronLeftIcon className="w-[24px] h-[24px]" />
        </button>
        <ProgressDots currentStep={2} totalSteps={4} />
        <div className="w-[40px]" /> {/* Spacer for alignment */}
      </div>

      {/* Content */}
      <div className={`flex-1 px-[var(--spacing-md)] flex flex-col ${hasPermission ? 'pb-[var(--spacing-md)]' : 'pb-[100px]'}`}>
        {/* Title section */}
        <div className="mb-[var(--spacing-xl)]">
          <Headline size="md" className="mb-[var(--spacing-xs)]">
            Who do you want to connect with?
          </Headline>
          <Paragraph size="md" color="secondary">
            Select someone to call or send a top-up
          </Paragraph>
        </div>

        {/* Connect contacts button (if no permission yet and not in manual entry mode) */}
        {!hasPermission && !showManualEntry && (
          <div className="flex flex-col items-center py-[var(--spacing-xxxl)] gap-[var(--spacing-lg)]">
            <div className="w-[80px] h-[80px] rounded-full bg-[var(--grey-100)] flex items-center justify-center">
              <ContactsIcon className="w-[40px] h-[40px] text-[var(--text-secondary)]" />
            </div>
            <div className="text-center">
              <Paragraph size="md" className="mb-[var(--spacing-xs)]">
                Connect your contacts
              </Paragraph>
              <Paragraph size="sm" color="secondary">
                We&apos;ll help you find friends and family to call or top-up
              </Paragraph>
            </div>
            <Button 
              variant="secondary" 
              onClick={handleConnectContacts}
              leftIcon={<ContactsIcon className="w-[20px] h-[20px]" />}
            >
              Connect Contacts
            </Button>
            
            {/* Manual entry link - subtle, below main CTA */}
            <button
              type="button"
              onClick={handleManualEntry}
              className="text-label-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors underline underline-offset-2"
            >
              or enter a number manually
            </button>
          </div>
        )}

        {/* Manual number entry */}
        {!hasPermission && showManualEntry && (
          <div className="flex flex-col py-[var(--spacing-xl)] gap-[var(--spacing-lg)]">
            <div>
              <Paragraph size="sm" color="secondary" className="mb-[var(--spacing-sm)]">
                Enter the phone number you want to call or top-up
              </Paragraph>
              <div className="flex gap-[var(--spacing-xs)]">
                <CountrySelector
                  value={selectedCountry}
                  onChange={setSelectedCountry}
                />
                <div className="flex-1">
                  <Input
                    type="tel"
                    placeholder="Phone number"
                    value={manualNumber}
                    onChange={(e) => setManualNumber(e.target.value.replace(/\D/g, ''))}
                  />
                </div>
              </div>
            </div>
            
            {/* Back to contacts link */}
            <button
              type="button"
              onClick={handleBackToContacts}
              className="text-label-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors self-start"
            >
              ← Back to connect contacts
            </button>
          </div>
        )}

        {/* Contact list (if permission granted) */}
        {hasPermission && (
          <div className="flex-1 overflow-y-auto -mx-[var(--spacing-md)] px-[var(--spacing-md)]">
            <ContactList
              contacts={mockContacts}
              selectedContactId={selectedContact?.id}
              onSelectContact={handleSelectContact}
            />
          </div>
        )}
      </div>

      {/* Bottom CTA - only show for manual entry or initial state */}
      {(!hasPermission) && (
        <div className="fixed bottom-0 left-0 right-0 p-[var(--spacing-md)] border-t border-[var(--border-primary)] bg-[var(--background)] z-40">
          <div className="max-w-[390px] mx-auto">
            {showManualEntry ? (
              <Button
                variant="primary"
                fullWidth
                onClick={handleContinue}
                disabled={manualNumber.length < 6}
              >
                Continue
              </Button>
            ) : (
              <button
                type="button"
                onClick={handleContinue}
                className="w-full text-label-md text-[var(--text-secondary)] py-[var(--spacing-sm)]"
              >
                Skip for now
              </button>
            )}
          </div>
        </div>
      )}

      {/* Permission Modal */}
      {showPermissionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--surface-overlay)]">
          <div className="bg-[var(--grey-0)] rounded-[var(--radius-xl)] p-[var(--spacing-xl)] mx-[var(--spacing-xl)] max-w-[320px] shadow-lg">
            {/* iOS-style permission modal */}
            <div className="text-center mb-[var(--spacing-lg)]">
              <div className="w-[60px] h-[60px] rounded-full bg-[var(--grey-100)] flex items-center justify-center mx-auto mb-[var(--spacing-md)]">
                <ContactsIcon className="w-[32px] h-[32px] text-[var(--text-primary)]" />
              </div>
              <Headline size="xs" className="mb-[var(--spacing-xs)]">
                &ldquo;Rebtel&rdquo; Would Like to Access Your Contacts
              </Headline>
              <Paragraph size="sm" color="secondary">
                This lets you easily find and connect with your friends and family.
              </Paragraph>
            </div>

            <div className="flex flex-col gap-[var(--spacing-xs)]">
              <Button variant="primary" fullWidth onClick={handleAllowContacts}>
                Allow
              </Button>
              <Button variant="secondary" fullWidth onClick={handleDenyContacts}>
                Don&apos;t Allow
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
