import { Section } from '@/components/layout';
import { SectionHeading } from '@/components/ui';
import { founderQuote, galleryImages, site, teamGroupImage } from '@/data';
import { cx } from '@/utils';

import styles from './Facilities.module.css';

export function Facilities() {
  return (
    <Section id="instalacoes" variant="alt">
      <SectionHeading
        eyebrow="Instalações"
        title={site.city}
        description="Um espaço ao serviço da excelência no movimento — da reabilitação ao treino de alta performance."
      />

      <blockquote className={styles.quote}>
        “{founderQuote.text}”<cite>{founderQuote.author}</cite>
      </blockquote>

      <img
        className={styles.feature}
        src={teamGroupImage.src}
        alt={teamGroupImage.alt}
        loading="lazy"
      />

      <ul className={styles.grid}>
        {galleryImages.map((image) => (
          <li key={image.id} className={cx(styles.item, image.tall && styles.tall)}>
            <img className={styles.image} src={image.src} alt={image.alt} loading="lazy" />
          </li>
        ))}
      </ul>
    </Section>
  );
}
