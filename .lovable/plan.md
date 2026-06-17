## Atualizar o ID do Instagram

Vou atualizar o secret `INSTAGRAM_USER_ID` com o valor correto `17841460109869367` (Instagram Business Account ID) e validar o feed.

### Passos

1. Abrir o formulário seguro para atualizar o secret `INSTAGRAM_USER_ID` com o novo valor `17841460109869367`.
2. Testar a edge function `instagram-feed` via curl para confirmar que retorna os posts reais (sem o erro `(#100) Tried accessing nonexisting field (media)`).
3. Confirmar que a seção Instagram no preview passa a exibir os posts reais em vez das imagens de fallback.

Nenhuma alteração de código é necessária — apenas a troca do valor do secret.