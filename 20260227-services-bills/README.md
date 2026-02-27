# 20260227 Services Bills Prototype

## Product Requirements Document

**Owner:** Rabbies / Product Ops (Alex)
**Status:** In Progress
**Last updated:** 2026-02-27
**Related Jira epics:** TBD
**Related docs:** `/app/services-bills`, `rebtel-information/mtu-description`

---

### 1. Understand

#### 1.1 Problem Statement
- Migrants often need to pay Nigerian household bills (electricity, TV, education, internet) but current Rebtel app lacks a cohesive flow.
- We need a lightweight prototype to test a multi-step, mobile-first Nigeria bill payment experience using existing design tokens.
- Urgency: aligns with MTU revamp + corridor expansion work this quarter.

#### 1.2 Insights & Evidence
- **Data:** High cross-border MTU volume to Nigeria; support tickets cite desire to pay utilities directly.
- **Research:** Users are comfortable selecting known contacts; friction arises when the recipient isn’t in their call history.
- **Market:** Competitors (e.g., Boss Revolution) provide corridor-specific bill pay; we need parity.
- **Constraints:** Only Nigerian corridors in scope; account reference must be at least 6 chars before submission.

#### 1.3 Current Behavior / Business Logic
- Prototype introduces four steps: Recipient → Bill Type → Provider → Review/Pay.
- Uses `mockContacts` filtered to Nigeria and `nigeriaBillProviders` fixture for available products.
- Primary CTA locked until required fields satisfied; service fee + FX derived from fixture data.

### 2. Define

#### 2.1 Goals & Non-Goals
**Goals**
- Allow users to select or add a Nigerian recipient before proceeding.
- Showcase corridor-specific catalog (categories → providers → amount tiers).
- Provide accurate financial summary (bill amount, fee, FX) at review step.

**Non-Goals**
- Real payments, authentication, or ledger posting.
- Support for non-Nigerian corridors.

#### 2.2 Hypotheses
- **H1:** Forcing an explicit recipient selection increases comprehension and reduces misdirected payments in testing.
- **H2:** Inline manual-entry option lowers abandonment when the contact isn’t pre-loaded.

#### 2.3 Success Metrics
- **Primary:** Prototype usability rating ≥4/5 in stakeholder review.
- **Secondary:** Completion rate through all 4 steps during tests ≥80%.

### 3. Explore

#### 3.1 High-Level Solutions
- **Chosen:** Guided wizard inside existing iPhone frame component with design tokens reused from Design System 3.0.
- Alternative (not chosen): Overlay-based quick action without explicit steps.

#### 3.2 UX / Design Notes
- 390px viewport, bottom sheets avoided in favor of core cards.
- Manual recipient form embedded inside Step 1.
- Bottom nav now routes to `/new_home`, `/services-bills`, `/account`.

#### 3.3 Proposed Business Logic
- Recipient must exist (selected or manual) before step 2.
- Manual inputs require name ≥2 chars, phone ≥6 chars.
- Provider selection resets account reference + amount defaults.

#### 3.4 Stakeholders
- **Product:** Alex (PM)
- **Engineering:** Design systems prototyping squad
- **Design:** Design Systems 3.0 team
- **Ops:** MTU Revamp WG

### 4. Validate & Scope

#### 4.1 Technical Notes
- Client-only Next.js route using `useState` + fixture data.
- Reuses `ContactList`, `BottomNavBar`, newly added `IPhoneFrame` component.

#### 4.2 Requirements / Acceptance Criteria
1. **APIs & Data:** None (mock data only).
2. **Product Logic:** Recipient required; account reference min length; provider-specific amount chips.
3. **User Handling:** Nigeria-only; manual recipient flagged with 🇳🇬 placeholder.
4. **Operations:** Not applicable.
5. **Quality & Risk:** Ensure navigation doesn’t dead-end (Account tab placeholder added).

### 5. Rollout Plan
- Internal review via Next.js dev server + Vercel preview (when ready).
- Share via WhatsApp/email with stakeholders.

### 6. Open Questions
1. Do we need to support multiple recipients per session?
2. Should manual recipient persist to contacts?
3. What telemetry is required when productionized?

### 7. Appendix
- Uses `templates/rebtel-prd.md` for structure.

---

## Jira Ticket – `SERVICES-001`

# Background
Prototype a Nigeria-specific bill payment wizard inside the Services tab to test MTU extensions before committing backend effort.

# What
## Summary
Build a 4-step Services → Bills flow (Recipient → Bill type → Provider → Review) with working navigation, manual recipient entry, and accurate fee math using fixture data.

## Business Logic
- Recipient required: either select from Nigerian contacts or add manually (name ≥2 chars, phone ≥6 chars).
- Step 2 surfaces `nigeriaBillCategories`; step 3 filters providers by category and shows amount chips; selecting a provider resets amount + reference.
- Primary CTA disabled until validation per step passes; at step 4 it displays `Pay ₦X` and resets flow after click.
- Bottom nav tabs must route: Home → `/new_home`, Services → `/services-bills`, Account → `/account` placeholder.

## 3rd Party Dependencies
- None (mock data only; no APIs).

## Design & Copy
- Reuse Design System 3.0 components from repo.
- Visual reference: `/app/services-bills` route in Next.js dev server.

## Naming of new tracking events
- None (prototype only).

# Expected outcome
## KPI to measure
- UX review score ≥4/5 (qualitative).

## Expected impact
- Validates Nigeria bill-pay narrative before backend investment.

## Feature flags and experimentation
- None (prototype only).

# When
## Go-live date
- 2026-02-28 (dev handoff for stakeholder testing).

## Platform sync
- Mobile web prototype only (390px viewport).
