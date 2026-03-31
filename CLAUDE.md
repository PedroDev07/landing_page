# CLAUDE.md — Landing Page CET Herman Witsius

## Visão Geral do Projeto

Você está desenvolvendo a Landing Page oficial do **Centro de Estudos Teológicos Herman Witsius (CET Witsius)**.

- **Objetivo único:** Levar o visitante a se matricular nos cursos via Hotmart
- **Tipo:** One-page (página única com scroll vertical)
- **Stack:** HTML + CSS + JavaScript puro (sem frameworks)
- **Responsividade:** Mobile-first, breakpoints em 390px (mobile) e 1440px (desktop)

---

## Sobre o Cliente

| Campo         | Valor                                       |
| ------------- | ------------------------------------------- |
| Nome          | Centro de Estudos Teológicos Herman Witsius |
| Lema          | "Teologia com Piedade"                      |
| Idealizador   | Pr. Antônio R. Siqueira                     |
| Instagram     | @ceteologicoswitsius / @antoniorsiqueira    |
| WhatsApp      | (62) 9 8195-3752                            |
| E-mail        | centrodeestudosteologicoswits@gmail.com     |
| Link WhatsApp | https://wa.me/5562981953752                 |

---

## Identidade Visual

### Paleta de Cores

```css
:root {
  --preto: #0d0b08; /* fundo principal — hero, nav, CTA */
  --preto-footer: #080806; /* footer — levemente mais escuro */
  --dourado: #c9a84c; /* cor de destaque principal */
  --verde-escuro: #1b3a2d; /* textos sobre fundo bege, botões */
  --bege: #f5f0e8; /* fundo da seção diferenciais */
  --branco: #ffffff;

  /* Variantes com opacidade — usar diretamente no CSS */
  /* --dourado com 22% opacidade: #C9A84C38 */
  /* --dourado com 33% opacidade: #C9A84C54 */
  /* --dourado com 44% opacidade: #C9A84C70 */
}
```

### Tipografia

```css
/* Import obrigatório no <head> */
@import url("https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Raleway:wght@300;400;500&display=swap");

/* Regras de uso */
/* Títulos/display → Cormorant Garamond */
/* Peso 300 para títulos grandes */
/* Peso 400 para subtítulos */
/* Itálico + dourado para palavra de destaque */

/* UI/corpo → Raleway */
/* Peso 300 para textos longos */
/* Peso 400 para elementos de interface */
/* Peso 500 para botões e labels */
```

### Padrões de Estilo

- **Botões:** `border-radius: 2px` — quase sem arredondamento, estilo clássico
- **Cards:** `border-radius: 6px`
- **Bordas decorativas:** `1px solid` com cor dourada e baixa opacidade (22% a 44%)
- **Labels uppercase:** `letter-spacing: 2-3px` + `text-transform: uppercase`
- **Números decorativos:** Romanos (I, II, III, IV) em Cormorant Garamond itálico dourado
- **Textura de fundo:** grid de linhas com `background-image: linear-gradient(#C9A84C08 1px, transparent 1px)` e `background-size: 40px 40px`

---

## Estrutura de Arquivos

```
cet-witsius/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── img/
    │   ├── witsius.jpg          ← retrato Herman Witsius
    │   ├── pastor-antonio.jpg   ← foto do Pr. Antônio
    │   └── cursos/              ← capas dos cursos
    └── icons/
        └── whatsapp.svg
```

---

## Seções da Landing Page

As seções devem ser codificadas **exatamente nesta ordem:**

### 1. `<nav>` — Navegação

```
Fundo:          #F5F0E8
Borda inferior: 1px solid #ddd
Position:       sticky, top: 0, z-index: 100

[Esquerda]  foto Witsius 40x40px (border-radius: 6px)
            + "Centro de Estudos Teológicos" / "Herman Witsius"

[Centro]    links: Principal · Quem sou? · Sobre o curso
            cor: #1B3A2D, opacidade: 70%, font-size: 12px

[Direita]   botão "Matricule-se"
            fundo: #0D0D0D, cor: #fff, border-radius: 100px
```

### 2. `<section id="hero">` — Hero

