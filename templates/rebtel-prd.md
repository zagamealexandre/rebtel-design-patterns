# [Product Name]

**Owner:** [Name / Team]  
**Status:** [Discovery / In Progress / Shipped / Parked]  
**Last updated:** [YYYY-MM-DD]  
**Related Jira epics:** [KEY-123], [KEY-456]  
**Related docs:** [Link 1], [Link 2]

---

## 1. Understand

### 1.1 Problem Statement

**What problem are we solving? For whom? Why now?**

- [Short, user-centric problem description]
- [Impacted segments / corridors / platforms]
- [Why this matters now (opportunity, risk, strategic fit)]

### 1.2 Insights & Evidence

#### 1.2.1 Data Insights

- [Key quantitative insights, with source: e.g. PostHog, Snowflake]
- [Trends over time, segments, corridors]
- [Any notable anomalies or edge cases]

#### 1.2.2 User Research Insights

- “[Quote or observation from user interview.]”
- “[Behavior observed during usability testing.]”
- [Support tickets / CS insights]

#### 1.2.3 Market / Competitor Insights

- [How competitors solve this problem]
- [Benchmarks / best practices]
- [Any regulatory / geo-specific nuances]

#### 1.2.4 Constraints

- **Legal:** [e.g. KYC, telecom regulations, T&Cs]
- **Technical:** [e.g. legacy services, data availability, performance]
- **Market-specific:** [e.g. operator rules, pricing constraints]

### 1.3 Current Behavior / Business Logic

- [How it works today – user flow summary]
- [Current backend / configuration logic (e.g. Hydra rules, feature flags)]
- [Known pain points / operational workarounds]

---

## 2. Define

### 2.1 Goals & Non‑Goals

**Goals**

- [Goal 1 – what we aim to achieve]
- [Goal 2]
- [Goal 3]

**Non‑Goals**

- [Explicitly out of scope items]
- [Future phases / nice-to-haves]

### 2.2 Hypotheses

- **H1:** [If we do X for Y users, we expect Z impact on metric M.]
- **H2:** [Second core hypothesis]
- **H3:** [Optional additional hypothesis]

### 2.3 Success Metrics

**Primary**

- [Metric name] – [definition, e.g. “MTU CVR (NPU)”]  
  Target: [baseline → target]

**Secondary**

- [Metric name] – [definition]  
  Guardrail: [e.g. churn, margin, error rate]

---

## 3. Explore

### 3.1 High-Level Solutions

- [Solution A – short description, pros/cons, where it shines]
- [Solution B – alternative approach]
- [Decision / direction chosen and why]

### 3.2 UX / Design Notes

- [Key UX principles / guidelines]
- [States to cover: empty, error, loading, edge cases]
- [Links to Figma files and design tokens]

### 3.3 Proposed Business Logic

- [Core rules, e.g. sorting, eligibility, pricing]
- [Configuration model (e.g. via Hydra / feature flags)]
- [Overrides / fallbacks / campaign logic]

### 3.4 Stakeholders

- **Product:** [Name(s)]
- **Engineering:** [Name(s) / squads]
- **Design / Research:** [Name(s)]
- **Data / Analytics:** [Name(s)]
- **Ops / CS / Compliance:** [Name(s)]

---

## 4. Validate & Scope

### 4.1 Technical Feasibility & Options

**Option A**

- [Architecture overview]
- [Dependencies]
- [Pros / cons]
- [Rough estimate (T‑shirt size or sprint count)]

**Option B**

- [Alternative architecture / implementation path]
- [Dependencies]
- [Pros / cons]
- [Rough estimate]

### 4.2 Requirements / Acceptance Criteria

1. **APIs & Data**

   - [Required endpoints or changes]
   - [Request/response shape at a high level]
   - [Performance / freshness requirements]

2. **Product Logic**

   - [Business rules clearly described]
   - [Edge cases and fallbacks]
   - [Config vs code: what must be configurable]

3. **User Handling**

   - [How we treat different user types (e.g. new vs existing)]
   - [Logged-in vs logged-out behavior]
   - [Geo / operator specific behavior]

4. **Maintainability & Operations**

   - [Monitoring and alerting requirements]
   - [Dashboard / reporting needs]
   - [How support / ops interact with the feature]

5. **Quality & Risk**

   - [Error budgets, SLAs]
   - [Rollback strategy / kill switches]
   - [Experimentation plan if A/B testing]

---

## 5. Rollout Plan

- [Release strategy: big bang / staged / A/B]
- [Markets / corridors in scope for phase 1]
- [Communication plan (internal + external)]
- [Training / enablement for CS, sales, etc.]

---

## 6. Open Questions

1. [Question 1 to clarify with Eng/Data/Legal]
2. [Question 2]
3. [Question 3]

---

## 7. Appendix

- [Detailed data analysis links]
- [Experiment results]
- [Glossary of terms / abbreviations]