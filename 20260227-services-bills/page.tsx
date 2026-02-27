'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Display,
  Headline,
  Paragraph,
  Label,
  Button,
  Badge,
  Pill,
  CashPictogram,
  CurrencyPictogram,
  PercentPictogram,
  BottomNavBar,
  ContactList,
  Input,
  IPhoneFrame,
  StatusBar,
} from '@/components';
import { mockContacts } from '@/data/mockContacts';
import {
  nigeriaBillCategories,
  nigeriaBillProviders,
  BillCategoryId,
  BillProvider,
  NAIRA_PER_USD,
} from '@/data/billProviders';

const nigeriaContacts = mockContacts.filter((contact) => contact.countryCode === 'NG');

interface SelectedRecipient {
  id: string;
  name: string;
  phoneNumber: string;
  flag: string;
  isCustom?: boolean;
}

const steps = [
  { id: 1, label: 'Recipient' },
  { id: 2, label: 'Bill type' },
  { id: 3, label: 'Provider' },
  { id: 4, label: 'Review' },
];

const formatNaira = (value: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(value);

const formatUsd = (value: number) =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(value);

export default function ServicesBillsPrototype() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRecipient, setSelectedRecipient] = useState<SelectedRecipient | null>(null);
  const [isAddingCustomRecipient, setIsAddingCustomRecipient] = useState(false);
  const [customRecipientName, setCustomRecipientName] = useState('');
  const [customRecipientPhone, setCustomRecipientPhone] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState<BillCategoryId>('electricity');
  const [selectedProviderId, setSelectedProviderId] = useState<string>(() => {
    const firstProvider = nigeriaBillProviders.find(
      (provider) => provider.categoryId === 'electricity',
    );
    return firstProvider ? firstProvider.id : nigeriaBillProviders[0]?.id || '';
  });
  const [selectedAmount, setSelectedAmount] = useState<number>(() => {
    const provider = nigeriaBillProviders.find(
      (item) => item.categoryId === 'electricity',
    );
    return provider?.amountOptions[1] || provider?.amountOptions[0] || 0;
  });
  const [accountReference, setAccountReference] = useState('');

  const selectedProvider = useMemo<BillProvider | undefined>(
    () => nigeriaBillProviders.find((provider) => provider.id === selectedProviderId),
    [selectedProviderId],
  );

  useEffect(() => {
    const providersForCategory = nigeriaBillProviders.filter(
      (provider) => provider.categoryId === selectedCategoryId,
    );
    if (!providersForCategory.length) {
      return;
    }
    const providerChanged = !providersForCategory.some(
      (provider) => provider.id === selectedProviderId,
    );
    if (providerChanged) {
      setSelectedProviderId(providersForCategory[0].id);
      setSelectedAmount(providersForCategory[0].amountOptions[0]);
      setAccountReference('');
    }
  }, [selectedCategoryId, selectedProviderId]);

  useEffect(() => {
    if (!selectedProvider) {
      return;
    }
    setSelectedAmount(selectedProvider.amountOptions[0]);
    setAccountReference('');
  }, [selectedProvider]);

  const serviceFee = selectedProvider ? (selectedAmount * selectedProvider.feePercent) / 100 : 0;
  const usdAmount = selectedAmount / NAIRA_PER_USD;
  const totalNaira = selectedAmount + serviceFee;

  const canContinue = (() => {
    if (currentStep === 1) {
      return Boolean(selectedRecipient);
    }
    if (currentStep === 2) {
      return Boolean(selectedCategoryId);
    }
    if (currentStep === 3) {
      return Boolean(selectedProvider && accountReference.trim().length >= 6);
    }
    return true;
  })();

  const primaryCtaLabel = currentStep === 4 ? `Pay ${formatNaira(totalNaira)}` : 'Continue';

  const handleNext = () => {
    if (!canContinue) {
      return;
    }
    setCurrentStep((prev) => Math.min(4, prev + 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const activeCategory = nigeriaBillCategories.find((category) => category.id === selectedCategoryId);
  const manualRecipientIsValid = customRecipientName.trim().length >= 2 && customRecipientPhone.trim().length >= 6;

  const handleSaveManualRecipient = () => {
    if (!manualRecipientIsValid) {
      return;
    }
    setSelectedRecipient({
      id: 'manual',
      name: customRecipientName.trim(),
      phoneNumber: customRecipientPhone.trim(),
      flag: '🇳🇬',
      isCustom: true,
    });
    setCustomRecipientName('');
    setCustomRecipientPhone('');
    setIsAddingCustomRecipient(false);
    setCurrentStep(2);
  };

  const handlePrimaryCta = () => {
    if (currentStep === 4) {
      setCurrentStep(1);
      setSelectedCategoryId('electricity');
      setSelectedProviderId(nigeriaBillProviders[0]?.id || '');
      setAccountReference('');
      return;
    }
    handleNext();
  };

  const handleBottomNavChange = (tab: 'home' | 'services' | 'account') => {
    if (tab === 'home') {
      router.push('/new_home');
      return;
    }
    if (tab === 'services') {
      router.push('/services-bills');
      return;
    }
    router.push('/account');
  };

  return (
    <IPhoneFrame>
      <div className="flex flex-col h-full bg-[var(--background)]">
        <StatusBar />
        <div className="flex-1 overflow-y-auto">
          <div className="px-[16px] pt-[16px] pb-[120px]">
            <Display size="sm">Services</Display>
            <Paragraph size="sm" color="secondary" className="mb-[24px]">
              Keep your family connected, covered, and powered up at home.
            </Paragraph>

            <section className="flex flex-col gap-[12px] mb-[32px]">
              <div className="bg-white rounded-[20px] p-[20px] shadow-[var(--shadow-elevation-1)] border border-[var(--border-primary)]">
                <div className="flex items-center gap-[12px] mb-[16px]">
                  <div className="w-[48px] h-[48px] rounded-full bg-[var(--surface-mtu)] flex items-center justify-center">
                    <CurrencyPictogram size="sm" className="text-[var(--brand-red)]" />
                  </div>
                  <div>
                    <Headline size="xs">Bills (beta)</Headline>
                    <Paragraph size="xs" color="secondary">
                      Pay electricity, TV, and tuition directly in Nigeria.
                    </Paragraph>
                  </div>
                  <Badge variant="brand">New</Badge>
                </div>
                <div className="flex flex-wrap gap-[8px] mb-[16px]">
                  <Pill variant="light">Ikeja Electric</Pill>
                  <Pill variant="light">DSTV</Pill>
                  <Pill variant="light">Swift 4G</Pill>
                  <Pill variant="light">+120 providers</Pill>
                </div>
                <Button variant="primary" fullWidth onClick={() => setCurrentStep(1)}>
                  Start a Nigeria bill payment
                </Button>
              </div>

              <div className="bg-[var(--grey-0)] rounded-[20px] p-[20px] shadow-[var(--shadow-elevation-1)]">
                <div className="flex items-center gap-[8px] mb-[12px]">
                  <CashPictogram size="sm" className="text-[var(--text-primary)]" />
                  <Headline size="xs">Still need airtime?</Headline>
                </div>
                <Paragraph size="xs" color="secondary" className="mb-[12px]">
                  Send instant airtime & data bundles to 200+ operators.
                </Paragraph>
                <Button variant="secondary" fullWidth onClick={() => router.push('/mtu-radical')}>
                  Go to Mobile Top-up
                </Button>
              </div>
            </section>

            <section className="bg-white rounded-[24px] p-[20px] shadow-[var(--shadow-elevation-1)] border border-[var(--border-primary)]">
              <div className="flex items-center justify-between mb-[16px]">
                <div>
                  <Label size="xs" color="secondary">Nigeria corridor</Label>
                  <Headline size="xs">Pay bills for your family</Headline>
                </div>
                <div className="text-right">
                  <Paragraph size="xs" color="secondary">FX rate</Paragraph>
                  <Paragraph size="sm">1 USD = ₦{NAIRA_PER_USD.toLocaleString('en-NG')}</Paragraph>
                </div>
              </div>

              <StepIndicator currentStep={currentStep} />

              <div className="mt-[24px] flex flex-col gap-[16px]">
                {currentStep === 1 && (
                  <div className="flex flex-col gap-[16px]">
                    <div>
                      <Headline size="xs">Who are you paying for?</Headline>
                      <Paragraph size="xs" color="secondary">
                        Choose a contact you already call often.
                      </Paragraph>
                    </div>
                    <ContactList
                      contacts={nigeriaContacts}
                      selectedContactId={selectedRecipient?.isCustom ? undefined : selectedRecipient?.id}
                      onSelectContact={(contact) => {
                        setSelectedRecipient({
                          id: contact.id,
                          name: contact.name,
                          phoneNumber: contact.phoneNumber,
                          flag: contact.flag,
                        });
                        setIsAddingCustomRecipient(false);
                        setCurrentStep(2);
                      }}
                    />
                    <div className="bg-[var(--grey-100)] rounded-[20px] p-[16px] flex flex-col gap-[12px]">
                      <div>
                        <Headline size="xs">Need someone else?</Headline>
                        <Paragraph size="xs" color="secondary">
                          Add a different Nigerian recipient manually.
                        </Paragraph>
                      </div>
                      {isAddingCustomRecipient ? (
                        <div className="flex flex-col gap-[12px]">
                          <Input
                            label="Full name"
                            placeholder="e.g. Chiamaka Obi"
                            value={customRecipientName}
                            onChange={(event) => setCustomRecipientName(event.target.value)}
                          />
                          <Input
                            label="Phone number in Nigeria"
                            type="tel"
                            placeholder="e.g. +2348012345678"
                            value={customRecipientPhone}
                            onChange={(event) => setCustomRecipientPhone(event.target.value)}
                            hint="We only support Nigerian bills for now"
                          />
                          <div className="flex gap-[12px]">
                            <Button
                              variant="secondary"
                              size="small"
                              fullWidth
                              onClick={() => {
                                setIsAddingCustomRecipient(false);
                                setCustomRecipientName('');
                                setCustomRecipientPhone('');
                              }}
                            >
                              Cancel
                            </Button>
                            <Button
                              variant="primary"
                              size="small"
                              fullWidth
                              disabled={!manualRecipientIsValid}
                              onClick={handleSaveManualRecipient}
                            >
                              Use this person
                            </Button>
                          </div>
                        </div>
                      ) : (
                        <Button
                          variant="secondary"
                          size="small"
                          fullWidth
                          onClick={() => setIsAddingCustomRecipient(true)}
                        >
                          Add someone else
                        </Button>
                      )}
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="flex flex-col gap-[16px]">
                    <div>
                      <Headline size="xs">What do you want to pay?</Headline>
                      <Paragraph size="xs" color="secondary">
                        Popular categories for Nigerians abroad.
                      </Paragraph>
                    </div>
                    <div className="flex flex-col gap-[12px]">
                      {nigeriaBillCategories.map((category) => (
                        <button
                          key={category.id}
                          type="button"
                          onClick={() => setSelectedCategoryId(category.id)}
                          className={`w-full text-left rounded-[20px] border px-[16px] py-[12px] transition-colors shadow-[var(--shadow-elevation-1)] ${
                            category.id === selectedCategoryId
                              ? 'border-[var(--brand-red)] bg-[#fff5f7]'
                              : 'border-[var(--border-primary)] bg-[var(--grey-0)]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <Paragraph size="sm" className="font-semibold">
                                {category.title}
                              </Paragraph>
                              <Paragraph size="xs" color="secondary">
                                {category.description}
                              </Paragraph>
                            </div>
                            <CategoryGlyph icon={category.icon} />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {currentStep === 3 && selectedProvider && (
                  <div className="flex flex-col gap-[16px]">
                    <div>
                      <Headline size="xs">Select provider & amount</Headline>
                      <Paragraph size="xs" color="secondary">
                        {activeCategory?.title} · {selectedProvider.tags.join(', ')}
                      </Paragraph>
                    </div>

                    <div className="flex flex-col gap-[12px]">
                      {nigeriaBillProviders
                        .filter((provider) => provider.categoryId === selectedCategoryId)
                        .map((provider) => (
                          <button
                            key={provider.id}
                            type="button"
                            onClick={() => setSelectedProviderId(provider.id)}
                            className={`w-full text-left rounded-[20px] border px-[16px] py-[12px] shadow-[var(--shadow-elevation-1)] transition-colors ${
                              provider.id === selectedProviderId
                                ? 'border-[var(--brand-red)] bg-[#fff5f7]'
                                : 'border-[var(--border-primary)] bg-[var(--grey-0)]'
                            }`}
                          >
                            <div className="flex items-center justify-between mb-[8px]">
                              <div>
                                <Paragraph size="sm" className="font-semibold">
                                  {provider.name}
                                </Paragraph>
                                <Paragraph size="xs" color="secondary">
                                  {provider.tagline}
                                </Paragraph>
                              </div>
                              <Badge variant="light" size="sm">
                                {provider.processingTime}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-[8px] mb-[12px]">
                              {provider.tags.map((tag) => (
                                <Pill key={tag} variant="light">
                                  {tag}
                                </Pill>
                              ))}
                              <Pill variant="light">{provider.coverage}</Pill>
                            </div>
                            <div className="flex flex-wrap gap-[8px]">
                              {provider.amountOptions.map((amount) => (
                                <button
                                  key={amount}
                                  type="button"
                                  onClick={(event) => {
                                    event.stopPropagation();
                                    setSelectedProviderId(provider.id);
                                    setSelectedAmount(amount);
                                  }}
                                  className={`h-[40px] px-[16px] rounded-[20px] text-label-sm border transition-colors ${
                                    provider.id === selectedProviderId && amount === selectedAmount
                                      ? 'border-[var(--brand-red)] bg-[var(--brand-red)] text-white'
                                      : 'border-[var(--border-primary)] bg-white'
                                  }`}
                                >
                                  {formatNaira(amount)}
                                </button>
                              ))}
                            </div>
                          </button>
                        ))}
                    </div>

                    <Input
                      label={selectedProvider.accountPlaceholder}
                      placeholder={selectedProvider.accountPlaceholder}
                      value={accountReference}
                      onChange={(event) => setAccountReference(event.target.value)}
                      hint={selectedProvider.referenceHint}
                    />
                  </div>
                )}

                {currentStep === 4 && selectedProvider && selectedRecipient && (
                  <div className="flex flex-col gap-[16px]">
                    <div>
                      <Headline size="xs">Review & pay</Headline>
                      <Paragraph size="xs" color="secondary">
                        We notify {selectedRecipient.name.split(' ')[0]} via SMS & WhatsApp.
                      </Paragraph>
                    </div>

                    <div className="bg-[var(--grey-100)] rounded-[20px] p-[16px] flex flex-col gap-[12px]">
                      <div className="flex items-center justify-between">
                        <div>
                          <Label size="xs" color="secondary">Recipient</Label>
                          <Paragraph size="sm">{selectedRecipient.name}</Paragraph>
                          <Paragraph size="xs" color="secondary">
                            {selectedRecipient.phoneNumber}
                          </Paragraph>
                        </div>
                        <Paragraph size="sm">{selectedRecipient.flag}</Paragraph>
                      </div>

                      <div className="border border-dashed border-[var(--border-primary)] rounded-[16px] p-[12px] flex flex-col gap-[8px]">
                        <SummaryRow label="Provider" value={selectedProvider.name} />
                        <SummaryRow label="Account" value={accountReference || 'Add details'} />
                        <SummaryRow label="Bill amount" value={formatNaira(selectedAmount)} />
                        <SummaryRow label="Service fee" value={`${selectedProvider.feePercent}% (${formatNaira(serviceFee)})`} />
                        <SummaryRow label="You pay" value={formatUsd(usdAmount)} />
                        <SummaryRow label="Family receives" value={formatNaira(totalNaira)} emphasize />
                      </div>

                      <div className="flex items-center gap-[8px] bg-white rounded-[16px] p-[12px]">
                        <PercentPictogram size="sm" className="text-[var(--brand-red)]" />
                        <div>
                          <Paragraph size="sm">Zero surprise fees</Paragraph>
                          <Paragraph size="xs" color="secondary">
                            Locked FX & automated receipts.
                          </Paragraph>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-[24px] focus-within:shadow-none flex flex-col gap-[8px]">
                {currentStep > 1 && (
                  <Button variant="secondary" fullWidth onClick={handleBack}>
                    Back
                  </Button>
                )}
                <Button
                  variant="primary"
                  fullWidth
                  disabled={!canContinue}
                  onClick={handlePrimaryCta}
                >
                  {primaryCtaLabel}
                </Button>
                <Paragraph size="xs" color="tertiary" className="text-center">
                  Payments powered by Rebtel Marketplace → Nigerian utility partners.
                </Paragraph>
              </div>
            </section>
          </div>
        </div>
        <BottomNavBar activeTab="services" variant="inline" onTabChange={handleBottomNavChange} />
      </div>
    </IPhoneFrame>
  );
}

function StepIndicator({ currentStep }: { currentStep: number }) {
  return (
    <div className="flex items-center justify-between">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep;
        const isCompleted = step.id < currentStep;
        return (
          <div key={step.id} className="flex-1 flex items-center">
            <div className="flex flex-col items-center flex-1">
              <div
                className={`w-[32px] h-[32px] rounded-full flex items-center justify-center text-label-sm ${
                  isActive
                    ? 'bg-[var(--brand-red)] text-white'
                    : isCompleted
                      ? 'bg-[var(--semantic-green)] text-white'
                      : 'bg-[var(--grey-200)] text-[var(--text-secondary)]'
                }`}
              >
                {step.id}
              </div>
              <Label size="xs" color={isActive ? 'brand' : 'secondary'}>
                {step.label}
              </Label>
            </div>
            {index < steps.length - 1 && (
              <div className="h-[2px] flex-1 bg-[var(--grey-200)] mx-[4px]">
                <div
                  className={`h-full ${
                    currentStep > step.id ? 'bg-[var(--brand-red)] w-full' : 'bg-transparent'
                  }`}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

function SummaryRow({
  label,
  value,
  emphasize = false,
}: {
  label: string;
  value: string;
  emphasize?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <Paragraph size="xs" color="secondary">
        {label}
      </Paragraph>
      <Paragraph size={emphasize ? 'md' : 'sm'} className={emphasize ? 'font-semibold' : ''}>
        {value}
      </Paragraph>
    </div>
  );
}

function CategoryGlyph({ icon }: { icon: 'lightning' | 'tv' | 'book' | 'wifi' }) {
  const glyphMap: Record<typeof icon, string> = {
    lightning: '⚡️',
    tv: '📺',
    book: '📚',
    wifi: '📶',
  } as const;

  return (
    <div className="w-[40px] h-[40px] rounded-[16px] bg-[var(--grey-100)] flex items-center justify-center text-xl">
      {glyphMap[icon]}
    </div>
  );
}
