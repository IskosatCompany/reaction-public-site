import ritaPhoto from '@/assets/team/rita.jpg';
import henriquePhoto from '@/assets/team/henrique.jpg';
import joanaPhoto from '@/assets/team/joana.jpg';
import joaoPhoto from '@/assets/team/joao.jpg';
import pedroPhoto from '@/assets/team/pedro.jpg';
import sergioPhoto from '@/assets/team/sergio-santos.jpg';
import tomasPhoto from '@/assets/team/tomas.jpg';
import type { TeamMember } from '@/types';

/**
 * Especialidade em falta. Os retratos da equipa já são os definitivos, mas as
 * funções e as bios ainda não foram fornecidas — substituir à medida que chegam.
 */
const PENDING_ROLE = 'Especialidade a confirmar';

export const teamMembers: readonly TeamMember[] = [
  {
    id: 'sergio-santos',
    name: 'Sérgio Santos',
    role: 'Fundador e Coordenador Clínico · Osteopata · Performance Coach',
    photo: sergioPhoto,
    photoAlt: 'Sérgio Santos, fundador da Reaction',
    quote:
      'Este novo espaço é a concretização de uma visão construída ao longo de vários anos, assente na qualidade da resposta, na proximidade e na procura constante da inovação e excelência. Queremos que cada pessoa que entra na Reaction encontre uma equipa preparada para a ajudar a recuperar, a evoluir e a atingir o seu melhor potencial.',
    linkedInUrl: 'https://www.linkedin.com/in/sérgio-de-sousa-santos-6587a652/',
  },
  {
    id: 'rita',
    name: 'Rita',
    role: PENDING_ROLE,
    photo: ritaPhoto,
    photoAlt: 'Rita, equipa Reaction',
  },
  {
    id: 'henrique',
    name: 'Henrique',
    role: PENDING_ROLE,
    photo: henriquePhoto,
    photoAlt: 'Henrique, equipa Reaction',
  },
  {
    id: 'joana',
    name: 'Joana',
    role: PENDING_ROLE,
    photo: joanaPhoto,
    photoAlt: 'Joana, equipa Reaction',
  },
  {
    id: 'joao',
    name: 'João',
    role: PENDING_ROLE,
    photo: joaoPhoto,
    photoAlt: 'João, equipa Reaction',
  },
  {
    id: 'pedro',
    name: 'Pedro',
    role: PENDING_ROLE,
    photo: pedroPhoto,
    photoAlt: 'Pedro, equipa Reaction',
  },
  {
    id: 'tomas',
    name: 'Tomás',
    role: PENDING_ROLE,
    photo: tomasPhoto,
    photoAlt: 'Tomás, equipa Reaction',
  },
];
