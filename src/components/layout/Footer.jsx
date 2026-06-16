import { Link } from 'react-router-dom';

const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=554792902127&text=' +
  encodeURIComponent('Olá! Vim pelo site e tenho interesse em desenvolver um projeto.');

const NAV_LINKS = [
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Método', href: '/#metodo' },
  { label: 'Time', href: '/#time' },
  { label: 'Contato', href: '/#contato' },
];

const linkStyle = { fontSize: '1rem', color: 'rgba(244,238,228,0.7)', textDecoration: 'none' };

function FootLink({ href, children, external }) {
  const props = external ? { href, target: '_blank', rel: 'noopener noreferrer' } : { href };
  return (
    <a
      {...props}
      style={linkStyle}
      className="transition-colors duration-200 hover:text-brand-cream"
    >
      {children}
    </a>
  );
}

export function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-brand-dark-2)' }} role="contentinfo">
      <div className="container-site" style={{ paddingTop: 'clamp(4rem, 7vw, 6rem)', paddingBottom: '3rem' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img src="/images/brand/logo.png" alt="" className="h-9 w-9 object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
              <span className="font-display font-normal" style={{ fontSize: '1.1875rem', color: 'var(--color-brand-cream)' }}>
                H<span style={{ color: 'var(--color-brand-bronze)' }}>+</span> Arquitetura&nbsp;&amp;&nbsp;Co
              </span>
            </Link>
            <p className="body-text" style={{ color: 'rgba(244,238,228,0.6)', maxWidth: '22rem' }}>
              Arquitetura e interiores de alto padrão, do conceito à entrega. Joinville, SC · Miami, FL.
            </p>
          </div>

          {/* Navegação */}
          <div>
            <p className="text-caption" style={{ color: 'var(--color-brand-gold)', marginBottom: '1.5rem' }}>Navegação</p>
            <ul className="flex flex-col gap-3.5">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}><FootLink href={href}>{label}</FootLink></li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <p className="text-caption" style={{ color: 'var(--color-brand-gold)', marginBottom: '1.5rem' }}>Contato</p>
            <ul className="flex flex-col gap-3.5">
              <li style={{ fontSize: '1rem', color: 'rgba(244,238,228,0.7)', lineHeight: 1.5 }}>Rua Piratuba, 1253<br />Bom Retiro, Joinville/SC</li>
              <li><FootLink href="mailto:contato@hmaisco.com">contato@hmaisco.com</FootLink></li>
            </ul>
          </div>

          {/* Redes */}
          <div>
            <p className="text-caption" style={{ color: 'var(--color-brand-gold)', marginBottom: '1.5rem' }}>Redes sociais</p>
            <ul className="flex flex-col gap-3.5">
              <li><FootLink href="https://instagram.com/hmais.arq" external>Instagram · @hmais.arq</FootLink></li>
              <li>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="transition-colors duration-200 hover:underline underline-offset-4" style={{ fontSize: '1rem', color: 'var(--color-brand-gold)', textDecoration: 'none' }}>
                  WhatsApp →
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="mt-16 pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: '1px solid var(--color-brand-line-dark)' }}
        >
          <p className="text-caption" style={{ color: 'rgba(244,238,228,0.4)' }}>
            © 2024 H+ Arquitetura & Co · Todos os direitos reservados
          </p>
          <p className="text-caption" style={{ color: 'rgba(244,238,228,0.3)' }}>CNPJ 41.887.339/0001-15</p>
        </div>
      </div>
    </footer>
  );
}
