import type { ContactDetail, SocialLink } from '@/types';

export const site = {
  name: 'Reaction',
  url: 'https://reaction.pt',
  tagline: 'Centro de Reabilitação e Performance',
  city: 'Coimbra',
  phone: '910 372 125',
  phoneE164: '+351910372125',
  whatsAppUrl: 'https://wa.me/351910372125',
  email: 'reaction.sergiosantos@gmail.com',
  address: 'R. Luís da Costa Almeida 6, Alto de São João, 3030-163 Coimbra',
  mapsUrl: 'https://maps.app.goo.gl/yaUjV1dZ7TNA5Mbf9',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=R.+Lu%C3%ADs+da+Costa+Almeida+6,+Alto+de+S%C3%A3o+Jo%C3%A3o,+3030-163+Coimbra&output=embed',
  postalAddress: {
    streetAddress: 'R. Luís da Costa Almeida 6, Alto de São João',
    postalCode: '3030-163',
    addressLocality: 'Coimbra',
    addressCountry: 'PT',
  },
  openingHours: [
    {
      days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '21:00',
    },
    { days: ['Saturday'], opens: '09:00', closes: '13:00' },
  ],
} as const;

export const contactDetails: readonly ContactDetail[] = [
  {
    id: 'address',
    label: 'Morada',
    value: site.address,
    href: site.mapsUrl,
    external: true,
  },
  {
    id: 'phone',
    label: 'Telefone',
    value: site.phone,
    href: `tel:${site.phoneE164}`,
  },
  {
    id: 'email',
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
  },
];

export const socialLinks: readonly SocialLink[] = [
  { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/reaction.sergiosantos/' },
  { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/reaction.sergiosantos' },
  { id: 'google', label: 'Google Business', href: site.mapsUrl },
];

export const legalLinks = [
  { id: 'privacy', label: 'Política de Privacidade', href: '#', external: false },
  { id: 'terms', label: 'Condições Gerais', href: '#', external: false },
  {
    id: 'complaints',
    label: 'Livro de Reclamações Eletrónico',
    href: 'https://www.livroreclamacoes.pt/Inicio/',
    external: true,
  },
] as const;
