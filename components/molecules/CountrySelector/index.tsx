'use client';

import React, { useState, useRef, useEffect } from 'react';
import { countries, Country } from '@/data/countries';
import { SearchIcon, ChevronDownIcon, CloseIcon } from '@/components/atoms/Icon';

// ============================================
// TYPE DEFINITIONS
// ============================================

interface CountrySelectorProps {
  value: Country;
  onChange: (country: Country) => void;
  countryList?: Country[];
  className?: string;
}

// ============================================
// COUNTRY SELECTOR COMPONENT
// ============================================

export function CountrySelector({
  value,
  onChange,
  countryList,
  className = '',
}: CountrySelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const containerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Use custom country list if provided, otherwise use default
  const availableCountries = countryList || countries;

  // Filter countries by search query
  const filteredCountries = availableCountries.filter((country) =>
    country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    country.dialCode.includes(searchQuery)
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelect = (country: Country) => {
    onChange(country);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Selector Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          flex
          items-center
          gap-[var(--spacing-xs)]
          h-[48px]
          px-[var(--spacing-sm)]
          bg-[var(--grey-0)]
          border
          border-[var(--border-primary)]
          rounded-[var(--radius-md)]
          transition-colors
          hover:border-[var(--grey-400)]
          focus:outline-none
          focus:ring-2
          focus:ring-[var(--brand-red)]
          focus:ring-offset-1
        `.replace(/\s+/g, ' ').trim()}
      >
        <span className="text-[24px]">{value.flag}</span>
        <span className="text-label-md text-[var(--text-primary)]">
          {value.dialCode}
        </span>
        <ChevronDownIcon className={`w-[16px] h-[16px] text-[var(--text-secondary)] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-[var(--surface-overlay)]">
          <div
            className={`
              w-full
              max-w-[390px]
              max-h-[70vh]
              bg-[var(--grey-0)]
              rounded-t-[var(--radius-xl)]
              flex
              flex-col
              animate-in
              slide-in-from-bottom
              duration-300
            `.replace(/\s+/g, ' ').trim()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-[var(--spacing-md)] border-b border-[var(--border-primary)]">
              <span className="text-headline-xs text-[var(--text-primary)]">
                Select Country
              </span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-[var(--spacing-xs)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                <CloseIcon className="w-[24px] h-[24px]" />
              </button>
            </div>

            {/* Search */}
            <div className="p-[var(--spacing-md)]">
              <div className="relative">
                <SearchIcon className="absolute left-[var(--spacing-sm)] top-1/2 -translate-y-1/2 w-[20px] h-[20px] text-[var(--text-secondary)]" />
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search country or code..."
                  className={`
                    w-full
                    h-[44px]
                    pl-[44px]
                    pr-[var(--spacing-md)]
                    bg-[var(--grey-100)]
                    border
                    border-[var(--border-primary)]
                    rounded-[var(--radius-md)]
                    text-paragraph-md
                    placeholder:text-[var(--text-secondary)]
                    focus:outline-none
                    focus:ring-2
                    focus:ring-[var(--brand-red)]
                  `.replace(/\s+/g, ' ').trim()}
                />
              </div>
            </div>

            {/* Country List */}
            <div className="flex-1 overflow-y-auto pb-[var(--spacing-md)]">
              {filteredCountries.length === 0 ? (
                <div className="p-[var(--spacing-md)] text-center text-paragraph-md text-[var(--text-secondary)]">
                  No countries found
                </div>
              ) : (
                filteredCountries.map((country) => (
                  <button
                    key={country.code}
                    type="button"
                    onClick={() => handleSelect(country)}
                    className={`
                      w-full
                      flex
                      items-center
                      gap-[var(--spacing-sm)]
                      px-[var(--spacing-md)]
                      py-[var(--spacing-sm)]
                      hover:bg-[var(--grey-100)]
                      transition-colors
                      ${value.code === country.code ? 'bg-[var(--grey-100)]' : ''}
                    `.replace(/\s+/g, ' ').trim()}
                  >
                    <span className="text-[24px]">{country.flag}</span>
                    <span className="flex-1 text-left text-paragraph-md text-[var(--text-primary)]">
                      {country.name}
                    </span>
                    <span className="text-label-md text-[var(--text-secondary)]">
                      {country.dialCode}
                    </span>
                  </button>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================
// EXPORTS
// ============================================

export default CountrySelector;
