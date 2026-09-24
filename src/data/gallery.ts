import entrance from '@/assets/entrance.webp';
import facadeFront from '@/assets/facade-front.webp';
import spaceInterior from '@/assets/space-interior.webp';
import teamGroup from '@/assets/team-group.webp';
import therapyLaser from '@/assets/therapy-laser.webp';
import type { GalleryImage } from '@/types';

/** Foto de grupo, apresentada inteira (sem recorte) antes da grelha. */
export const teamGroupImage: GalleryImage = {
  id: 'team-group',
  src: teamGroup,
  alt: 'Equipa Reaction nas instalações',
};

export const galleryImages: readonly GalleryImage[] = [
  { id: 'entrance', src: entrance, alt: 'Reaction — entrada' },
  { id: 'space-interior', src: spaceInterior, alt: 'Reaction — zona de treino' },
  { id: 'facade-front', src: facadeFront, alt: 'Reaction — fachada, Coimbra' },
  { id: 'therapy-laser', src: therapyLaser, alt: 'Reaction — sessão de laserterapia' },
];
