# H+ Arquitetura & Co — Site

Site editorial de alto padrão para o escritório H+ Arquitetura & Co, Joinville/SC.

Stack: React 18 · Vite 5 · Tailwind CSS 4 · Framer Motion · React Router DOM v6

## Desenvolvimento local

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview   # testar o build localmente
```

## Deploy na Vercel

1. Instale a CLI da Vercel (uma vez): `npm i -g vercel`
2. Faça o build: `npm run build`
3. Deploy: `vercel --prod`

Ou conecte o repositório diretamente na Vercel via dashboard — ela detecta o Vite automaticamente.

**Configuração de SPA (necessária para rotas):** No painel da Vercel, adicione um `vercel.json` na raiz:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

## Estrutura

```
src/
  components/
    layout/    Navbar, Footer
    sections/  Hero, Portfolio, Metodo, Time, Depoimentos, FAQ, Contato
    ui/        ProjectCard, TeamMember, AccordionItem, WhatsAppButton, RevealOnScroll
  pages/       Home, Projeto (página individual)
  data/        projetos.js, time.js, depoimentos.js
  styles/      index.css (design tokens + base styles)
public/
  images/
    portfolio/ imagens dos projetos (36 arquivos)
    team/      fotos do time (12 arquivos)
    brand/     logo e watermark
```

## Design system

- **Display:** Fraunces (opsz, Light 300)
- **Body:** DM Sans (300–500)
- **Fundo principal:** `#0F0D0B` (near-black aquecido)
- **Acento:** `#C09A6E` (bronze)
- **Assinatura:** Hairlines arquitetônicas e texto vertical nos cards

## WhatsApp

Número configurado: `554792902127`
Para alterar, edite `src/components/ui/WhatsAppButton.jsx`.

## Adicionar projetos

Edite `src/data/projetos.js`. Adicione a imagem em `public/images/portfolio/` e inclua o caminho no array `imagens[]`.

## Otimização de imagens

Alguns PNGs do portfólio têm 2–4MB. Para produção, instale `sharp` e adicione um script de conversão, ou use Vercel Image Optimization ativando:

```json
// vercel.json
{ "images": { "sizes": [640, 1200, 1920], "formats": ["image/webp", "image/avif"] } }
```
