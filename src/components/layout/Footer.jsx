import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WhatsAppButton } from '../ui/WhatsAppButton';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=554792902127&text=' +
  encodeURIComponent('Olá! Vim pelo site e tenho interesse em desenvolver um projeto.');

const NAV_LINKS = [
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Método 4H+', href: '/#metodo' },
  { label: 'Time', href: '/#time' },
  { label: 'Contato', href: '/#contato' },
];

const SERVICOS = [
  'Arquitetura residencial',
  'Design de interiores',
  'Projetos comerciais',
  'Acompanhamento de obra',
  'Neuroarquitetura',
];

const YEAR = new Date().getFullYear();

function FootLink({ href, children, external }) {
  const props = external
    ? { href, target: '_blank', rel: 'noopener noreferrer' }
    : { href };
  return (
    <a
      {...props}
      className="footlink"
      style={{
        position: 'relative',
        fontSize: '0.9375rem',
        color: 'rgba(244,238,228,0.65)',
        textDecoration: 'none',
        transition: 'color 0.25s',
        display: 'inline-block',
      }}
    >
      {children}
    </a>
  );
}

const labelStyle = {
  fontSize: '0.6875rem',
  letterSpacing: '0.17em',
  textTransform: 'uppercase',
  fontWeight: 600,
  color: 'var(--color-brand-gold)',
  marginBottom: '1.375rem',
  display: 'block',
};

const colList = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.875rem',
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-brand-dark-2)', overflow: 'hidden' }} role="contentinfo">
      {/* Inline hover rule for footer links */}
      <style>{`
        .footlink:hover { color: var(--color-brand-cream); }
        .footlink::after {
          content: ""; position: absolute; left: 0; bottom: -2px;
          width: 100%; height: 1px; background: currentColor;
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1);
        }
        .footlink:hover::after { transform: scaleX(1); }
      `}</style>

      {/* ── Top band: headline + CTA ── */}
      <div
        className="container-site"
        style={{
          paddingTop: 'clamp(4.5rem, 9vw, 8rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 5.5rem)',
        }}
      >
        <div className="lg:flex lg:items-end lg:justify-between" style={{ gap: '3rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.25rem, 5.5vw, 4.75rem)',
              lineHeight: 1.04,
              letterSpacing: '-0.025em',
              fontWeight: 300,
              color: 'var(--color-brand-cream)',
              maxWidth: '18ch',
            }}
          >
            Seu próximo espaço começa antes da{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--color-brand-gold)' }}>primeira planta.</em>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex-shrink-0"
            style={{ marginTop: '2rem' }}
          >
            <WhatsAppButton label="Iniciar projeto" variant="hero" />
          </motion.div>
        </div>
      </div>

      <hr className="rule-dark" />

      {/* ── Columns ── */}
      <div
        className="container-site"
        style={{ paddingTop: 'clamp(3rem, 5vw, 4.5rem)', paddingBottom: 'clamp(2.5rem, 4vw, 3.5rem)' }}
      >
        <div
          style={{ gap: '2.75rem 2rem' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5"
        >
          {/* Marca */}
          <div style={{ maxWidth: '22rem' }} className="sm:col-span-2 lg:col-span-1">
            <Link
              to="/"
              className="flex items-center gap-3"
              style={{ marginBottom: '1.125rem', display: 'inline-flex' }}
            >
              <img
                src="/images/brand/logo.png"
                alt=""
                style={{ height: '2rem', width: '2rem', objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 400,
                  fontSize: '1.125rem',
                  color: 'var(--color-brand-cream)',
                  letterSpacing: '0.02em',
                }}
              >
                H<span style={{ color: 'var(--color-brand-bronze)' }}>+</span>{' '}
                Arquitetura&nbsp;&amp;&nbsp;Co
              </span>
            </Link>
            <p style={{ fontSize: '0.9375rem', color: 'rgba(244,238,228,0.55)', lineHeight: 1.7 }}>
              Arquitetura e interiores de alto padrão, do conceito à entrega.
              <br />
              Joinville, SC · Miami, FL.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <span style={labelStyle}>Navegação</span>
            <ul style={colList}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <FootLink href={href}>{label}</FootLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <span style={labelStyle}>Serviços</span>
            <ul style={colList}>
              {SERVICOS.map((s) => (
                <li key={s}>
                  <FootLink href="/#contato">{s}</FootLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <span style={labelStyle}>Contato</span>
            <ul style={colList}>
              <li style={{ fontSize: '0.9375rem', color: 'rgba(244,238,228,0.65)', lineHeight: 1.6 }}>
                Rua Piratuba, 1253
                <br />
                Bom Retiro, Joinville/SC
              </li>
              <li>
                <FootLink href="mailto:contato@hmaisco.com">contato@hmaisco.com</FootLink>
              </li>
            </ul>
          </div>

          {/* Redes sociais */}
          <div>
            <span style={labelStyle}>Redes sociais</span>
            <ul style={colList}>
              <li>
                <FootLink href="https://instagram.com/hmais.arq" external>
                  Instagram · @hmais.arq
                </FootLink>
              </li>
              <li>
                <FootLink href={WHATSAPP_URL} external>
                  <span style={{ color: 'var(--color-brand-gold)' }}>WhatsApp →</span>
                </FootLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Oversized wordmark signature ── */}
      <div className="container-site" aria-hidden="true" style={{ paddingBottom: 'clamp(1.5rem, 3vw, 2.5rem)' }}>
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 300,
            fontSize: 'clamp(4rem, 19vw, 17rem)',
            lineHeight: 0.85,
            letterSpacing: '-0.04em',
            color: 'var(--color-brand-cream)',
            opacity: 0.05,
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          H+ Arquitetura
        </p>
      </div>

      {/* ── Bottom bar ── */}
      <div className="container-site" style={{ paddingBottom: 'clamp(2rem, 4vw, 3rem)' }}>
        <div
          style={{
            paddingTop: '1.5rem',
            borderTop: '1px solid rgba(56,45,32,0.7)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            alignItems: 'flex-start',
          }}
          className="sm:flex-row sm:items-center sm:justify-between"
        >
          <p
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: 'rgba(244,238,228,0.35)',
            }}
          >
            © {YEAR} H+ Arquitetura & Co · Todos os direitos reservados
          </p>
          <p
            style={{
              fontSize: '0.6875rem',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              fontWeight: 500,
              color: 'rgba(244,238,228,0.25)',
            }}
          >
            CNPJ 41.887.339/0001-15
          </p>
        </div>
      </div>
    </footer>
  );
}
