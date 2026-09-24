import ritaPhoto from '@/assets/team/rita.webp';
import henriquePhoto from '@/assets/team/henrique.webp';
import joanaPhoto from '@/assets/team/joana.webp';
import joaoPhoto from '@/assets/team/joao.webp';
import pedroPhoto from '@/assets/team/pedro.webp';
import sergioPhoto from '@/assets/team/sergio-santos.webp';
import tomasPhoto from '@/assets/team/tomas.webp';
import type { Quote, TeamMember } from '@/types';

export const teamMembers: readonly TeamMember[] = [
  {
    id: 'sergio-santos',
    name: 'Sérgio Santos',
    role: 'Fundador e Coordenador Clínico · Osteopata · Performance Coach',
    photo: sergioPhoto,
    photoAlt: 'Sérgio Santos, fundador da Reaction',
    quote:
      'Qualquer atividade física, seja ela de reabilitação ou de otimização da performance, tem sempre o mesmo objetivo: a excelência do movimento.',
    linkedInUrl: 'https://www.linkedin.com/in/sérgio-de-sousa-santos-6587a652/',
  },
  {
    id: 'henrique',
    name: 'Henrique Lourenço',
    role: 'Performance Coach · Personal Trainer · Treino Desportivo e de Futebol',
    photo: henriquePhoto,
    photoAlt: 'Henrique Lourenço, equipa Reaction',
    quote:
      'O verdadeiro valor do treino vai além da performance: está em construir confiança, saúde e uma evolução sustentável, num ambiente familiar.',
    linkedInUrl: 'https://www.linkedin.com/in/henrique-lourenço-1171b5250/',
  },
  {
    id: 'pedro',
    name: 'Pedro Cortesão',
    role: 'Fisioterapeuta · Performance Coach · Personal Trainer',
    photo: pedroPhoto,
    photoAlt: 'Pedro Cortesão, equipa Reaction',
    quote:
      'Queremos fazer da Reaction uma referência na região Centro, com uma equipa multidisciplinar que eleva padrões e faz da excelência uma prática diária.',
    linkedInUrl: 'https://www.linkedin.com/in/pedrocortesao/',
  },
  {
    id: 'tomas',
    name: 'Tomás Abrantes',
    role: 'Performance Coach · Personal Trainer',
    photo: tomasPhoto,
    photoAlt: 'Tomás Abrantes, equipa Reaction',
    quote:
      'Cada pessoa tem um ponto de partida diferente. Construo o caminho à medida dos seus objetivos, para que cada sessão seja uma oportunidade de evoluir.',
    linkedInUrl: 'https://www.linkedin.com/in/tomas-abrantes-311b04359/',
  },
  {
    id: 'joana',
    name: 'Joana Feteira',
    role: 'Personal Trainer · Gestora de Clientes',
    photo: joanaPhoto,
    photoAlt: 'Joana Feteira, equipa Reaction',
    quote:
      'O movimento é o nosso foco, mas é a experiência de cada pessoa que dá sentido ao trabalho. Aqui, todos se sentem em casa.',
  },
  {
    id: 'joao',
    name: 'João Ferreira',
    role: 'Fisioterapeuta · Músculo-esquelética · Fisioterapia Desportiva · Strength & Conditioning',
    photo: joaoPhoto,
    photoAlt: 'João Ferreira, equipa Reaction',
    quote:
      'Cada pessoa tem potencial para ser mais capaz. Parto dos seus objetivos e uso o movimento para recuperar, desenvolver e potenciar a performance.',
  },
  {
    id: 'rita',
    name: 'Rita Martins',
    role: 'Fisioterapeuta · Músculo-esquelética · Pilates Clínico',
    photo: ritaPhoto,
    photoAlt: 'Rita Martins, equipa Reaction',
    quote:
      'Acredito numa abordagem individualizada, que ajude cada pessoa a recuperar a confiança no movimento e a viver com mais qualidade.',
    linkedInUrl: 'https://www.linkedin.com/in/ana-rita-martins-369a221b3/',
  },
];

/** Citação do fundador, apresentada na secção Instalações. */
export const founderQuote: Quote = {
  text: 'Este espaço é a concretização de uma visão construída ao longo de vários anos, assente na qualidade da resposta, na proximidade e na procura constante da inovação e excelência. Queremos que cada pessoa que entra na Reaction encontre uma equipa preparada para a ajudar a recuperar, a evoluir e a atingir o seu melhor potencial.',
  author: 'Sérgio Santos, Fundador',
};
