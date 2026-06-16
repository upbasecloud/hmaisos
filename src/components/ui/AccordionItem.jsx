import { useState, useRef } from 'react';

export function AccordionItem({ pergunta, resposta, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div style={{ borderBottom: '1px solid var(--color-brand-line)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 py-5 text-left group"
        aria-expanded={open}
        aria-controls={`faq-${index}`}
      >
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            fontWeight: 400,
            color: 'var(--color-brand-text)',
            lineHeight: 1.5,
          }}
          className="group-hover:text-brand-gold transition-colors duration-200"
        >
          {pergunta}
        </span>
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            marginTop: '0.125rem',
            color: open ? 'var(--color-brand-gold)' : 'var(--color-brand-text-2)',
            transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s, color 0.2s',
            display: 'flex',
            alignItems: 'center',
            width: '1.125rem',
            height: '1.125rem',
          }}
        >
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '1rem', height: '1rem' }}>
            <line x1="10" y1="2" x2="10" y2="18" />
            <line x1="2" y1="10" x2="18" y2="10" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-${index}`}
        ref={ref}
        role="region"
        style={{
          maxHeight: open ? ref.current?.scrollHeight + 'px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.38s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <p style={{
          paddingBottom: '1.5rem',
          color: 'var(--color-brand-text-2)',
          fontSize: '0.9375rem',
          lineHeight: 1.75,
          fontWeight: 300,
        }}>
          {resposta}
        </p>
      </div>
    </div>
  );
}
