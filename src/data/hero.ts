import gymOne from '@/assets/gym-1.webp';
import gymTwo from '@/assets/gym-2-fixed.webp';
import heroTwo from '@/assets/hero-2.webp';
import heroThree from '@/assets/hero-3.webp';
import type { HeroSlide } from '@/types';

export const heroSlides: readonly HeroSlide[] = [
  { id: 'hero-2', src: heroTwo },
  { id: 'gym-1', src: gymOne },
  { id: 'hero-3', src: heroThree },
  { id: 'gym-2', src: gymTwo },
];
