# CLAUDE.md — Landing Page CET Herman Witsius

Landing page **one-page** do Centro de Estudos Teológicos Herman Witsius (CET Witsius).
Objetivo único: levar o visitante a se matricular nos cursos via **Hotmart**.
Lema: "Teologia com Piedade". Idealizador: Pr. Antônio R. Siqueira.

## Stack e estrutura

- HTML + CSS + JavaScript puro. **Sem frameworks** (nem CSS nem JS).
- Mobile-first: breakpoints em **390px** (mobile) e **1440px** (desktop).
- Arquivos na raiz: `index.html`, `style.css`, `script.js`. Imagens em `img/`.

## Regras invioláveis

1. **Sem frameworks** — CSS e JS puros; nada de Bootstrap, Tailwind, React, Vue.
2. **Cores só via variáveis CSS do `:root`** — nunca hex hardcoded fora do `:root`.
3. **Botão do WhatsApp é DOURADO (`#C9A84C`)** — nunca verde nem verde-limão. Nenhum elemento verde-limão na página.
4. **Tema escuro é a identidade** — não inverter sem instrução explícita.
5. **Mobile-first** — estilizar a partir de 390px e expandir para 1440px.
6. `border-radius: 2px` em botões (exceção: nav = 100px); cards = 6px.
7. Títulos sempre em **Cormorant Garamond** com pelo menos **uma palavra em itálico dourado**.
8. Imagem indisponível → placeholder com fundo `#1a1814` e texto indicativo.
9. Todo texto/dado placeholder → marcar com `<!-- TODO: substituir -->`.
10. A ordem das 7 seções é fixa (ver design spec).

## Identidade visual

```css
:root {
  --preto: #0d0b08;        /* fundo principal — hero, nav, CTA */
  --preto-footer: #080806; /* footer */
  --dourado: #c9a84c;      /* destaque principal E botão WhatsApp */
  --verde-escuro: #1b3a2d; /* textos sobre bege, botões */
  --bege: #f5f0e8;         /* fundo da seção diferenciais */
  --branco: #ffffff;
  /* opacidades do dourado: 22% #C9A84C38 · 33% #C9A84C54 · 44% #C9A84C70 */
}
```

Fontes (import obrigatório no `<head>`):

```
Cormorant Garamond (0,300;0,400;0,600;1,300;1,400) + Raleway (300;400;500)
```

- **Cormorant Garamond** → títulos/display. 300 para títulos grandes, 400 para subtítulos, itálico+dourado no destaque.
- **Raleway** → UI/corpo. 300 texto longo, 400 interface, 500 botões e labels.
- Labels uppercase: `letter-spacing 2–3px` + `text-transform: uppercase`.
- Números decorativos: romanos (I, II, III, IV) em Cormorant itálico dourado.
- Textura de fundo: `linear-gradient(#C9A84C08 1px, transparent 1px)`, `background-size: 40px 40px`.

## Dados do cliente (usar exatamente)

- WhatsApp: **(62) 9 8195-3752** — link `https://wa.me/5562981953752`
- E-mail: **centrodeestudosteologicoswits@gmail.com**
- Instagram: **@ceteologicoswitsius** e **@antoniorsiqueira**

## Referência de design detalhada

Specs seção a seção (layout, medidas, textos, comportamento do JS, checklist de QA) estão em
`.claude/rules/design-spec.md` — carregada automaticamente ao editar `index.html`, `style.css` ou `script.js`.

## Conteúdo pendente (não inventar)

Aguardando o cliente — usar placeholder até chegar: foto do Pr. Antônio · retrato de Herman Witsius em alta ·
nomes e descrições dos cursos · capas dos cursos · **links do Hotmart** · bio completa e citação do Pr. Antônio.
