import { Section } from '@/components/layout';
import { SectionHeading, SocialLinks } from '@/components/ui';
import { contactDetails, site, socialLinks } from '@/data';

import styles from './Contact.module.css';

export function Contact() {
  return (
    <Section id="contactos">
      <SectionHeading
        eyebrow="Contactos"
        title="Fala connosco"
        description="Marca a tua primeira consulta ou tira dúvidas directamente com a equipa."
      />

      <div className={styles.grid}>
        <div>
          <ul className={styles.details}>
            {contactDetails.map((detail) => (
              <li key={detail.id} className={styles.item}>
                <span className={styles.label}>{detail.label}</span>
                <a
                  className={styles.value}
                  href={detail.href}
                  {...(detail.external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
                >
                  {detail.value}
                </a>
              </li>
            ))}
          </ul>

          <SocialLinks links={socialLinks} className={styles.socials} />
        </div>

        <div className={styles.map}>
          <iframe
            className={styles.mapFrame}
            src={site.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Localização da ${site.name} em ${site.city}`}
          />
        </div>
      </div>
    </Section>
  );
}
