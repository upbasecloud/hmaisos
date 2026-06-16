import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { time } from '../../data/time';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const EASE = [0.22, 1, 0.36, 1];

export function Time() {
  const startIndex = Math.max(0, time.findIndex((m) => m.destaque));
  const [active, setActive] = useState(startIndex);
  const membro = time[active];

  return (
    <section
      id="time"
      className="section-padding"
      style={{ backgroundColor: 'var(--color-brand-bg)', overflow: 'clip' }}
      aria-label="Nossa equipe"
    >
      <div className="container-site">
        {/* Header */}
        <RevealOnScroll>
          <div
            className="lg:flex lg:items-end lg:justify-between"
            style={{ maxWidth: '62rem', marginBottom: 'clamp(2.5rem, 4vw, 4rem)' }}
          >
            <div style={{ maxWidth: '40rem' }}>
              <p className="eyebrow" style={{ color: 'var(--color-brand-accent-ink)', marginBottom: '1.25rem' }}>
                Pessoas
              </p>
              <h2 className="text-display-md" style={{ color: 'var(--color-brand-text)' }}>
                Quem transforma o espaço por você.
              </h2>
            </div>
            <p
              className="body-text"
              style={{ color: 'var(--color-brand-text-2)', maxWidth: '22rem', marginTop: '1.5rem' }}
            >
              Um estúdio multidisciplinar onde cada projeto passa por mãos especialistas — da escuta
              inicial ao último detalhe da obra.
            </p>
          </div>
        </RevealOnScroll>

        {/* Interactive split */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-10 lg:gap-16 xl:gap-24">

          {/* ── Left: portrait ── */}
          <RevealOnScroll>
            <div style={{ position: 'relative' }} className="lg:sticky lg:top-28">
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  aspectRatio: '4 / 5',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-brand-bg-alt)',
                }}
                className="max-h-[68vh]"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={membro.foto}
                    src={membro.foto}
                    alt={`${membro.nome} — ${membro.cargo}`}
                    loading="lazy"
                    decoding="async"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.55, ease: EASE }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />
                </AnimatePresence>

                {/* Bottom gradient + name overlay */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 pointer-events-none"
                  style={{
                    height: '55%',
                    background: 'linear-gradient(to top, rgba(21,16,11,0.82) 0%, rgba(21,16,11,0) 100%)',
                  }}
                />
                <AnimatePresence mode="wait">
                  <motion.div
                    key={membro.nome}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.45, ease: EASE }}
                    className="absolute inset-x-0 bottom-0"
                    style={{ padding: 'clamp(1.5rem, 3vw, 2.25rem)' }}
                  >
                    <p
                      className="text-caption"
                      style={{ color: 'var(--color-brand-gold)', marginBottom: '0.625rem' }}
                    >
                      {membro.destaque ? 'Fundadora' : 'Equipe H+'}
                    </p>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.875rem, 3vw, 2.75rem)',
                        fontWeight: 300,
                        lineHeight: 1.02,
                        letterSpacing: '-0.02em',
                        color: 'var(--color-brand-cream)',
                      }}
                    >
                      {membro.nome}
                    </h3>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bronze accent frame */}
              <span
                className="absolute pointer-events-none hidden md:block"
                style={{
                  top: '-0.875rem',
                  left: '-0.875rem',
                  width: '42%',
                  height: '42%',
                  borderTop: '1px solid var(--color-brand-gold)',
                  borderLeft: '1px solid var(--color-brand-gold)',
                  opacity: 0.5,
                  zIndex: 0,
                }}
                aria-hidden="true"
              />
            </div>
          </RevealOnScroll>

          {/* ── Right: details + navigation ── */}
          <div>
            {/* Selected member detail */}
            <div style={{ minHeight: '11rem', marginBottom: '2rem' }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={membro.nome}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontStyle: 'italic',
                      fontSize: 'clamp(1.25rem, 2vw, 1.625rem)',
                      fontWeight: 400,
                      color: 'var(--color-brand-accent-ink)',
                      marginBottom: '1.25rem',
                    }}
                  >
                    {membro.especialidade}
                  </p>
                  <p
                    className="lead"
                    style={{ color: 'var(--color-brand-text-2)', maxWidth: '34rem' }}
                  >
                    {membro.bio}
                  </p>

                  {membro.stats && (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '1.25rem 2.75rem',
                        marginTop: '2rem',
                      }}
                    >
                      {membro.stats.map(([value, label]) => (
                        <div key={label}>
                          <p
                            style={{
                              fontFamily: 'var(--font-display)',
                              fontSize: 'clamp(1.5rem, 2.2vw, 1.875rem)',
                              lineHeight: 1,
                              fontWeight: 300,
                              color: 'var(--color-brand-text)',
                              letterSpacing: '-0.01em',
                            }}
                          >
                            {value}
                          </p>
                          <p className="text-caption" style={{ color: 'var(--color-brand-text-2)', marginTop: '0.4rem' }}>
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Roster navigation */}
            <p
              className="text-caption"
              style={{
                color: 'var(--color-brand-text-2)',
                marginBottom: '0.5rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid var(--color-brand-line)',
              }}
            >
              O time · {time.length} pessoas
            </p>

            <ul
              role="tablist"
              aria-label="Selecionar membro da equipe"
              style={{ listStyle: 'none', margin: 0, padding: 0 }}
            >
              {time.map((m, i) => {
                const isActive = i === active;
                return (
                  <li key={m.nome} role="presentation">
                    <button
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(i)}
                      className="group relative w-full text-left flex items-baseline gap-4"
                      style={{
                        padding: '0.95rem 0.25rem',
                        background: 'none',
                        border: 'none',
                        borderBottom: '1px solid var(--color-brand-line)',
                        cursor: 'pointer',
                      }}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="time-active"
                          className="absolute left-0 right-0 bottom-[-1px]"
                          style={{ height: '2px', backgroundColor: 'var(--color-brand-gold)' }}
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
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{ flex: 1, minWidth: 0 }}>
                        <span
                          className="block"
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: 'clamp(1.25rem, 1.8vw, 1.625rem)',
                            fontWeight: isActive ? 500 : 400,
                            lineHeight: 1.2,
                            letterSpacing: '-0.01em',
                            color: isActive ? 'var(--color-brand-gold)' : 'var(--color-brand-text-2)',
                            transition: 'color 0.25s, transform 0.3s',
                            transform: isActive ? 'translateX(0.375rem)' : 'translateX(0)',
                          }}
                        >
                          {m.nome}
                        </span>
                      </span>
                      <span
                        className="hidden sm:block"
                        style={{
                          fontSize: '0.8125rem',
                          color: 'var(--color-brand-text-2)',
                          textAlign: 'right',
                          flexShrink: 0,
                          maxWidth: '14rem',
                          opacity: isActive ? 1 : 0.6,
                          transition: 'opacity 0.25s',
                        }}
                      >
                        {m.cargo}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
