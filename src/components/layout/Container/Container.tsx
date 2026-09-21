import type { ReactNode } from 'react';

import { cx } from '@/utils';

import styles from './Container.module.css';

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Limita a largura do conteúdo e aplica as goteiras laterais do site. */
export function Container({ children, className }: ContainerProps) {
  return <div className={cx(styles.container, className)}>{children}</div>;
}
