import type { CSSProperties } from 'react';
import { preload } from 'react-dom';

import { Button } from '@/components/ui';
import { heroSlides, site } from '@/data';

import styles from './Hero.module.css';

/** Segundos que cada imagem de fundo fica visível. */
const SLIDE_SECONDS = 7;

export function Hero() {
  // A primeira imagem é o maior elemento visível ao abrir a página (LCP); como é
  // um background CSS, o browser só a descobriria tarde sem este preload.
  preload(heroSlides[0].src, { as: 'image', fetchPriority: 'high' });

  return (
    <section className={styles.hero} id="top">
      <div className={styles.slides} aria-hidden="true">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={styles.slide}
            style={
              {
                backgroundImage: `url(${slide.src})`,
                backgroundPosition: slide.position,
                animationDuration: `${heroSlides.length * SLIDE_SECONDS}s`,
                animationDelay: `${index * SLIDE_SECONDS}s`,
              } satisfies CSSProperties
            }
          />
        ))}
      </div>
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <h1 className={styles.title}>
          Da gestão da dor à <span className={styles.accent}>optimização do desempenho.</span>
        </h1>
        <p className={styles.tagline}>Seja qual for o ponto de partida.</p>
        <div className={styles.ctas}>
          <Button href={site.whatsAppUrl}>Marcar consulta</Button>
          <Button href="#servicos" variant="outline">
            Ver serviços
          </Button>
        </div>
      </div>
    </section>
  );
}
