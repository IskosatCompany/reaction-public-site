import facade from '@/assets/facade-2.jpg';
import { Section } from '@/components/layout';
import { Eyebrow } from '@/components/ui';

import styles from './About.module.css';

export function About() {
  return (
    <Section id="sobre">
      <div className={styles.grid}>
        <div className={styles.text}>
          <Eyebrow>Posicionamento</Eyebrow>
          <h2 className={styles.title}>Uma nova visão sobre a Reabilitação</h2>
          <p className={styles.lead}>
            A abordagem tradicional resolve episódios pontuais: dor, lesão, mas às vezes apenas com
            alívio temporário.
          </p>
          <p>
            Na Reaction partimos de uma visão diferente: a dor, as lesões e a performance não estão
            dissociadas, e por isso a resposta tem de ser integrada e individualizada. Juntos
            co-construímos um plano em que a pessoa é parte activa no seu processo de reabilitação.
          </p>
          <p>
            Equipa multidisciplinar. Acompanhamento verdadeiramente personalizado, sediado em
            Coimbra.
          </p>
          <p className={styles.quote}>Não tratamos episódios. Acompanhamos percursos.</p>
        </div>

        <img className={styles.image} src={facade} alt="Reaction — fachada, Coimbra" />
      </div>
    </Section>
  );
}
