/**
 * Rebtel 3.0 Design System Tokens
 * Extracted from Figma Design System
 */

// ============================================
// COLOR PRIMITIVES
// ============================================

export const colors = {
  // Brand Colors
  brand: {
    red: '#E31B3B',
    black: '#111111',
    white: '#FFFFFF',
  },

  // Grey Scale (9 levels)
  grey: {
    900: '#111111',
    800: '#2D2D32',
    700: '#505055',
    600: '#737378',
    500: '#96969B',
    400: '#B9B9BE',
    300: '#DCDCE1',
    200: '#F3F3F3',
    100: '#FAFAFC',
    0: '#FFFFFF',
  },

  // Red Scale (7 levels)
  red: {
    60: '#5B0B18',
    50: '#881023',
    40: '#B6162F',
    rebtel: '#E31B3B',
    30: '#E94962',
    20: '#EE7689',
    10: '#F4A4B1',
  },

  // Semantic Colors
  semantic: {
    warning: '#F06E1D',
    warningLight: '#F7B68E',
    warningLighter: '#FBDBC6',
    greenDarker: '#09BC09',
    green: '#49CD18',
    greenLight: '#A4E68B',
    greenLighter: '#D1F3C5',
    purple: '#4200FF',
  },

  // Surface Colors (for cards)
  surface: {
    calling: '#EDEADD',
    mtu: '#DAE2F4',
    canvas: '#FAFAFC',
    lighter: '#FFFFFF',
    light: '#F3F3F3',
    neutral: '#DCDCE1',
    darker: '#111111',
    overlay: 'rgba(17, 17, 17, 0.4)',
    darkerTransparent: 'rgba(17, 17, 17, 0.6)',
  },

  // Text Colors
  text: {
    primary: '#2D2D32',
    secondary: '#96969B',
    tertiary: '#737378',
    whiteConstant: '#FFFFFF',
    homeCardMeta: '#505055',
  },

  // Border Colors
  border: {
    primary: '#DCDCE1',
  },
} as const;

// ============================================
// TYPOGRAPHY
// ============================================

export const fontFamily = {
  display: '"Pano", system-ui, sans-serif',
  body: '"KH Teka", system-ui, sans-serif',
} as const;

export const typography = {
  // Display (Pano font)
  display: {
    lg: { fontSize: '32px', lineHeight: '40px', letterSpacing: '0.64px' },
    md: { fontSize: '24px', lineHeight: '32px', letterSpacing: '0.48px' },
    sm: { fontSize: '20px', lineHeight: '32px', letterSpacing: '0.4px' },
    xs: { fontSize: '16px', lineHeight: '24px', letterSpacing: '0.32px' },
  },

  // Headline (KH Teka font)
  headline: {
    lg: { fontSize: '32px', lineHeight: '40px', letterSpacing: '0.64px' },
    md: { fontSize: '24px', lineHeight: '36px', letterSpacing: '0.48px' },
    sm: { fontSize: '20px', lineHeight: '32px', letterSpacing: '0.4px' },
    xs: { fontSize: '16px', lineHeight: '24px', letterSpacing: '0.32px' },
  },

  // Paragraph (KH Teka font)
  paragraph: {
    xl: { fontSize: '20px', lineHeight: '32px', letterSpacing: '0.4px' },
    lg: { fontSize: '18px', lineHeight: '28px', letterSpacing: '0.36px' },
    md: { fontSize: '16px', lineHeight: '24px', letterSpacing: '0.32px' },
    sm: { fontSize: '14px', lineHeight: '20px', letterSpacing: '0.28px' },
    xs: { fontSize: '12px', lineHeight: '18px', letterSpacing: '0.24px' },
  },

  // Label (KH Teka font)
  label: {
    xl: { fontSize: '20px', lineHeight: '20px', letterSpacing: '0.4px' },
    lg: { fontSize: '18px', lineHeight: '18px', letterSpacing: '0.36px' },
    md: { fontSize: '16px', lineHeight: '16px', letterSpacing: '0.32px' },
    sm: { fontSize: '14px', lineHeight: '14px', letterSpacing: '0.28px' },
    xs: { fontSize: '11px', lineHeight: '11px', letterSpacing: '0.22px' },
  },
} as const;

// ============================================
// SPACING
// ============================================

export const spacing = {
  xxxs: '2px',
  xxs: '4px',
  xs: '8px',
  sm: '12px',
  md: '16px',
  lg: '20px',
  xl: '24px',
  xxl: '32px',
  xxxl: '52px',
  xxxxl: '72px',
} as const;

// ============================================
// BORDER RADIUS
// ============================================

export const radius = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '24px',
  xxl: '32px',
  full: '9999px',
} as const;

// ============================================
// ICON SIZES
// ============================================

export const iconSize = {
  xxs: '12px',
  xs: '16px',
  sm: '20px',
  md: '24px',
  lg: '32px',
  xl: '40px',
} as const;

// ============================================
// OBJECT HEIGHTS
// ============================================

export const objectHeight = {
  xs: '24px',
  sm: '32px',
  md: '40px',
  lg: '48px',
  xl: '52px',
  xxl: '64px',
  xxxl: '72px',
} as const;

// ============================================
// SHADOWS / ELEVATION
// ============================================

export const shadow = {
  elevation1: '4px 5px 10px 0px rgba(0, 0, 0, 0.02)',
  elevation2: '0px 4px 16px 0px rgba(0, 0, 0, 0.08)',
  elevation3: '0px 8px 24px 0px rgba(0, 0, 0, 0.12)',
} as const;

// ============================================
// OPACITY
// ============================================

export const opacity = {
  100: '1',
  90: '0.9',
  80: '0.8',
  70: '0.7',
  60: '0.6',
  50: '0.5',
  40: '0.4',
  30: '0.3',
  20: '0.2',
  10: '0.1',
  0: '0',
} as const;

// ============================================
// BUTTON VARIANTS
// ============================================

export const buttonStyles = {
  primary: {
    background: colors.brand.red,
    text: colors.text.whiteConstant,
    height: '64px',
    borderRadius: radius.xxl,
  },
  secondary: {
    background: colors.grey[200],
    text: colors.text.primary,
    height: '64px',
    borderRadius: radius.xxl,
  },
  secondaryWhite: {
    background: colors.grey[0],
    text: colors.text.primary,
    height: '64px',
    borderRadius: radius.xxl,
  },
  secondaryBlack: {
    background: colors.grey[900],
    text: colors.text.whiteConstant,
    height: '64px',
    borderRadius: radius.xxl,
  },
} as const;

// Export all tokens as a single object
export const tokens = {
  colors,
  fontFamily,
  typography,
  spacing,
  radius,
  iconSize,
  objectHeight,
  shadow,
  opacity,
  buttonStyles,
} as const;

export default tokens;
