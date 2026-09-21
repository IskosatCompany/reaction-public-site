import { Section } from '@/components/layout';
import { SectionHeading } from '@/components/ui';
import { services } from '@/data';

import styles from './Services.module.css';

/** Numeração visível dos cartões: 01, 02, … */
const formatNumber = (index: number) => String(index + 1).padStart(2, '0');

export function Services() {
  return (
    <Section id="servicos" variant="alt">
      <SectionHeading
        eyebrow="Serviços"
        title="Uma equipa multidisciplinar"
        description="Nove áreas, uma abordagem integrada. Cada percurso começa onde a pessoa está."
      />

      <ul className={styles.grid}>
        {services.map((service, index) => (
          <li key={service.id} className={styles.card}>
            <div className={styles.number}>{formatNumber(index)}</div>
            <h3 className={styles.title}>{service.title}</h3>
            <p className={styles.description}>{service.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
