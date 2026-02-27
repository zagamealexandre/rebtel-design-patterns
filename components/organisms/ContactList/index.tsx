'use client';

import React from 'react';
import { ContactRow } from '@/components/molecules/ContactRow';
import { Contact } from '@/data/mockContacts';
import { ContactsIcon } from '@/components/atoms/Icon';

// ============================================
// TYPE DEFINITIONS
// ============================================

interface ContactListProps {
  contacts: Contact[];
  selectedContactId?: string;
  onSelectContact: (contact: Contact) => void;
  emptyState?: React.ReactNode;
  className?: string;
}

// ============================================
// DEFAULT EMPTY STATE
// ============================================

function DefaultEmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-[var(--spacing-xxxl)] gap-[var(--spacing-md)]">
      <div className="w-[64px] h-[64px] rounded-full bg-[var(--grey-100)] flex items-center justify-center">
        <ContactsIcon className="w-[32px] h-[32px] text-[var(--text-secondary)]" />
      </div>
      <div className="text-center">
        <p className="text-paragraph-md text-[var(--text-primary)]">
          No contacts yet
        </p>
        <p className="text-paragraph-sm text-[var(--text-secondary)]">
          Connect your contacts to get started
        </p>
      </div>
    </div>
  );
}

// ============================================
// CONTACT LIST COMPONENT
// ============================================

export function ContactList({
  contacts,
  selectedContactId,
  onSelectContact,
  emptyState,
  className = '',
}: ContactListProps) {
  if (contacts.length === 0) {
    return emptyState || <DefaultEmptyState />;
  }

  return (
    <div className={`flex flex-col gap-[var(--spacing-xxs)] ${className}`}>
      {contacts.map((contact) => (
        <ContactRow
          key={contact.id}
          name={contact.name}
          country={contact.country}
          flag={contact.flag}
          phoneNumber={contact.phoneNumber}
          selected={contact.id === selectedContactId}
          onClick={() => onSelectContact(contact)}
        />
      ))}
    </div>
  );
}

// ============================================
// EXPORTS
// ============================================

export default ContactList;
