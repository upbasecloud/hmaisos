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
  const [overDark, setOverDark] = useState(true); // hero is dark on mount
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    const NAV_H = 80;
    const checkDark = () => {
      const darkEls = document.querySelectorAll('[data-dark-section]');
      let found = false;
      darkEls.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top <= NAV_H && r.bottom > NAV_H * 0.5) found = true;
      });
      setOverDark(found);
    };
    const onScroll = () => {
      setScrolled(window.scrollY > 64);
      checkDark();
    };
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

  const onDark = overDark || menuOpen;
  const showSolid = scrolled && !overDark && !menuOpen;

  const linkColor = onDark ? 'rgba(244,238,228,0.78)' : 'var(--color-brand-text-2)';
  const linkHover = onDark ? 'var(--color-brand-cream)' : 'var(--color-brand-text)';

  return (
    <header
      role="banner"
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: 'background-color 0.35s, border-color 0.35s, backdrop-filter 0.35s',
        backgroundColor: showSolid ? 'rgba(247,242,234,0.9)' : 'transparent',
        backdropFilter: showSolid ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: showSolid ? 'blur(16px)' : 'none',
        borderBottom: showSolid ? '1px solid var(--color-brand-line)' : '1px solid transparent',
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
            alt=""
            className="object-contain"
            style={{
              height: '2rem',
              width: '2rem',
              filter: onDark ? 'brightness(0) invert(1)' : 'none',
              transition: 'filter 0.35s',
            }}
          />
          <span
            className="font-display font-normal hidden sm:block"
            style={{
              fontSize: '1rem',
              letterSpacing: '0.04em',
              color: onDark ? 'var(--color-brand-cream)' : 'var(--color-brand-text)',
              transition: 'color 0.35s',
            }}
          >
            H<span style={{ color: 'var(--color-brand-bronze)' }}>+</span>{' '}
            <span
              style={{
                color: onDark ? 'rgba(244,238,228,0.65)' : 'var(--color-brand-text-2)',
                transition: 'color 0.35s',
              }}
            >
              Arquitetura&nbsp;&amp;&nbsp;Co
            </span>
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
              style={{
                fontSize: '0.6875rem',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                fontWeight: 600,
                color: linkColor,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = linkHover)}
              onMouseLeave={(e) => (e.currentTarget.style.color = linkColor)}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <WhatsAppButton
            label="Iniciar projeto"
            variant={onDark ? 'outline-light' : 'outline-dark'}
          />
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          style={{ color: menuOpen || onDark ? 'var(--color-brand-cream)' : 'var(--color-brand-text)' }}
        >
          <span
            className="block bg-current"
            style={{
              width: '1.375rem',
              height: '1px',
              transition: 'transform 0.3s',
              transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none',
            }}
          />
          <span
            className="block bg-current"
            style={{
              width: '0.875rem',
              height: '1px',
              transition: 'opacity 0.3s',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block bg-current"
            style={{
              width: '1.375rem',
              height: '1px',
              transition: 'transform 0.3s',
              transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none',
            }}
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
            className="fixed inset-0 z-40 flex flex-col px-8 pb-12"
            style={{ backgroundColor: 'var(--color-brand-dark)', paddingTop: '6rem' }}
          >
            {LINKS.map(({ label, href }, i) => (
              <motion.a
                key={label}
                href={href}
                onClick={(e) => handleAnchorClick(e, href)}
                className="font-display transition-colors duration-200"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.25rem, 9vw, 2.75rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.02em',
                  color: 'var(--color-brand-cream)',
                  borderBottom: '1px solid var(--color-brand-line-dark)',
                  paddingBottom: '1.5rem',
                  marginBottom: '0.5rem',
                  textDecoration: 'none',
                  display: 'block',
                }}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.06 + i * 0.06 }}
              >
                {label}
              </motion.a>
            ))}
            <motion.div
              className="mt-10"
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
