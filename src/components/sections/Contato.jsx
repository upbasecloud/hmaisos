import { RevealOnScroll } from '../ui/RevealOnScroll';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function Contato() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="contato"
      data-dark-section
      className="relative section-padding"
      style={{
        backgroundColor: 'var(--color-brand-dark)',
        overflow: 'hidden',
        /* No curve-top: use a clean wave SVG divider instead so the
           light bone corners don't create a "light bar" over the dark panel */
      }}
      aria-label="Contato"
    >
      {/* Wave divider — covers the transition from FAQ (bone) into the dark section */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          pointerEvents: 'none',
          lineHeight: 0,
          zIndex: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ width: '100%', height: 'clamp(3rem, 6vw, 5rem)', display: 'block' }}
        >
          <path
            d="M0,80 L0,40 Q360,0 720,36 Q1080,72 1440,20 L1440,0 L0,0 Z"
            fill="#F7F2EA"
          />
        </svg>
      </div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url(/images/portfolio/casarv-01.jpg)', opacity: 0.13, zIndex: 0 }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-brand-dark) 0%, rgba(21,16,11,0.65) 50%, var(--color-brand-dark) 100%)',
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
          mixBlendMode: 'soft-light',
          opacity: 0.35,
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      <div className="container-site" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            maxWidth: '48rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
        >
          <RevealOnScroll>
            {/* Eyebrow */}
            <p
              className="eyebrow"
              style={{
                color: 'rgba(184,147,95,0.9)',
                marginBottom: '1.75rem',
                justifyContent: 'center',
                display: 'inline-flex',
              }}
            >
              Vamos começar
            </p>

            {/* Headline */}
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                fontWeight: 300,
                color: 'var(--color-brand-cream)',
                maxWidth: '18ch',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '1.5rem',
              }}
            >
              Seu próximo espaço começa com uma{' '}
              <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)' }}>conversa.</em>
            </h2>

            {/* Subtext */}
            <p
              className="lead"
              style={{
                color: 'rgba(244,238,228,0.75)',
                maxWidth: '32rem',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '2.75rem',
              }}
            >
              Aceitamos 6 novos projetos por trimestre. Conte o que você tem em mente — uma proposta
              detalhada chega em até 48h.
            </p>

            {/* CTAs */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.875rem',
                marginBottom: '4rem',
              }}
              className="sm:flex-row sm:justify-center"
            >
              <WhatsAppButton label="Falar com especialista" variant="hero" />
              <button
                onClick={() => scrollTo('projetos')}
                className="btn btn-outline-light btn-lg"
              >
                Ver projetos
              </button>
            </div>
          </RevealOnScroll>

          {/* Contact info bar */}
          <RevealOnScroll>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '2rem 3.5rem',
                paddingTop: '2.5rem',
                borderTop: '1px solid rgba(244,238,228,0.12)',
              }}
            >
              <address className="not-italic text-center">
                <p
                  className="text-caption"
                  style={{ color: 'var(--color-brand-gold)', marginBottom: '0.5rem' }}
                >
                  Joinville, SC
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(244,238,228,0.72)', lineHeight: 1.6 }}>
                  Rua Piratuba, 1253 — Bom Retiro
                </p>
              </address>

              <div className="text-center">
                <p
                  className="text-caption"
                  style={{ color: 'var(--color-brand-gold)', marginBottom: '0.5rem' }}
                >
                  Internacional
                </p>
                <p style={{ fontSize: '0.9375rem', color: 'rgba(244,238,228,0.72)', lineHeight: 1.6 }}>
                  Miami, FL — EUA
                </p>
              </div>

              <div className="text-center">
                <p
                  className="text-caption"
                  style={{ color: 'var(--color-brand-gold)', marginBottom: '0.5rem' }}
                >
                  E-mail
                </p>
                <a
                  href="mailto:contato@hmaisco.com"
                  style={{ fontSize: '0.9375rem', color: 'rgba(244,238,228,0.72)' }}
                  className="hover:text-brand-cream transition-colors duration-200"
                >
                  contato@hmaisco.com
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
