import { AccordionItem } from '../ui/AccordionItem';
import { RevealOnScroll } from '../ui/RevealOnScroll';
import { WhatsAppButton } from '../ui/WhatsAppButton';

const FAQS = [
  {
    pergunta: 'Quanto custa um projeto de arquitetura de alto padrão?',
    resposta:
      'O honorário de projeto costuma representar entre 3% e 8% do valor total da obra. Para projetos residenciais de alto padrão, esse percentual cobre do levantamento inicial até o projeto executivo completo com especificações técnicas. O orçamento detalhado é enviado após a primeira conversa — sem surpresas no meio do caminho.',
  },
  {
    pergunta: 'Quanto tempo leva um projeto completo?',
    resposta:
      'Um projeto executivo completo leva entre 45 e 90 dias, dependendo do escopo. Isso inclui levantamento, desenvolvimento, revisões, projeto executivo e especificações técnicas. O prazo de obra varia conforme o tamanho e a complexidade do canteiro.',
  },
  {
    pergunta: 'Como funciona o acompanhamento de obra?',
    resposta:
      'Oferecemos acompanhamento semanal com visitas presenciais e relatórios fotográficos. Nossa equipe verifica a execução de cada etapa contra o projeto aprovado, identifica desvios e aciona os responsáveis antes que o problema se torne custo adicional.',
  },
  {
    pergunta: 'Existe limite de alterações no projeto?',
    resposta:
      'Não trabalhamos com limite de rodadas de revisão durante a fase de desenvolvimento — mas estabelecemos um processo claro de aprovação por etapa. Isso evita que decisões já resolvidas voltem à discussão na fase de obra, quando as mudanças custam muito mais.',
  },
  {
    pergunta: 'Quais serviços vocês oferecem?',
    resposta:
      'Desenvolvemos projetos de arquitetura e design de interiores residenciais e comerciais — do levantamento inicial até o acompanhamento de obra. Também realizamos projetos de interiores para empresas e escritórios. Cada projeto começa com o mapeamento do Método 4H+.',
  },
  {
    pergunta: 'Quanto custa uma reforma de alto padrão?',
    resposta:
      'Reformas residenciais de alto padrão em Joinville custam, em média, entre R$3.000 e R$8.000 por m² dependendo dos materiais, dos fornecedores escolhidos e da complexidade construtiva. Projetos comerciais variam conforme o uso. O projeto bem detalhado é o que garante que esse valor seja adquirido com precisão — sem surpresas.',
  },
  {
    pergunta: 'Vocês também fazem projetos de engenharia?',
    resposta:
      'Trabalhamos em parceria com engenheiros estruturais, elétricos e hidráulicos da nossa rede de fornecedores homologados. Coordenamos esses projetos complementares dentro do escopo, garantindo que todas as disciplinas conversem com o projeto arquitetônico.',
  },
  {
    pergunta: 'O que é neuroarquitetura e como ela aparece no projeto?',
    resposta:
      'Neuroarquitetura é o campo que estuda como os espaços afetam o cérebro e o comportamento humano. Na prática, cada decisão de iluminação, circulação, textura, proporção e cor é tomada com base em como vai impactar as pessoas que usam o espaço — não apenas em como vai fotografar bem. Um consultório projetado com neuroarquitetura reduz ansiedade. Uma sala de estar planejada assim convida ao descanso de verdade.',
  },
];

export function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-brand-dark" aria-label="Perguntas frequentes">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          <RevealOnScroll className="lg:col-span-1">
            <div className="lg:sticky lg:top-28">
              <p className="text-caption text-brand-bronze mb-3">Dúvidas comuns</p>
              <h2 className="text-display-md text-brand-cream mb-6">Perguntas<br /> frequentes</h2>
              <p style={{ color: 'var(--color-brand-muted)', fontSize: '0.9rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Não encontrou o que buscava? Fale diretamente com nossa equipe.
              </p>
              <WhatsAppButton label="Falar com especialista" variant="ghost" />
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="lg:col-span-2">
            <div role="list" aria-label="Lista de perguntas frequentes">
              {FAQS.map((faq, i) => (
                <AccordionItem
                  key={i}
                  pergunta={faq.pergunta}
                  resposta={faq.resposta}
                  index={i}
                />
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
