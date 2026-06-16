import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { WhatsAppButton } from '../ui/WhatsAppButton';

const EASE = [0.22, 1, 0.36, 1];

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

export function Metodo() {
  const [active, setActive] = useState(0);
  const passo = PASSOS[active];

  return (
    <section
      id="metodo"
      className="section-padding curve-top"
      style={{
        backgroundColor: 'var(--color-brand-sand-warm)',
        overflow: 'clip',
        position: 'relative',
        backgroundImage: `
          linear-gradient(rgba(34,27,20,0.042) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,27,20,0.042) 1px, transparent 1px)
        `,
        backgroundSize: '36px 36px',
      }}
      aria-label="Método 4H+"
    >
      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 xl:gap-24 lg:items-start">

          {/* ── Left panel: heading, step navigation, quote + CTA ── */}
          <RevealOnScroll>
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow" style={{ color: 'var(--color-brand-accent-ink)', marginBottom: '1.5rem' }}>
                Como trabalhamos
              </p>
              <h2
                className="text-display-lg"
                style={{ color: 'var(--color-brand-text)', marginBottom: '1.5rem' }}
              >
                Método{' '}
                <em style={{ fontStyle: 'italic', color: 'var(--color-brand-accent-ink)' }}>4H+</em>
              </h2>
              <p className="lead" style={{ color: 'var(--color-brand-text-2)', maxWidth: '34rem', marginBottom: 'clamp(2.5rem, 4vw, 3.25rem)' }}>
                Um processo proprietário em quatro tempos — da primeira conversa à entrega. Cada decisão
                tem função, beleza e viabilidade.
              </p>

              {/* Navigable step list */}
              <ul
                role="tablist"
                aria-label="Etapas do Método 4H+"
                style={{ listStyle: 'none', margin: '0 0 clamp(2.5rem, 4vw, 3.25rem)', padding: 0 }}
              >
                {PASSOS.map((p, i) => {
                  const isActive = i === active;
                  return (
                    <li key={p.num} role="presentation">
                      <button
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => setActive(i)}
                        className="relative w-full text-left flex items-baseline gap-4"
                        style={{
                          padding: '1rem 0.25rem',
                          background: 'none',
                          border: 'none',
                          borderBottom: '1px solid rgba(34,27,20,0.12)',
                          cursor: 'pointer',
                        }}
                      >
                        {isActive && (
                          <motion.span
                            layoutId="metodo-active"
                            className="absolute left-0 bottom-[-1px]"
                            style={{ height: '2px', width: '2.5rem', backgroundColor: 'var(--color-brand-gold)' }}
                            transition={{ duration: 0.3, ease: EASE }}
                          />
                        )}
                        <span
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.6875rem',
                            fontWeight: 600,
                            letterSpacing: '0.1em',
                            color: isActive ? 'var(--color-brand-gold)' : 'var(--color-brand-text-2)',
                            width: '1.75rem',
                            flexShrink: 0,
                            transition: 'color 0.25s',
                          }}
                        >
                          {p.num}
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1.375rem, 2vw, 1.75rem)',
                            fontWeight: isActive ? 500 : 400,
                            lineHeight: 1.2,
                            letterSpacing: '-0.01em',
                            color: isActive ? 'var(--color-brand-text)' : 'var(--color-brand-text-2)',
                            transition: 'color 0.25s, transform 0.3s',
                            transform: isActive ? 'translateX(0.375rem)' : 'translateX(0)',
                          }}
                        >
                          {p.titulo}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Carol quote + CTA */}
              <div
                style={{
                  paddingTop: 'clamp(2rem, 3vw, 2.5rem)',
                  borderTop: '1px solid rgba(34,27,20,0.14)',
                }}
              >
                <blockquote
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.375rem, 2vw, 1.75rem)',
                    fontStyle: 'italic',
                    lineHeight: 1.4,
                    fontWeight: 400,
                    color: 'var(--color-brand-text)',
                    maxWidth: '32rem',
                    marginBottom: '1.75rem',
                  }}
                >
                  "Um espaço que não parte de quem você é nunca vai parecer seu — não importa quanto custe."
                  <footer
                    className="text-caption"
                    style={{ color: 'var(--color-brand-accent-ink)', fontStyle: 'normal', marginTop: '1rem', display: 'block' }}
                  >
                    Carol Smaniotto — Arquiteta Fundadora
                  </footer>
                </blockquote>

                <div className="flex flex-col items-start gap-3">
                  <WhatsAppButton label="Falar com especialista" variant="primary" />
                  <span className="text-caption" style={{ color: 'var(--color-brand-text-2)' }}>
                    Resposta em até 24h
                  </span>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* ── Right panel: active step content ── */}
          <RevealOnScroll>
            <div
              style={{
                backgroundColor: 'var(--color-brand-paper)',
                border: '1px solid var(--color-brand-line)',
                padding: 'clamp(2rem, 4vw, 3.5rem)',
                minHeight: 'clamp(20rem, 34vw, 28rem)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={passo.num}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      letterSpacing: '0.16em',
                      color: 'var(--color-brand-accent-ink)',
                      display: 'block',
                      marginBottom: '1.5rem',
                    }}
                  >
                    PASSO {passo.num} / {String(PASSOS.length).padStart(2, '0')}
                  </span>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(2rem, 3.4vw, 3rem)',
                      lineHeight: 1.05,
                      fontWeight: 400,
                      letterSpacing: '-0.02em',
                      color: 'var(--color-brand-text)',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {passo.titulo}
                  </h3>

                  <p
                    className="lead"
                    style={{ color: 'var(--color-brand-text-2)', maxWidth: '34rem' }}
                  >
                    {passo.descricao}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
