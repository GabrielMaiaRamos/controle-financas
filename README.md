# Controle Financas

> Aplicacao de controle financeiro pessoal para registrar gastos, entradas e planos.

[![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)]()
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=20232A)]()
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-ESM-F7DF1E?logo=javascript&logoColor=black)]()

## Sobre o projeto

O Controle Financas e uma aplicacao pessoal para acompanhar os movimentos do dinheiro no dia a dia.
O projeto comeca com uma experiencia local simples e evolui em direcao a uma aplicacao financeira completa, com dados persistidos em banco, integracao segura com Open Finance e recursos de inteligencia artificial.

O objetivo e construir uma base consistente de produto e engenharia, com foco em acessibilidade, testes, deploy continuo e evolucao incremental.

## Funcionalidades atuais

- Registrar lancamentos financeiros
- Informar descricao, valor e tipo
- Identificar gastos, entradas e planos
- Exibir os lancamentos em uma lista
- Remover lancamentos
- Persistir dados no navegador com `localStorage`
- Preservar dados antigos salvos na versao anterior
- Usar layout responsivo para telas menores

## Tecnologias

**Implementadas:**

- React
- Vite
- CSS
- JavaScript com ES Modules
- LocalStorage

**Planejadas:**

- TypeScript
- Vitest e Testing Library
- Node.js ou Python com FastAPI
- SQLite e PostgreSQL
- GitHub Actions
- Open Finance por meio de um agregador autorizado
- Inteligencia artificial no backend

## Estrutura do projeto

- `minhas-financas/`: aplicacao React principal
- `minhas-financas/src/`: componentes, estilos e entrada da aplicacao
- `docs/ROADMAP.md`: fases, entregaveis e proximos passos
- `src/`: prototipo inicial em HTML, CSS e JavaScript

## Desenvolvimento local

Entre na pasta da aplicacao React e instale as dependencias:

```bash
cd minhas-financas
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Outros comandos disponiveis:

```bash
npm run lint
npm run build
npm run preview
```

## Direcao do produto

O projeto sera desenvolvido em etapas pequenas e verificaveis:

1. Consolidar React, componentizacao, TypeScript, testes, acessibilidade e deploy
2. Criar filtros por periodo, calendario e resumos financeiros
3. Adicionar receitas e despesas recorrentes, previsoes e alertas
4. Migrar a persistencia para backend e banco de dados
5. Integrar contas por Open Finance, sem armazenar senhas bancarias
6. Adicionar IA para categorizar transacoes, interpretar lancamentos e gerar insights

Obs: Nenhuma integracao bancaria ou recurso de IA e tratado como implementado antes de existir no codigo.

## Roadmap

O plano completo esta em [docs/ROADMAP.md](docs/ROADMAP.md). A aplicacao esta atualmente na **Fase 3 - Modernizacao com Framework e Qualidade**.
