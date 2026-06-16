import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projetos, categorias } from '../../data/projetos';
import { ProjectCard } from '../ui/ProjectCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const INITIAL_COUNT = 9;

export function Portfolio() {
  const [filtro, setFiltro] = useState('Todos');
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const filtered = useMemo(
    () => (filtro === 'Todos' ? projetos : projetos.filter((p) => p.categoria === filtro)),
    [filtro]
  );
  const visible = useMemo(
    () => (mostrarTodos ? filtered : filtered.slice(0, INITIAL_COUNT)),
    [filtered, mostrarTodos]
  );

  const [featured, ...rest] = visible;

  return (
    <section id="projetos" className="section-padding curve-top" style={{ backgroundColor: 'var(--color-brand-bg)' }} aria-label="Portfólio de projetos">
      <div className="container-site">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <div>
              <p className="eyebrow" style={{ color: 'var(--color-brand-accent-ink)', marginBottom: '1.25rem' }}>
                Portfólio
              </p>
              <h2 className="text-display-md" style={{ color: 'var(--color-brand-text)' }}>
                Projetos entregues
              </h2>
            </div>

            {/* Filtros */}
            <div className="flex gap-7 sm:gap-9 flex-wrap" role="group" aria-label="Filtrar por categoria">
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setFiltro(cat); setMostrarTodos(false); }}
                  aria-pressed={filtro === cat}
                  className="relative transition-colors duration-200"
                  style={{
                    color: filtro === cat ? 'var(--color-brand-text)' : 'var(--color-brand-text-2)',
                    fontSize: '0.8125rem',
                    letterSpacing: '0.1em',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0 0 0.625rem 0',
                  }}
                >
                  {cat}
                  {filtro === cat && (
                    <motion.div
                      layoutId="filter-underline"
                      className="absolute bottom-0 left-0 right-0"
                      style={{ height: '2px', backgroundColor: 'var(--color-brand-gold)' }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <hr className="rule" style={{ marginBottom: '3.5rem' }} />

        <AnimatePresence mode="wait">
          <motion.div
            key={filtro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Featured project — full width */}
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-12 lg:mb-16"
              >
                <ProjectCard projeto={featured} aspect="16 / 9" featured />
              </motion.div>
            )}

            {/* Rest — responsive editorial grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12 lg:gap-y-16">
              {rest.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: Math.min(i, 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard projeto={p} aspect="4 / 3" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {filtered.length > INITIAL_COUNT && !mostrarTodos && (
          <RevealOnScroll>
            <div className="mt-16 pt-12 flex justify-center" style={{ borderTop: '1px solid var(--color-brand-line)' }}>
              <button
                onClick={() => setMostrarTodos(true)}
                className="group flex items-center gap-3 transition-colors duration-200"
                style={{ fontSize: '0.8125rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-brand-text)' }}
              >
                Explorar portfólio completo
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-200" style={{ width: '1rem', height: '1rem' }}>
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </button>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
