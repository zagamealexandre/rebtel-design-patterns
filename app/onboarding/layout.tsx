import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Welcome to Rebtel',
  description: 'Get started with Rebtel - Quality calls and mobile top-ups worldwide',
};

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
