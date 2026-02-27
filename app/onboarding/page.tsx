'use client';

import { useRouter } from 'next/navigation';
import { Display, Paragraph, Button, GlobeIcon, PhonePictogram, CashPictogram, GlobePictogram } from '@/components';

export default function WelcomePage() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/onboarding/contacts');
  };

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden">
      {/* Animated gradient background - fills entire screen */}
      <div 
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: 'linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 25%, #f0f0f0 50%, #e5e5e5 75%, #f8f8f8 100%)',
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Animated decorative orbs */}
      <div className="absolute top-[5%] left-[5%] w-[400px] h-[400px] rounded-full bg-gradient-to-br from-[var(--grey-200)] to-[var(--grey-300)] opacity-70 blur-3xl animate-float-slow" />
      <div className="absolute top-[30%] right-[-5%] w-[350px] h-[350px] rounded-full bg-gradient-to-tl from-[var(--grey-300)] to-[var(--grey-200)] opacity-60 blur-3xl animate-float-medium" />
      <div className="absolute bottom-[10%] left-[-10%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[var(--grey-200)] to-[var(--grey-100)] opacity-80 blur-3xl animate-float-fast" />
      <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] rounded-full bg-gradient-to-bl from-[var(--grey-100)] to-[var(--grey-200)] opacity-50 blur-2xl animate-float-slow" />

      {/* Content container - centered for mobile */}
      <div className="flex-1 flex flex-col items-center justify-center px-[var(--spacing-xl)] relative z-10 max-w-[390px] mx-auto w-full">
        {/* Logo/Brand mark */}
        <div className="mb-[var(--spacing-xxl)]">
          <div className="w-[120px] h-[120px] rounded-full bg-[var(--brand-red)] flex items-center justify-center shadow-xl animate-pulse-subtle">
            <GlobeIcon className="w-[64px] h-[64px] text-white" />
          </div>
        </div>

        {/* Headline */}
        <Display size="lg" className="text-center mb-[var(--spacing-md)]">
          Connect your worlds
        </Display>

        {/* Subtext */}
        <Paragraph size="lg" color="secondary" className="text-center max-w-[300px]">
          Quality calls and mobile top-ups to anyone, anywhere in the world
        </Paragraph>

        {/* Feature highlights */}
        <div className="flex flex-col gap-[var(--spacing-md)] mt-[var(--spacing-xxxl)]">
          <FeatureItem 
            icon={<PhonePictogram size="sm" className="text-[var(--text-primary)]" />} 
            text="Crystal clear international calls" 
          />
          <FeatureItem 
            icon={<CashPictogram size="sm" className="text-[var(--text-primary)]" />} 
            text="Send mobile top-ups instantly" 
          />
          <FeatureItem 
            icon={<GlobePictogram size="sm" className="text-[var(--text-primary)]" />} 
            text="200+ countries supported" 
          />
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="p-[var(--spacing-xl)] relative z-10 max-w-[390px] mx-auto w-full">
        <Button 
          variant="primary" 
          fullWidth 
          onClick={handleGetStarted}
        >
          Get Started
        </Button>
        
        <Paragraph size="xs" color="secondary" className="text-center mt-[var(--spacing-md)]">
          By continuing, you agree to our Terms of Service
        </Paragraph>
      </div>
    </div>
  );
}

// Feature item component
function FeatureItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-[var(--spacing-sm)]">
      {icon}
      <Paragraph size="md" color="primary">
        {text}
      </Paragraph>
    </div>
  );
}
