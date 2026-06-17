# Integração com Instagram na seção "Acompanhe nossos projetos"

## Resposta curta

Sim, é possível — mas o Instagram é **bem mais restritivo** que o Google Maps. Não existe API pública aberta: o Instagram exige autenticação OAuth do dono da conta, e a conta precisa ser **Business** ou **Creator** (não pode ser conta pessoal).

## Opções disponíveis

### Opção A — Instagram Graph API (oficial, gratuita)
**Requisitos:**
- Conta do Instagram da Mauih precisa ser **Business** ou **Creator** (se for pessoal, dá pra converter de graça em 1 minuto nas configurações do app)
- Conta vinculada a uma **Página do Facebook** (obrigatório pelo Instagram, mesmo que vocês não usem o FB)
- Criar um App no [Meta for Developers](https://developers.facebook.com) (gratuito)
- Gerar um **Long-Lived Access Token** (válido por 60 dias, renovável automaticamente)

**Como ficaria:**
- Secret no Lovable Cloud: `INSTAGRAM_ACCESS_TOKEN` + `INSTAGRAM_USER_ID`
- Edge function `instagram-feed` que busca os últimos 9 posts (foto, caption, link, data)
- Frontend usa React Query (cache 1h) e mostra grid 3x3 com os posts reais, mantendo o design atual
- Job opcional de cron para renovar o token a cada 50 dias

**Tempo de setup do usuário:** ~15-20 minutos no Meta Developers

### Opção B — Widget de terceiro (mais rápido, pago acima de uso básico)
Serviços como **Elfsight**, **EmbedSocial**, **SnapWidget**, **Behold.so**:
- Você só conecta sua conta uma vez no painel do serviço
- Eles dão um `<script>` ou `<iframe>` para colar no site
- Plano grátis costuma ser limitado (1 widget, marca d'água, X views/mês)
- Comecei a perder controle visual (depende do CSS deles)

**Tempo de setup:** ~5 minutos

### Opção C — Manual (como está hoje)
Você envia as fotos novas quando quiser atualizar. Custo zero, manutenção manual.

## Minha recomendação

**Opção A (API oficial)** se você quer algo que funcione de verdade no longo prazo, sem mensalidade, sem marca d'água, e mantendo o visual da landing 100% sob seu controle. O setup inicial leva ~20 min mas depois é automático.

**Opção B** se você quer ligado hoje à noite e não se importa com marca d'água/limitações do plano grátis.

## Próximo passo

Me diz qual opção prefere. Se for a **A**, preciso confirmar:
1. A conta @mauih_arquitetura no Instagram já é **Business/Creator** ou ainda é pessoal?
2. Existe uma Página do Facebook vinculada?

Se você não souber, posso te passar o passo a passo para verificar/configurar antes de irmos para a parte técnica.