```
Fundo:   #0D0B08
Layout:  grid 2 colunas (1.4fr | 1fr)

[Coluna esquerda]
  - Tag "TEOLOGIA COM PIEDADE" — uppercase, dourado, letter-spacing 3px
    com linha decorativa: ::after { width: 100%; height: 1px; background: #C9A84C; }
  - H1: "Teologia que une verdade e vida"
    fonte: Cormorant Garamond, 52px, weight 300
    "verdade" → itálico + cor #C9A84C
  - Divider: 40px × 1px, cor #C9A84C, margin: 20px 0
  - Subtítulo: Raleway 13px weight 300, opacidade 50%, max-width: 360px
  - Citação: "A verdadeira teologia sempre conduz à transformação da vida."
    Cormorant Garamond itálico, font-size: 12px, opacidade 50%
  - Botão primário: "Ver os cursos"
    fundo: #C9A84C, cor: #0D0B08, padding: 12px 28px, border-radius: 2px
    uppercase, letter-spacing: 2px, Raleway weight 500
  - Botão ghost: "Conheça o centro"
    texto branco sublinhado, opacidade 35%

[Coluna direita]
  - Retrato de Herman Witsius
  - Badge "Séc. XVII · Teólogo Reformado" — top: 20px, right: 20px
    borda dourada, font-size: 9px, uppercase, opacidade 70%
  - Grid de linhas como textura de fundo (ver padrão acima)

[Faixa inferior do hero]
  fundo: #1B3A2D, padding: 10px
  4 itens separados por pontos dourados:
  "4 pilares de formação" · "100% online" · "Tradição reformada" · "Acesso imediato"
  font-size: 11px, Raleway, cor: #F5F0E8, opacidade: 85%
```

### 3. `<section id="pilares">` — Pilares com Filtro

```
Fundo:  #0D0B08
Tag:    "ESTRUTURA ACADÊMICA"
Título: "O que você vai aprender na CET WITSUS?"

[Filtros]
  5 botões: "Todos os pilares" | "Teologia Bíblica" | "Teologia Sistemática"
            "Teologia Prática" | "Teologia da Família"

  Ativo:   fundo #C9A84C, cor #0D0B08
  Inativo: borda 1px #C9A84C33, cor branco opacidade 45%, fundo transparente
  border-radius: 2px, letter-spacing: 1px, uppercase, Raleway

[Grid de cards]
  4 colunas, gap: 16px
  data-pilar="biblica|sistematica|pratica|familia" em cada card

  Cada card:
  ┌─────────────────────────────┐
  │ [BADGE pilar]               │ ← badge no canto top-left
  │                             │
  │    [número romano grande]   │ ← Cormorant 40px itálico dourado opacidade 40%
  │    [placeholder imagem]     │
  │                             │
  ├─────────────────────────────┤
  │ PILAR X — uppercase dourado │
  │ Título em Cormorant         │
  │ <em>palavra em itálico</em> │
  │ Descrição Raleway 11px      │
  │ ─────────────────────────── │
  │ Saiba mais →                │
  └─────────────────────────────┘

  Pilares e conteúdos:
  I   — Teologia Bíblica:     "Revelação progressiva nas Escrituras dentro do contexto histórico e redentivo."
  II  — Teologia Sistemática: "Doutrinas bíblicas organizadas em um sistema coerente e estruturado."
  III — Teologia Prática:     "Verdade bíblica aplicada ao ministério, à igreja e ao cristão comum."
  IV  — Teologia da Família:  "Aplicação da teologia à restauração e fortalecimento das famílias cristãs."
```

### 4. `<section id="sobre">` — Pr. Antônio Siqueira

