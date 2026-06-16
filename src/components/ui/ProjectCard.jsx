import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

/* Editorial card: framed image + caption beneath (always legible). */
export function ProjectCard({ projeto, aspect = '4 / 3', featured = false }) {
  return (
    <MotionLink
      to={`/projetos/${projeto.slug}`}
      className="group block w-full"
      aria-label={`Ver projeto ${projeto.nome}`}
      initial="idle"
      whileHover="hovered"
    >
      {/* Image frame */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: aspect, backgroundColor: 'var(--color-brand-bg-alt)', borderRadius: 'var(--radius-md)' }}
      >
        <motion.img
          src={projeto.thumb}
          alt={`${projeto.nome} — ${projeto.categoria}`}
          loading={featured ? 'eager' : 'lazy'}
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
          variants={{ idle: { scale: 1 }, hovered: { scale: 1.045 } }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />
        {/* faint inner border for refinement */}
        <span
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(34,27,20,0.06)', borderRadius: 'var(--radius-md)' }}
          aria-hidden="true"
        />
      </div>

      {/* Caption */}
      <div className="flex items-start justify-between gap-4" style={{ marginTop: '1.125rem' }}>
        <div>
          <p
            className="text-caption"
            style={{ color: 'var(--color-brand-accent-ink)', marginBottom: '0.4rem' }}
          >
            {projeto.categoria} · {projeto.ano}
          </p>
          <h3
            className="font-display transition-colors duration-200"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: featured ? 'clamp(1.625rem, 2.4vw, 2.125rem)' : '1.375rem',
              lineHeight: 1.12,
              fontWeight: 400,
              letterSpacing: '-0.01em',
              color: 'var(--color-brand-text)',
            }}
          >
            {projeto.nome}
          </h3>
          {featured && (
            <p
              className="body-text"
              style={{ color: 'var(--color-brand-text-2)', marginTop: '0.75rem', maxWidth: '40rem' }}
            >
              {projeto.descricao?.split('.')[0]}.
            </p>
          )}
        </div>
        <motion.span
          className="flex-shrink-0 flex items-center justify-center"
          style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '999px',
            border: '1px solid var(--color-brand-line-2)',
            color: 'var(--color-brand-text)',
            marginTop: '0.25rem',
          }}
          variants={{ idle: { x: 0, backgroundColor: 'rgba(0,0,0,0)' }, hovered: { x: 4, backgroundColor: 'var(--color-brand-gold)' } }}
          transition={{ duration: 0.25 }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '0.9rem', height: '0.9rem' }}>
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </motion.span>
      </div>
    </MotionLink>
  );
}
