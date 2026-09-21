import { Section } from '@/components/layout';
import { SectionHeading } from '@/components/ui';
import { galleryImages, site } from '@/data';
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
