import React from 'react';

/**
 * Pictograms - Decorative brand icons for emotive/communicative contexts
 * 
 * Based on Rebtel 3.0 Design System - Iconography UI/UX
 * These pictograms are intended for brand-building, marketing communications,
 * and decorative purposes rather than functional UI icons.
 * 
 * Style characteristics:
 * - Simple black outlines with consistent stroke width
 * - Contained in oval/pill-shaped frames
 * - Clean, minimal design language
 */

interface PictogramProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeMap = {
  sm: { width: 48, height: 32 },
  md: { width: 64, height: 44 },
  lg: { width: 80, height: 56 },
};

/**
 * Phone Pictogram - For calling features
 * Simple phone receiver silhouette matching the Figma pictogram style
 */
export function PhonePictogram({ className = '', size = 'md' }: PictogramProps) {
  const { width, height } = sizeMap[size];
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer oval frame */}
      <rect
        x="1.5"
        y="1.5"
        width="61"
        height="41"
        rx="20.5"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Phone receiver - classic handset silhouette, centered and scaled to fit */}
      <path
        d="M26 14C26 13 27 12 28.5 12C29.5 12 30.5 12.8 31 14L31.5 16.5C31.7 17.3 31.3 18 30.5 18.5L29 19.5C28.7 19.7 28.6 20 28.7 20.3L30 23.5L32 27C32.2 27.3 32.5 27.4 32.8 27.2L34.5 26C35.2 25.6 36 25.8 36.5 26.5L38 29C38.6 30 38.2 31.2 37 31.8C35 32.8 32 32 29 29C26 26 24.5 23 25 20.5C25.3 18.5 25.8 16 26 14Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Cash Pictogram - For money transfers, top-ups, and payments
 * Clean stack of banknotes - monochrome outlines only
 */
export function CashPictogram({ className = '', size = 'md' }: PictogramProps) {
  const { width, height } = sizeMap[size];
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer oval frame */}
      <rect
        x="1.5"
        y="1.5"
        width="61"
        height="41"
        rx="20.5"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Back note - only visible edges (left and bottom) */}
      <path
        d="M20.5 17 L20.5 29.5 Q20.5 31 22 31 L41 31"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      {/* Front note - full rectangle */}
      <rect x="23" y="13" width="22" height="14" rx="1.5" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Small circle on front note */}
      <circle cx="34" cy="20" r="4" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

/**
 * Percentage Pictogram - For discounts and offers (kept for backwards compatibility)
 */
export function PercentPictogram({ className = '', size = 'md' }: PictogramProps) {
  const { width, height } = sizeMap[size];
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer oval frame */}
      <rect
        x="1.5"
        y="1.5"
        width="61"
        height="41"
        rx="20.5"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Percentage symbol */}
      <circle cx="26" cy="17" r="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="38" cy="27" r="4" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <line x1="40" y1="13" x2="24" y2="31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Globe Pictogram - For global reach and international services
 */
export function GlobePictogram({ className = '', size = 'md' }: PictogramProps) {
  const { width, height } = sizeMap[size];
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer oval frame */}
      <rect
        x="1.5"
        y="1.5"
        width="61"
        height="41"
        rx="20.5"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Globe icon - outer circle */}
      <circle cx="32" cy="22" r="11" stroke="currentColor" strokeWidth="2.5" fill="none" />
      {/* Globe - vertical meridian (ellipse) */}
      <ellipse cx="32" cy="22" rx="5" ry="11" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Globe - horizontal lines */}
      <line x1="21" y1="22" x2="43" y2="22" stroke="currentColor" strokeWidth="2" />
      <path d="M23 16.5C26 16.5 29 16 32 16C35 16 38 16.5 41 16.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M23 27.5C26 27.5 29 28 32 28C35 28 38 27.5 41 27.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

/**
 * Heart Pictogram - For favorites and loved ones
 */
export function HeartPictogram({ className = '', size = 'md' }: PictogramProps) {
  const { width, height } = sizeMap[size];
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer oval frame */}
      <rect
        x="1.5"
        y="1.5"
        width="61"
        height="41"
        rx="20.5"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Heart shape - filled */}
      <path
        d="M32 31L31.3 30.4C26.4 26 23 23 23 19.2C23 16.2 25.3 14 28.3 14C30 14 31.6 14.8 32 16C32.4 14.8 34 14 35.7 14C38.7 14 41 16.2 41 19.2C41 23 37.6 26 32.7 30.4L32 31Z"
        fill="currentColor"
      />
    </svg>
  );
}

/**
 * Currency Pictogram - For money transfers and payments
 */
export function CurrencyPictogram({ className = '', size = 'md' }: PictogramProps) {
  const { width, height } = sizeMap[size];
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer oval frame */}
      <rect
        x="1.5"
        y="1.5"
        width="61"
        height="41"
        rx="20.5"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Currency symbols ¥£$ */}
      <text
        x="32"
        y="28"
        textAnchor="middle"
        fontFamily="system-ui, sans-serif"
        fontSize="16"
        fontWeight="700"
        fill="currentColor"
      >
        ¥£$
      </text>
    </svg>
  );
}

/**
 * Target/Record Pictogram - For goals and tracking
 */
export function TargetPictogram({ className = '', size = 'md' }: PictogramProps) {
  const { width, height } = sizeMap[size];
  
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer oval frame */}
      <rect
        x="1.5"
        y="1.5"
        width="61"
        height="41"
        rx="20.5"
        stroke="currentColor"
        strokeWidth="3"
        fill="none"
      />
      {/* Target/bullseye */}
      <circle cx="32" cy="22" r="10" stroke="currentColor" strokeWidth="2.5" fill="none" />
      <circle cx="32" cy="22" r="4" fill="currentColor" />
    </svg>
  );
}
