import { motion } from 'framer-motion';
import { time } from '../../data/time';
import { TeamMember } from '../ui/TeamMember';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { staggerContainer, staggerItem } from '../ui/RevealOnScroll';

export function Time() {
  const fundadora = time.find((m) => m.destaque);
  const equipe = time.filter((m) => !m.destaque);

  return (
    <section id="time" className="py-24 lg:py-32 bg-brand-dark" aria-label="Nossa equipe">
      <div className="container-site">
        <RevealOnScroll>
          <div className="mb-10">
            <p className="text-caption text-brand-bronze mb-3">Pessoas</p>
            <h2 className="text-display-md text-brand-cream">Quem transforma<br className="hidden lg:block" /> o espaço por você.</h2>
          </div>
        </RevealOnScroll>

        <hr className="rule mb-14" />

        {/* Founder card */}
        {fundadora && (
          <RevealOnScroll>
            <div
              className="grid grid-cols-1 lg:grid-cols-[280px_1fr] xl:grid-cols-[320px_1fr] gap-10 lg:gap-16 mb-16 pb-16"
              style={{ borderBottom: '1px solid var(--color-brand-line)' }}
            >
              {/* Photo */}
              <div
                className="relative overflow-hidden"
                style={{ aspectRatio: '3/4', maxWidth: '320px' }}
              >
                <img
                  src={fundadora.foto}
                  alt={`${fundadora.nome} — ${fundadora.cargo}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>

              {/* Bio */}
              <div className="flex flex-col justify-end py-2">
                <p className="text-caption text-brand-bronze mb-3">Fundadora</p>
                <h3
                  className="font-display text-brand-cream mb-2"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                    fontWeight: 300,
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                  }}
                >
                  {fundadora.nome}
                </h3>
                <p
                  className="text-caption text-brand-muted mb-8"
                  style={{ fontSize: '0.6875rem' }}
                >
                  {fundadora.cargo}
                </p>
                <p
                  style={{
                    color: 'var(--color-brand-muted)',
                    fontSize: '0.9375rem',
                    lineHeight: 1.78,
                    maxWidth: '38rem',
                  }}
                >
                  Arquiteta e fundadora da H+ Arquitetura & Co, Carol Smaniotto lidera projetos de
                  alto padrão em Joinville, SC e Miami, FL. Com mais de 8 anos de expertise, desenvolveu
                  o Método 4H+ — uma metodologia proprietária de neuroarquitetura que coloca a identidade
                  do cliente como ponto de partida de cada projeto.
                </p>

                <div
                  className="flex flex-wrap gap-8 mt-10 pt-8"
                  style={{ borderTop: '1px solid var(--color-brand-line)' }}
                >
                  {[
                    ['+8 anos', 'de expertise'],
                    ['+847', 'projetos entregues'],
                    ['2 países', 'Brasil + EUA'],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <p
                        className="font-display text-brand-cream"
                        style={{ fontSize: '1.25rem', lineHeight: 1, fontWeight: 200, fontFamily: 'var(--font-display)' }}
                      >
                        {value}
                      </p>
                      <p className="text-caption text-brand-muted mt-1">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        )}

        {/* Team grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6"
        >
          {equipe.map((membro) => (
            <motion.div key={membro.nome} variants={staggerItem}>
              <TeamMember membro={membro} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
