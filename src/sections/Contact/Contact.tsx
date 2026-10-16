import { useState } from 'react';

import mapPreview from '@/assets/map.webp';
import { Section } from '@/components/layout';
import { SectionHeading, SocialLinks } from '@/components/ui';
import { contactDetails, site, socialLinks } from '@/data';

import styles from './Contact.module.css';

export function Contact() {
  // O mapa da Google só é carregado a pedido: até lá, nenhum dado do visitante é enviado à Google (RGPD).
  const [showMap, setShowMap] = useState(false);

  return (
    <Section id="contactos">
      <SectionHeading
        eyebrow="Contactos"
        title="Fala connosco"
        description="Marca a tua primeira consulta ou tira dúvidas diretamente com a equipa."
      />

      <div className={styles.grid}>
        <div>
          <ul className={styles.details}>
            {contactDetails.map((detail) => (
              <li key={detail.id} className={styles.item}>
                <span className={styles.label}>{detail.label}</span>
                <div className={styles.valueGroup}>
                  <a
                    className={styles.value}
                    href={detail.href}
                    {...(detail.external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
                  >
                    {detail.value}
                  </a>
                  {detail.note && <span className={styles.note}>{detail.note}</span>}
                </div>
              </li>
            ))}
          </ul>

          <SocialLinks links={socialLinks} className={styles.socials} />
        </div>

        <div className={styles.map}>
          {showMap ? (
            <iframe
              className={styles.mapFrame}
              src={site.mapsEmbedUrl}
              referrerPolicy="no-referrer"
              title={`Localização da ${site.name} em ${site.city}`}
            />
          ) : (
            <div className={styles.mapConsent}>
              {/* Print estático do mapa, alojado no site: não envia dados à Google. */}
              <img className={styles.mapPreview} src={mapPreview} alt="" loading="lazy" />
              <p>
                O mapa é fornecido pelo Google Maps. Ao carregá-lo, a Google pode recolher dados
                como o teu endereço IP. Sabe mais na nossa{' '}
                <a href="/politica-privacidade/">Política de Privacidade</a>.
              </p>
              <button type="button" className={styles.mapButton} onClick={() => setShowMap(true)}>
                Mostrar mapa
              </button>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}
