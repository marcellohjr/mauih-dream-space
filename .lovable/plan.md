# Plano: Carrossel em "Nossos Projetos" + Projeto HAVIK

## 1. Adicionar projeto "HAVIK" (categoria "Empresarial")

- Copiar as 10 imagens enviadas para `src/assets/`:
  - `havik-1.webp` ... `havik-10.webp` (a partir de `user-uploads://1.webp`, `2.webp`, `3.webp`, `7.webp`, `8.webp`, `9.webp`, `10.webp`, `11.webp`, `12.webp`, `13.webp`)
- Importar todas em `src/components/PortfolioSection.tsx`.
- Adicionar novo item no array `projects`:
  ```ts
  {
    id: 6,
    title: "Havik",
    category: "Empresarial",
    description: "Escritório corporativo sofisticado, com ambientes funcionais e design refinado.",
    coverImage: havik1,
    galleryImages: [havik1, ..., havik10],
  }
  ```
- A galeria do modal já suporta múltiplas imagens (embla carousel + thumbnails), então funcionará automaticamente.

## 2. Transformar o grid de cards em carrossel

Substituir o grid atual (`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3`) por um carrossel horizontal usando o `embla-carousel-react` (já instalado).

Estrutura:
- Container Embla com `{ loop: true, align: "start" }`.
- Cada slide ocupa:
  - `basis-full` no mobile
  - `sm:basis-1/2` no tablet
  - `lg:basis-1/3` no desktop
- Espaçamento entre slides via padding lateral (`pl-6`) + margin negativa no track.
- Botões "anterior/próximo" arredondados (mesmo estilo do modal) posicionados nas laterais, sobrepondo levemente o carrossel em telas grandes.
- Indicadores de paginação (dots) abaixo do carrossel, refletindo o slide ativo.
- Manter as animações de hover/sombras nos cards.
- Manter o clique no card abrindo o `ProjectModal` (sem alterar o modal).

Acessibilidade:
- Botões com `aria-label` ("Projeto anterior" / "Próximo projeto").
- Suporte a teclado (Embla já trata via foco).
- `aria-roledescription="carousel"` no wrapper.

Responsivo:
- Mobile: 1 card por vista, botões discretos sobre as bordas.
- Tablet: 2 por vista.
- Desktop: 3 por vista.

## 3. Arquivos afetados

- `src/components/PortfolioSection.tsx` (refator do grid → carrossel + novo projeto + imports).
- `src/assets/havik-1.webp` ... `havik-10.webp` (novos).

Sem mudanças no modal, no design system, ou em outras seções.
