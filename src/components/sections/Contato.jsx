import { RevealOnScroll } from '../ui/RevealOnScroll';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function Contato() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="contato"
      className="relative section-padding curve-top"
      style={{ backgroundColor: 'var(--color-brand-dark)', overflow: 'hidden' }}
      aria-label="Contato"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{ backgroundImage: 'url(/images/portfolio/casarv-01.jpg)', opacity: 0.16 }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, var(--color-brand-dark) 0%, rgba(21,16,11,0.7) 50%, var(--color-brand-dark) 100%)' }}
        aria-hidden="true"
      />
      {/* Grain */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
          mixBlendMode: 'soft-light',
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="max-w-4xl mx-auto text-center">
          <RevealOnScroll>
            <p className="eyebrow justify-center" style={{ color: 'rgba(184,147,95,0.95)', marginBottom: '1.75rem', display: 'inline-flex' }}>
              Vamos começar
            </p>

            <h2
              className="font-display mx-auto"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                lineHeight: 1.02,
                letterSpacing: '-0.025em',
                fontWeight: 300,
                color: 'var(--color-brand-cream)',
                maxWidth: '18ch',
                marginBottom: '1.75rem',
              }}
            >
              Seu próximo espaço começa com uma <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)' }}>conversa.</em>
            </h2>

            <p className="lead mx-auto" style={{ color: 'rgba(244,238,228,0.78)', maxWidth: '34rem', marginBottom: '2.75rem' }}>
              Aceitamos 6 novos projetos por trimestre. Conte o que você tem em mente — uma proposta
              detalhada chega em até 48h.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <WhatsAppButton label="Falar com especialista" variant="hero" />
              <button onClick={() => scrollTo('projetos')} className="btn btn-outline-light btn-lg">
                Ver projetos
              </button>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div
              className="flex flex-wrap justify-center gap-x-14 gap-y-8 pt-12"
              style={{ borderTop: '1px solid rgba(244,238,228,0.16)' }}
            >
              <address className="not-italic text-center sm:text-left">
                <p className="text-caption" style={{ color: 'var(--color-brand-gold)', marginBottom: '0.625rem' }}>Joinville, SC</p>
                <p style={{ fontSize: '1rem', color: 'rgba(244,238,228,0.78)', lineHeight: 1.6 }}>Rua Piratuba, 1253 — Bom Retiro</p>
              </address>
              <div className="text-center sm:text-left">
                <p className="text-caption" style={{ color: 'var(--color-brand-gold)', marginBottom: '0.625rem' }}>Internacional</p>
                <p style={{ fontSize: '1rem', color: 'rgba(244,238,228,0.78)', lineHeight: 1.6 }}>Miami, FL — EUA</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-caption" style={{ color: 'var(--color-brand-gold)', marginBottom: '0.625rem' }}>Contato</p>
                <a href="mailto:contato@hmaisco.com" style={{ fontSize: '1rem', color: 'rgba(244,238,228,0.78)' }} className="hover:text-brand-cream transition-colors duration-200">
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
