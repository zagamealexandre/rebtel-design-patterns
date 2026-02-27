import React from 'react';

// ============================================
// TYPE DEFINITIONS
// ============================================

interface ProgressDotsProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

// ============================================
// PROGRESS DOTS COMPONENT
// ============================================

export function ProgressDots({
  currentStep,
  totalSteps,
  className = '',
}: ProgressDotsProps) {
  return (
    <div className={`flex items-center gap-[var(--spacing-xs)] ${className}`}>
      {Array.from({ length: totalSteps }, (_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div
            key={stepNumber}
            className={`
              transition-all
              duration-300
              rounded-full
              ${isActive 
                ? 'w-[24px] h-[8px] bg-[var(--brand-red)]' 
                : isCompleted 
                  ? 'w-[8px] h-[8px] bg-[var(--brand-red)]'
                  : 'w-[8px] h-[8px] bg-[var(--grey-300)]'
              }
            `.replace(/\s+/g, ' ').trim()}
            aria-label={`Step ${stepNumber} of ${totalSteps}${isActive ? ' (current)' : isCompleted ? ' (completed)' : ''}`}
          />
        );
      })}
    </div>
  );
}

// ============================================
// EXPORTS
// ============================================

export default ProgressDots;
