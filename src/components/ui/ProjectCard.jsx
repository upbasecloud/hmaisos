import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);
const EASE = [0.22, 1, 0.36, 1];

/* Uniform editorial project card:
   - fixed aspect-ratio frame, image full-bleed with object-cover
   - default state: just the image, no overlay, no caption
   - hover: dark overlay fades in, category (gold) above name (serif light),
     text rises 6px → 0, image zooms, a thin gold underline appears */
export function ProjectCard({ projeto, aspect = '4 / 3', mediaClassName = '' }) {
  return (
    <MotionLink
      to={`/projetos/${projeto.slug}`}
      className={`group relative block w-full overflow-hidden ${mediaClassName}`}
      aria-label={`Ver projeto ${projeto.nome}`}
      initial="idle"
      whileHover="hovered"
      whileFocus="hovered"
      style={{ aspectRatio: aspect, borderRadius: 0, backgroundColor: 'var(--color-brand-bg-alt)' }}
    >
      <motion.img
        src={projeto.thumb}
        alt={`${projeto.nome} — ${projeto.categoria}`}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        variants={{ idle: { scale: 1 }, hovered: { scale: 1.04 } }}
        transition={{ duration: 0.5, ease: EASE }}
      />

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col justify-end pointer-events-none"
        style={{ padding: 'clamp(1.25rem, 2.2vw, 1.875rem)' }}
        variants={{
          idle: { backgroundColor: 'rgba(21,16,11,0)' },
          hovered: { backgroundColor: 'rgba(21,16,11,0.65)' },
        }}
        transition={{ duration: 0.35, ease: EASE }}
        aria-hidden="true"
      >
        <motion.div
          variants={{ idle: { opacity: 0, y: 6 }, hovered: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.35, ease: EASE }}
        >
          <p
            style={{
              color: 'var(--color-brand-gold)',
              fontFamily: 'var(--font-body)',
              fontSize: '0.6875rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              fontWeight: 600,
              marginBottom: '0.625rem',
            }}
          >
            {projeto.categoria}
          </p>
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
              lineHeight: 1.1,
              fontWeight: 300,
              letterSpacing: '-0.015em',
              color: 'var(--color-brand-cream)',
            }}
          >
            {projeto.nome}
          </h3>
          {/* Decorative gold underline */}
          <span
            style={{
              display: 'block',
              width: '24px',
              height: '1px',
              backgroundColor: 'var(--color-brand-gold)',
              marginTop: '0.875rem',
            }}
          />
        </motion.div>
      </motion.div>
    </MotionLink>
  );
}
