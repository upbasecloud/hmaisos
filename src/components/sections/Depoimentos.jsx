import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { staggerContainer, staggerItem } from '../ui/RevealOnScroll';
import { depoimentos } from '../../data/depoimentos';

function Avatar({ nome, foto, size = 48 }) {
  const dim = { width: size, height: size };
  if (foto) {
    return <img src={foto} alt={nome} className="rounded-full object-cover flex-shrink-0" style={dim} />;
  }
  const initials = nome.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase();
  return (
    <div
      className="rounded-full flex items-center justify-center flex-shrink-0"
      style={{ ...dim, backgroundColor: 'var(--color-brand-bg-alt)', border: '1px solid var(--color-brand-line-2)', color: 'var(--color-brand-accent-ink)', fontSize: size > 48 ? '1.0625rem' : '0.875rem', fontWeight: 600, fontFamily: 'var(--font-display)' }}
    >
      {initials}
    </div>
  );
}

function QuoteMark({ size = '4rem' }) {
  return (
    <span
      className="font-display block"
      style={{ fontFamily: 'var(--font-display)', fontSize: size, lineHeight: 0.5, color: 'var(--color-brand-gold)', opacity: 0.5 }}
      aria-hidden="true"
    >
      ”
    </span>
  );
}

function Caption({ dep, big }) {
  return (
    <figcaption className="flex items-center gap-4 mt-8 pt-7" style={{ borderTop: '1px solid var(--color-brand-line)' }}>
      <Avatar nome={dep.nome} foto={dep.foto} size={big ? 56 : 48} />
      <div className="min-w-0">
        <p style={{ fontSize: big ? '1.125rem' : '1rem', fontWeight: 600, color: 'var(--color-brand-text)', letterSpacing: '0.01em' }}>
          {dep.nome}
        </p>
        <Link
          to={`/projetos/${dep.projetoSlug}`}
          className="transition-colors duration-200 hover:underline underline-offset-2"
          style={{ fontSize: '0.875rem', color: 'var(--color-brand-text-2)' }}
        >
          {dep.projeto}{dep.area ? ` · ${dep.area}` : ''}
        </Link>
      </div>
    </figcaption>
  );
}

export function Depoimentos() {
  const [featured, ...outros] = depoimentos;

  return (
    <section
      className="section-padding curve-top"
      style={{ backgroundColor: 'var(--color-brand-bg-alt)', overflow: 'hidden' }}
      aria-label="Depoimentos de clientes"
    >
      <div className="container-site">
        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 lg:mb-20">
            <div className="max-w-2xl">
              <p className="eyebrow" style={{ color: 'var(--color-brand-accent-ink)', marginBottom: '1.25rem' }}>
                Prova social
              </p>
              <h2 className="text-display-md" style={{ color: 'var(--color-brand-text)' }}>
                Clientes que não aceitaram o mediano.
              </h2>
            </div>
            <p className="body-text lg:text-right" style={{ color: 'var(--color-brand-text-2)', maxWidth: '26rem' }}>
              Projetos que começam com escuta, evoluem com técnica e terminam com espaços que fazem
              sentido para quem vive neles.
            </p>
          </div>
        </RevealOnScroll>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Featured */}
          <motion.figure
            variants={staggerItem}
            className="card-soft flex flex-col lg:col-span-7"
            style={{ padding: 'clamp(2rem, 3.5vw, 3.25rem)' }}
          >
            <QuoteMark size="5rem" />
            <blockquote className="flex-1">
              <p
                className="font-display"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.4vw, 2rem)',
                  fontWeight: 400,
                  lineHeight: 1.42,
                  fontStyle: 'italic',
                  color: 'var(--color-brand-text)',
                }}
              >
                {featured.texto}
              </p>
            </blockquote>
            <Caption dep={featured} big />
          </motion.figure>

          {/* Secondary */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {outros.map((dep, i) => (
              <motion.figure
                key={i}
                variants={staggerItem}
                className="card-soft flex flex-col h-full"
                style={{ padding: 'clamp(1.75rem, 2.4vw, 2.25rem)' }}
              >
                <QuoteMark size="3.25rem" />
                <blockquote className="flex-1">
                  <p
                    className="font-display"
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.1875rem, 1.5vw, 1.375rem)',
                      fontWeight: 400,
                      lineHeight: 1.48,
                      fontStyle: 'italic',
                      color: 'var(--color-brand-text)',
                    }}
                  >
                    {dep.texto}
                  </p>
                </blockquote>
                <Caption dep={dep} />
              </motion.figure>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
