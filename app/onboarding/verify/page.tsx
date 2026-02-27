'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Headline,
  Paragraph,
  Button,
  ProgressDots,
  Input,
  OTPInput,
  CountrySelector,
  ChevronLeftIcon,
} from '@/components';
import { defaultCountry, Country, getVerificationCountries } from '@/data/countries';

// Get verification-ordered countries (US, UK, CA, IN, FR, ES, IT, AU first, then alphabetical)
const verificationCountries = getVerificationCountries();

type VerificationStep = 'phone' | 'otp';

export default function VerifyPage() {
  const router = useRouter();
  const [step, setStep] = useState<VerificationStep>('phone');
  const [selectedCountry, setSelectedCountry] = useState<Country>(defaultCountry);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleBack = () => {
    if (step === 'otp') {
      setStep('phone');
      setOtpCode('');
    } else {
      router.push('/onboarding/contacts');
    }
  };

  const handleSendCode = () => {
    if (!phoneNumber) return;
    
    setIsLoading(true);
    // Simulate sending code
    setTimeout(() => {
      setIsLoading(false);
      setStep('otp');
    }, 1000);
  };

  const handleVerify = () => {
    if (otpCode.length !== 6) return;
    
    setIsLoading(true);
    // Simulate verification
    setTimeout(() => {
      setIsLoading(false);
      // Store verification status
      sessionStorage.setItem('phoneVerified', 'true');
      sessionStorage.setItem('userPhone', `${selectedCountry.dialCode} ${phoneNumber}`);
      router.push('/onboarding/home');
    }, 1000);
  };

  const handleOTPComplete = (code: string) => {
    setOtpCode(code);
    // Auto-verify when complete
    if (code.length === 6) {
      handleVerify();
    }
  };

  const handleResendCode = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      // Show success message (could add toast)
    }, 1000);
  };

  const formattedPhone = `${selectedCountry.dialCode} ${phoneNumber}`;
  const maskedPhone = phoneNumber 
    ? `${selectedCountry.dialCode} ${phoneNumber.slice(0, 3)} *** ${phoneNumber.slice(-2)}`
    : '';

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
        <ProgressDots currentStep={3} totalSteps={4} />
        <div className="w-[40px]" /> {/* Spacer for alignment */}
      </div>

      {/* Content */}
      <div className="flex-1 px-[var(--spacing-md)] pb-[var(--spacing-md)] flex flex-col">
        {step === 'phone' ? (
          <>
            {/* Phone Entry Step */}
            <div className="mb-[var(--spacing-xxl)]">
              <Headline size="md" className="mb-[var(--spacing-xs)]">
                Let&apos;s keep it safe
              </Headline>
              <Paragraph size="md" color="secondary">
                First we need to verify your number
              </Paragraph>
            </div>

            {/* Phone input */}
            <div className="flex gap-[var(--spacing-xs)] mb-[var(--spacing-xl)]">
              <CountrySelector
                value={selectedCountry}
                onChange={setSelectedCountry}
                countryList={verificationCountries}
              />
              <div className="flex-1">
                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ''))}
                  className="w-full"
                />
              </div>
            </div>

            {/* Info text */}
            <Paragraph size="xs" color="secondary" className="mb-auto">
              We&apos;ll send you a verification code via SMS. Standard message rates may apply.
            </Paragraph>
          </>
        ) : (
          <>
            {/* OTP Entry Step */}
            <div className="mb-[var(--spacing-xxl)]">
              <Headline size="md" className="mb-[var(--spacing-xs)]">
                Enter verification code
              </Headline>
              <Paragraph size="md" color="secondary">
                We sent a code to {maskedPhone}
              </Paragraph>
            </div>

            {/* OTP input */}
            <div className="flex justify-center mb-[var(--spacing-xl)]">
              <OTPInput
                length={6}
                value={otpCode}
                onChange={setOtpCode}
                onComplete={handleOTPComplete}
              />
            </div>

            {/* Resend link */}
            <div className="text-center mb-auto">
              <button
                type="button"
                onClick={handleResendCode}
                disabled={isLoading}
                className="text-label-md text-[var(--brand-red)] disabled:opacity-50"
              >
                Resend code
              </button>
            </div>

            {/* Dev helper text */}
            <Paragraph size="xs" color="tertiary" className="text-center mt-[var(--spacing-xl)]">
              Prototype: Enter any 6 digits to continue
            </Paragraph>
          </>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="p-[var(--spacing-md)] border-t border-[var(--border-primary)]">
        {step === 'phone' ? (
          <Button
            variant="primary"
            fullWidth
            onClick={handleSendCode}
            disabled={!phoneNumber || isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Code'}
          </Button>
        ) : (
          <Button
            variant="primary"
            fullWidth
            onClick={handleVerify}
            disabled={otpCode.length !== 6 || isLoading}
          >
            {isLoading ? 'Verifying...' : 'Verify'}
          </Button>
        )}
      </div>
    </div>
  );
}
