import React, { useEffect, useRef, useState } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: 'fade-in' | 'slide-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in';
  rootMargin?: string;
  id?: string;
}

export default function FadeInSection({
  children,
  className = "",
  threshold = 0.1,
  delay = 0,
  animation = 'fade-in',
  rootMargin = '0px 0px -100px 0px',
  id
}: FadeInSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!hasAnimated.current && entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true);
              hasAnimated.current = true;
            }, delay);
          }
        });
      },
      { threshold, rootMargin }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay, rootMargin]);

  const animationClass = isVisible ? `animate-${animation}` : 'opacity-0';

  return (
    <div
      ref={domRef}
      className={`${className} ${animationClass}`}
      id={id}
      aria-hidden={!isVisible}
    >
      {children}
    </div>
  );
} 