import { motion } from 'framer-motion';

export function TeamMember({ membro }) {
  return (
    <motion.div
      className="cursor-default"
      initial="idle"
      whileHover="hovered"
      style={{ display: 'block' }}
    >
      {/* Photo — always isolated with overflow:hidden, no pseudo-elements inside */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: '3 / 4',
          borderRadius: 'var(--radius-md)',
          backgroundColor: 'var(--color-brand-bg-alt)',
          marginBottom: '0.875rem',
        }}
      >
        <motion.img
          src={membro.foto}
          alt={`${membro.nome} — ${membro.cargo}`}
          loading="lazy"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'top',
          }}
          variants={{
            idle: { filter: 'grayscale(65%) contrast(1.02)', scale: 1 },
            hovered: { filter: 'grayscale(0%)', scale: 1.04 },
          }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <p
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.125rem',
          fontWeight: 500,
          lineHeight: 1.25,
          color: 'var(--color-brand-text)',
          marginBottom: '0.25rem',
        }}
      >
        {membro.nome}
      </p>
      <p
        style={{
          fontSize: '0.8125rem',
          lineHeight: 1.5,
          color: 'var(--color-brand-text-2)',
          fontWeight: 400,
        }}
      >
        {membro.cargo}
      </p>
    </motion.div>
  );
}
