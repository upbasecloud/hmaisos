import { Link } from 'react-router-dom';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { depoimentos } from '../../data/depoimentos';
import { projetos } from '../../data/projetos';

function Avatar({ nome, foto }) {
  if (foto) {
    return (
      <img
        src={foto}
        alt={nome}
        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
      />
    );
  }
  const initials = nome
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 text-brand-dark font-semibold"
      style={{ backgroundColor: 'var(--color-brand-bronze)', fontSize: '0.875rem' }}
    >
      {initials}
    </div>
  );
}

export function Depoimentos() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-brand-surface)' }}
      aria-label="Depoimentos de clientes"
    >
      <div className="container-site">
        <RevealOnScroll>
          <p className="text-caption text-brand-bronze mb-3">O que dizem</p>
          <h2 className="text-display-md text-brand-cream mb-14">
            Clientes que não<br className="hidden sm:block" /> aceitaram mediano.
          </h2>
        </RevealOnScroll>

        <hr className="rule" />

        <div>
          {depoimentos.map((dep, i) => {
            const projeto = projetos.find((p) => p.slug === dep.projetoSlug);
            return (
              <RevealOnScroll key={i} delay={i * 0.08}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-20 py-12 lg:py-16"
                  style={{ borderBottom: '1px solid var(--color-brand-line)' }}
                >
                  {/* Quote + attribution */}
                  <div>
                    <blockquote>
                      <p
                        className="font-display text-brand-cream mb-8"
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.0625rem, 2vw, 1.375rem)',
                          fontWeight: 300,
                          lineHeight: 1.58,
                          fontStyle: 'italic',
                        }}
                      >
                        "{dep.texto}"
                      </p>
                      <footer className="flex items-center gap-4">
                        <Avatar nome={dep.nome} foto={dep.foto} />
                        <div>
                          <p
                            className="text-caption text-brand-cream"
                            style={{ fontSize: '0.75rem', letterSpacing: '0.1em' }}
                          >
                            {dep.nome}
                          </p>
                          <p
                            className="text-caption text-brand-muted mt-0.5"
                            style={{ fontSize: '0.625rem' }}
                          >
                            {dep.projeto}
                            {dep.area ? ` · ${dep.area}` : ''}
                          </p>
                        </div>
                      </footer>
                    </blockquote>
                  </div>

                  {/* Project thumbnail */}
                  {projeto && (
                    <div className="hidden lg:block flex-shrink-0 self-center">
                      <Link to={`/projetos/${dep.projetoSlug}`} className="group block">
                        <div
                          className="relative overflow-hidden mb-2"
                          style={{ width: '168px', aspectRatio: '4/3' }}
                        >
                          <img
                            src={projeto.thumb}
                            alt={projeto.nome}
                            loading="lazy"
                            decoding="async"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
                            style={{ filter: 'grayscale(25%)' }}
                          />
                        </div>
                        <p
                          className="text-caption text-brand-muted group-hover:text-brand-bronze transition-colors duration-200"
                          style={{ fontSize: '0.5625rem', letterSpacing: '0.12em' }}
                        >
                          Ver projeto →
                        </p>
                      </Link>
                    </div>
                  )}
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
