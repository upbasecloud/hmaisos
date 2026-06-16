import { motion } from 'framer-motion';
import { time } from '../../data/time';
import { TeamMember } from '../ui/TeamMember';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { staggerContainer, staggerItem } from '../ui/RevealOnScroll';

export function Time() {
  const fundadora = time.find((m) => m.destaque);
  const equipe = time.filter((m) => !m.destaque);

  return (
    <section id="time" className="section-padding" style={{ backgroundColor: 'var(--color-brand-bg)' }} aria-label="Nossa equipe">
      <div className="container-site">
        <RevealOnScroll>
          <div className="max-w-3xl mb-14 lg:mb-20">
            <p className="eyebrow" style={{ color: 'var(--color-brand-accent-ink)', marginBottom: '1.25rem' }}>
              Pessoas
            </p>
            <h2 className="text-display-md" style={{ color: 'var(--color-brand-text)' }}>
              Quem transforma o espaço por você.
            </h2>
          </div>
        </RevealOnScroll>

        {/* Founder feature */}
        {fundadora && (
          <RevealOnScroll>
            <div
              className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-10 lg:gap-20 items-center mb-20 lg:mb-28 pb-16 lg:pb-24"
              style={{ borderBottom: '1px solid var(--color-brand-line)' }}
            >
              {/* Photo */}
              <div className="relative" style={{ maxWidth: '460px' }}>
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: '4 / 5', borderRadius: '4px', backgroundColor: 'var(--color-brand-bg-alt)' }}
                >
                  <img
                    src={fundadora.foto}
                    alt={`${fundadora.nome} — ${fundadora.cargo}`}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
                {/* bronze accent frame */}
                <span
                  className="absolute pointer-events-none hidden lg:block"
                  style={{ inset: '-0.875rem -0.875rem auto auto', width: '55%', height: '55%', borderTop: '1px solid var(--color-brand-gold)', borderRight: '1px solid var(--color-brand-gold)', opacity: 0.55 }}
                  aria-hidden="true"
                />
              </div>

              {/* Bio */}
              <div>
                <p className="text-caption" style={{ color: 'var(--color-brand-accent-ink)', marginBottom: '0.875rem' }}>
                  Fundadora
                </p>
                <h3
                  className="font-display"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
                    fontWeight: 300,
                    lineHeight: 1.05,
                    letterSpacing: '-0.02em',
                    color: 'var(--color-brand-text)',
                    marginBottom: '0.5rem',
                  }}
                >
                  {fundadora.nome}
                </h3>
                <p style={{ fontSize: '0.9375rem', letterSpacing: '0.04em', color: 'var(--color-brand-text-2)', fontWeight: 500, marginBottom: '1.75rem' }}>
                  {fundadora.cargo}
                </p>
                <p className="body-text" style={{ color: 'var(--color-brand-text-2)', maxWidth: '42rem' }}>
                  Arquiteta e fundadora da H+ Arquitetura & Co, Carol Smaniotto lidera projetos de alto
                  padrão em Joinville, SC e em Miami, FL. Com mais de 8 anos de expertise, desenvolveu o
                  Método&nbsp;4H+ — uma metodologia proprietária de neuroarquitetura que coloca a
                  identidade do cliente como ponto de partida de cada projeto.
                </p>

                <div className="flex flex-wrap gap-x-12 gap-y-6 mt-10 pt-8" style={{ borderTop: '1px solid var(--color-brand-line)' }}>
                  {[
                    ['+8 anos', 'de expertise'],
                    ['+847', 'projetos entregues'],
                    ['2 países', 'Brasil + EUA'],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <p className="font-display" style={{ fontSize: '1.875rem', lineHeight: 1, fontWeight: 300, fontFamily: 'var(--font-display)', color: 'var(--color-brand-text)', letterSpacing: '-0.01em' }}>
                        {value}
                      </p>
                      <p className="text-caption" style={{ color: 'var(--color-brand-text-2)', marginTop: '0.5rem' }}>{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </RevealOnScroll>
        )}

        {/* Team grid */}
        <RevealOnScroll>
          <p className="text-caption" style={{ color: 'var(--color-brand-accent-ink)', marginBottom: '2.5rem' }}>
            O time
          </p>
        </RevealOnScroll>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10 lg:gap-x-8 lg:gap-y-12"
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
