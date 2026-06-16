import { useState, useRef } from 'react';

export function AccordionItem({ pergunta, resposta, index }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  return (
    <div
      role="listitem"
      style={{ borderBottom: '1px solid var(--color-brand-line)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-6 text-left"
        style={{ padding: '1.75rem 0', cursor: 'pointer', background: 'none', border: 'none' }}
        aria-expanded={open}
        aria-controls={`faq-${index}`}
      >
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.1875rem, 1.7vw, 1.4375rem)',
            fontWeight: 500,
            color: open ? 'var(--color-brand-text)' : 'var(--color-brand-text)',
            lineHeight: 1.32,
            letterSpacing: '-0.008em',
            transition: 'color 0.2s',
          }}
        >
          {pergunta}
        </span>

        <span
          aria-hidden="true"
          style={{
            flexShrink: 0,
            marginTop: '0.2rem',
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            border: `1px solid ${open ? 'var(--color-brand-gold)' : 'var(--color-brand-line-2)'}`,
            backgroundColor: open ? 'var(--color-brand-gold)' : 'transparent',
            color: open ? '#1A130A' : 'var(--color-brand-text-2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.25s, border-color 0.25s, color 0.25s',
          }}
        >
          <svg
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            style={{
              width: '0.875rem',
              height: '0.875rem',
              transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 0.3s cubic-bezier(0.22,1,0.36,1)',
            }}
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
          maxHeight: open ? (ref.current?.scrollHeight ?? 600) + 'px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.42s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <p
          style={{
            paddingBottom: '1.875rem',
            paddingRight: 'clamp(0rem, 5vw, 3.5rem)',
            color: 'var(--color-brand-text-2)',
            fontSize: '1.0625rem',
            lineHeight: 1.75,
            fontWeight: 400,
            maxWidth: '48rem',
          }}
        >
          {resposta}
        </p>
      </div>
    </div>
  );
}
