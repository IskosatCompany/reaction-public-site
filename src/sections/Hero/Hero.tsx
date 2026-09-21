import { Button } from '@/components/ui';
import { site } from '@/data';

import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Da gestão da dor à <span className={styles.accent}>optimização do desempenho.</span>
        </h1>
        <p className={styles.tagline}>Seja qual for o ponto de partida.</p>
        <div className={styles.ctas}>
          <Button href={site.whatsAppUrl}>Marcar consulta</Button>
          <Button href="#servicos" variant="outline">
            Ver serviços
          </Button>
        </div>
      </div>
    </section>
  );
}
