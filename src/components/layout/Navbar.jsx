import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { WhatsAppButton } from '../ui/WhatsAppButton';

const LINKS = [
  { label: 'Projetos', href: '/#projetos' },
  { label: 'Método', href: '/#metodo' },
  { label: 'Time', href: '/#time' },
  { label: 'Contato', href: '/#contato' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef(null);

  const solid = scrolled && !menuOpen;
  const onDark = !solid; // cream text when transparent/over dark

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const el = menuRef.current;
    if (!el) return;
    const focusable = el.querySelectorAll('a, button');
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const trap = (e) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault(); last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault(); first.focus();
        }
      }
      if (e.key === 'Escape') setMenuOpen(false);
    };
    el.addEventListener('keydown', trap);
    first?.focus();
    return () => el.removeEventListener('keydown', trap);
  }, [menuOpen]);

  const handleAnchorClick = (e, href) => {
    if (href.startsWith('/#') && pathname === '/') {
      e.preventDefault();
      const id = href.replace('/#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  const linkColor = onDark ? 'rgba(244,238,228,0.78)' : 'var(--color-brand-text-2)';
  const linkHover = onDark ? 'var(--color-brand-cream)' : 'var(--color-brand-text)';

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: solid ? 'rgba(247,242,234,0.88)' : 'transparent',
        backdropFilter: solid ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: solid ? 'blur(14px)' : 'none',
        borderBottom: solid ? '1px solid var(--color-brand-line)' : '1px solid transparent',
      }}
    >
      <nav
        className="container-site flex items-center justify-between"
        style={{ height: '4.75rem' }}
        role="navigation"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <Link to="/" aria-label="H+ Arquitetura & Co — página inicial" className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/images/brand/logo.png"
            alt=""
            className="object-contain"
            style={{ height: '2.25rem', width: '2.25rem', filter: onDark ? 'brightness(0) invert(1)' : 'none' }}
          />
          <span
            className="font-display font-normal hidden sm:block"
            style={{ fontSize: '1.0625rem', letterSpacing: '0.04em', color: onDark ? 'var(--color-brand-cream)' : 'var(--color-brand-text)' }}
          >
            H<span style={{ color: 'var(--color-brand-bronze)' }}>+</span>{' '}
            <span style={{ color: onDark ? 'rgba(244,238,228,0.7)' : 'var(--color-brand-text-2)' }}>Arquitetura&nbsp;&amp;&nbsp;Co</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-9">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleAnchorClick(e, href)}
              className="transition-colors duration-200"
              style={{ fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 600, color: linkColor }}
              onMouseEnter={(e) => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <WhatsAppButton label="Iniciar projeto" variant={onDark ? 'outline-light' : 'outline-dark'} />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          style={{ color: menuOpen || onDark ? 'var(--color-brand-cream)' : 'var(--color-brand-text)' }}
        >
          <span className="block h-px bg-current transition-all duration-300" style={{ width: '1.5rem', transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <span className="block h-px bg-current transition-all duration-300" style={{ width: '1rem', opacity: menuOpen ? 0 : 1 }} />
          <span className="block h-px bg-current transition-all duration-300" style={{ width: '1.5rem', transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-label="Menu de navegação"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col px-8 pt-28 pb-12"
            style={{ backgroundColor: 'var(--color-brand-dark)' }}
          >
            {LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={(e) => handleAnchorClick(e, href)}
                className="font-display transition-colors duration-200 pb-7"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 9vw, 2.75rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-brand-cream)',
                  borderBottom: '1px solid var(--color-brand-line-dark)',
                  marginBottom: '0.75rem',
                  textDecoration: 'none',
                }}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.08 + i * 0.06 }}
              >
                {label}
              </motion.a>
            ))}
            <motion.div className="mt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.34 }}>
              <WhatsAppButton label="Iniciar projeto" variant="cta" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
