import facade from '@/assets/facade.webp';
import gymTwo from '@/assets/gym-2-fixed.webp';
import teamGroup from '@/assets/team-group.webp';
import therapyManual from '@/assets/therapy-manual.webp';
import training from '@/assets/training.webp';
import type { GalleryImage } from '@/types';

export const galleryImages: readonly GalleryImage[] = [
  { id: 'training', src: training, alt: 'Reaction — sessão de treino', tall: true },
  {
    id: 'team-group',
    src: teamGroup,
    alt: 'Equipa Reaction nas instalações',
    wide: true,
    // Prioriza o topo: as caras ficam sempre visíveis e corta-se a parte inferior do corpo.
    position: 'center 30%',
  },
  { id: 'gym-2', src: gymTwo, alt: 'Reaction — equipamento de treino', tall: true },
  { id: 'facade', src: facade, alt: 'Reaction — fachada, Coimbra' },
  { id: 'therapy-manual', src: therapyManual, alt: 'Reaction — sessão de terapia manual' },
];
