import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { staggerContainer, staggerItem } from '../ui/RevealOnScroll';
import { depoimentos } from '../../data/depoimentos';

function Avatar({ nome, foto, size = 48 }) {
  const dim = { width: size, height: size, flexShrink: 0 };
  if (foto) {
    return (
      <img
        src={foto}
        alt={nome}
        style={{ ...dim, borderRadius: '50%', objectFit: 'cover' }}
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
      style={{
        ...dim,
        borderRadius: '50%',
        backgroundColor: 'var(--color-brand-bg-alt)',
        border: '1px solid var(--color-brand-line-2)',
        color: 'var(--color-brand-accent-ink)',
        fontSize: size > 48 ? '1rem' : '0.8125rem',
        fontWeight: 700,
        fontFamily: 'var(--font-display)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {initials}
    </div>
  );
}

function Caption({ dep, big }) {
  return (
    <figcaption
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        marginTop: big ? '2rem' : '1.75rem',
        paddingTop: big ? '1.75rem' : '1.5rem',
        borderTop: '1px solid var(--color-brand-line)',
      }}
    >
      <Avatar nome={dep.nome} foto={dep.foto} size={big ? 52 : 44} />
      <div style={{ minWidth: 0 }}>
        <p
          style={{
            fontSize: big ? '1.0625rem' : '0.9375rem',
            fontWeight: 600,
            color: 'var(--color-brand-text)',
            letterSpacing: '0.01em',
            marginBottom: '0.2rem',
          }}
        >
          {dep.nome}
        </p>
        <Link
          to={`/projetos/${dep.projetoSlug}`}
          className="transition-colors duration-200 hover:underline underline-offset-2"
          style={{ fontSize: '0.8125rem', color: 'var(--color-brand-text-2)' }}
        >
          {dep.projeto}
          {dep.area ? ` · ${dep.area}` : ''}
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
        {/* Header */}
        <RevealOnScroll>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              marginBottom: 'clamp(2.5rem, 4vw, 4rem)',
            }}
          >
            <p className="eyebrow" style={{ color: 'var(--color-brand-accent-ink)' }}>
              Prova social
            </p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
              className="lg:flex-row lg:items-end lg:justify-between"
            >
              <h2 className="text-display-md" style={{ color: 'var(--color-brand-text)', maxWidth: '22ch' }}>
                Clientes que não aceitaram o mediano.
              </h2>
              <p
                className="body-text"
                style={{
                  color: 'var(--color-brand-text-2)',
                  maxWidth: '26rem',
                  flexShrink: 0,
                }}
              >
                Projetos que começam com escuta, evoluem com técnica e terminam com espaços que fazem
                sentido para quem vive neles.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <hr className="rule" style={{ marginBottom: 'clamp(2rem, 3vw, 3rem)' }} />

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6"
        >
          {/* Featured */}
          <motion.figure
            variants={staggerItem}
            className="card-soft flex flex-col lg:col-span-7"
            style={{
              padding: 'clamp(2rem, 3.5vw, 3rem)',
              borderTop: '3px solid var(--color-brand-gold)',
            }}
          >
            {/* Large quote mark */}
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '5.5rem',
                lineHeight: 0.5,
                color: 'var(--color-brand-gold)',
                opacity: 0.45,
                display: 'block',
                marginBottom: '1.25rem',
                userSelect: 'none',
              }}
              aria-hidden="true"
            >
              "
            </span>

            <blockquote style={{ flex: 1 }}>
              <p
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4375rem, 2.3vw, 1.9375rem)',
                  fontWeight: 400,
                  lineHeight: 1.44,
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
            className="lg:col-span-5"
          >
            {outros.map((dep, i) => (
              <motion.figure
                key={i}
                variants={staggerItem}
                className="card-soft flex flex-col"
                style={{
                  padding: 'clamp(1.625rem, 2.4vw, 2.25rem)',
                  flex: 1,
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3.25rem',
                    lineHeight: 0.5,
                    color: 'var(--color-brand-gold)',
                    opacity: 0.38,
                    display: 'block',
                    marginBottom: '1rem',
                    userSelect: 'none',
                  }}
                  aria-hidden="true"
                >
                  "
                </span>
                <blockquote style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.125rem, 1.5vw, 1.3125rem)',
                      fontWeight: 400,
                      lineHeight: 1.52,
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
