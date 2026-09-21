import type { AnchorHTMLAttributes } from 'react';

import { cx } from '@/utils';

import styles from './Button.module.css';

export type ButtonVariant = 'solid' | 'outline';
export type ButtonSize = 'default' | 'compact';

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

/** CTA do site. É sempre uma âncora — todas as acções levam a um link externo ou a uma secção. */
export function Button({
  href,
  variant = 'solid',
  size = 'default',
  className,
  children,
  ...rest
}: ButtonProps) {
  const isExternal = href.startsWith('http');

  return (
    <a
      href={href}
      className={cx(
        styles.button,
        variant === 'outline' && styles.outline,
        size === 'compact' && styles.compact,
        className,
      )}
      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
      {...rest}
    >
      {children}
    </a>
  );
}
