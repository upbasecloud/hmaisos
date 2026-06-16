import { motion } from 'framer-motion';

export function TeamMember({ membro }) {
  return (
    <motion.div
      className="cursor-default"
      initial="idle"
      whileHover="hovered"
    >
      <div className="relative overflow-hidden mb-3" style={{ aspectRatio: '3/4' }}>
        <motion.img
          src={membro.foto}
          alt={`${membro.nome} — ${membro.cargo}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top"
          variants={{
            idle: { filter: 'grayscale(100%)', scale: 1 },
            hovered: { filter: 'grayscale(0%)', scale: 1.04 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
      <p
        className="font-display text-brand-cream leading-tight mb-0.5"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.9375rem',
          fontWeight: 400,
        }}
      >
        {membro.nome}
      </p>
      <motion.p
        className="text-caption"
        style={{ fontSize: '0.5625rem', letterSpacing: '0.12em' }}
        variants={{
          idle: { color: 'var(--color-brand-muted)' },
          hovered: { color: 'var(--color-brand-bronze)' },
        }}
        transition={{ duration: 0.2 }}
      >
        {membro.cargo}
      </motion.p>
    </motion.div>
  );
}
