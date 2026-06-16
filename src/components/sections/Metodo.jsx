import { motion } from 'framer-motion';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { staggerContainer, staggerItem } from '../ui/RevealOnScroll';
import { WhatsAppButton } from '../ui/WhatsAppButton';

const PASSOS = [
  {
    num: '01',
    titulo: 'História',
    descricao:
      'Antes de qualquer traço, mapeamos quem você é. Histórico, memórias e identidade viram a linguagem do projeto — exclusivamente sua.',
  },
  {
    num: '02',
    titulo: 'Harmonia',
    descricao:
      'Você vê o espaço pronto antes da obra começar: imagens 3D, plantas e tour 360°. O projeto só avança quando você o reconhece como seu.',
  },
  {
    num: '03',
    titulo: 'Habilidade Técnica',
    descricao:
      '+8 anos de obra e mais de 1.300 itens técnicos revisados por projeto. O que funciona, você nunca precisa resolver duas vezes.',
  },
  {
    num: '04',
    titulo: 'Homologação',
    descricao:
      'Fornecedores verificados e política anti-RT: nenhuma comissão influencia nossas especificações. Sempre o melhor para o seu projeto.',
  },
];

/* small architectural arch motif */
function Arch({ className, style }) {
  return (
    <svg viewBox="0 0 64 36" fill="none" className={className} style={style} aria-hidden="true">
      <path d="M2 36 V20 a30 30 0 0 1 60 0 V36" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

export function Metodo() {
  return (
    <section
      id="metodo"
      className="section-padding curve-top"
      style={{ backgroundColor: 'var(--color-brand-sand-warm)', overflow: 'hidden' }}
      aria-label="Método 4H+"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 xl:gap-28">
          {/* Left — copy */}
          <RevealOnScroll>
            <div className="lg:sticky lg:top-28">
              <Arch style={{ width: '3.25rem', height: 'auto', color: 'var(--color-brand-gold)', marginBottom: '1.5rem', opacity: 0.9 }} />
              <p className="eyebrow" style={{ color: 'var(--color-brand-accent-ink)', marginBottom: '1.25rem' }}>
                Como trabalhamos
              </p>
              <h2 className="text-display-md mb-6" style={{ color: 'var(--color-brand-text)' }}>
                Método 4H+
              </h2>
              <p className="lead mb-5" style={{ color: 'var(--color-brand-text-2)', maxWidth: '34rem' }}>
                Um processo proprietário para transformar intenção, técnica e estética em espaços que
                permanecem.
              </p>
              <p className="body-text" style={{ color: 'var(--color-brand-text-2)', maxWidth: '34rem' }}>
                Da primeira conversa à entrega, cada decisão tem função, beleza e viabilidade — é o
                que separa contratar a H+ de contratar um escritório comum.
              </p>

              <div className="mt-10 pt-9" style={{ borderTop: '1px solid rgba(34,27,20,0.12)' }}>
                <blockquote
                  className="font-display mb-7"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.375rem, 2.2vw, 1.75rem)',
                    fontStyle: 'italic',
                    lineHeight: 1.4,
                    fontWeight: 400,
                    color: 'var(--color-brand-text)',
                    maxWidth: '30rem',
                  }}
                >
                  “Um espaço que não parte de quem você é nunca vai parecer seu — não importa quanto custe.”
                  <footer className="text-caption mt-4" style={{ color: 'var(--color-brand-accent-ink)', fontStyle: 'normal' }}>
                    Carol Smaniotto — Arquiteta Fundadora
                  </footer>
                </blockquote>
                <div className="flex flex-col items-start gap-3">
                  <WhatsAppButton label="Falar com especialista" variant="primary" />
                  <span className="text-caption" style={{ color: 'var(--color-brand-text-2)' }}>Resposta em até 24h</span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Right — pillar cards (offset 2×2) */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6"
          >
            {PASSOS.map((passo, i) => (
              <motion.article
                key={passo.num}
                variants={staggerItem}
                className={`card-soft card-hover relative flex flex-col h-full overflow-hidden ${i % 2 === 1 ? 'sm:mt-10' : ''}`}
                style={{ padding: 'clamp(1.75rem, 2.4vw, 2.5rem)' }}
              >
                {/* faint background numeral */}
                <span
                  className="font-display select-none pointer-events-none absolute"
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '9rem',
                    lineHeight: 0.7,
                    fontWeight: 300,
                    color: 'var(--color-brand-text)',
                    opacity: 0.05,
                    top: '0.5rem',
                    right: '0.75rem',
                    letterSpacing: '-0.04em',
                  }}
                >
                  {passo.num}
                </span>

                {/* marker: number + mini rule */}
                <div className="flex items-center gap-3 mb-7" style={{ position: 'relative' }}>
                  <span
                    className="font-display"
                    style={{ fontFamily: 'var(--font-display)', fontSize: '1.0625rem', fontWeight: 600, color: 'var(--color-brand-gold)', letterSpacing: '0.04em' }}
                  >
                    {passo.num}
                  </span>
                  <span style={{ width: '1.75rem', height: '1px', backgroundColor: 'var(--color-brand-gold)', opacity: 0.6 }} />
                </div>

                <h3
                  className="font-display"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 2vw, 1.875rem)',
                    lineHeight: 1.1,
                    fontWeight: 400,
                    letterSpacing: '-0.01em',
                    color: 'var(--color-brand-text)',
                    marginBottom: '0.875rem',
                    position: 'relative',
                  }}
                >
                  {passo.titulo}
                </h3>
                <p style={{ color: 'var(--color-brand-text-2)', fontSize: '1rem', lineHeight: 1.68, position: 'relative' }}>
                  {passo.descricao}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
