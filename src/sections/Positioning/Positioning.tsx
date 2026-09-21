import { Section } from '@/components/layout';
import { Carousel } from '@/components/ui';
import { positioningSlides } from '@/data';
import type { PositioningSlide } from '@/types';

import styles from './Positioning.module.css';

function Slide({ slide }: { slide: PositioningSlide }) {
  return (
    <article className={styles.slide}>
      <span className={styles.label}>{slide.label}</span>
      <h2 className={styles.title}>{slide.title}</h2>
      <p className={styles.description}>{slide.description}</p>
    </article>
  );
}

export function Positioning() {
  return (
    <Section id="movimento" variant="alt" spacing="compact">
      <Carousel
        items={positioningSlides}
        getKey={(slide) => slide.id}
        renderItem={(slide) => <Slide slide={slide} />}
        label="Áreas de intervenção da Reaction"
      />
    </Section>
  );
}
