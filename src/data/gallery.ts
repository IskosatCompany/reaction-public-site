import facadeOne from '@/assets/facade-1.webp';
import galleryOne from '@/assets/gallery-1.webp';
import galleryTwo from '@/assets/gallery-2.webp';
import galleryThree from '@/assets/gallery-3.webp';
import galleryFour from '@/assets/gallery-4.webp';
import reception from '@/assets/sergio-reception.webp';
import type { GalleryImage } from '@/types';

export const galleryImages: readonly GalleryImage[] = [
  { id: 'gallery-1', src: galleryOne, alt: 'Reaction — tratamento de osteopatia', tall: true },
  { id: 'facade-1', src: facadeOne, alt: 'Reaction — fachada exterior' },
  { id: 'reception', src: reception, alt: 'Sérgio Santos na recepção Reaction' },
  {
    id: 'gallery-2',
    src: galleryTwo,
    alt: 'Reaction — sessão de treino com banda elástica',
    tall: true,
  },
  { id: 'gallery-3', src: galleryThree, alt: 'Cliente Reaction em treino' },
  { id: 'gallery-4', src: galleryFour, alt: 'Reaction — sessão de tratamento' },
];
