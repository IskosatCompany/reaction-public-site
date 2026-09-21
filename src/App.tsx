import { Footer, Header } from '@/components/layout';
import { About, Contact, Facilities, Hero, Positioning, Services, Team } from '@/sections';

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Positioning />
        <About />
        <Services />
        <Team />
        <Facilities />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
