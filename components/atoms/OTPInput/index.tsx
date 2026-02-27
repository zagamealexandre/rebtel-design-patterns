'use client';

import React, { useRef, useEffect, KeyboardEvent, ClipboardEvent } from 'react';

// ============================================
// TYPE DEFINITIONS
// ============================================

interface OTPInputProps {
  length?: number;
  value: string;
  onChange: (value: string) => void;
  onComplete?: (value: string) => void;
  error?: boolean;
  disabled?: boolean;
  className?: string;
}

// ============================================
// OTP INPUT COMPONENT
// ============================================

export function OTPInput({
  length = 6,
  value,
  onChange,
  onComplete,
  error = false,
  disabled = false,
  className = '',
}: OTPInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Convert value string to array of digits
  const digits = value.split('').concat(Array(length).fill('')).slice(0, length);

  useEffect(() => {
    // Focus first empty input on mount
    const firstEmptyIndex = digits.findIndex((d) => !d);
    if (firstEmptyIndex >= 0 && inputRefs.current[firstEmptyIndex]) {
      inputRefs.current[firstEmptyIndex]?.focus();
    }
  }, []);

  useEffect(() => {
    // Check if complete
    if (value.length === length && onComplete) {
      onComplete(value);
    }
  }, [value, length, onComplete]);

  const handleChange = (index: number, inputValue: string) => {
    // Only accept digits
    const digit = inputValue.replace(/\D/g, '').slice(-1);
    
    const newDigits = [...digits];
    newDigits[index] = digit;
    const newValue = newDigits.join('').slice(0, length);
    
    onChange(newValue);

    // Move to next input if digit was entered
    if (digit && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!digits[index] && index > 0) {
        // If current input is empty, move to previous and clear it
        inputRefs.current[index - 1]?.focus();
        const newDigits = [...digits];
        newDigits[index - 1] = '';
        onChange(newDigits.join(''));
      } else {
        // Clear current input
        const newDigits = [...digits];
        newDigits[index] = '';
        onChange(newDigits.join(''));
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    onChange(pastedData);
    
    // Focus appropriate input after paste
    const focusIndex = Math.min(pastedData.length, length - 1);
    inputRefs.current[focusIndex]?.focus();
  };

  const handleFocus = (index: number) => {
    // Select the input content on focus
    inputRefs.current[index]?.select();
  };

  const baseInputStyles = `
    w-[48px]
    h-[56px]
    text-center
    text-headline-md
    bg-[var(--grey-0)]
    rounded-[var(--radius-md)]
    border
    transition-colors
    duration-200
    focus:outline-none
    focus:ring-2
    focus:ring-[var(--brand-red)]
    focus:ring-offset-1
    disabled:bg-[var(--grey-200)]
    disabled:text-[var(--text-secondary)]
    disabled:cursor-not-allowed
  `;

  const borderStyle = error
    ? 'border-[var(--brand-red)]'
    : 'border-[var(--border-primary)] focus:border-[var(--brand-red)]';

  return (
    <div className={`flex items-center gap-[var(--spacing-xs)] ${className}`}>
      {digits.map((digit, index) => (
        <input
          key={index}
          ref={(el) => {
            inputRefs.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={1}
          value={digit}
          onChange={(e) => handleChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          onFocus={() => handleFocus(index)}
          disabled={disabled}
          className={`
            ${baseInputStyles}
            ${borderStyle}
          `.replace(/\s+/g, ' ').trim()}
          aria-label={`Digit ${index + 1} of ${length}`}
        />
      ))}
    </div>
  );
}

// ============================================
// EXPORTS
// ============================================

export default OTPInput;
