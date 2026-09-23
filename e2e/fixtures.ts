/**
 * Valores esperados pelos testes e2e.
 *
 * Propositadamente duplicados em relação a `src/data` — os testes verificam o que
 * o site entrega ao utilizador, e não devem passar só porque partilham a mesma
 * constante com o código de produção.
 */
export const TEAM_MEMBERS = [
  'Sérgio Santos',
  'Rita',
  'Henrique',
  'Joana',
  'João',
  'Pedro',
  'Tomás',
] as const;

export const SERVICES = [
  'Osteopatia',
  'Fisioterapia',
  'Treino Funcional',
  'Treino de Alta Performance',
  'Pilates Clínico',
  'Yoga',
  'Nutrição',
  'Podologia',
  'Psicologia',
] as const;

export const POSITIONING_SLIDES = [
  'Vive sem dor.',
  'Eleva o teu patamar de desempenho.',
  'Alcança o teu potencial.',
] as const;

export const NAV_ITEMS = [
  { label: 'Sobre', id: 'sobre' },
  { label: 'Serviços', id: 'servicos' },
  { label: 'Equipa', id: 'equipa' },
  { label: 'Instalações', id: 'instalacoes' },
  { label: 'Contactos', id: 'contactos' },
] as const;

export const WHATSAPP_URL = 'https://wa.me/351910372125';
export const PHONE_HREF = 'tel:+351910372125';
export const EMAIL_HREF = 'mailto:reaction.sergiosantos@gmail.com';
export const GALLERY_IMAGE_COUNT = 6;
