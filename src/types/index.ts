export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  /** Ids (`TeamMember.id`) de quem da equipa acompanha este serviço. */
  teamIds?: readonly string[];
}

export interface PositioningSlide {
  id: string;
  label: string;
  title: string;
  description: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  photoAlt: string;
  /** Cédula profissional, já no formato a mostrar (ex.: `OF: 1978`, `ON: 2119N`). */
  credential?: string;
  bio?: string;
  /** Frase pessoal, apresentada como citação no cartão. */
  quote?: string;
  linkedInUrl?: string;
}

export interface HeroSlide {
  id: string;
  src: string;
  /** `background-position` da imagem; por omissão `center 30%`. */
  position?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  /** Ocupa duas linhas na grelha da galeria. */
  tall?: boolean;
  /** Ocupa duas colunas na grelha da galeria. */
  wide?: boolean;
  /** `object-position` da imagem; por omissão `center`. */
  position?: string;
}

export interface ContactDetail {
  id: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
  /** Nota mostrada à frente do valor (ex.: custo da chamada). */
  note?: string;
}

export type SocialNetwork = 'instagram' | 'facebook' | 'google' | 'linkedin';

export interface SocialLink {
  id: SocialNetwork;
  label: string;
  href: string;
}
