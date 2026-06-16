import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { projetos } from '../data/projetos';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
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
          className="relative w-full bg-brand-dark"
          style={{ height: '70vh', minHeight: '420px' }}
          aria-label={`Imagem principal — ${projeto.nome}`}
        >
          <img
            src={projeto.imagens[0]}
            alt={`${projeto.nome} — projeto de ${projeto.categoria.toLowerCase()} desenvolvido pela H+ Arquitetura`}
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />

          {/* Back link */}
          <div className="absolute top-24 left-6 lg:left-10">
            <Link
              to="/"
              className="text-caption text-brand-cream/60 hover:text-brand-cream transition-colors duration-200 flex items-center gap-2"
            >
              <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
                <path d="M10 3L5 8l5 5" />
              </svg>
              Todos os projetos
            </Link>
          </div>

          {/* Title */}
          <div className="absolute bottom-10 left-6 lg:left-10 right-6 lg:right-10">
            <p className="text-caption text-brand-bronze mb-2">{projeto.categoria} · {projeto.ano}</p>
            <h1 className="text-display-lg text-brand-cream">{projeto.nome}</h1>
          </div>
        </motion.section>

        {/* Description */}
        <section className="section-padding-sm bg-brand-dark">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-2xl">
              <RevealOnScroll>
                <p className="text-brand-muted leading-relaxed" style={{ fontSize: '1.125rem' }}>
                  {projeto.descricao}
                </p>
              </RevealOnScroll>
            </div>
          </div>
        </section>

        <hr className="rule max-w-7xl mx-auto px-6 lg:px-10" />

        {/* Image gallery */}
        {projeto.imagens.length > 1 && (
          <section className="section-padding-sm bg-brand-dark" aria-label="Galeria do projeto">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {projeto.imagens.slice(1).map((img, i) => (
                  <RevealOnScroll key={i} delay={i * 0.1}>
                    <div
                      className={`overflow-hidden bg-brand-surface ${i === 0 ? 'md:col-span-2' : ''}`}
                      style={{ aspectRatio: i === 0 ? '16/7' : '4/3' }}
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
          <section className="section-padding bg-brand-surface" aria-label="Outros projetos">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <RevealOnScroll>
                <p className="text-caption text-brand-bronze mb-10">Mais projetos {projeto.categoria.toLowerCase()}</p>
              </RevealOnScroll>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {outros.map((p, i) => (
                  <RevealOnScroll key={p.slug} delay={i * 0.08}>
                    <Link
                      to={`/projetos/${p.slug}`}
                      className="group block overflow-hidden bg-brand-card relative"
                      style={{ aspectRatio: '4/3' }}
                    >
                      <img
                        src={p.thumb}
                        alt={p.nome}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-600 ease-out"
                      />
                      <div className="absolute inset-0 bg-brand-dark/50 group-hover:bg-brand-dark/30 transition-colors duration-300" />
                      <div className="absolute bottom-4 left-4">
                        <p className="font-display text-brand-cream text-lg">{p.nome}</p>
                      </div>
                    </Link>
                  </RevealOnScroll>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Mobile sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-brand-dark/95 backdrop-blur-sm border-t border-brand-line lg:hidden z-40">
          <WhatsAppButton
            label="Quero um projeto assim"
            variant="primary"
            className="w-full justify-center"
          />
        </div>
      </main>
    </>
  );
}
