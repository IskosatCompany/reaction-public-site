import { site, socialLinks } from '@/data';

// O link do Instagram ainda é genérico; só entram perfis reais da Reaction.
const sameAs = socialLinks.map((link) => link.href);

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'Physiotherapy',
  '@id': `${site.url}/#business`,
  name: site.name,
  description: `${site.name} — ${site.tagline} em ${site.city}. Da gestão da dor à otimização do desempenho.`,
  url: site.url,
  image: `${site.url}/og-image.jpg`,
  telephone: site.phoneE164,
  email: site.email,
  address: { '@type': 'PostalAddress', ...site.postalAddress },
  hasMap: site.mapsUrl,
  areaServed: site.city,
  openingHoursSpecification: site.openingHours.map(({ days, opens, closes }) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: days,
    opens,
    closes,
  })),
  sameAs,
};

/** Dados estruturados (JSON-LD) para o Google mostrar a Reaction como negócio local. */
export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify não escapa "<"; evita que um valor feche a tag <script>.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness).replace(/</g, '\\u003c') }}
    />
  );
}
