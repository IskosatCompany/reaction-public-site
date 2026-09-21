import { FacebookIcon, InstagramIcon, LinkedInIcon, MapPinIcon } from '@/components/ui/icons';
import type { SocialLink, SocialNetwork } from '@/types';
import { cx } from '@/utils';

import styles from './SocialLinks.module.css';

const ICONS: Record<SocialNetwork, typeof InstagramIcon> = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  google: MapPinIcon,
  linkedin: LinkedInIcon,
};

interface SocialLinksProps {
  links: readonly SocialLink[];
  className?: string;
}

export function SocialLinks({ links, className }: SocialLinksProps) {
  return (
    <ul className={cx(styles.list, className)}>
      {links.map((link) => {
        const Icon = ICONS[link.id];

        return (
          <li key={link.id}>
            <a
              className={styles.link}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
            >
              <Icon className={styles.icon} />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
