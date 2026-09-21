import facadeOne from '@/assets/facade-1.jpg';
import facadeTwo from '@/assets/facade-2.jpg';
import gymOne from '@/assets/gym-1.jpg';
import gymTwo from '@/assets/gym-2-fixed.jpg';
import reception from '@/assets/sergio-reception.jpg';
import type { GalleryImage } from '@/types';

export const galleryImages: readonly GalleryImage[] = [
  { id: 'gym-1', src: gymOne, alt: 'Reaction — sala de treino', tall: true },
  { id: 'facade-1', src: facadeOne, alt: 'Reaction — fachada exterior' },
  { id: 'reception', src: reception, alt: 'Sérgio Santos na recepção Reaction' },
  { id: 'gym-2', src: gymTwo, alt: 'Reaction — sessão de treino', tall: true },
  { id: 'facade-2', src: facadeTwo, alt: 'Reaction — entrada' },
];
