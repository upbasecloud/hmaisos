import { motion } from 'framer-motion';

export function TeamMember({ membro }) {
  return (
    <motion.div className="cursor-default" initial="idle" whileHover="hovered">
      <div
        className="relative overflow-hidden mb-4"
        style={{ aspectRatio: '3 / 4', borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-brand-bg-alt)' }}
      >
        <motion.img
          src={membro.foto}
          alt={`${membro.nome} — ${membro.cargo}`}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover object-top"
          variants={{
            idle: { filter: 'grayscale(70%) contrast(1.02)', scale: 1 },
            hovered: { filter: 'grayscale(0%)', scale: 1.04 },
          }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        />
        <span
          className="absolute inset-0 pointer-events-none"
          style={{ boxShadow: 'inset 0 0 0 1px rgba(34,27,20,0.06)', borderRadius: 'var(--radius-md)' }}
          aria-hidden="true"
        />
      </div>
      <p
        className="font-display leading-tight"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '1.1875rem',
          fontWeight: 500,
          color: 'var(--color-brand-text)',
          marginBottom: '0.25rem',
        }}
      >
        {membro.nome}
      </p>
      <p
        style={{
          fontSize: '0.875rem',
          lineHeight: 1.45,
          color: 'var(--color-brand-text-2)',
          fontWeight: 500,
        }}
      >
        {membro.cargo}
      </p>
    </motion.div>
  );
}