```
Fundo:  #0D0B08
Layout: grid 2 colunas (1fr | 1.4fr), align-items: center

[Coluna esquerda]
  - Frame da foto: 220×280px, borda 1px #C9A84C33, border-radius: 4px
    Cantos decorativos com pseudo-elementos (16×16px, borda dourada 2px)
  - Nome: "Pr. Antônio Siqueira" — Cormorant Garamond 18px
  - Cargo: "IDEALIZADOR · CET WITSIUS" — uppercase, dourado, opacidade 60%
  - Botões: [INSTAGRAM] [WHATSAPP]
    borda 1px #C9A84C33, cor dourado, border-radius: 2px, uppercase

[Coluna direita]
  - Tag "QUEM ESTÁ POR TRÁS" com linha decorativa antes
  - Título: "Pr. Antônio Siqueira"
    "Antônio" → itálico dourado, Cormorant Garamond 36px weight 300
  - Cargo: "IDEALIZADOR DO CENTRO DE ESTUDOS TEOLÓGICOS HERMAN WITSIUS"
    uppercase, opacidade 30%, Raleway
  - Divider: 40px × 1px dourado
  - Parágrafo 1: apresentação como idealizador e fundador do CET Witsius
  - Parágrafo 2: estudioso profundo da obra de Herman Witsius
    "Herman Witsius" em destaque dourado em ambos os parágrafos
  - Bloco de citação:
    border-left: 2px solid #C9A84C44
    background: #C9A84C08
    Frase em itálico Cormorant Garamond 16px opacidade 60%
  - Badges: [Teólogo Reformado] [Estudioso de Witsius] [Pastor] [Educador]
    background: #C9A84C12, borda: 1px solid #C9A84C33, border-radius: 2px
```

### 5. `<section id="diferenciais">` — Diferenciais

```
Fundo:  #F5F0E8  ← seção de contraste claro
Tag:    "POR QUE NOS ESCOLHER"
Título: "Nossos diferenciais" — Cormorant Garamond, cor #1B3A2D

Grid: 3 colunas, separadas por linha background: #1B3A2D22

Card 01 — Profundidade acadêmica
  "Cursos baseados em estudo bíblico rigoroso e na tradição teológica reformada de Herman Witsius."

Card 02 — Formação prática
  "Aplicação da teologia à vida ministerial, espiritual e familiar — não apenas teoria, mas transformação real."

Card 03 — Conhecimento e piedade
  "Inspirados na tradição reformada que une ortodoxia e devoção. Teologia que conduz à vida."

Cada card:
  - Número grande (01, 02, 03) — Cormorant itálico dourado opacidade 50%
  - Título — Cormorant Garamond 20px cor #1B3A2D
  - Divider — 32px × 1px dourado
  - Descrição — Raleway 12px weight 300 cor #1B3A2D opacidade 50%
```

### 6. `<section id="cta">` — CTA Final

```
Fundo:     #0D0B08
Alinhamento: centralizado

Elemento decorativo:
  Letra "W" — position absolute, left e right
  Cormorant Garamond 200px, itálico, cor #C9A84C, opacidade 4%

Tag:    "COMECE HOJE"
Título: "Teologia que une verdade e vida."
  Cormorant Garamond 48px weight 300
  "verdade" → itálico + cor #C9A84C

Subtítulo:
  "Junte-se ao Centro de Estudos Teológicos Herman Witsius e aprofunde sua fé com rigor bíblico e piedade cristã."
  Raleway 13px weight 300, opacidade 35%, max-width: 420px, centralizado

Botão primário: "MATRICULE-SE AGORA"
  fundo: #C9A84C, cor: #0D0B08, padding: 14px 36px, border-radius: 2px

Botão secundário: "FALAR NO WHATSAPP"
  borda: 1px solid #C9A84C33, cor: #C9A84C, opacidade 60%

Nota: "Acesso imediato · 100% Online · Certificado incluso"
  font-size: 11px, opacidade 20%

[Valores finais] — separados por borda superior dourada
  I Verdade | II Doutrina | III Vida | IV Piedade
  Numeral: Cormorant itálico dourado opacidade 50%
  Label:   Raleway uppercase, branco, opacidade 25%
```

### 7. `<footer>` — Footer

