import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projetos, categorias } from '../../data/projetos';
import { ProjectCard } from '../ui/ProjectCard';
import { RevealOnScroll } from '../ui/RevealOnScroll';

const INITIAL_COUNT = 9;

function assignGridSizes(projects) {
  let destaqueCount = 0;
  return projects.map((p) => {
    if (p.destaque && destaqueCount === 0) {
      destaqueCount++;
      return { ...p, gridSize: 'hero' };
    }
    if (p.destaque && destaqueCount === 1) {
      destaqueCount++;
      return { ...p, gridSize: 'side' };
    }
    return { ...p, gridSize: 'normal' };
  });
}

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
  const displayProjects = useMemo(() => assignGridSizes(visible), [visible]);

  return (
    <section id="projetos" className="py-24 lg:py-32 bg-brand-dark" aria-label="Portfólio de projetos">
      <div className="container-site">
        <RevealOnScroll>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-12">
            <div>
              <p className="text-caption text-brand-bronze mb-3">Portfólio</p>
              <h2 className="text-display-md text-brand-cream">Projetos entregues</h2>
            </div>

            {/* Filtros — underline style */}
            <div
              className="flex gap-6 sm:gap-8 flex-wrap"
              role="group"
              aria-label="Filtrar por categoria"
            >
              {categorias.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setFiltro(cat); setMostrarTodos(false); }}
                  aria-pressed={filtro === cat}
                  className="relative transition-colors duration-200"
                  style={{
                    color: filtro === cat ? 'var(--color-brand-cream)' : 'var(--color-brand-muted)',
                    fontSize: '0.6875rem',
                    letterSpacing: '0.12em',
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '0 0 0.75rem 0',
                  }}
                >
                  {cat}
                  {filtro === cat && (
                    <motion.div
                      layoutId="filter-underline"
                      className="absolute bottom-0 left-0 right-0"
                      style={{ height: '1px', backgroundColor: 'var(--color-brand-bronze)' }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        <hr className="rule" />

        <AnimatePresence mode="wait">
          <motion.div
            key={filtro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            {/* Mobile grid */}
            <div className="grid grid-cols-2 lg:hidden mt-0.5" style={{ gap: '2px' }}>
              {displayProjects.map((p, i) => (
                <motion.div
                  key={p.slug}
                  className={p.gridSize === 'hero' ? 'col-span-2' : 'col-span-1'}
                  style={{ aspectRatio: p.gridSize === 'hero' ? '3/2' : '1/1', position: 'relative' }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  <ProjectCard projeto={p} size="normal" />
                </motion.div>
              ))}
            </div>

            {/* Desktop asymmetric grid */}
            <div
              className="hidden lg:grid mt-0.5"
              style={{ gridTemplateColumns: 'repeat(12, 1fr)', gap: '2px' }}
            >
              {displayProjects.map((p, i) => (
                <motion.div
                  key={p.slug}
                  style={{
                    gridColumn: p.gridSize === 'hero' ? 'span 8' : 'span 4',
                  }}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
                >
                  {p.gridSize === 'hero' ? (
                    <div className="relative" style={{ aspectRatio: '16/9' }}>
                      <ProjectCard projeto={p} size="hero" />
                    </div>
                  ) : p.gridSize === 'side' ? (
                    <div style={{ height: '100%', minHeight: 0, position: 'relative' }}>
                      <ProjectCard projeto={p} size="side" />
                    </div>
                  ) : (
                    <div className="relative" style={{ aspectRatio: '4/3' }}>
                      <ProjectCard projeto={p} size="normal" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {filtered.length > INITIAL_COUNT && !mostrarTodos && (
          <RevealOnScroll>
            <div className="mt-14 pt-14" style={{ borderTop: '1px solid var(--color-brand-line)' }}>
              <button
                onClick={() => setMostrarTodos(true)}
                className="group flex items-center gap-3 text-brand-muted hover:text-brand-cream transition-colors duration-200 mx-auto"
                style={{ fontSize: '0.6875rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Explorar portfólio completo
                <svg
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="group-hover:translate-x-1 transition-transform duration-200"
                  style={{ width: '1rem', height: '1rem' }}
                >
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
