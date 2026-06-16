const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=554792902127&text=' +
  encodeURIComponent('Olá! Vim pelo site e tenho interesse em desenvolver um projeto.');

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
    style={{ width: '0.8125rem', height: '0.8125rem', flexShrink: 0 }}>
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

export function WhatsAppButton({ label = 'Orçamento', className = '', variant = 'primary' }) {
  const base = 'inline-flex items-center gap-2.5 font-body font-semibold transition-all duration-200 tracking-[0.12em] uppercase cursor-pointer';

  const styles = {
    // Gold filled — for dark backgrounds (Hero, Contato)
    primary:       'bg-brand-gold text-brand-dark px-7 py-3.5 hover:brightness-110 text-[0.6875rem]',
    hero:          'bg-brand-gold text-brand-dark px-8 py-4 hover:brightness-110 text-[0.75rem]',
    cta:           'bg-brand-gold text-brand-dark px-10 py-4 hover:brightness-110 text-[0.75rem] w-full justify-center',
    // Outline dark — for light backgrounds (Navbar scrolled, FAQ, etc.)
    'outline-dark': 'border border-brand-text text-brand-text px-6 py-3 hover:bg-brand-text hover:text-brand-bg text-[0.6875rem]',
    // Outline light — for dark backgrounds
    'outline-light': 'border border-brand-cream/50 text-brand-cream px-7 py-3.5 hover:border-brand-cream hover:text-brand-cream text-[0.6875rem]',
    // Navbar transparent state
    outline:       'border border-brand-cream/40 text-brand-cream px-6 py-2.5 hover:border-brand-cream hover:text-brand-cream text-[0.6875rem]',
    // Navbar scrolled state
    'outline-solid': 'border border-brand-text/30 text-brand-text px-6 py-2.5 hover:border-brand-gold hover:text-brand-gold text-[0.6875rem]',
    // Ghost
    ghost: 'text-brand-gold hover:text-brand-text underline-offset-4 hover:underline text-[0.6875rem]',
  };

  const showArrow = ['hero', 'cta', 'primary'].includes(variant);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant] ?? styles.primary} ${className}`}
      aria-label={`${label} via WhatsApp`}
    >
      {label}
      {showArrow && <Arrow />}
    </a>
  );
}
