import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ShinyButtonProps extends ButtonProps {
  text: string;
  disabled?: boolean;
  speed?: number;
  shinyClassName?: string;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({ 
  text, 
  disabled = false, 
  speed = 5, 
  className,
  shinyClassName = '',
  ...props 
}) => {
  const animationDuration = `${speed}s`;

  return (
    <Button 
      className={cn("relative overflow-hidden", className)} 
      disabled={disabled}
      {...props}
    >
      <span
        className={cn("bg-clip-text inline-block", disabled ? '' : 'animate-shine', shinyClassName)}
        style={{
          backgroundImage: 'linear-gradient(120deg, rgba(255, 255, 255, 0) 40%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
        }}
      >
        {text}
      </span>
    </Button>
  );
};

export default ShinyButton;