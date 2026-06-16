import { RevealOnScroll } from '../ui/RevealOnScroll';
import { WhatsAppButton } from '../ui/WhatsAppButton';

export function Contato() {
  return (
    <section
      id="contato"
      className="relative py-24 lg:py-40"
      style={{ backgroundColor: 'var(--color-brand-surface)' }}
      aria-label="Contato"
    >
      {/* Background image — very subtle */}
      <div
        className="absolute inset-0 bg-cover bg-center pointer-events-none"
        style={{
          backgroundImage: 'url(/images/portfolio/casarv-01.jpg)',
          opacity: 0.055,
        }}
        aria-hidden="true"
      />
      {/* Grain texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
          backgroundSize: '256px 256px',
          mixBlendMode: 'soft-light',
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div className="container-site relative">
        <div className="max-w-3xl">
          <RevealOnScroll>
            <p className="text-caption text-brand-bronze mb-5">Vamos começar</p>

            <h2
              className="font-display text-brand-cream mb-5"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.25rem, 5.5vw, 4.25rem)',
                lineHeight: 1.04,
                letterSpacing: '-0.028em',
                fontWeight: 300,
              }}
            >
              Seu próximo espaço<br /> começa aqui.
            </h2>

            <p
              className="mb-10"
              style={{
                color: 'var(--color-brand-muted)',
                fontSize: '0.9375rem',
                lineHeight: 1.78,
                maxWidth: '34rem',
              }}
            >
              Aceitamos 6 novos projetos por trimestre. Conte o que você tem em mente — uma proposta
              detalhada chega em até 48h.
            </p>

            <div className="flex flex-wrap items-center gap-5 mb-14">
              <WhatsAppButton label="Iniciar projeto" variant="hero" />
              <a
                href="mailto:contato@hmaisco.com"
                className="hover:text-brand-cream transition-colors duration-200"
                style={{
                  fontSize: '0.6875rem',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: 'var(--color-brand-muted)',
                  textDecoration: 'none',
                }}
              >
                contato@hmaisco.com
              </a>
            </div>

            <hr className="rule mb-10" />

            <div className="flex flex-wrap gap-12 lg:gap-16">
              <address className="not-italic">
                <p className="text-caption text-brand-bronze mb-2">Joinville, SC</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-brand-muted)', lineHeight: 1.7 }}>
                  Rua Piratuba, 1253 — Bom Retiro
                </p>
              </address>

              <div>
                <p className="text-caption text-brand-bronze mb-2">Internacional</p>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-brand-muted)', lineHeight: 1.7 }}>
                  Miami, FL — EUA
                </p>
              </div>

              <div>
                <p className="text-caption text-brand-bronze mb-2">Redes</p>
                <a
                  href="https://instagram.com/hmais.arq"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.875rem', color: 'var(--color-brand-muted)' }}
                  className="hover:text-brand-bronze transition-colors duration-200"
                >
                  @hmais.arq
                </a>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
