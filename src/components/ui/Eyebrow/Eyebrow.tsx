import type { ReactNode } from 'react';

import styles from './Eyebrow.module.css';

interface EyebrowProps {
  children: ReactNode;
}

/** Etiqueta encarnada que antecede o título de cada secção. */
export function Eyebrow({ children }: EyebrowProps) {
  return <span className={styles.eyebrow}>{children}</span>;
}
