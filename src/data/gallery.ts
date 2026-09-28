import facade from '@/assets/facade.webp';
import gymTwo from '@/assets/gym-2-fixed.webp';
import spaceOpen from '@/assets/space-open.webp';
import teamGroup from '@/assets/team-group.webp';
import therapyLaser from '@/assets/therapy-laser.webp';
import therapyManual from '@/assets/therapy-manual.webp';
import training from '@/assets/training.webp';
import type { GalleryImage } from '@/types';

/** Foto de grupo, apresentada inteira (sem recorte) antes da grelha. */
export const teamGroupImage: GalleryImage = {
  id: 'team-group',
  src: teamGroup,
  alt: 'Equipa Reaction nas instalações',
};

export const galleryImages: readonly GalleryImage[] = [
  { id: 'training', src: training, alt: 'Reaction — sessão de treino', tall: true },
  { id: 'facade', src: facade, alt: 'Reaction — fachada, Coimbra' },
  { id: 'space-open', src: spaceOpen, alt: 'Reaction — zona de treino' },
  { id: 'gym-2', src: gymTwo, alt: 'Reaction — equipamento de treino', tall: true },
  { id: 'therapy-manual', src: therapyManual, alt: 'Reaction — sessão de terapia manual' },
  { id: 'therapy-laser', src: therapyLaser, alt: 'Reaction — sessão de laserterapia' },
];
