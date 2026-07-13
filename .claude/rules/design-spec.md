---
paths:
  - "*.html"
  - "*.css"
  - "*.js"
---

# Design Spec — Landing Page CET Herman Witsius

<!-- Referência detalhada de layout. Carrega só ao editar index.html / style.css / script.js. -->
<!-- As regras invioláveis e os tokens de identidade estão em CLAUDE.md (sempre em contexto). -->

## Ordem fixa das seções

`<nav>` → `#hero` → `#pilares` → `#sobre` → `#diferenciais` → `#cta` → `<footer>`

Além do botão flutuante de WhatsApp (fixo, fora do fluxo).

---

## 1. `<nav>` — Navegação

```
Fundo: #F5F0E8 · Borda inferior: 1px solid #ddd · position: sticky, top: 0, z-index: 100

[Esquerda] foto Witsius 40x40px (border-radius: 6px)
           + "Centro de Estudos Teológicos" / "Herman Witsius"
[Centro]   links: Principal · Quem sou? · Sobre o curso
           cor #1B3A2D, opacidade 70%, font-size 12px
[Direita]  botão "Matricule-se" — fundo #0D0D0D, cor #fff, border-radius: 100px
```

Links da nav apontam para os ids: `#hero` (Principal), `#sobre` (Quem sou?), `#pilares` (Sobre o curso).

## 2. `<section id="hero">` — Hero

```
Fundo: #0D0B08 · Layout: grid 2 colunas (1.4fr | 1fr)

[Coluna esquerda]
  - Tag "TEOLOGIA COM PIEDADE" — uppercase, dourado, letter-spacing 3px
    ::after { width: 100%; height: 1px; background: #C9A84C }
  - H1 "Teologia que une verdade e vida" — Cormorant Garamond 52px, weight 300
    "verdade" → itálico + #C9A84C
  - Divider 40px × 1px #C9A84C, margin: 20px 0
  - Subtítulo Raleway 13px weight 300, opacidade 50%, max-width 360px
  - Citação "A verdadeira teologia sempre conduz à transformação da vida."
    Cormorant Garamond itálico 12px, opacidade 50%
  - Botão primário "Ver os cursos" — fundo #C9A84C, cor #0D0B08, padding 12px 28px,
    border-radius 2px, uppercase, letter-spacing 2px, Raleway 500
  - Botão ghost "Conheça o centro" — branco sublinhado, opacidade 35%

[Coluna direita]
  - Retrato de Herman Witsius
  - Badge "Séc. XVII · Teólogo Reformado" — top 20px, right 20px,
    borda dourada, 9px, uppercase, opacidade 70%
  - Textura de grid de linhas ao fundo

[Faixa inferior] fundo #1B3A2D, padding 10px — 4 itens separados por pontos dourados:
  "4 pilares de formação" · "100% online" · "Tradição reformada" · "Acesso imediato"
  11px, Raleway, cor #F5F0E8, opacidade 85%
```

## 3. `<section id="pilares">` — Pilares com filtro

```
Fundo: #0D0B08 · Tag "ESTRUTURA ACADÊMICA" · Título "O que você vai aprender na CET WITSUS?"

[Filtros] 5 botões: Todos os pilares | Teologia Bíblica | Teologia Sistemática
          | Teologia Prática | Teologia da Família
  Ativo:   fundo #C9A84C, cor #0D0B08, classe .active
  Inativo: borda 1px #C9A84C33, branco opacidade 45%, fundo transparente
  border-radius 2px, letter-spacing 1px, uppercase, Raleway

[Grid] 4 colunas, gap 16px · cada card: data-pilar="biblica|sistematica|pratica|familia"
  Card: [badge pilar top-left] · [número romano Cormorant 40px itálico dourado op.40%]
        [placeholder imagem] · PILAR X (uppercase dourado) · Título Cormorant com <em>
        · Descrição Raleway 11px · divider · "Saiba mais →"
```

Conteúdo dos pilares:

- **I — Teologia Bíblica:** "Revelação progressiva nas Escrituras dentro do contexto histórico e redentivo."
- **II — Teologia Sistemática:** "Doutrinas bíblicas organizadas em um sistema coerente e estruturado."
- **III — Teologia Prática:** "Verdade bíblica aplicada ao ministério, à igreja e ao cristão comum."
- **IV — Teologia da Família:** "Aplicação da teologia à restauração e fortalecimento das famílias cristãs."

## 4. `<section id="sobre">` — Pr. Antônio Siqueira

```
Fundo: #0D0B08 · grid 2 colunas (1fr | 1.4fr), align-items: center

[Esquerda]
  - Frame foto 220×280px, borda 1px #C9A84C33, border-radius 4px
    cantos decorativos via pseudo-elementos (16×16px, borda dourada 2px)
  - Nome "Pr. Antônio Siqueira" — Cormorant Garamond 18px
  - Cargo "IDEALIZADOR · CET WITSIUS" — uppercase, dourado, opacidade 60%
  - Botões [INSTAGRAM] [WHATSAPP] — borda 1px #C9A84C33, dourado, border-radius 2px, uppercase

[Direita]
  - Tag "QUEM ESTÁ POR TRÁS" com linha decorativa antes
  - Título "Pr. Antônio Siqueira" — "Antônio" itálico dourado, Cormorant 36px weight 300
  - Cargo "IDEALIZADOR DO CENTRO DE ESTUDOS TEOLÓGICOS HERMAN WITSIUS"
    uppercase, opacidade 30%, Raleway
  - Divider 40px × 1px dourado
  - Parágrafo 1: idealizador e fundador do CET Witsius
  - Parágrafo 2: estudioso profundo da obra de Herman Witsius
    ("Herman Witsius" em destaque dourado nos dois parágrafos)
  - Citação: border-left 2px solid #C9A84C44, background #C9A84C08,
    frase itálico Cormorant 16px opacidade 60%
  - Badges [Teólogo Reformado] [Estudioso de Witsius] [Pastor] [Educador]
    background #C9A84C12, borda 1px #C9A84C33, border-radius 2px
```