```
Fundo:        #080806
Borda topo:   1px solid #C9A84C22

Grid superior: 3 colunas (1.5fr | 1fr | 1fr)

[Coluna 1 — Brand]
  Logo: ícone ✦ (dourado) + "Centro de Estudos Teológicos / Herman Witsius"
  Descrição: "Formação teológica sólida baseada na tradição reformada. Teologia com Piedade."
  Raleway 11px, cor #F5F0E8, opacidade 25%

[Coluna 2 — Navegação]
  Label: "NAVEGAÇÃO" — uppercase, dourado, opacidade 60%
  Links: Principal · Quem sou · Cursos · Matricule-se
  Raleway 12px, cor #F5F0E8, opacidade 30%

[Coluna 3 — Contato]
  Label: "CONTATO" — uppercase, dourado, opacidade 60%
  WA:    (62) 9 8195-3752
  IG:    @ceteologicoswitsius
  IG:    @antoniorsiqueira
  Email: centrodeestudosteologicoswits@gmail.com

Rodapé inferior (border-top: 1px #C9A84C15):
  [Esquerda]  © 2025 CET Herman Witsius · Todos os direitos reservados
  [Centro]    "Teologia com Piedade" — itálico dourado opacidade 40%
  [Direita]   ícones IG e WA — 28×28px, borda dourada, border-radius: 2px
```

---

## Botão Flutuante WhatsApp

```css
/* Elemento fixo no canto inferior direito */
position: fixed;
bottom: 24px;
right: 24px;
width: 56px;
height: 56px;
border-radius: 50%;
background: #C9A84C;  /* dourado — mantém identidade visual */
z-index: 999;

/* Link */
href="https://wa.me/5562981953752"
target="_blank"
```

---

## JavaScript — Comportamentos

### Filtro de Pilares

```javascript
// Lógica de filtragem dos cards por pilar
// Cada card deve ter: data-pilar="biblica|sistematica|pratica|familia"
// "Todos os pilares" → mostra todos os cards
// Filtro ativo → apenas cards com data-pilar correspondente ficam visíveis
// Botão ativo recebe classe .active (fundo dourado, texto preto)
```

### Scroll Suave

```css
html {
  scroll-behavior: smooth;
}
```

### Links da Nav

```html
<!-- Cada link aponta para o id da seção correspondente -->
<a href="#hero">Principal</a>
<a href="#sobre">Quem sou?</a>
<a href="#pilares">Sobre o curso</a>
```

---

## Conteúdo Pendente (Placeholder até cliente fornecer)

- [ ] Foto profissional do Pr. Antônio Siqueira
- [ ] Retrato de Herman Witsius em alta resolução
- [ ] Nomes reais dos 3 cursos disponíveis
- [ ] Descrições de cada curso (máximo 2 linhas)
- [ ] Capas/imagens de cada curso
- [ ] Links do Hotmart para cada curso
- [ ] Bio completa do Pr. Antônio
- [ ] Citação favorita do Pr. Antônio

---

## Regras para a IA que for Codar

1. **Nunca use frameworks CSS** (Bootstrap, Tailwind) — CSS puro apenas
2. **Nunca use frameworks JS** (React, Vue) — JavaScript puro apenas
3. **Mantenha a ordem das seções** exatamente como especificado
4. **Use variáveis CSS** definidas no `:root` para todas as cores
5. **Nunca use a cor verde limão** — o botão do WhatsApp é DOURADO (#C9A84C)
6. **Preserve a identidade escura** — não inverta o tema sem instrução explícita
7. **Mobile-first** — comece pelos estilos de 390px e expanda para 1440px
8. **Imagens sem disponibilidade** → use placeholder com fundo #1a1814 e texto indicativo
9. **Ao criar botões** → sempre border-radius: 2px (exceto nav que é 100px)
10. **Ao criar títulos** → sempre Cormorant Garamond com pelo menos uma palavra em itálico dourado

---

## Checklist Final Antes de Entregar

- [ ] Todas as 7 seções presentes e na ordem correta
- [ ] Fontes Google Fonts importadas no `<head>`
- [ ] Variáveis CSS definidas no `:root`
- [ ] Nav sticky funcionando
- [ ] Scroll suave funcionando
- [ ] Filtros de pilares funcionando em JavaScript
- [ ] Botão WhatsApp flutuante presente e dourado
- [ ] Links da nav apontando para os ids corretos
- [ ] Responsivo em 390px e 1440px
- [ ] Nenhum elemento verde limão na página
- [ ] Todos os textos placeholder identificados com comentário `<!-- TODO: substituir -->`
