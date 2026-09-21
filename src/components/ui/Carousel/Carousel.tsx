import type { ReactNode } from 'react';

import { useCarousel } from '@/hooks';
import { cx } from '@/utils';

import styles from './Carousel.module.css';

interface CarouselProps<T> {
  items: readonly T[];
  getKey: (item: T) => string;
  renderItem: (item: T) => ReactNode;
  /** Descrição acessível do conteúdo do carrossel. */
  label: string;
}

/** Carrossel genérico: um slide visível de cada vez, com setas e indicadores. */
export function Carousel<T>({ items, getKey, renderItem, label }: CarouselProps<T>) {
  const { index, goTo, next, previous } = useCarousel(items.length);

  if (items.length === 0) return null;

  return (
    <div
      className={styles.carousel}
      role="group"
      aria-roledescription="carrossel"
      aria-label={label}
    >
      <div className={styles.track} style={{ transform: `translateX(-${index * 100}%)` }}>
        {items.map((item, itemIndex) => (
          <div
            key={getKey(item)}
            className={styles.slide}
            role="group"
            aria-roledescription="slide"
            aria-label={`${itemIndex + 1} de ${items.length}`}
            aria-hidden={itemIndex !== index}
            inert={itemIndex !== index ? true : undefined}
          >
            {renderItem(item)}
          </div>
        ))}
      </div>

      <div className={styles.controls}>
        <button
          type="button"
          className={styles.arrow}
          onClick={previous}
          aria-label="Slide anterior"
        >
          ‹
        </button>
        <div className={styles.dots}>
          {items.map((item, itemIndex) => (
            <button
              key={getKey(item)}
              type="button"
              className={cx(styles.dot, itemIndex === index && styles.dotActive)}
              onClick={() => goTo(itemIndex)}
              aria-label={`Ir para o slide ${itemIndex + 1}`}
              aria-current={itemIndex === index ? true : undefined}
            />
          ))}
        </div>
        <button type="button" className={styles.arrow} onClick={next} aria-label="Slide seguinte">
          ›
        </button>
      </div>
    </div>
  );
}
