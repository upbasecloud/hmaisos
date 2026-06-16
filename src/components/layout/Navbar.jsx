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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
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

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b'
          : ''
      }`}
      style={{
        backgroundColor: scrolled ? 'rgba(10,9,7,0.94)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderColor: scrolled ? 'var(--color-brand-line)' : 'transparent',
      }}
    >
      <nav
        className="container-site flex items-center justify-between"
        style={{ height: '4.5rem' }}
        role="navigation"
        aria-label="Navegação principal"
      >
        {/* Logo */}
        <Link
          to="/"
          aria-label="H+ Arquitetura & Co — página inicial"
          className="flex items-center gap-3 flex-shrink-0"
        >
          <img
            src="/images/brand/logo.png"
            alt="H+ Arquitetura & Co"
            className="object-contain"
            style={{ height: '2.125rem', width: '2.125rem' }}
          />
          <span
            className="font-display text-brand-cream font-normal hidden sm:block"
            style={{ fontSize: '0.9375rem', letterSpacing: '0.06em' }}
          >
            H<span className="text-brand-bronze">+</span>{' '}
            <span style={{ color: 'var(--color-brand-muted)' }}>Arquitetura & Co</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-10">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => handleAnchorClick(e, href)}
              className="text-brand-muted hover:text-brand-cream transition-colors duration-200"
              style={{ fontSize: '0.6875rem', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <WhatsAppButton label="Iniciar projeto" variant="outline" />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2 text-brand-cream"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className="block h-px bg-current transition-all duration-300"
            style={{ width: '1.5rem', transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none' }}
          />
          <span
            className="block h-px bg-current transition-all duration-300"
            style={{ width: '1rem', opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-px bg-current transition-all duration-300"
            style={{ width: '1.5rem', transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none' }}
          />
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
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col px-8 pt-28 pb-12"
            style={{ backgroundColor: 'var(--color-brand-dark)' }}
          >
            {LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={(e) => handleAnchorClick(e, href)}
                className="font-display text-brand-cream hover:text-brand-bronze transition-colors duration-200 pb-8"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 8vw, 2.5rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  borderBottom: '1px solid var(--color-brand-line)',
                  marginBottom: '0.5rem',
                  textDecoration: 'none',
                }}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.06 + i * 0.06 }}
              >
                {label}
              </motion.a>
            ))}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.32 }}
            >
              <WhatsAppButton label="Iniciar projeto" variant="cta" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
