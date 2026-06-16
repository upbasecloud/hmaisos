import { RevealOnScroll } from '../ui/RevealOnScroll';
import { WhatsAppButton } from '../ui/WhatsAppButton';

const PASSOS = [
  {
    num: '01',
    titulo: 'Histórico',
    descricao:
      'Antes de qualquer linha riscada, entendemos quem você é. Seu histórico pessoal, suas memórias sensoriais e sua identidade visual se tornam a linguagem do projeto — exclusivamente sua. Não existe um projeto H+ que pareça com outro.',
  },
  {
    num: '02',
    titulo: 'Harmonia',
    descricao:
      'Você vê o resultado antes de qualquer obra começar. Imagens 3D, plantas e tour 360° das cinco dimensões do espaço: distribuição, função, toques, visuais e sensações. O projeto só avança quando você reconhece o espaço como seu.',
  },
  {
    num: '03',
    titulo: 'Habilidade Técnica',
    descricao:
      'Mais de 8 anos de obras e +1.300 itens técnicos analisados por projeto. A diferença entre um espaço bonito e uma obra que funciona está no que você nunca vai precisar resolver duas vezes. Cada especificação é revisada antes de chegar ao canteiro.',
  },
  {
    num: '04',
    titulo: 'Homologação',
    descricao:
      'Fornecedores verificados. Planilhas estruturadas. Política anti-RT: nenhuma comissão de fornecedor influencia nossas especificações. O que escolhemos é sempre o melhor para o seu projeto — não o que nos remunera.',
  },
];

export function Metodo() {
  return (
    <section
      id="metodo"
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--color-brand-surface)' }}
      aria-label="Método 4H+"
    >
      <div className="container-site">
        <RevealOnScroll>
          <div className="mb-16 max-w-2xl">
            <p className="text-caption text-brand-bronze mb-3">Como trabalhamos</p>
            <h2 className="text-display-md text-brand-cream mb-5">Método 4H+</h2>
            <p style={{ color: 'var(--color-brand-muted)', lineHeight: 1.75, fontSize: '0.9375rem' }}>
              Neuroarquitetura de Experiências. Quatro etapas desenvolvidas para que o seu próximo
              espaço reflita com precisão quem você é — e como você quer se sentir nele.
            </p>
          </div>
        </RevealOnScroll>

        <hr className="rule" />

        {PASSOS.map((passo, i) => (
          <RevealOnScroll key={passo.num} delay={i * 0.07}>
            <div
              className="grid grid-cols-1 md:grid-cols-[5rem_1fr_2fr] gap-6 lg:gap-14 py-12 lg:py-16 relative overflow-hidden"
              style={{ borderBottom: '1px solid var(--color-brand-line)' }}
            >
              {/* Decorative number */}
              <span
                className="absolute right-0 top-1/2 -translate-y-1/2 font-display select-none pointer-events-none hidden lg:block"
                aria-hidden="true"
                style={{
                  fontSize: 'clamp(8rem, 18vw, 15rem)',
                  lineHeight: 1,
                  fontWeight: 200,
                  color: 'var(--color-brand-cream)',
                  opacity: 0.028,
                  fontFamily: 'var(--font-display)',
                  letterSpacing: '-0.04em',
                }}
              >
                {passo.num}
              </span>

              {/* Small number */}
              <div className="flex items-start pt-1">
                <span
                  className="text-caption text-brand-bronze"
                  style={{ fontSize: '0.6875rem' }}
                >
                  {passo.num}
                </span>
              </div>

              {/* Title */}
              <div className="flex items-start">
                <h3
                  className="font-display text-brand-cream"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.375rem, 2.5vw, 1.875rem)',
                    lineHeight: 1.1,
                    fontWeight: 300,
                    letterSpacing: '-0.01em',
                    paddingTop: '0.1rem',
                  }}
                >
                  {passo.titulo}
                </h3>
              </div>

              {/* Description */}
              <div>
                <p style={{ color: 'var(--color-brand-muted)', lineHeight: 1.78, fontSize: '0.9375rem' }}>
                  {passo.descricao}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}

        <RevealOnScroll>
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 pt-14">
            <blockquote className="max-w-2xl">
              <p
                className="font-display text-brand-cream mb-5"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.125rem, 2.5vw, 1.625rem)',
                  fontStyle: 'italic',
                  lineHeight: 1.38,
                  fontWeight: 300,
                }}
              >
                "Um espaço que não parte de quem você é nunca vai parecer seu — não importa quanto custe."
              </p>
              <footer className="text-caption text-brand-bronze">
                Carol Smaniotto — Arquiteta Fundadora, H+ Arquitetura & Co
              </footer>
            </blockquote>

            <div className="flex flex-col items-start lg:items-end gap-3 flex-shrink-0">
              <WhatsAppButton label="Falar com especialista" variant="primary" />
              <span className="text-caption" style={{ color: 'var(--color-brand-muted)', fontSize: '0.5625rem' }}>
                Resposta em até 24h
              </span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
