# Integração com Google Meu Negócio (Google Business Profile API)

## ⚠️ Aviso importante antes de começarmos

A API oficial do Google Business Profile **não é uma API pública aberta**. Para usá-la, é necessário:

1. **Solicitar acesso ao Google** através de um formulário oficial: https://developers.google.com/my-business/content/prereqs
2. **Aprovação manual do Google** — o processo costuma levar **de algumas semanas a meses**, e pode ser negado.
3. Após aprovado, criar credenciais OAuth 2.0 no Google Cloud Console.
4. Apenas o **proprietário verificado** do perfil consegue acessar via API.

Se você ainda não tem essa aprovação, recomendo fortemente uma das alternativas (scraping via Firecrawl, widget de terceiros como Elfsight/EmbedSocial, ou atualização manual). Posso configurar qualquer uma delas em minutos, enquanto a API oficial pode levar semanas só para ter acesso.

---

## Caso queira seguir mesmo assim com a API oficial, o plano é:

### 1. Pré-requisitos (você precisa fornecer)
- Aprovação do Google para acesso à Business Profile API
- `Client ID` e `Client Secret` do OAuth (Google Cloud Console)
- `Refresh Token` gerado uma única vez via OAuth Playground (autorizando sua conta do Meu Negócio)
- `Account ID` e `Location ID` do seu perfil

### 2. Backend (Lovable Cloud + Edge Function)
- Ativar Lovable Cloud (banco + funções serverless)
- Criar tabela `google_reviews` para fazer cache dos depoimentos (evita atingir limite de chamadas do Google)
  - Campos: `id`, `reviewer_name`, `reviewer_photo`, `star_rating`, `comment`, `create_time`, `synced_at`
  - RLS: leitura pública (anon SELECT), escrita só pelo `service_role`
- Edge Function `sync-google-reviews`:
  - Usa o `refresh_token` para obter um `access_token`
  - Chama `GET https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews`
  - Salva/atualiza os reviews no banco
  - Pode ser disparada manualmente ou via cron
- Secrets armazenados no Lovable Cloud: `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET`, `GOOGLE_REFRESH_TOKEN`, `GOOGLE_ACCOUNT_ID`, `GOOGLE_LOCATION_ID`

### 3. Frontend (`TestimonialsSection.tsx`)
- Substituir o array estático por um `useQuery` (TanStack Query) que lê da tabela `google_reviews`
- Filtrar para mostrar apenas reviews com 4-5 estrelas e que tenham comentário
- Manter o design atual (cards escuros sobre fundo marrom, fonte serif, aspas decorativas)
- Mostrar nome do autor, estrelas, e o texto do review
- Fallback: se a query falhar ou não tiver dados, mostra os depoimentos estáticos atuais
- Loading skeleton enquanto carrega

### 4. Limitações conhecidas
- A API retorna reviews em ordem cronológica, não permite filtrar por estrelas no servidor (filtramos no cliente)
- Quota padrão: ~300 chamadas/dia — por isso o cache no banco é essencial
- Reviews removidos pelo cliente no Google somem na próxima sincronização

---

## Minha recomendação

Como você é uma empresa de arquitetura/interiores buscando rapidez e baixo custo de manutenção, sugiro fortemente o **widget Elfsight Google Reviews** ou similar — instalação em 5 minutos, sincronização automática, sem espera por aprovação do Google e sem código backend. Quer que eu mostre como ficaria com um widget em vez da API oficial?