import { Section } from '@/components/layout';
import { SectionHeading } from '@/components/ui';
import { services, teamMembers } from '@/data';
import type { Service } from '@/types';

import styles from './Services.module.css';

/** Numeração visível dos cartões: 01, 02, … */
const formatNumber = (index: number) => String(index + 1).padStart(2, '0');

/** Quem acompanha o serviço, pela ordem da secção Equipa. */
const membersOf = (service: Service) =>
  teamMembers.filter((member) => service.teamIds?.includes(member.id));

export function Services() {
  return (
    <Section id="servicos" variant="alt">
      <SectionHeading
        eyebrow="Serviços"
        title="Uma equipa multidisciplinar"
        description="Nove áreas, uma abordagem integrada. Cada percurso começa onde a pessoa está."
      />

      <ul className={styles.grid}>
        {services.map((service, index) => {
          const members = membersOf(service);

          return (
            // Com equipa associada, o cartão é focável: o painel abre com hover, teclado ou toque.
            <li
              key={service.id}
              className={styles.card}
              tabIndex={members.length > 0 ? 0 : undefined}
            >
              <div className={styles.number}>{formatNumber(index)}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>

              {members.length > 0 && (
                <div className={styles.team}>
                  <span className={styles.teamLabel}>Quem acompanha</span>
                  <ul className={styles.members}>
                    {members.map((member) => (
                      <li key={member.id} className={styles.member}>
                        <span className={styles.avatar}>
                          <img src={member.photo} alt={member.name} loading="lazy" />
                        </span>
                        <span aria-hidden="true">{member.name.split(' ')[0]}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
