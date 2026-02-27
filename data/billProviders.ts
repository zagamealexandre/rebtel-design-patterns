export type BillCategoryId = 'electricity' | 'tv' | 'education' | 'internet';

export interface BillCategory {
  id: BillCategoryId;
  title: string;
  description: string;
  accent: string;
  icon: 'lightning' | 'tv' | 'book' | 'wifi';
}

export interface BillProvider {
  id: string;
  name: string;
  categoryId: BillCategoryId;
  tagline: string;
  coverage: string;
  processingTime: string;
  tags: string[];
  amountOptions: number[]; // amounts in NGN
  feePercent: number;
  accountPlaceholder: string;
  referenceHint: string;
}

export const nigeriaBillCategories: BillCategory[] = [
  {
    id: 'electricity',
    title: 'Electricity',
    description: 'Prepaid & postpaid discos nationwide',
    accent: '#FEEFE4',
    icon: 'lightning',
  },
  {
    id: 'tv',
    title: 'TV & Entertainment',
    description: 'DSTV, GOTV, Startimes bundles',
    accent: '#F4ECFF',
    icon: 'tv',
  },
  {
    id: 'internet',
    title: 'Internet & Data',
    description: 'Fiber & fixed wireless subscriptions',
    accent: '#E7F4FF',
    icon: 'wifi',
  },
  {
    id: 'education',
    title: 'School Fees',
    description: 'University tuition & PTA dues',
    accent: '#E8F7EC',
    icon: 'book',
  },
];

export const nigeriaBillProviders: BillProvider[] = [
  {
    id: 'ikeja-electric-prepaid',
    name: 'Ikeja Electric (Prepaid)',
    categoryId: 'electricity',
    tagline: 'Token delivered instantly',
    coverage: 'Lagos & Ogun',
    processingTime: '< 1 min',
    tags: ['Token'],
    amountOptions: [5000, 10000, 20000, 40000],
    feePercent: 2,
    accountPlaceholder: 'Meter number (e.g. 12345678901)',
    referenceHint: 'We text the token to your recipient',
  },
  {
    id: 'eko-electric-postpaid',
    name: 'Eko Electric (Postpaid)',
    categoryId: 'electricity',
    tagline: 'Balance cleared same day',
    coverage: 'Lagos Island & Lekki',
    processingTime: 'Same day',
    tags: ['Bill settle'],
    amountOptions: [15000, 25000, 50000],
    feePercent: 1.5,
    accountPlaceholder: 'Account number',
    referenceHint: 'We attach your reference ID to the disco receipt',
  },
  {
    id: 'dstv-compact',
    name: 'DSTV',
    categoryId: 'tv',
    tagline: 'Compact, Compact+, Premium',
    coverage: 'Nationwide',
    processingTime: '< 5 min',
    tags: ['Decoder'],
    amountOptions: [13500, 20600, 37000],
    feePercent: 1.2,
    accountPlaceholder: 'Smartcard number',
    referenceHint: 'We automatically refresh decoder signal',
  },
  {
    id: 'startimes-super',
    name: 'Startimes',
    categoryId: 'tv',
    tagline: 'Basic to Super bouquets',
    coverage: 'Nationwide',
    processingTime: '< 5 min',
    tags: ['Decoder'],
    amountOptions: [5900, 8800, 13400],
    feePercent: 1,
    accountPlaceholder: 'Smartcard number',
    referenceHint: 'Recipient gets SMS confirmation',
  },
  {
    id: 'swift-4g',
    name: 'Swift 4G Home',
    categoryId: 'internet',
    tagline: 'Unlimited + capped bundles',
    coverage: 'Lagos & Abuja',
    processingTime: '< 10 min',
    tags: ['Router'],
    amountOptions: [18000, 25000, 42000],
    feePercent: 2,
    accountPlaceholder: 'Customer ID',
    referenceHint: 'We sync with Swift portal automatically',
  },
  {
    id: 'spectranet',
    name: 'Spectranet',
    categoryId: 'internet',
    tagline: 'Mega value & night plans',
    coverage: 'Major cities',
    processingTime: '< 10 min',
    tags: ['Router'],
    amountOptions: [16000, 21500, 32000],
    feePercent: 1.8,
    accountPlaceholder: 'Account number',
    referenceHint: 'Recipient email gets receipt',
  },
  {
    id: 'unilag-fees',
    name: 'University of Lagos',
    categoryId: 'education',
    tagline: 'Undergrad tuition wallet',
    coverage: 'Lagos',
    processingTime: 'Next business day',
    tags: ['Tuition'],
    amountOptions: [80000, 120000, 180000],
    feePercent: 2.5,
    accountPlaceholder: 'Matric number',
    referenceHint: 'We send proof of payment to student email',
  },
  {
    id: 'abis-school',
    name: 'Auntie Bisi International School',
    categoryId: 'education',
    tagline: 'Day & boarding fees',
    coverage: 'Ibadan',
    processingTime: 'Next business day',
    tags: ['Tuition'],
    amountOptions: [65000, 95000, 150000],
    feePercent: 2.2,
    accountPlaceholder: 'Student ID',
    referenceHint: 'Receipt shared with guardian via WhatsApp',
  },
];

export const NAIRA_PER_USD = 1500;
