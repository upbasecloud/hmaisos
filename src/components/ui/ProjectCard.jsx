import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export function ProjectCard({ projeto, size = 'normal' }) {
  return (
    <MotionLink
      to={`/projetos/${projeto.slug}`}
      className="relative block w-full h-full overflow-hidden"
      style={{ backgroundColor: 'var(--color-brand-card)' }}
      aria-label={`Ver projeto ${projeto.nome}`}
      initial="idle"
      whileHover="hovered"
    >
      {/* Image — always visible */}
      <motion.img
        src={projeto.thumb}
        alt={`${projeto.nome} — ${projeto.categoria}`}
        loading={size === 'featured' ? 'eager' : 'lazy'}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        variants={{
          idle:    { scale: 1 },
          hovered: { scale: 1.05 },
        }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay — invisible by default, fades in on hover */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(26,20,16,0.9) 0%, rgba(26,20,16,0.4) 55%, transparent 100%)',
        }}
        variants={{
          idle:    { opacity: 0 },
          hovered: { opacity: 1 },
        }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      />

      {/* Text — slides up from bottom on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        style={{ padding: size === 'featured' ? '2.5rem 3rem' : '1.5rem' }}
        variants={{
          idle:    { y: 12, opacity: 0 },
          hovered: { y: 0,  opacity: 1 },
        }}
        transition={{ duration: 0.4, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
      >
        <p style={{
          color: 'var(--color-brand-gold)',
          fontSize: '0.625rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontWeight: 500,
          marginBottom: '0.375rem',
        }}>
          {projeto.categoria} · {projeto.ano}
        </p>
        <h3
          className="font-display text-brand-cream"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: size === 'featured' ? 'clamp(1.5rem, 2.5vw, 2.25rem)' : '1.125rem',
            lineHeight: 1.1,
            fontWeight: 300,
            letterSpacing: '-0.01em',
          }}
        >
          {projeto.nome}
        </h3>
        {size === 'featured' && (
          <p style={{
            color: 'rgba(240,234,224,0.65)',
            fontSize: '0.875rem',
            lineHeight: 1.65,
            marginTop: '0.625rem',
            maxWidth: '36rem',
          }}>
            {projeto.descricao?.split('.')[0]}.
          </p>
        )}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.375rem',
          marginTop: '0.75rem',
          color: 'var(--color-brand-cream)',
        }}>
          <span style={{ fontSize: '0.5625rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600 }}>
            Ver projeto
          </span>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '0.875rem', height: '0.875rem' }}>
            <path d="M3 8h10M9 4l4 4-4 4" />
          </svg>
        </div>
      </motion.div>
    </MotionLink>
  );
}
