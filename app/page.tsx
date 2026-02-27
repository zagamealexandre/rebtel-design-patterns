'use client';

import {
  Display,
  Headline,
  Paragraph,
  Label,
  Button,
  ButtonGroup,
  Badge,
  Pill,
  ActionLabel,
  Avatar,
  CallingCard,
  MTUCard,
  Icon,
  PhoneIcon,
  CheckIcon,
} from '@/components';

// ============================================
// COLOR SWATCH COMPONENT
// ============================================

interface ColorSwatchProps {
  name: string;
  color: string;
  textColor?: 'light' | 'dark';
}

function ColorSwatch({ name, color, textColor = 'dark' }: ColorSwatchProps) {
  return (
    <div className="flex flex-col gap-[var(--spacing-xxs)]">
      <div
        className="w-full h-[60px] rounded-[var(--radius-sm)] border border-[var(--border-primary)]"
        style={{ backgroundColor: color }}
      />
      <Label size="xs" color={textColor === 'light' ? 'secondary' : 'primary'}>
        {name}
      </Label>
      <Label size="xs" color="secondary">
        {color}
      </Label>
    </div>
  );
}

// ============================================
// SECTION COMPONENT
// ============================================

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({ title, children }: SectionProps) {
  return (
    <section className="flex flex-col gap-[var(--spacing-lg)]">
      <Headline size="md" color="primary">
        {title}
      </Headline>
      <div className="flex flex-col gap-[var(--spacing-md)]">
        {children}
      </div>
    </section>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================

export default function DesignSystemShowcase() {
  return (
    <main className="min-h-screen bg-[var(--background)] py-[var(--spacing-xl)]">
      {/* Mobile Container */}
      <div className="max-w-[390px] mx-auto px-[var(--spacing-md)]">
        
        {/* Header */}
        <div className="flex flex-col gap-[var(--spacing-xs)] mb-[var(--spacing-xxl)]">
          <Display size="md">Rebtel</Display>
          <Headline size="sm" color="brand">Design System 3.0</Headline>
          <Paragraph size="sm" color="secondary">
            Mobile-first component library
          </Paragraph>
        </div>

        {/* Sections */}
        <div className="flex flex-col gap-[var(--spacing-xxxl)]">

          {/* Typography Section */}
          <Section title="Typography">
            <div className="flex flex-col gap-[var(--spacing-md)]">
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Display</Label>
                <Display size="lg">Display Large</Display>
                <Display size="md">Display Medium</Display>
                <Display size="sm">Display Small</Display>
                <Display size="xs">Display XS</Display>
              </div>
              
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Headline</Label>
                <Headline size="lg">Headline Large</Headline>
                <Headline size="md">Headline Medium</Headline>
                <Headline size="sm">Headline Small</Headline>
                <Headline size="xs">Headline XS</Headline>
              </div>

              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Paragraph</Label>
                <Paragraph size="xl">Paragraph XL - For larger body text</Paragraph>
                <Paragraph size="lg">Paragraph LG - Regular large text</Paragraph>
                <Paragraph size="md">Paragraph MD - Default body text</Paragraph>
                <Paragraph size="sm">Paragraph SM - Smaller body text</Paragraph>
                <Paragraph size="xs">Paragraph XS - Caption text</Paragraph>
              </div>

              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Label</Label>
                <div className="flex flex-wrap gap-[var(--spacing-sm)]">
                  <Label size="xl">Label XL</Label>
                  <Label size="lg">Label LG</Label>
                  <Label size="md">Label MD</Label>
                  <Label size="sm">Label SM</Label>
                  <Label size="xs">Label XS</Label>
                </div>
              </div>
            </div>
          </Section>

          {/* Colors Section */}
          <Section title="Colors">
            <div className="flex flex-col gap-[var(--spacing-lg)]">
              {/* Brand Colors */}
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="sm" color="secondary">Brand</Label>
                <div className="grid grid-cols-3 gap-[var(--spacing-sm)]">
                  <ColorSwatch name="Rebtel Red" color="#E31B3B" />
                  <ColorSwatch name="Black" color="#111111" />
                  <ColorSwatch name="White" color="#FFFFFF" />
                </div>
              </div>

              {/* Grey Scale */}
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="sm" color="secondary">Grey Scale</Label>
                <div className="grid grid-cols-5 gap-[var(--spacing-xs)]">
                  <ColorSwatch name="900" color="#111111" />
                  <ColorSwatch name="800" color="#2D2D32" />
                  <ColorSwatch name="700" color="#505055" />
                  <ColorSwatch name="600" color="#737378" />
                  <ColorSwatch name="500" color="#96969B" />
                  <ColorSwatch name="400" color="#B9B9BE" />
                  <ColorSwatch name="300" color="#DCDCE1" />
                  <ColorSwatch name="200" color="#F3F3F3" />
                  <ColorSwatch name="100" color="#FAFAFC" />
                  <ColorSwatch name="0" color="#FFFFFF" />
                </div>
              </div>

              {/* Semantic Colors */}
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="sm" color="secondary">Semantic</Label>
                <div className="grid grid-cols-4 gap-[var(--spacing-sm)]">
                  <ColorSwatch name="Warning" color="#F06E1D" />
                  <ColorSwatch name="Success" color="#49CD18" />
                  <ColorSwatch name="Purple" color="#4200FF" />
                  <ColorSwatch name="Error" color="#E31B3B" />
                </div>
              </div>

              {/* Surface Colors */}
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="sm" color="secondary">Surfaces</Label>
                <div className="grid grid-cols-2 gap-[var(--spacing-sm)]">
                  <ColorSwatch name="Calling Card" color="#EDEADD" />
                  <ColorSwatch name="MTU Card" color="#DAE2F4" />
                </div>
              </div>
            </div>
          </Section>

          {/* Buttons Section */}
          <Section title="Buttons">
            <div className="flex flex-col gap-[var(--spacing-md)]">
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Primary</Label>
                <Button variant="primary" fullWidth>
                  Primary Button
                </Button>
              </div>

              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Secondary</Label>
                <Button variant="secondary" fullWidth>
                  Secondary Button
                </Button>
              </div>

              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Secondary White</Label>
                <Button variant="secondary-white" fullWidth>
                  Secondary White
                </Button>
              </div>

              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Secondary Black</Label>
                <Button variant="secondary-black" fullWidth>
                  Secondary Black
                </Button>
              </div>

              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Button Group</Label>
                <ButtonGroup>
                  <Button variant="primary" fullWidth>
                    Yes
                  </Button>
                  <Button variant="secondary" fullWidth>
                    No
                  </Button>
                </ButtonGroup>
              </div>

              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">With Icons</Label>
                <Button variant="primary" fullWidth leftIcon={<Icon size="sm" color="white"><PhoneIcon className="w-full h-full" /></Icon>}>
                  Call Now
                </Button>
              </div>

              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Small Size</Label>
                <Button variant="primary" size="small">
                  Small Button
                </Button>
              </div>
            </div>
          </Section>

          {/* Badges Section */}
          <Section title="Badges & Pills">
            <div className="flex flex-col gap-[var(--spacing-md)]">
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Badge Variants</Label>
                <div className="flex flex-wrap gap-[var(--spacing-sm)]">
                  <Badge variant="dark">Dark</Badge>
                  <Badge variant="light">Light</Badge>
                  <Badge variant="brand">Brand</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </div>

              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Action Labels (Card)</Label>
                <div className="flex flex-wrap gap-[var(--spacing-sm)]">
                  <ActionLabel>Calling</ActionLabel>
                  <ActionLabel>Top-up</ActionLabel>
                  <ActionLabel>Data</ActionLabel>
                </div>
              </div>

              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Pills</Label>
                <div className="flex flex-wrap gap-[var(--spacing-sm)]">
                  <Pill variant="brand">New</Pill>
                  <Pill variant="success">Active</Pill>
                  <Pill variant="dark">Pro</Pill>
                </div>
              </div>
            </div>
          </Section>

          {/* Avatars Section */}
          <Section title="Avatars">
            <div className="flex flex-col gap-[var(--spacing-md)]">
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Sizes</Label>
                <div className="flex items-end gap-[var(--spacing-md)]">
                  <Avatar size="xs" fallback="John Doe" />
                  <Avatar size="sm" fallback="John Doe" />
                  <Avatar size="md" fallback="John Doe" />
                  <Avatar size="lg" fallback="John Doe" />
                  <Avatar size="xl" fallback="John Doe" />
                </div>
              </div>
            </div>
          </Section>

          {/* Cards Section */}
          <Section title="Cards">
            <div className="flex flex-col gap-[var(--spacing-md)]">
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">Calling Card</Label>
                <CallingCard
                  timestamp="1 days ago"
                  contactName="Stina Blackstenius"
                  minutesLeft="340 min left"
                  localTime="2:30 PM"
                />
              </div>

              <div className="flex flex-col gap-[var(--spacing-xs)]">
                <Label size="xs" color="secondary">MTU Card</Label>
                <MTUCard
                  timestamp="2 days ago"
                  phoneNumber="+1 2133 3244 2323"
                  dataAmount="Data 11GB"
                  operator="Airtel"
                />
              </div>
            </div>
          </Section>

          {/* Spacing Section */}
          <Section title="Spacing">
            <div className="flex flex-col gap-[var(--spacing-xs)]">
              <Label size="xs" color="secondary">Spacing Scale</Label>
              <div className="flex flex-col gap-[var(--spacing-xs)]">
                {[
                  { name: 'xxxs', value: '2px' },
                  { name: 'xxs', value: '4px' },
                  { name: 'xs', value: '8px' },
                  { name: 'sm', value: '12px' },
                  { name: 'md', value: '16px' },
                  { name: 'lg', value: '20px' },
                  { name: 'xl', value: '24px' },
                  { name: 'xxl', value: '32px' },
                ].map(({ name, value }) => (
                  <div key={name} className="flex items-center gap-[var(--spacing-md)]">
                    <Label size="sm" color="secondary" className="w-[60px]">
                      {name}
                    </Label>
                    <div
                      className="h-[16px] bg-[var(--brand-red)] rounded-[var(--radius-xs)]"
                      style={{ width: value }}
                    />
                    <Label size="xs" color="tertiary">
                      {value}
                    </Label>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Border Radius Section */}
          <Section title="Border Radius">
            <div className="flex flex-col gap-[var(--spacing-xs)]">
              <Label size="xs" color="secondary">Radius Scale</Label>
              <div className="flex flex-wrap gap-[var(--spacing-md)]">
                {[
                  { name: 'xs', value: '4px' },
                  { name: 'sm', value: '8px' },
                  { name: 'md', value: '12px' },
                  { name: 'lg', value: '16px' },
                  { name: 'xl', value: '24px' },
                  { name: 'xxl', value: '32px' },
                ].map(({ name, value }) => (
                  <div key={name} className="flex flex-col items-center gap-[var(--spacing-xxs)]">
                    <div
                      className="w-[64px] h-[64px] bg-[var(--brand-red)]"
                      style={{ borderRadius: value }}
                    />
                    <Label size="xs" color="secondary">{name}</Label>
                    <Label size="xs" color="tertiary">{value}</Label>
                  </div>
                ))}
              </div>
            </div>
          </Section>

          {/* Footer */}
          <div className="pt-[var(--spacing-xxl)] pb-[var(--spacing-lg)] text-center">
            <Paragraph size="xs" color="secondary">
              Rebtel Design System 3.0
            </Paragraph>
            <Paragraph size="xs" color="tertiary">
              Mobile-first components
            </Paragraph>
          </div>

        </div>
      </div>
    </main>
  );
}
