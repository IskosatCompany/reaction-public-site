import facadeTwo from '@/assets/facade-2.jpg';
import gymOne from '@/assets/gym-1.jpg';
import gymTwo from '@/assets/gym-2-fixed.jpg';
import heroOne from '@/assets/hero-1.jpg';
import heroTwo from '@/assets/hero-2.jpg';
import heroThree from '@/assets/hero-3.jpg';
import heroFour from '@/assets/hero-4-raw.jpg';
import type { HeroSlide } from '@/types';

/**
 * Fundos do hero, por ordem de aparição. A animação em Hero.module.css está
 * afinada para 7 imagens — rever os keyframes se a quantidade mudar.
 */
export const heroSlides: readonly HeroSlide[] = [
  { id: 'hero-1', src: heroOne },
  { id: 'gym-1', src: gymOne },
  { id: 'hero-2', src: heroTwo },
  { id: 'facade-2', src: facadeTwo },
  { id: 'hero-3', src: heroThree },
  { id: 'gym-2', src: gymTwo },
  { id: 'hero-4', src: heroFour, position: 'center 25%' },
];
