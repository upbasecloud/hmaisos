import { Link } from 'react-router-dom';
import { WhatsAppButton } from '../ui/WhatsAppButton';

const NAV_LINKS = [
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Método', href: '/#metodo' },
  { label: 'Time', href: '/#time' },
  { label: 'Contato', href: '/#contato' },
];

export function Footer() {
  return (
    <footer className="bg-brand-surface border-t border-brand-line" role="contentinfo">
      <div className="container-site py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src="/images/brand/logo.png" alt="H+ Arquitetura & Co" className="h-8 w-8 object-contain" />
              <span className="font-display text-brand-cream font-normal" style={{ fontSize: '1.05rem' }}>
                H<span className="text-brand-bronze">+</span> Arquitetura & Co
              </span>
            </Link>
            <p className="text-caption text-brand-muted mb-6">
              Arquitetura de alto padrão · Joinville, SC
            </p>
            <p className="text-sm text-brand-muted leading-relaxed">
              Rua Piratuba, 1253<br />
              Bom Retiro, Joinville/SC
            </p>
          </div>

          {/* Nav */}
          <div className="lg:col-span-1">
            <p className="text-caption text-brand-bronze mb-6">Navegação</p>
            <ul className="space-y-3">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-brand-muted hover:text-brand-cream transition-colors duration-200"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-1">
            <p className="text-caption text-brand-bronze mb-6">Contato</p>
            <div className="space-y-4">
              <a
                href="https://instagram.com/hmais.arq"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-brand-muted hover:text-brand-cream transition-colors duration-200"
                aria-label="Instagram @hmais.arq"
              >
                Instagram — @hmais.arq
              </a>
              <a
                href="mailto:contato@hmaisco.com"
                className="block text-sm text-brand-muted hover:text-brand-cream transition-colors duration-200"
              >
                contato@hmaisco.com
              </a>
              <WhatsAppButton label="WhatsApp" variant="ghost" className="text-xs px-0" />
            </div>
          </div>
        </div>

        <div className="rule mt-12 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-caption text-brand-muted/60">
            © 2024 H+ Arquitetura & Co · Todos os direitos reservados
          </p>
          <p className="text-caption text-brand-muted/40">CNPJ 41.887.339/0001-15</p>
        </div>
      </div>
    </footer>
  );
}
