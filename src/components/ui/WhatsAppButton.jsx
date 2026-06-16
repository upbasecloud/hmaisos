const WHATSAPP_URL =
  'https://api.whatsapp.com/send/?phone=554792902127&text=' +
  encodeURIComponent('Olá! Vim pelo site e tenho interesse em desenvolver um projeto.');

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2"
    style={{ width: '0.875rem', height: '0.875rem', flexShrink: 0 }} aria-hidden="true">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
);

/* variant → class map (see .btn-* in index.css) */
const VARIANTS = {
  primary:        'btn btn-gold',
  hero:           'btn btn-gold btn-lg',
  cta:            'btn btn-gold btn-lg w-full',
  'outline-light':'btn btn-outline-light',
  'outline-dark': 'btn btn-outline-dark',
  outline:        'btn btn-outline-light',   // navbar transparent state
  'outline-solid':'btn btn-outline-dark',    // navbar scrolled state
  ghost:          'btn-ghost text-caption',
};

const ARROW_VARIANTS = new Set(['primary', 'hero', 'cta']);

export function WhatsAppButton({ label = 'Orçamento', className = '', variant = 'primary' }) {
  const cls = VARIANTS[variant] ?? VARIANTS.primary;
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cls} ${className}`}
      aria-label={`${label} via WhatsApp`}
    >
      {label}
      {ARROW_VARIANTS.has(variant) && <Arrow />}
    </a>
  );
}
