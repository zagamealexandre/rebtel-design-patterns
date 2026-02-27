
Folder highlights
Design System development utilizes Next.js, TypeScript, and Tailwind CSS for a mobile-first component library.

DESIGN_SYSTEM.md
# Rebtel 3.0 Design System

A comprehensive mobile-first design system for the Rebtel APP, built with Next.js, TypeScript, and Tailwind CSS.

---

## Table of Contents

1. [Design Principles](#design-principles)
2. [Foundations](#foundations)
   - [Colors](#colors)
   - [Typography](#typography)
   - [Spacing](#spacing)
   - [Border Radius](#border-radius)
   - [Shadows & Elevation](#shadows--elevation)
   - [Icons](#icons)
3. [Components](#components)
   - [Atoms](#atoms)
   - [Molecules](#molecules)
4. [Usage Guidelines](#usage-guidelines)
5. [Technical Implementation](#technical-implementation)

---

## Design Principles

### Mobile-First

The Rebtel Design System is **exclusively designed for mobile devices**. All components, layouts, and interactions are optimized for a **390px viewport width** (iPhone standard). Do not design for desktop breakpoints.

### Visual Language

1. **Soft & Approachable**: Rounded corners (min 4px, up to fully rounded pills) create a friendly, approachable interface.

2. **Brand-Forward**: Rebtel Red (#E31B3B) is the primary accent color, used for primary actions and brand emphasis.

3. **Clarity Through Hierarchy**: Clear typographic hierarchy with two distinct font families separating display text from body content.

4. **Lightweight Elevation**: Subtle shadows provide depth without visual heaviness. Use the lowest elevation level that achieves the necessary separation.

### Decision-Making Framework

When making design decisions, prioritize in this order:

1. **Usability** - Can users complete their task easily?
2. **Consistency** - Does it match existing patterns?
3. **Brand Expression** - Does it feel like Rebtel?
4. **Visual Appeal** - Does it look polished?

### Component Philosophy

- **Atoms**: Smallest functional units (Button, Typography, Badge, Avatar, Icon)
- **Molecules**: Combinations of atoms (Card, ContactInfo)
- **Organisms**: Complex sections (Lists, Forms) - built by composing molecules

Always prefer composition over customization. Build complex UIs by combining simple, well-defined components.

---

## Foundations

### Colors

#### Brand Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-red` | `#E31B3B` | Primary actions, brand emphasis, links |
| `--brand-black` | `#111111` | Maximum contrast text, dark surfaces |
| `--brand-white` | `#FFFFFF` | Light backgrounds, inverse text |

#### Grey Scale

A 10-step neutral scale for text, backgrounds, and borders:

| Token | Value | Usage |
|-------|-------|-------|
| `--grey-900` | `#111111` | Maximum contrast, dark mode backgrounds |
| `--grey-800` | `#2D2D32` | Primary text color |
| `--grey-700` | `#505055` | Card metadata text |
| `--grey-600` | `#737378` | Tertiary text |
| `--grey-500` | `#96969B` | Secondary text, placeholders |
| `--grey-400` | `#B9B9BE` | Disabled states |
| `--grey-300` | `#DCDCE1` | Borders, dividers |
| `--grey-200` | `#F3F3F3` | Secondary buttons, subtle backgrounds |
| `--grey-100` | `#FAFAFC` | Canvas/page background |
| `--grey-0` | `#FFFFFF` | Card backgrounds, inputs |

#### Red Scale

Extended red palette for hover/active states:

| Token | Value | Usage |
|-------|-------|-------|
| `--red-60` | `#5B0B18` | Darkest red (rarely used) |
| `--red-50` | `#881023` | Active/pressed state for primary |
| `--red-40` | `#B6162F` | Hover state for primary |
| `--red-rebtel` | `#E31B3B` | Default primary color |
| `--red-30` | `#E94962` | Light accent |
| `--red-20` | `#EE7689` | Lighter accent |
| `--red-10` | `#F4A4B1` | Lightest red |

#### Semantic Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--semantic-warning` | `#F06E1D` | Warnings, attention required |
| `--semantic-warning-light` | `#F7B68E` | Warning backgrounds |
| `--semantic-warning-lighter` | `#FBDBC6` | Subtle warning backgrounds |
| `--semantic-green` | `#49CD18` | Success, positive actions |
| `--semantic-green-darker` | `#09BC09` | Darker success |
| `--semantic-green-light` | `#A4E68B` | Success backgrounds |
| `--semantic-green-lighter` | `#D1F3C5` | Subtle success backgrounds |
| `--semantic-purple` | `#4200FF` | Special/promotional |

#### Surface Colors

Specialized background colors for specific contexts:

| Token | Value | Usage |
|-------|-------|-------|
| `--surface-calling` | `#EDEADD` | Calling card backgrounds |
| `--surface-mtu` | `#DAE2F4` | Mobile top-up card backgrounds |
| `--surface-canvas` | `#FAFAFC` | Page background |
| `--surface-lighter` | `#FFFFFF` | Elevated surface (cards) |
| `--surface-light` | `#F3F3F3` | Secondary surface |
| `--surface-neutral` | `#DCDCE1` | Neutral surface |
| `--surface-darker` | `#111111` | Dark surface |
| `--surface-overlay` | `rgba(17, 17, 17, 0.4)` | Modal overlays |
| `--surface-darker-transparent` | `rgba(17, 17, 17, 0.6)` | Action labels, dark badges |

#### Text Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--text-primary` | `#2D2D32` | Body text, headings |
| `--text-secondary` | `#96969B` | Captions, metadata, timestamps |
| `--text-tertiary` | `#737378` | Subtle text |
| `--text-white-constant` | `#FFFFFF` | Text on dark/colored backgrounds |
| `--text-homecard-meta` | `#505055` | Card metadata |

---

### Typography

#### Font Families

| Token | Font | Usage |
|-------|------|-------|
| `--font-display` | "Pano" | Display text (large, decorative headings) |
| `--font-body` | "KH Teka" | All other text (headlines, paragraphs, labels) |

**Fallback stack**: `system-ui, sans-serif`

#### Type Scale

##### Display (Pano Font)

For large, impactful headings:

| Size | Font Size | Line Height | Letter Spacing |
|------|-----------|-------------|----------------|
| `display-lg` | 32px | 40px | 0.64px |
| `display-md` | 24px | 32px | 0.48px |
| `display-sm` | 20px | 32px | 0.40px |
| `display-xs` | 16px | 24px | 0.32px |

##### Headline (KH Teka Font)

For section headings and important text:

| Size | Font Size | Line Height | Letter Spacing |
|------|-----------|-------------|----------------|
| `headline-lg` | 32px | 40px | 0.64px |
| `headline-md` | 24px | 36px | 0.48px |
| `headline-sm` | 20px | 32px | 0.40px |
| `headline-xs` | 16px | 24px | 0.32px |

##### Paragraph (KH Teka Font)

For body text and descriptions:

| Size | Font Size | Line Height | Letter Spacing |
|------|-----------|-------------|----------------|
| `paragraph-xl` | 20px | 32px | 0.40px |
| `paragraph-lg` | 18px | 28px | 0.36px |
| `paragraph-md` | 16px | 24px | 0.32px |
| `paragraph-sm` | 14px | 20px | 0.28px |
| `paragraph-xs` | 12px | 18px | 0.24px |

##### Label (KH Teka Font)

For UI labels, buttons, and compact text (line-height equals font-size):

| Size | Font Size | Line Height | Letter Spacing |
|------|-----------|-------------|----------------|
| `label-xl` | 20px | 20px | 0.40px |
| `label-lg` | 18px | 18px | 0.36px |
| `label-md` | 16px | 16px | 0.32px |
| `label-sm` | 14px | 14px | 0.28px |
| `label-xs` | 11px | 11px | 0.22px |

---

### Spacing

A consistent spacing scale based on multiples of 4px:

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xxxs` | 2px | Hairline spacing |
| `--spacing-xxs` | 4px | Tight spacing, badge padding |
| `--spacing-xs` | 8px | Element gaps, small padding |
| `--spacing-sm` | 12px | Card padding, medium gaps |
| `--spacing-md` | 16px | Default padding, section gaps |
| `--spacing-lg` | 20px | Larger gaps |
| `--spacing-xl` | 24px | Section spacing |
| `--spacing-xxl` | 32px | Large section spacing, button padding |
| `--spacing-xxxl` | 52px | Major section breaks |
| `--spacing-xxxxl` | 72px | Maximum spacing |

**Rule**: Always use spacing tokens. Never use arbitrary pixel values.

---

### Border Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-xs` | 4px | Minimal rounding |
| `--radius-sm` | 8px | Inputs, small cards |
| `--radius-md` | 12px | Cards, badges |
| `--radius-lg` | 16px | Large cards |
| `--radius-xl` | 24px | Prominent elements |
| `--radius-xxl` | 32px | Buttons, fully rounded elements |
| `--radius-full` | 9999px | Circular elements (avatars, pills) |

**Primary buttons** always use `--radius-xxl` (32px) for a pill shape.

---

### Shadows & Elevation

Three levels of elevation:

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-elevation-1` | `4px 5px 10px rgba(0,0,0,0.02)` | Cards at rest |
| `--shadow-elevation-2` | `0px 4px 16px rgba(0,0,0,0.08)` | Cards on hover, dropdowns |
| `--shadow-elevation-3` | `0px 8px 24px rgba(0,0,0,0.12)` | Modals, popovers |

**Rule**: Use the minimum elevation necessary. Shadows should be subtle.

---

### Icons

#### Size Scale

| Token | Value |
|-------|-------|
| `--icon-xxs` | 12px |
| `--icon-xs` | 16px |
| `--icon-sm` | 20px |
| `--icon-md` | 24px (default) |
| `--icon-lg` | 32px |
| `--icon-xl` | 40px |

#### Icon Colors

Icons inherit text colors using the same semantic tokens:
- `primary`, `secondary`, `tertiary`, `white`, `brand`, `success`, `warning`, `inherit`

#### Available Icons

The system includes these base icons:
- `MoreIcon` - Vertical ellipsis (three dots)
- `ChevronRightIcon` - Navigation forward
- `ChevronLeftIcon` - Navigation back
- `PhoneIcon` - Phone/calling actions
- `CloseIcon` - Dismiss/close
- `CheckIcon` - Confirmation/success
- `SearchIcon` - Search functionality
- `GridIcon` - Grid/menu view
- `EyeIcon` - Visibility toggle
- `HeartIcon` - Favorites
- `GiftIcon` - Gifts/rewards
- `PersonIcon` - User/account
- `GlobeIcon` - International/global
- `ChevronDownIcon` - Dropdown expand
- `ContactsIcon` - Contacts/address book

---

### Pictograms

Pictograms are decorative brand icons intended for emotive and communicative contexts, such as marketing communications, brand-building, and feature highlights. Unlike functional UI icons, pictograms are designed to be more expressive and visually impactful.

#### Style Characteristics

- **Oval/pill-shaped frame**: All pictograms are contained within a rounded rectangular border
- **Consistent stroke width**: 2.5-3px strokes for frames, 2-2.5px for internal elements
- **Monochrome**: Single color (inherits from `currentColor`)
- **Minimal design**: Simple, recognizable shapes without excessive detail

#### Size Scale

| Size | Dimensions | Use Case |
|------|------------|----------|
| `sm` | 48×32px | Inline with text, feature lists |
| `md` | 64×44px | Cards, promotional sections |
| `lg` | 80×56px | Hero sections, splash screens |

#### Available Pictograms

**Import:**
```tsx
import { 
  PhonePictogram, 
  CashPictogram,
  PercentPictogram, 
  GlobePictogram, 
  HeartPictogram, 
  CurrencyPictogram, 
  TargetPictogram 
} from '@/components';
```

| Pictogram | Description | Use Case |
|-----------|-------------|----------|
| `PhonePictogram` | Phone receiver | Calling features, voice services |
| `CashPictogram` | Stack of cash/bills | Mobile top-ups, money transfers |
| `PercentPictogram` | Percentage symbol | Discounts, offers, promotions |
| `GlobePictogram` | Globe with meridians | International services, global reach |
| `HeartPictogram` | Filled heart | Favorites, loved ones, emotional content |
| `CurrencyPictogram` | Currency symbols (¥£$) | Currency conversion, payments |
| `TargetPictogram` | Bullseye/target | Goals, tracking, precision |

#### Usage Examples

```tsx
// In a feature list (small size)
<div className="flex items-center gap-[var(--spacing-sm)]">
  <PhonePictogram size="sm" className="text-[var(--text-primary)]" />
  <Paragraph size="md">Crystal clear international calls</Paragraph>
</div>

// In a promotional card (medium size)
<div className="text-center">
  <GlobePictogram size="md" className="text-[var(--brand-red)]" />
  <Headline size="sm">200+ Countries Supported</Headline>
</div>

// Hero section (large size)
<PercentPictogram size="lg" className="text-[var(--grey-800)]" />
```

#### Constraints

- **DO** use pictograms for decorative/communicative purposes
- **DO** maintain consistent sizing within a context (e.g., all `sm` in a feature list)
- **DON'T** use pictograms for functional UI elements (use Icons instead)
- **DON'T** use emojis where pictograms are available - pictograms maintain brand consistency
- **DON'T** mix pictograms with emojis in the same context

---

## Components

### Atoms

#### Button

The primary interactive element for user actions.

**Import:**
```tsx
import { Button, ButtonGroup } from '@/components';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'secondary-white' \| 'secondary-black'` | `'primary'` | Visual style |
| `size` | `'default' \| 'small'` | `'default'` | Button size |
| `fullWidth` | `boolean` | `false` | Stretch to container width |
| `leftIcon` | `ReactNode` | - | Icon before label |
| `rightIcon` | `ReactNode` | - | Icon after label |
| `disabled` | `boolean` | `false` | Disable interaction |

**Variants:**

| Variant | Background | Text | Use Case |
|---------|------------|------|----------|
| `primary` | `--brand-red` | White | Primary actions (Call, Confirm, Submit) |
| `secondary` | `--grey-200` | `--text-primary` | Secondary actions (Cancel, Back) |
| `secondary-white` | `--grey-0` | `--text-primary` | On colored backgrounds |
| `secondary-black` | `--grey-900` | White | High contrast secondary |

**States:**
- **Default**: Base styling
- **Hover**: Slightly darker background
- **Active/Pressed**: Darker still
- **Disabled**: 50% opacity, cursor not-allowed
- **Focus**: 2px red ring with offset

**Sizes:**
- **default**: Height 64px, padding 32px horizontal, label-xl text
- **small**: Height 48px, padding 24px horizontal, label-lg text

**Usage Examples:**
```tsx
// Primary action
<Button variant="primary">Call Now</Button>

// Secondary action
<Button variant="secondary">Cancel</Button>

// With icon
<Button variant="primary" leftIcon={<PhoneIcon />}>
  Call Now
</Button>

// Full width in a form
<Button variant="primary" fullWidth>Submit</Button>

// Button group (Yes/No pattern)
<ButtonGroup direction="vertical" gap="sm">
  <Button variant="primary" fullWidth>Yes</Button>
  <Button variant="secondary" fullWidth>No</Button>
</ButtonGroup>
```

**Constraints:**
- Never use more than one primary button in a view
- Button text should be action-oriented (verbs)
- Icons should be 20-24px for default size, 16-20px for small

---

#### Typography

Text components for consistent typographic hierarchy.

**Import:**
```tsx
import { Display, Headline, Paragraph, Label, Text } from '@/components';
```

**Shared Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'white' \| 'brand' \| 'success' \| 'warning' \| 'inherit'` | `'primary'` | Text color |
| `className` | `string` | `''` | Additional classes |
| `as` | `keyof JSX.IntrinsicElements` | varies | Render as different element |

**Components:**

##### Display
Large, impactful text using Pano font.

| Prop | Type | Default |
|------|------|---------|
| `size` | `'lg' \| 'md' \| 'sm' \| 'xs'` | `'lg'` |

```tsx
<Display size="lg">Welcome to Rebtel</Display>
<Display size="md" color="brand">Special Offer</Display>
```

##### Headline
Section headings using KH Teka font.

| Prop | Type | Default |
|------|------|---------|
| `size` | `'lg' \| 'md' \| 'sm' \| 'xs'` | `'lg'` |

Default HTML elements: lg→h1, md→h2, sm→h3, xs→h4

```tsx
<Headline size="md">Your Contacts</Headline>
<Headline size="sm" as="h2">Recent Calls</Headline>
```

##### Paragraph
Body text for descriptions and content.

| Prop | Type | Default |
|------|------|---------|
| `size` | `'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | `'md'` |

```tsx
<Paragraph size="md">Call anyone, anywhere in the world.</Paragraph>
<Paragraph size="xs" color="secondary">Last updated 2 hours ago</Paragraph>
```

##### Label
Compact UI text for buttons, metadata, and labels.

| Prop | Type | Default |
|------|------|---------|
| `size` | `'xl' \| 'lg' \| 'md' \| 'sm' \| 'xs'` | `'md'` |

```tsx
<Label size="xl">Contact Name</Label>
<Label size="xs" color="secondary">2 days ago</Label>
```

**Usage Guidelines:**
- Use `Display` only for hero sections or major page titles
- Use `Headline` for section organization
- Use `Paragraph` for readable body content
- Use `Label` for UI elements, metadata, and compact information

---

#### Badge

Status indicators and category labels.

**Import:**
```tsx
import { Badge, Pill, ActionLabel } from '@/components';
```

**Badge Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'dark' \| 'light' \| 'brand' \| 'success' \| 'warning' \| 'outline'` | `'dark'` | Visual style |
| `size` | `'sm' \| 'md'` | `'sm'` | Badge size |

**Variants:**
| Variant | Background | Text | Use Case |
|---------|------------|------|----------|
| `dark` | Semi-transparent black | White | Default, overlays on images |
| `light` | `--grey-200` | `--text-primary` | Light backgrounds |
| `brand` | `--brand-red` | White | Promotional, branded |
| `success` | `--semantic-green` | White | Positive status |
| `warning` | `--semantic-warning` | White | Attention needed |
| `outline` | Transparent | `--text-primary` | Subtle categorization |

**Sizes:**
- **sm**: 8px horizontal / 4px vertical padding, label-xs text
- **md**: 12px horizontal / 8px vertical padding, label-sm text

**Components:**

##### Badge
Standard rectangular badge with rounded corners (12px radius).

```tsx
<Badge variant="success">Active</Badge>
<Badge variant="warning" size="md">Pending</Badge>
```

##### Pill
Fully rounded version of Badge.

```tsx
<Pill variant="brand">New</Pill>
<Pill variant="light">Pro</Pill>
```

##### ActionLabel
Specialized dark badge for card headers (Calling, Top-up, etc.).

```tsx
<ActionLabel>Calling</ActionLabel>
<ActionLabel>Top-up</ActionLabel>
```

---

#### Avatar

User profile pictures and identity representations.

**Import:**
```tsx
import { Avatar, Flag, AvatarWithFlag, AvatarGroup } from '@/components';
```

**Avatar Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `src` | `string` | - | Image URL |
| `alt` | `string` | `'Avatar'` | Alt text |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Avatar size |
| `fallback` | `string` | - | Name for initials fallback |

**Sizes:**
| Size | Dimensions |
|------|------------|
| `xs` | 16×16px |
| `sm` | 24×24px |
| `md` | 32×32px |
| `lg` | 48×48px |
| `xl` | 64×64px |

**Components:**

##### Avatar
Basic circular profile picture or initials.

```tsx
// With image
<Avatar src="/profile.jpg" alt="John Doe" size="lg" />

// With fallback initials
<Avatar fallback="John Doe" size="md" />
```

##### Flag
Circular country flag.

```tsx
<Flag src="/flags/ng.png" alt="Nigeria" size="md" />
```

##### AvatarWithFlag
Profile picture with overlapping country flag (used in CallingCard).

```tsx
<AvatarWithFlag
  src="/profile.jpg"
  fallback="Stina B"
  flagSrc="/flags/ng.png"
  size="md"
/>
```

##### AvatarGroup
Overlapping group of avatars.

```tsx
<AvatarGroup
  avatars={[
    { src: '/a.jpg', alt: 'User A' },
    { fallback: 'User B' },
    { fallback: 'User C' },
  ]}
  max={3}
  size="sm"
/>
```

**Fallback Behavior:**
When no `src` is provided, displays initials from `fallback` prop:
- Single word: First letter (e.g., "John" → "J")
- Multiple words: First + last initials (e.g., "John Doe" → "JD")
- No fallback: Displays "?"

---

#### Icon

Wrapper component for consistent icon sizing and coloring.

**Import:**
```tsx
import { Icon, MoreIcon, ChevronRightIcon, PhoneIcon } from '@/components';
```

**Icon Wrapper Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `'xxs' \| 'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl'` | `'md'` | Icon size |
| `color` | `'primary' \| 'secondary' \| 'tertiary' \| 'white' \| 'brand' \| 'success' \| 'warning' \| 'inherit'` | `'primary'` | Icon color |

**Usage:**
```tsx
// Using Icon wrapper
<Icon size="lg" color="brand">
  <PhoneIcon className="w-full h-full" />
</Icon>

// Direct SVG icon (inherits parent color/size)
<button className="text-[var(--text-secondary)]">
  <MoreIcon className="w-6 h-6" />
</button>
```

---

### Molecules

#### Card

Container components for displaying grouped information.

**Import:**
```tsx
import { Card, CallingCard, MTUCard, BaseCard } from '@/components';
```

##### CallingCard

For displaying calling contacts with minutes remaining.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'Calling'` | Action label text |
| `timestamp` | `string` | required | Relative time (e.g., "1 days ago") |
| `contactName` | `string` | required | Contact display name |
| `minutesLeft` | `string` | - | Minutes remaining |
| `localTime` | `string` | - | Contact's local time |
| `profileImage` | `string` | - | Profile image URL |
| `flagImage` | `string` | - | Country flag URL |
| `onClick` | `() => void` | - | Click handler |

**Visual Characteristics:**
- Background: `--surface-calling` (#EDEADD) - warm beige
- Border radius: 12px
- Shadow: elevation-1, elevation-2 on hover
- Padding: 8px top, 12px sides/bottom

```tsx
<CallingCard
  timestamp="1 days ago"
  contactName="Stina Blackstenius"
  minutesLeft="340 min left"
  localTime="2:30 PM"
  flagImage="/flags/ng.png"
  onClick={() => handleCall('stina')}
/>
```

##### MTUCard

For displaying mobile top-up information.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | `'Top-up'` | Action label text |
| `timestamp` | `string` | required | Relative time |
| `phoneNumber` | `string` | required | Phone number to top-up |
| `dataAmount` | `string` | - | Data amount (e.g., "Data 11GB") |
| `operator` | `string` | - | Carrier name |
| `flagImage` | `string` | - | Country flag URL |
| `onClick` | `() => void` | - | Click handler |

**Visual Characteristics:**
- Background: `--surface-mtu` (#DAE2F4) - soft blue
- Same border radius, shadow, and padding as CallingCard

```tsx
<MTUCard
  timestamp="2 days ago"
  phoneNumber="+1 2133 3244 2323"
  dataAmount="Data 11GB"
  operator="Airtel"
  flagImage="/flags/ng.png"
  onClick={() => handleTopUp('number')}
/>
```

##### BaseCard

Generic card container for custom layouts.

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'calling' \| 'mtu'` | `'calling'` | Background color variant |
| `children` | `ReactNode` | required | Card content |
| `onClick` | `() => void` | - | Click handler |

```tsx
<BaseCard variant="calling">
  <CustomContent />
</BaseCard>
```

##### Card (Generic)

Discriminated union component that renders CallingCard or MTUCard based on `type`.

```tsx
<Card
  type="calling"
  timestamp="1 days ago"
  contactName="John Doe"
/>

<Card
  type="mtu"
  timestamp="2 days ago"
  phoneNumber="+1 555 1234"
/>
```

---

## Usage Guidelines

### Color Usage

1. **Brand Red** - Reserve for primary actions only. One primary button per view.
2. **Grey Scale** - Use 800 for body text, 500 for secondary text, 300 for borders.
3. **Surface Colors** - Use designated surfaces for card types (calling/mtu).
4. **Semantic Colors** - Use sparingly for actual status communication.

### Typography Hierarchy

For a typical screen:
1. **Display** - Page title (one per page, optional)
2. **Headline** - Section titles
3. **Paragraph** - Body content
4. **Label** - UI elements, metadata

### Spacing Rules

1. Use `--spacing-md` (16px) as the default padding for containers
2. Use `--spacing-xs` (8px) for element gaps within components
3. Use `--spacing-xl` (24px) or `--spacing-xxl` (32px) between sections
4. Card internal padding: 12px (sm)

### Accessibility

1. Maintain 4.5:1 contrast ratio for normal text
2. Maintain 3:1 contrast ratio for large text (18px+)
3. All interactive elements must have visible focus states
4. Provide alt text for all images
5. Use semantic HTML elements via the `as` prop

---

## Technical Implementation

### File Structure

```
src/
├── components/
│   ├── atoms/
│   │   ├── Button/index.tsx
│   │   ├── Typography/index.tsx
│   │   ├── Badge/index.tsx
│   │   ├── Avatar/index.tsx
│   │   └── Icon/index.tsx
│   ├── molecules/
│   │   └── Card/index.tsx
│   └── index.ts          # Unified exports
├── styles/
│   └── tokens.ts         # TypeScript token definitions
└── app/
    └── globals.css       # CSS variables & Tailwind config
```

### Importing Components

Always import from the centralized index:

```tsx
import {
  Button,
  ButtonGroup,
  Display,
  Headline,
  Paragraph,
  Label,
  Badge,
  Pill,
  Avatar,
  AvatarWithFlag,
  Icon,
  PhoneIcon,
  CallingCard,
  MTUCard,
} from '@/components';
```

### CSS Variables

All design tokens are available as CSS variables. Use them in custom styles:

```css
.custom-element {
  background: var(--surface-calling);
  padding: var(--spacing-md);
  border-radius: var(--radius-md);
  color: var(--text-primary);
}
```

### Tailwind Integration

Design tokens are integrated with Tailwind via CSS variables. Use arbitrary value syntax:

```tsx
<div className="bg-[var(--surface-calling)] p-[var(--spacing-md)] rounded-[var(--radius-md)]">
  Content
</div>
```

Or use the pre-defined utility classes for typography:

```tsx
<span className="text-label-sm text-[var(--text-secondary)]">
  Caption text
</span>
```

### TypeScript Tokens

Import tokens for programmatic access:

```tsx
import { colors, spacing, typography } from '@/styles/tokens';

const primaryColor = colors.brand.red; // '#E31B3B'
const defaultSpacing = spacing.md; // '16px'
```

---

## Quick Reference

### Common Patterns

**Page Header:**
```tsx
<Display size="md">Page Title</Display>
<Paragraph size="sm" color="secondary">Subtitle or description</Paragraph>
```

**Section:**
```tsx
<div className="flex flex-col gap-[var(--spacing-md)]">
  <Headline size="sm">Section Title</Headline>
  <div className="flex flex-col gap-[var(--spacing-xs)]">
    {/* Content */}
  </div>
</div>
```

**Action Footer:**
```tsx
<ButtonGroup direction="vertical" gap="sm">
  <Button variant="primary" fullWidth>Primary Action</Button>
  <Button variant="secondary" fullWidth>Secondary Action</Button>
</ButtonGroup>
```

**Card List:**
```tsx
<div className="flex flex-col gap-[var(--spacing-sm)]">
  <CallingCard {...card1Props} />
  <CallingCard {...card2Props} />
  <MTUCard {...mtuProps} />
</div>
```

---

## Additional Components (Onboarding)

The following components were added to support the onboarding flow.

### New Atoms

#### Input

Text input component with label, placeholder, and error states.

**Import:**
```tsx
import { Input } from '@/components';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text above input |
| `error` | `string` | - | Error message (shows red styling) |
| `hint` | `string` | - | Helper text below input |
| `size` | `'default' \| 'large'` | `'default'` | Input size |
| `leftElement` | `ReactNode` | - | Element on left side of input |
| `rightElement` | `ReactNode` | - | Element on right side of input |

**Usage:**
```tsx
<Input
  label="Phone number"
  placeholder="Enter your phone"
  error="Invalid phone number"
/>
```

---

#### ProgressDots

Visual step indicator for multi-step flows.

**Import:**
```tsx
import { ProgressDots } from '@/components';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `currentStep` | `number` | required | Current active step (1-based) |
| `totalSteps` | `number` | required | Total number of steps |

**Usage:**
```tsx
<ProgressDots currentStep={2} totalSteps={4} />
```

---

#### OTPInput

6-digit verification code input with auto-focus advancement.

**Import:**
```tsx
import { OTPInput } from '@/components';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `length` | `number` | `6` | Number of digits |
| `value` | `string` | required | Current value |
| `onChange` | `(value: string) => void` | required | Change handler |
| `onComplete` | `(value: string) => void` | - | Called when all digits entered |
| `error` | `boolean` | `false` | Show error styling |

**Usage:**
```tsx
<OTPInput
  value={code}
  onChange={setCode}
  onComplete={(code) => verifyCode(code)}
/>
```

---

### New Icons

Added to `@/components/atoms/Icon`:

| Icon | Usage |
|------|-------|
| `SearchIcon` | Search inputs, search actions |
| `GridIcon` | Grid view toggle |
| `EyeIcon` | Visibility toggle |
| `HeartIcon` | Home tab, favorites |
| `GiftIcon` | Services tab, offers |
| `PersonIcon` | Account tab, profile |
| `GlobeIcon` | International features |
| `ChevronDownIcon` | Dropdowns, expand |
| `ContactsIcon` | Contacts list, phonebook |

---

### New Molecules

#### CountrySelector

Country picker with search and flag display.

**Import:**
```tsx
import { CountrySelector } from '@/components';
import { countries, Country, defaultCountry } from '@/data/countries';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `Country` | required | Selected country |
| `onChange` | `(country: Country) => void` | required | Selection handler |

**Usage:**
```tsx
const [country, setCountry] = useState(defaultCountry);

<CountrySelector value={country} onChange={setCountry} />
```

---

#### ContactRow

Selectable contact item for lists.

**Import:**
```tsx
import { ContactRow } from '@/components';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `name` | `string` | required | Contact name |
| `country` | `string` | required | Country name |
| `flag` | `string` | required | Flag emoji |
| `phoneNumber` | `string` | - | Phone number (shown if provided) |
| `selected` | `boolean` | `false` | Selection state |
| `onClick` | `() => void` | - | Click handler |

**Usage:**
```tsx
<ContactRow
  name="John Doe"
  country="Nigeria"
  flag="🇳🇬"
  phoneNumber="+234 123 456 7890"
  selected={isSelected}
  onClick={() => handleSelect()}
/>
```

---

#### IntroOfferCard

Promotional offer card with image and CTA.

**Import:**
```tsx
import { IntroOfferCard } from '@/components';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `'calling' \| 'topup'` | required | Offer type (determines badge) |
| `headline` | `string` | required | Main headline text |
| `description` | `string` | required | Supporting description |
| `ctaText` | `string` | required | Button text |
| `imageSrc` | `string` | - | Image URL (shows placeholder if omitted) |
| `onClick` | `() => void` | - | CTA click handler |

**Usage:**
```tsx
<IntroOfferCard
  type="calling"
  headline="Get 7 days of free unlimited calls"
  description="Then just $12/month. No contract."
  ctaText="Start free trial"
  onClick={() => startTrial()}
/>
```

---

### New Organisms

#### ContactList

Scrollable list of contacts with empty state.

**Import:**
```tsx
import { ContactList } from '@/components';
import { mockContacts, Contact } from '@/data/mockContacts';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `contacts` | `Contact[]` | required | Array of contacts |
| `selectedContactId` | `string` | - | ID of selected contact |
| `onSelectContact` | `(contact: Contact) => void` | required | Selection handler |
| `emptyState` | `ReactNode` | - | Custom empty state |

**Usage:**
```tsx
<ContactList
  contacts={mockContacts}
  selectedContactId={selected?.id}
  onSelectContact={setSelected}
/>
```

---

#### BottomNavBar

Fixed bottom navigation with Home, Services, Account tabs.

**Import:**
```tsx
import { BottomNavBar } from '@/components';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `activeTab` | `'home' \| 'services' \| 'account'` | `'home'` | Active tab |
| `onTabChange` | `(tab: NavTab) => void` | - | Tab change handler |

**Usage:**
```tsx
<BottomNavBar activeTab="home" onTabChange={handleTab} />
```

---

### Data Files

#### Countries (`@/data/countries`)

Full list of 190+ countries with dial codes and emoji flags, ordered by Rebtel user transaction popularity.

```typescript
import { countries, defaultCountry, getCountryByCode } from '@/data/countries';

// Country interface
interface Country {
  name: string;      // "Nigeria"
  code: string;      // "NG"
  dialCode: string;  // "+234"
  flag: string;      // "🇳🇬"
}
```

#### Mock Contacts (`@/data/mockContacts`)

20 mock contacts for prototype testing, ordered by destination country popularity.

```typescript
import { mockContacts, Contact } from '@/data/mockContacts';

// Contact interface
interface Contact {
  id: string;
  name: string;
  country: string;
  countryCode: string;
  phoneNumber: string;
  flag: string;
}
```

---

## Onboarding Flow

A complete 4-step onboarding prototype is available at `/onboarding`:

1. **Welcome** (`/onboarding`) - Brand introduction with value proposition
2. **Contacts** (`/onboarding/contacts`) - Contact selection with permission flow
3. **Verify** (`/onboarding/verify`) - Phone verification with OTP
4. **Home** (`/onboarding/home`) - Personalized intro offers

All steps are non-functional prototypes. Any phone number and OTP code will work.

---

## Additional Components (Out-of-Credit Flow)

The following reusable components were introduced for the `/new_home` out-of-credit proposal flow.

### OutOfCreditPanel (Molecule)

Full-screen decision panel shown when a user attempts to call but has no credit.

**Import:**
```tsx
import { OutOfCreditPanel } from '@/components';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `contactName` | `string` | - | Name of the contact being called |
| `contactFlag` | `string` | - | Emoji flag of the contact's country |
| `contactCountry` | `string` | - | Country name |
| `balance` | `string` | `'$0.00'` | User's current credit balance |
| `callRate` | `string` | `'$0.02/min'` | Per-minute call rate |
| `onBuyAndCall` | `() => void` | - | Handler for primary CTA |
| `onDismiss` | `() => void` | - | Handler to go back/dismiss |

**Usage:**
```tsx
<OutOfCreditPanel
  contactName="Ahmad Nazari"
  contactFlag="🇦🇫"
  contactCountry="Afghanistan"
  onBuyAndCall={() => goToOffers()}
  onDismiss={() => goHome()}
/>
```

**Constraints:**
- Always occupies full viewport height
- Shows contact avatar, destination info, and balance details
- Two CTAs: primary ("Buy a plan & call") and secondary ("Maybe later")

### PlanCard (Molecule)

Selectable pricing card for plan/offer selection screens.

**Import:**
```tsx
import { PlanCard } from '@/components';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `badge` | `string` | - | Badge label text (e.g. "Best value") |
| `badgeVariant` | `BadgeVariant` | `'brand'` | Visual variant of the badge |
| `price` | `string` | - | Display price (e.g. "$10") |
| `title` | `string` | - | Plan title |
| `description` | `string` | - | Plan description |
| `features` | `string[]` | - | List of feature pills |
| `onClick` | `() => void` | - | Selection handler |

**Usage:**
```tsx
<PlanCard
  badge="Best value"
  badgeVariant="brand"
  price="$10"
  title="7-day free trial"
  description="Unlimited calls. Then $12/month."
  features={['Unlimited mins', '30+ countries', 'HD quality']}
  onClick={() => selectPlan('trial')}
/>
```

**Constraints:**
- Full-width, card-based layout with elevation
- Hover state highlights border with brand red
- Features rendered as Pill components

### CallingScreenView (Organism)

Full-screen calling UI for connecting, ringing, in-call, and call-ended states.

**Import:**
```tsx
import { CallingScreenView } from '@/components';
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `contactName` | `string` | - | Name of the person being called |
| `contactFlag` | `string` | - | Emoji flag |
| `contactCountry` | `string` | - | Country name |
| `state` | `'connecting' \| 'ringing' \| 'in_call' \| 'ended'` | - | Current call state |
| `duration` | `number` | `0` | Call duration in seconds |
| `onEndCall` | `() => void` | - | End call handler |
| `onReturnHome` | `() => void` | - | Return home handler (ended state) |

**States:**
- **connecting**: Dark background, pinging animation rings, grey phone icon
- **ringing**: Same as connecting with different status label
- **in_call**: Phone icon turns green, shows live duration counter
- **ended**: Shows "Call ended" with duration and "Back to Home" CTA

**Usage:**
```tsx
<CallingScreenView
  contactName="Ahmad Nazari"
  contactFlag="🇦🇫"
  contactCountry="Afghanistan"
  state="in_call"
  duration={125}
  onEndCall={() => endCall()}
/>
```

**Constraints:**
- Always full-viewport, dark-themed (`--grey-900` background)
- End call button uses brand red circle
- Call duration formatted as MM:SS

---

### BottomSheet (Molecule)

A modal overlay sheet that slides up from the bottom of the screen. Used for contextual actions and confirmations.

**Import:**
```tsx
import { BottomSheet } from '@/components';
```

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | `boolean` | - | Controls visibility |
| `onClose` | `() => void` | - | Dismiss handler (tap on backdrop) |
| `children` | `ReactNode` | - | Sheet content |

**Visual:**
- White background with rounded top corners (`--radius-xl`)
- Dimmed backdrop (`bg-black/30`)
- Grab handle (36×4px grey bar)
- Home indicator bar at bottom (134×5px dark bar)
- Slide-up animation (0.3s ease-out)

**Usage:**
```tsx
<BottomSheet isOpen={showSheet} onClose={() => setShowSheet(false)}>
  <div className="px-[var(--spacing-md)] pt-[var(--spacing-sm)] pb-[var(--spacing-md)]">
    <Headline size="xs" className="text-center mb-[var(--spacing-lg)]">
      You're out of minutes
    </Headline>
    <Button variant="secondary-black" fullWidth>Add minutes</Button>
  </div>
</BottomSheet>
```

**Constraints:**
- Max width 390px, centered
- Content is fully customizable via children
- Backdrop dismisses the sheet on tap

---

## Out-of-Credit Calling Flow

A complete out-of-credit calling flow prototype is available at `/new_home`:

1. **Home** - Recent activity feed with CallingCards (with "Call again" CTA) and MTU cards (with "Product" + "Send again" buttons)
2. **Out of Minutes** - Bottom sheet overlay: "You're out of minutes" + "Add minutes" button (uses `BottomSheet`)
3. **Low on Minutes** - Bottom sheet overlay: "You're low on minutes" + "Add minutes" + "Call [name] anyway" (uses `BottomSheet`)
4. **Connecting → Ringing → In Call** - Dark calling screen with animations (uses `CallingScreenView`)
5. **Call Ended** - Summary with return home option

**Decision logic when user taps "Call again":**
- **0 minutes** → "out of minutes" bottom sheet (only "Add minutes")
- **≤3 minutes** → "low on minutes" bottom sheet ("Add minutes" + "Call anyway")
- **>3 minutes** → straight to connecting/calling screen

All steps are non-functional prototypes with mock timers and transitions. The flow uses a single-page state machine pattern with `useState` for state management.

---

## Version

**Rebtel Design System 3.0**  
Mobile-first component library for the Rebtel APP

Last updated: February 2026