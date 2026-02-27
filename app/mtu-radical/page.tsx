'use client';

import { useMemo, useState } from 'react';
import { Pill, Label, Paragraph } from '@/components';

type ViewMode = 'single' | 'comparison';
type ActiveVariant = 'production' | 'simplified';
type TierId = 'light' | 'everyday' | 'heavy' | 'unlimited';

interface TierDefinition {
  id: TierId;
  name: string;
  dataLabel: string;
  shortLabel: string;
  description: string;
  validity: string;
  price: string;
  mockedSku: string;
  mockedOperator: string;
  marginScore: number;
}

const TIERS: TierDefinition[] = [
  {
    id: 'light',
    name: 'Light use',
    shortLabel: 'Light',
    dataLabel: '3 GB',
    description: 'Good for chat & light browsing',
    validity: '≈ 15 days (mocked)',
    price: '$6.50 (mocked)',
    mockedSku: 'SKU A',
    mockedOperator: 'Unefon Mexico 3GB',
    marginScore: 0.78
  },
  {
    id: 'everyday',
    name: 'Everyday use',
    shortLabel: 'Everyday',
    dataLabel: '7 GB',
    description: 'Great for daily WhatsApp, browsing & some video',
    validity: '≈ 21 days (mocked)',
    price: '$9.90 (mocked)',
    mockedSku: 'SKU B',
    mockedOperator: 'Unefon Mexico 7GB',
    marginScore: 0.84
  },
  {
    id: 'heavy',
    name: 'Heavy use',
    shortLabel: 'Heavy',
    dataLabel: '15 GB',
    description: 'Best for social media & video calls',
    validity: '30 days (mocked)',
    price: '$14.90 (mocked)',
    mockedSku: 'SKU C',
    mockedOperator: 'Unefon Mexico 15GB',
    marginScore: 0.81
  },
  {
    id: 'unlimited',
    name: 'Unlimited',
    shortLabel: 'Unlimited',
    dataLabel: 'Unlimited data',
    description: 'For streaming & full-time connectivity',
    validity: '30 days (mocked)',
    price: '$19.90 (mocked)',
    mockedSku: 'SKU D',
    mockedOperator: 'Unefon Mexico Unlimited',
    marginScore: 0.72
  }
];

export default function MTURadicalPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('single');
  const [variant, setVariant] = useState<ActiveVariant>('simplified');
  const [selectedTierId, setSelectedTierId] = useState<TierId>('everyday');
  const [showTierDetail, setShowTierDetail] = useState(false);
  const [limitedSkuCorridor, setLimitedSkuCorridor] = useState(false);

  const selectedTier = useMemo(
    () => TIERS.find((t) => t.id === selectedTierId) ?? TIERS[1],
    [selectedTierId]
  );

  const handleTierSelect = (tierId: TierId) => {
    setSelectedTierId(tierId);
    setShowTierDetail(true);
  };

  return (
    <main className="min-h-screen bg-[var(--background)] py-[var(--spacing-xl)]">
      <div className="mobile-container px-[var(--spacing-md)]">
        <div className="flex items-center justify-between mb-[var(--spacing-lg)]">
          <Label size="sm" color="secondary">
            MTU – Radical Simplification
          </Label>
          <div className="inline-flex bg-[var(--grey-200)] rounded-full p-[4px] gap-[4px]">
            <button
              className={`px-[10px] py-[6px] text-label-xs rounded-full ${
                viewMode === 'single' ? 'bg-[var(--grey-0)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
              }`}
              onClick={() => setViewMode('single')}
            >
              Single
            </button>
            <button
              className={`px-[10px] py-[6px] text-label-xs rounded-full ${
                viewMode === 'comparison' ? 'bg-[var(--grey-0)] text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
              }`}
              onClick={() => setViewMode('comparison')}
            >
              Side-by-side
            </button>
          </div>
        </div>

        {/* Re-use the existing App shell structure from src/App.tsx here if needed */}
        <Paragraph size="sm" color="secondary">
          The MTU prototype has been moved into a Next.js app at route <code>/mtu-radical</code>. 
          The full flow wiring from the previous Vite-based <code>App.tsx</code> can now be ported into this page component.
        </Paragraph>
      </div>
    </main>
  );
}

