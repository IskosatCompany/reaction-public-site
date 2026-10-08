import type { Service } from '@/types';

/** Treino Funcional e de Alta Performance: toda a equipa exceto a Rita. */
const trainers = ['sergio-santos', 'henrique', 'pedro', 'tomas', 'joana', 'joao'];

export const services: readonly Service[] = [
  {
    id: 'osteopatia',
    title: 'Osteopatia',
    description: 'Avaliação e tratamento manual, da dor à disfunção.',
    teamIds: ['sergio-santos'],
  },
  {
    id: 'fisioterapia',
    title: 'Fisioterapia',
    description: 'Reabilitação de lesões e recuperação funcional.',
    teamIds: ['joao', 'pedro', 'rita'],
  },
  {
    id: 'treino-funcional',
    title: 'Treino Funcional',
    description: 'Movimento aplicado à vida real.',
    teamIds: trainers,
  },
  {
    id: 'alta-performance',
    title: 'Treino de Alta Performance',
    description: 'Otimização do desempenho físico e desportivo.',
    teamIds: trainers,
  },
  {
    id: 'pilates',
    title: 'Pilates Clínico',
    description: 'Controlo, mobilidade e consciência corporal.',
    teamIds: ['rita'],
  },
  {
    id: 'yoga',
    title: 'Yoga',
    description: 'Respiração, mobilidade e regulação do sistema nervoso.',
  },
  {
    id: 'nutricao',
    title: 'Nutrição',
    description: 'Alimentação ajustada a objetivos e rotina.',
    teamIds: ['mj-campos'],
  },
  {
    id: 'podologia',
    title: 'Podologia',
    description: 'Avaliação e cuidado do apoio e da marcha.',
    teamIds: ['andre-sousa'],
  },
  {
    id: 'psicologia',
    title: 'Psicologia',
    description: 'Acompanhamento aplicado à performance e ao bem-estar.',
  },
];
