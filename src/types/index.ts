export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
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
  quote?: string;
  bio?: string;
  linkedInUrl?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  /** Ocupa duas linhas na grelha da galeria. */
  tall?: boolean;
}

export interface ContactDetail {
  id: string;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

export type SocialNetwork = 'instagram' | 'facebook' | 'google' | 'linkedin';

export interface SocialLink {
  id: SocialNetwork;
  label: string;
  href: string;
}
