import type { ReactNode } from 'react';

import { Container } from '@/components/layout/Container';
import { cx } from '@/utils';

import styles from './Section.module.css';

export type SectionVariant = 'default' | 'alt';
export type SectionSpacing = 'default' | 'compact';

interface SectionProps {
  id?: string;
  variant?: SectionVariant;
  spacing?: SectionSpacing;
  className?: string;
  children: ReactNode;
}

/** Envelope comum a todas as secções: espaçamento vertical, fundo e container. */
export function Section({
  id,
  variant = 'default',
  spacing = 'default',
  className,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cx(
        styles.section,
        variant === 'alt' && styles.alt,
        spacing === 'compact' && styles.compact,
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}
