
---

# Roadmap — Controle Financas

Este documento descreve a evolução planejada do projeto, dividida em fases
Cada fase representa um bloco de aprendizado e um entregável concreto.

## Praticas Transversais — Desde Agora
- [ ] Usar branches curtas para cada funcionalidade
- [ ] Registrar mudancas em commits pequenos e claros
- [ ] Abrir issues para tarefas e bugs
- [ ] Usar pull requests para revisar mudancas importantes

## Fase 1 — Fundamentos Web (Concluida)
**Objetivo:** Dominar a base do desenvolvimento web.
- [x] Estrutura HTML semântica
- [x] Estilização com CSS
- [x] Interatividade com JavaScript
- [x] Responsividade (mobile-first)

**Entregável:** Página funcional e responsiva.

## Fase 2 — Interatividade e Persistencia (Concluida)
**Objetivo:** Tornar a aplicação dinâmica.
- [ ] Manipulação avançada do DOM
- [x] Eventos e formularios
- [x] LocalStorage para persistir lancamentos
- [ ] Filtros e busca

**Entregavel:** Aplicacao que salva e recupera lancamentos localmente.

## Fase 3 — Modernizacao com Framework e Qualidade (Atual)
**Objetivo:** Consolidar a base React e publicar uma primeira versao utilizavel.
- [x] Migrar para React
- [x] Gerenciamento de estado
- [ ] Componentizacao
- [ ] Migrar o projeto para TypeScript
- [ ] Testes com Vitest e Testing Library
- [ ] Revisao de acessibilidade (a11y)
- [ ] Deploy inicial em Vercel ou Netlify

**Entregável:** Aplicação reescrita com framework, mais escalável.

**Status atual:** A aplicacao ja esta funcionando em React com estado local e persistencia no navegador. O proximo passo e separar a interface em componentes, adicionar testes e publicar uma primeira versao.

## Fase 4A — Tempo e Visao Financeira
**Objetivo:** Organizar os lancamentos por periodo e facilitar a leitura do dinheiro.
- [ ] Filtros por mes, trimestre e ano
- [ ] Filtro por intervalo de datas personalizado
- [ ] Calendario com gastos, entradas e planos por dia
- [ ] Resumo mensal de entradas, gastos e saldo
- [ ] Agregacoes por categoria e periodo

**Entregavel:** Visao temporal com filtros, calendario e resumo financeiro.

## Fase 4B — Recorrencias e Planejamento
**Objetivo:** Antecipar compromissos fixos sem criar registros manualmente.
- [ ] Cadastro de receitas e despesas recorrentes
- [ ] Repeticao mensal com dia de vencimento ou recebimento
- [ ] Gerar lancamentos futuros sem duplicar registros
- [ ] Editar, pausar e encerrar recorrencias
- [ ] Alertas para contas proximas do vencimento
- [ ] Limites simples por categoria

**Entregavel:** Planejamento de receitas, despesas e compromissos recorrentes.

## Fase 5 — Backend e Banco de Dados
**Objetivo:** Tirar a persistencia do navegador e preparar a aplicacao para multiplos usuarios.
- [ ] API com Node.js ou Python (FastAPI)
- [ ] Banco de dados SQLite para desenvolvimento
- [ ] Migracao para PostgreSQL quando necessario
- [ ] Cadastro e autenticacao de usuario
- [ ] Consumo da API pelo frontend
- [ ] CI/CD com GitHub Actions para lint e build
- [ ] Documentacao de arquitetura e decisoes tecnicas (ADRs)
- [ ] Deploy (Vercel, Railway ou Render)

**Entregavel:** Aplicacao full-stack com dados financeiros persistidos online.

## Fase 6 — Integracao Bancaria com Open Finance
**Objetivo:** Permitir que o usuario importe dados bancarios com autorizacao segura.
- [ ] Escolher um agregador de Open Finance (Pluggy, Belvo ou Quanto)
- [ ] Fluxo de consentimento do usuario
- [ ] Importar contas, saldos e transacoes
- [ ] Sincronizar novos lancamentos sem duplicidade
- [ ] Armazenar tokens somente no backend

**Entregavel:** Contas bancarias conectadas sem armazenar senhas do banco.

## Fase 7 — Inteligencia Artificial
**Objetivo:** Usar IA para reduzir o trabalho manual e gerar insights financeiros.
- [ ] Assistente que interpreta frases como "gastei 42 reais no mercado"
- [ ] Categorizar transacoes automaticamente
- [ ] Identificar gastos recorrentes
- [ ] Gerar resumo mensal de entradas e gastos
- [ ] Sugerir planos de economia
- [ ] Manter a chave da API protegida no backend

**Entregavel:** Assistente financeiro que organiza e explica os dados do usuario.