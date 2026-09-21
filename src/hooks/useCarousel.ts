import { useCallback, useState } from 'react';

interface UseCarouselResult {
  index: number;
  goTo: (index: number) => void;
  next: () => void;
  previous: () => void;
}

/** Índice circular partilhado por todos os carrosséis do site. */
export function useCarousel(length: number): UseCarouselResult {
  const [index, setIndex] = useState(0);

  const goTo = useCallback(
    (target: number) => {
      if (length === 0) return;
      setIndex(((target % length) + length) % length);
    },
    [length],
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const previous = useCallback(() => goTo(index - 1), [goTo, index]);

  return { index, goTo, next, previous };
}