## 5. `<section id="diferenciais">` — Diferenciais

```
Fundo: #F5F0E8 (contraste claro) · Tag "POR QUE NOS ESCOLHER"
Título "Nossos diferenciais" — Cormorant Garamond, cor #1B3A2D
Grid: 3 colunas separadas por linha #1B3A2D22

Cada card: número grande (01/02/03) Cormorant itálico dourado op.50%
  · Título Cormorant 20px cor #1B3A2D · divider 32px × 1px dourado
  · Descrição Raleway 12px weight 300 cor #1B3A2D op.50%
```

- **01 — Profundidade acadêmica:** "Cursos baseados em estudo bíblico rigoroso e na tradição teológica reformada de Herman Witsius."
- **02 — Formação prática:** "Aplicação da teologia à vida ministerial, espiritual e familiar — não apenas teoria, mas transformação real."
- **03 — Conhecimento e piedade:** "Inspirados na tradição reformada que une ortodoxia e devoção. Teologia que conduz à vida."

## 6. `<section id="cta">` — CTA Final

```
Fundo: #0D0B08 · centralizado

Decoração: letra "W" position absolute (left e right), Cormorant 200px itálico, #C9A84C, opacidade 4%
Tag "COMECE HOJE"
Título "Teologia que une verdade e vida." — Cormorant 48px weight 300, "verdade" itálico #C9A84C
Subtítulo: "Junte-se ao Centro de Estudos Teológicos Herman Witsius e aprofunde sua fé
  com rigor bíblico e piedade cristã." — Raleway 13px weight 300, opacidade 35%, max-width 420px
Botão primário "MATRICULE-SE AGORA" — fundo #C9A84C, cor #0D0B08, padding 14px 36px, border-radius 2px
Botão secundário "FALAR NO WHATSAPP" — borda 1px #C9A84C33, cor #C9A84C, opacidade 60%
Nota "Acesso imediato · 100% Online · Certificado incluso" — 11px, opacidade 20%

[Valores finais] borda superior dourada — I Verdade | II Doutrina | III Vida | IV Piedade
  Numeral Cormorant itálico dourado op.50% · Label Raleway uppercase branco op.25%
```

## 7. `<footer>` — Footer

```
Fundo: #080806 · Borda topo: 1px solid #C9A84C22
Grid superior: 3 colunas (1.5fr | 1fr | 1fr)

[Brand]     ícone ✦ dourado + "Centro de Estudos Teológicos / Herman Witsius"
            Descrição "Formação teológica sólida baseada na tradição reformada. Teologia com Piedade."
            Raleway 11px, #F5F0E8, opacidade 25%
[Navegação] label "NAVEGAÇÃO" (uppercase dourado op.60%) — Principal · Quem sou · Cursos · Matricule-se
            Raleway 12px, #F5F0E8, opacidade 30%
[Contato]   label "CONTATO" — WA / IG / IG / Email (ver dados em CLAUDE.md)

Rodapé inferior (border-top 1px #C9A84C15):
  [Esq] © 2025 CET Herman Witsius · Todos os direitos reservados
  [Centro] "Teologia com Piedade" — itálico dourado opacidade 40%
  [Dir] ícones IG e WA — 28×28px, borda dourada, border-radius 2px
```

## Botão flutuante WhatsApp

```css
position: fixed; bottom: 24px; right: 24px;
width: 56px; height: 56px; border-radius: 50%;
background: #C9A84C;  /* DOURADO — nunca verde */
z-index: 999;
/* href="https://wa.me/5562981953752" target="_blank" */
```

## Comportamentos JavaScript (`script.js`)

- **Filtro de pilares:** cada card tem `data-pilar="biblica|sistematica|pratica|familia"`.
  "Todos os pilares" mostra todos; um filtro ativo mostra só os cards correspondentes.
  O botão clicado recebe `.active` (fundo dourado, texto preto).
- **Scroll suave:** `html { scroll-behavior: smooth }`.
- **Links da nav:** cada `<a href="#id">` aponta para a seção correspondente.

## Checklist de QA antes de entregar

- [ ] 7 seções presentes e na ordem correta
- [ ] Google Fonts importadas no `<head>`
- [ ] Variáveis CSS no `:root`
- [ ] Nav sticky e scroll suave funcionando
- [ ] Filtro de pilares funcionando em JS
- [ ] Botão flutuante de WhatsApp presente e dourado
- [ ] Links da nav apontando para os ids corretos
- [ ] Responsivo em 390px e 1440px
- [ ] Nenhum elemento verde/verde-limão na página
- [ ] Placeholders marcados com `<!-- TODO: substituir -->`
