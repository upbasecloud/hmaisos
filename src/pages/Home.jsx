import { Hero } from '../components/sections/Hero';
import { Portfolio } from '../components/sections/Portfolio';
import { Metodo } from '../components/sections/Metodo';
import { Time } from '../components/sections/Time';
import { Depoimentos } from '../components/sections/Depoimentos';
import { FAQ } from '../components/sections/FAQ';
import { Contato } from '../components/sections/Contato';

export function Home() {
  return (
    <main id="main">
      <Hero />
      <Portfolio />
      <Metodo />
      <Time />
      <Depoimentos />
      <FAQ />
      <Contato />
    </main>
  );
}
