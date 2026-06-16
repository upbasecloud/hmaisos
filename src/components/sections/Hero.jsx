import { motion } from 'framer-motion';
import { WhatsAppButton } from '../ui/WhatsAppButton';

const METRICS = [
  ['+847', 'Projetos entregues'],
  ['11', 'Estados atendidos'],
  ['8 anos', 'De expertise'],
  ['Miami', 'FL · EUA'],
];

const lineVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.13 },
  }),
};

export function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      aria-label="Apresentação do escritório"
      style={{
        position: 'relative',
        minHeight: '100svh',
        backgroundColor: 'var(--color-brand-dark)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingTop: '7rem',
        paddingBottom: 'clamp(5rem, 9vw, 7.5rem)',
        overflow: 'hidden',
      }}
    >
      {/* Full-bleed background image */}
      <motion.img
        src="/images/portfolio/casalw-01.jpg"
        alt="Projeto residencial de alto padrão — H+ Arquitetura"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 0.82, scale: 1 }}
        transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Overlay — keeps image alive up top, anchors text at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(21,16,11,0.55) 0%, rgba(21,16,11,0.18) 30%, rgba(21,16,11,0.45) 60%, rgba(21,16,11,0.92) 88%, var(--color-brand-dark) 100%)',
        }}
        aria-hidden="true"
      />
      {/* Subtle left vignette for extra headline legibility */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to right, rgba(21,16,11,0.5) 0%, transparent 55%)' }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        {/* Eyebrow */}
        <motion.p
          className="eyebrow"
          style={{ color: 'rgba(244,238,228,0.75)', marginBottom: '2rem' }}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Joinville, SC · Miami, FL · Desde 2016
        </motion.p>

        {/* Headline */}
        <h1
          className="text-display-xl"
          style={{ color: 'var(--color-brand-cream)', marginBottom: '2rem', maxWidth: '16ch' }}
          aria-label="Arquitetura que o seu cérebro vai lembrar."
        >
          {['Arquitetura que', 'o seu cérebro vai'].map((line, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={lineVariants}
              initial="hidden"
              animate="visible"
              className="block"
              aria-hidden="true"
            >
              {line}
            </motion.span>
          ))}
          <motion.span
            custom={2}
            variants={lineVariants}
            initial="hidden"
            animate="visible"
            className="block"
            aria-hidden="true"
          >
            <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)', fontWeight: 300 }}>
              lembrar.
            </em>
          </motion.span>
        </h1>

        {/* Subtitle */}
        <motion.p
          className="lead"
          style={{ color: 'rgba(244,238,228,0.82)', maxWidth: '40rem', marginBottom: '2.75rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          Projetos residenciais e comerciais de alto padrão — do conceito à entrega, guiados pelo
          Método&nbsp;4H+ de neuroarquitetura. Presença em 11 estados e em Miami, FL.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-center gap-4"
          style={{ marginBottom: 'clamp(3rem, 6vw, 4.5rem)' }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.1 }}
        >
          <WhatsAppButton label="Iniciar projeto" variant="hero" />
          <button onClick={() => scrollTo('projetos')} className="btn btn-outline-light btn-lg">
            Ver projetos
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          style={{ paddingTop: '2rem', borderTop: '1px solid rgba(244,238,228,0.16)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-7 gap-x-6">
            {METRICS.map(([value, label]) => (
              <div key={label} style={{ borderLeft: '1px solid rgba(244,238,228,0.16)', paddingLeft: '1.25rem' }}>
                <dt
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 3vw, 2.75rem)',
                    lineHeight: 1,
                    fontWeight: 300,
                    color: 'var(--color-brand-cream)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {value}
                </dt>
                <dd
                  style={{
                    fontSize: '0.75rem',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'rgba(244,238,228,0.6)',
                    marginTop: '0.625rem',
                    fontWeight: 500,
                  }}
                >
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute hidden lg:flex flex-col items-center gap-3"
        style={{ bottom: 'clamp(3rem, 6vw, 5rem)', right: '2.5rem', zIndex: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        aria-hidden="true"
      >
        <span
          style={{
            writingMode: 'vertical-rl',
            fontSize: '0.625rem',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'rgba(244,238,228,0.5)',
            fontWeight: 600,
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.25, 0.7, 0.25] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          style={{ width: '1px', height: '3rem', backgroundColor: 'var(--color-brand-gold)', transformOrigin: 'top' }}
        />
      </motion.div>
    </section>
  );
}
