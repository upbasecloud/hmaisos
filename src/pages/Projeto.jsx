import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { projetos } from '../data/projetos';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { ProjectCard } from '../components/ui/ProjectCard';
import { RevealOnScroll } from '../components/ui/RevealOnScroll';

function ProjectHead({ title }) {
  useEffect(() => {
    document.title = `${title} | H+ Arquitetura & Co`;
  }, [title]);
  return null;
}

export function Projeto() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const projeto = projetos.find((p) => p.slug === slug);

  useEffect(() => {
    if (!projeto) navigate('/');
    window.scrollTo(0, 0);
  }, [slug]);

  if (!projeto) return null;

  const outros = projetos
    .filter((p) => p.slug !== slug && p.categoria === projeto.categoria)
    .slice(0, 3);

  return (
    <>
      <ProjectHead title={projeto.nome} />
      <main id="main">
        {/* Hero image */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full"
          style={{ height: '78vh', minHeight: '460px', backgroundColor: 'var(--color-brand-dark)' }}
          aria-label={`Imagem principal — ${projeto.nome}`}
        >
          <img
            src={projeto.imagens[0]}
            alt={`${projeto.nome} — projeto de ${projeto.categoria.toLowerCase()} desenvolvido pela H+ Arquitetura`}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(21,16,11,0.88) 0%, rgba(21,16,11,0.15) 55%, rgba(21,16,11,0.4) 100%)' }} />

          {/* Back link */}
          <div className="container-site absolute left-1/2 -translate-x-1/2" style={{ top: '6.5rem' }}>
            <Link
              to="/"
              className="text-caption transition-colors duration-200 flex items-center gap-2"
              style={{ color: 'rgba(244,238,228,0.7)' }}
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M10 3L5 8l5 5" />
              </svg>
              Todos os projetos
            </Link>
          </div>

          {/* Title */}
          <div className="container-site absolute left-1/2 -translate-x-1/2 bottom-12">
            <p className="text-caption" style={{ color: 'var(--color-brand-gold)', marginBottom: '0.875rem' }}>
              {projeto.categoria} · {projeto.ano}
            </p>
            <h1 className="text-display-lg" style={{ color: 'var(--color-brand-cream)' }}>{projeto.nome}</h1>
          </div>
        </motion.section>

        {/* Description */}
        <section className="section-padding-sm" style={{ backgroundColor: 'var(--color-brand-bg)' }}>
          <div className="container-site">
            <div className="max-w-3xl">
              <RevealOnScroll>
                <p className="lead" style={{ color: 'var(--color-brand-text-2)' }}>
                  {projeto.descricao}
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        {/* Image gallery */}
        {projeto.imagens.length > 1 && (
          <section style={{ backgroundColor: 'var(--color-brand-bg)', paddingBottom: 'var(--spacing-section-sm)' }} aria-label="Galeria do projeto">
            <div className="container-site">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projeto.imagens.slice(1).map((img, i) => (
                  <RevealOnScroll key={i} delay={i * 0.1} className={i === 0 ? 'md:col-span-2' : ''}>
                    <div
                      className="overflow-hidden"
                      style={{ aspectRatio: i === 0 ? '16 / 8' : '4 / 3', borderRadius: '3px', backgroundColor: 'var(--color-brand-bg-alt)' }}
                    >
                      <img
                        src={img}
                        alt={`${projeto.nome} — imagem ${i + 2}`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Related projects */}
        {outros.length > 0 && (
          <section className="section-padding" style={{ backgroundColor: 'var(--color-brand-bg-alt)' }} aria-label="Outros projetos">
            <div className="container-site">
              <RevealOnScroll>
                <p className="eyebrow" style={{ color: 'var(--color-brand-accent-ink)', marginBottom: '2.5rem' }}>
                  Mais projetos {projeto.categoria.toLowerCase()}
                </p>
              </RevealOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-12">
                {outros.map((p, i) => (
                  <RevealOnScroll key={p.slug} delay={i * 0.08}>
                    <ProjectCard projeto={p} aspect="4 / 3" />
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Mobile sticky CTA */}
        <div
          className="fixed bottom-0 left-0 right-0 p-4 lg:hidden z-40"
          style={{ backgroundColor: 'rgba(21,16,11,0.96)', backdropFilter: 'blur(10px)', borderTop: '1px solid var(--color-brand-line-dark)' }}
        >
          <WhatsAppButton label="Quero um projeto assim" variant="cta" />
        </div>
      </main>
    </>
  );
}
