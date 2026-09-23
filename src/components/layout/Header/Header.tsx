import logo from '@/assets/logo-full-transparent.webp';
import { Button } from '@/components/ui';
import { CloseIcon, MenuIcon } from '@/components/ui/icons';
import { navLinks, site } from '@/data';
import { useDisclosure } from '@/hooks';
import { cx } from '@/utils';

import styles from './Header.module.css';

export function Header() {
  const menu = useDisclosure();
  const ToggleIcon = menu.isOpen ? CloseIcon : MenuIcon;

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navegação principal">
        <a href="#top" onClick={menu.close}>
          <img src={logo} alt={site.name} className={styles.logo} />
        </a>

        <ul id="nav-links" className={cx(styles.links, menu.isOpen && styles.linksOpen)}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className={styles.link} href={link.href} onClick={menu.close}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button
              href={site.whatsAppUrl}
              size="compact"
              className={styles.cta}
              onClick={menu.close}
            >
              Marcar consulta
            </Button>
          </li>
        </ul>

        <button
          type="button"
          className={styles.toggle}
          onClick={menu.toggle}
          aria-label={menu.isOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menu.isOpen}
          aria-controls="nav-links"
        >
          <ToggleIcon className={styles.toggleIcon} />
        </button>
      </nav>
    </header>
  );
}
