import facadeTwo from '@/assets/facade-2.webp';
import gymOne from '@/assets/gym-1.webp';
import gymTwo from '@/assets/gym-2-fixed.webp';
import heroOne from '@/assets/hero-1.webp';
import heroTwo from '@/assets/hero-2.webp';
import heroThree from '@/assets/hero-3.webp';
import heroFour from '@/assets/hero-4-raw.webp';
import type { HeroSlide } from '@/types';


export const heroSlides: readonly HeroSlide[] = [
  { id: 'hero-1', src: heroOne },
  { id: 'gym-1', src: gymOne },
  { id: 'hero-2', src: heroTwo },
  { id: 'facade-2', src: facadeTwo },
  { id: 'hero-3', src: heroThree },
  { id: 'gym-2', src: gymTwo },
  { id: 'hero-4', src: heroFour, position: 'center 25%' },
];
