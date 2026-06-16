import { useState, useRef } from 'react';

export function AccordionItem({ pergunta, resposta, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div style={{ borderBottom: '1px solid var(--color-brand-line)' }}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 text-left group"
        style={{ padding: '1.75rem 0' }}
        aria-expanded={open}
        aria-controls={`faq-${index}`}
      >
        <span
          className="font-display transition-colors duration-200"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.25rem, 1.8vw, 1.5rem)',
            fontWeight: 500,
            color: open ? 'var(--color-brand-text)' : 'var(--color-brand-text)',
            lineHeight: 1.3,
            letterSpacing: '-0.005em',
          }}
        >
          {pergunta}
        </span>
        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            marginTop: '0.35rem',
            width: '2.25rem',
            height: '2.25rem',
            borderRadius: '999px',
            border: '1px solid var(--color-brand-line-2)',
            color: open ? '#1A130A' : 'var(--color-brand-text)',
            backgroundColor: open ? 'var(--color-brand-gold)' : 'transparent',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.25s, color 0.25s, border-color 0.25s',
          }}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            style={{ width: '1.05rem', height: '1.05rem', transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}
          >
            <line x1="10" y1="3" x2="10" y2="17" />
            <line x1="3" y1="10" x2="17" y2="10" />
          </svg>
        </span>
      </button>

      <div
        id={`faq-${index}`}
        ref={ref}
        role="region"
        style={{
          maxHeight: open ? (ref.current?.scrollHeight ?? 0) + 'px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <p
          style={{
            paddingBottom: '1.75rem',
            paddingRight: '3rem',
            color: 'var(--color-brand-text-2)',
            fontSize: '1.0625rem',
            lineHeight: 1.72,
            fontWeight: 400,
            maxWidth: '46rem',
          }}
        >
          {resposta}
        </p>
      </div>
    </div>
  );
}
