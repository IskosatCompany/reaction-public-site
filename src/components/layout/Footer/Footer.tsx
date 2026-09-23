import { Fragment } from 'react';

import logo from '@/assets/logo-full-transparent.webp';
import { Container } from '@/components/layout/Container';
import { legalLinks, site } from '@/data';

import styles from './Footer.module.css';

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className={styles.inner}>
        <img src={logo} alt={site.name} className={styles.logo} />
        {/* O ano vem do build pré-renderizado e pode diferir do ano no browser. */}
        <p className={styles.copyright} suppressHydrationWarning>
          © {currentYear} {site.name} — {site.tagline}. {site.city}.
        </p>
      </Container>

      <Container className={styles.legal}>
        {legalLinks.map((link, index) => (
          <Fragment key={link.id}>
            {index > 0 ? ' / ' : null}
            <a
              href={link.href}
              {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : null)}
            >
              {link.label}
            </a>
          </Fragment>
        ))}
      </Container>
    </footer>
  );
}
