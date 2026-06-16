import { motion } from 'framer-motion';
import { WhatsAppButton } from '../ui/WhatsAppButton';

const METRICS = [
  ['+847', 'Projetos'],
  ['11',   'Estados'],
  ['8 anos', 'Expertise'],
  ['Miami', 'FL'],
];

const lineVariants = {
  hidden:  { opacity: 0, y: 36 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.35 + i * 0.14 },
  }),
};

export function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      aria-label="Apresentação do escritório"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: 'var(--color-brand-dark)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingBottom: 'clamp(4rem, 8vw, 6rem)',
      }}
    >
      {/* Full-bleed background image */}
      <motion.img
        src="/images/portfolio/casalw-01.jpg"
        alt="Projeto residencial de alto padrão — H+ Arquitetura"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 0.75, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Gradient: transparent top → dark bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, transparent 20%, rgba(26,20,16,0.55) 52%, rgba(26,20,16,0.96) 82%, var(--color-brand-dark) 100%)',
        }}
      />

      {/* Content */}
      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        {/* Label */}
        <motion.p
          className="text-caption"
          style={{ color: 'rgba(240,234,224,0.55)', marginBottom: '1.75rem' }}
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Joinville, SC · Miami, FL · Desde 2016
        </motion.p>

        {/* Headline */}
        <h1
          className="text-display-xl"
          style={{ color: 'var(--color-brand-cream)', marginBottom: '1.5rem' }}
          aria-label="Arquitetura que o seu cérebro vai lembrar."
        >
          {['Arquitetura que', 'o seu cérebro', 'vai'].map((line, i) => (
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
            custom={3}
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
          style={{ color: 'rgba(240,234,224,0.6)', fontSize: '1rem', lineHeight: 1.75, maxWidth: '38rem', marginBottom: '2.5rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.95 }}
        >
          Projetos residenciais e comerciais de alto padrão — do conceito à entrega.
          Método 4H+ exclusivo. Presença em 11 estados e Miami, FL.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          style={{ marginBottom: '3rem' }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <WhatsAppButton label="Iniciar projeto" variant="hero" />
          <button
            onClick={() => scrollTo('projetos')}
            style={{
              background: 'none',
              border: '1px solid rgba(240,234,224,0.35)',
              color: 'rgba(240,234,224,0.8)',
              padding: '0.9375rem 1.75rem',
              fontSize: '0.6875rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 500,
              cursor: 'pointer',
              fontFamily: 'var(--font-body)',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(240,234,224,0.7)'; e.currentTarget.style.color = '#F0EAE0'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(240,234,224,0.35)'; e.currentTarget.style.color = 'rgba(240,234,224,0.8)'; }}
          >
            Ver projetos
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          style={{ paddingTop: '1.5rem', borderTop: '1px solid rgba(240,234,224,0.12)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0', alignItems: 'stretch' }}>
            {METRICS.map(([value, label], i) => (
              <div key={label} style={{ display: 'flex', alignItems: 'stretch' }}>
                {i > 0 && (
                  <div
                    style={{ width: '1px', backgroundColor: 'rgba(240,234,224,0.12)', margin: '0 2rem', alignSelf: 'stretch' }}
                    aria-hidden="true"
                  />
                )}
                <div style={{ paddingTop: '0.75rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.625rem',
                    lineHeight: 1,
                    fontWeight: 300,
                    color: 'var(--color-brand-cream)',
                    letterSpacing: '-0.01em',
                  }}>
                    {value}
                  </p>
                  <p style={{
                    fontSize: '0.5625rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'rgba(240,234,224,0.38)',
                    marginTop: '0.25rem',
                    fontWeight: 500,
                  }}>
                    {label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator — bottom right, vertical line + text */}
      <motion.div
        className="absolute hidden lg:flex flex-col items-center gap-2"
        style={{ bottom: 'clamp(4rem, 8vw, 6rem)', right: '2rem', zIndex: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        aria-hidden="true"
      >
        <span style={{
          writingMode: 'vertical-rl',
          fontSize: '0.4375rem',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'rgba(240,234,224,0.28)',
          fontWeight: 500,
          fontFamily: 'var(--font-body)',
        }}>
          scroll
        </span>
        <motion.div
          animate={{ scaleY: [0.3, 1, 0.3], opacity: [0.2, 0.55, 0.2] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          style={{
            width: '1px',
            height: '2.5rem',
            backgroundColor: 'var(--color-brand-gold)',
            transformOrigin: 'top',
          }}
        />
      </motion.div>
    </section>
  );
}
