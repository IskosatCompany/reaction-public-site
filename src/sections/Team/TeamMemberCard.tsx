import { LinkedInIcon } from '@/components/ui/icons';
import type { TeamMember } from '@/types';

import styles from './TeamMemberCard.module.css';

interface TeamMemberCardProps {
  member: TeamMember;
}

export function TeamMemberCard({ member }: TeamMemberCardProps) {
  return (
    <article className={styles.grid}>
      <img className={styles.photo} src={member.photo} alt={member.photoAlt} loading="lazy" />

      <div>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.role}>{member.role}</p>

        {member.bio ? <p className={styles.bio}>{member.bio}</p> : null}

        {member.linkedInUrl ? (
          <a
            className={styles.linkedIn}
            href={member.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`LinkedIn de ${member.name}`}
          >
            <LinkedInIcon className={styles.linkedInIcon} />
          </a>
        ) : null}
      </div>
    </article>
  );
}
