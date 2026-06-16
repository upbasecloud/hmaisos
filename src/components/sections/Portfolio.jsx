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

  return (
    <section
      id="projetos"
      className="section-padding curve-top"
      style={{ backgroundColor: 'var(--color-brand-bg)', overflow: 'hidden' }}
      aria-label="Portfólio de projetos"
    >
      <div className="container-site">
        {/* Header — centered */}
        <RevealOnScroll>
          <div style={{ textAlign: 'center', marginBottom: 'clamp(2rem, 3.5vw, 3rem)' }}>
            <p
              className="eyebrow"
              style={{ color: 'var(--color-brand-accent-ink)', marginBottom: '1.125rem', justifyContent: 'center' }}
            >
              Portfólio
            </p>
            <h2 className="text-display-md" style={{ color: 'var(--color-brand-text)' }}>
              Projetos entregues
            </h2>

            {/* Filter tabs — centered below title */}
            <div
              className="flex gap-7 sm:gap-8 flex-wrap justify-center"
              role="group"
              aria-label="Filtrar por categoria"
              style={{ marginTop: 'clamp(1.75rem, 3vw, 2.5rem)' }}
            >
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setFiltro(cat); setMostrarTodos(false); }}
                  aria-pressed={filtro === cat}
                  className="relative transition-colors duration-200"
                  style={{
                    color: filtro === cat ? 'var(--color-brand-gold)' : 'var(--color-brand-text-2)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.12em',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0 0 0.5rem 0',
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

        <AnimatePresence mode="wait">
          <motion.div
            key={filtro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {/* Uniform 4:3 grid */}
            <div className="pf-grid">
              {visible.map((p, i) => (
                <motion.div
                  key={p.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: Math.min(i, 6) * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="pf-cell"
                >
                  <ProjectCard projeto={p} aspect="4 / 3" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Load more — centered */}
        {filtered.length > INITIAL_COUNT && !mostrarTodos && (
          <RevealOnScroll>
            <div
              style={{
                marginTop: 'clamp(3.5rem, 6vw, 5.5rem)',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <button
                onClick={() => setMostrarTodos(true)}
                className="pf-outline-btn"
              >
                Ver todos os projetos
              </button>
            </div>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
