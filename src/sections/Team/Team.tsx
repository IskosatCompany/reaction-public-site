import { Section } from '@/components/layout';
import { Carousel, SectionHeading } from '@/components/ui';
import { teamMembers } from '@/data';

import { TeamMemberCard } from './TeamMemberCard';

export function Team() {
  return (
    <Section id="equipa">
      <SectionHeading
        eyebrow="Equipa"
        title="Da avaliação à performance, numa só equipa"
        description="Uma visão partilhada."
      />

      <Carousel
        items={teamMembers}
        getKey={(member) => member.id}
        renderItem={(member) => <TeamMemberCard member={member} />}
        label="Equipa da Reaction"
      />
    </Section>
  );
}
