# TaskFlow

To-do list desenvolvida como meu primeiro projeto no estudo de desenvolvimento full-stack. O foco aqui foi praticar manipulação do DOM, organização de CSS com variáveis (incluindo modo escuro) e lógica de estado em JavaScript puro, sem frameworks.

## Demonstração

🔗 Live:https://VictorFiuza01.github.io/TaskFlow/

## Funcionalidades

- Adicionar novas tarefas via formulário
- Marcar tarefas como concluídas (checkbox customizado)
- Remover tarefas da lista
- Filtrar por **Todas**, **Pendentes** e **Concluídas**, com animação de seleção no botão ativo
- Barras de progresso visual mostrando porcentagem de tarefas pendentes e concluídas
- Contadores de tarefas totais, concluídas e pendentes
- Modo escuro (dark mode) com troca de tema via CSS Custom Properties
- Validação de entrada: bloqueia textos vazios e limita o tamanho da tarefa
- Feedback visual ao adicionar tarefa (mensagem "TAREFA CRIADA!" com fade-in/out)
- Layout responsivo (grid de 1 ou 2 colunas dependendo da largura da tela)

## Tecnologias utilizadas

- **HTML5** — estrutura semântica (`nav`, `main`, `section`, `footer`, `template`)
- **CSS3** — Custom Properties (variáveis), Flexbox, Grid, animações com `@keyframes` e `transition`
- **JavaScript (Vanilla)** — manipulação do DOM, `template` + `cloneNode` para renderização de cards, eventos, filtros e cálculo de progresso

## Como executar localmente

Esse projeto não depende de build, servidor ou instalação de pacotes. Basta:

1. Clonar o repositório:
   ```bash
   git clone https://github.com/Flametower01/TaskFlow.git
   ```
2. Entrar na pasta do projeto:
   ```bash
   cd taskflow
   ```
3. Abrir o arquivo `index.html` diretamente no navegador (ou usar a extensão **Live Server** do VS Code para um ambiente com recarregamento automático).

## Estrutura do projeto

```
taskflow/
├── index.html
├── style.css
├── script.js
├── Img/
│   └── Icons/
│       ├── check.png
│       └── delete.png
└── README.md
└── .gitignore

```

## O que pratiquei neste projeto

- Manipulação de elementos `<template>` para gerar HTML dinâmico de forma performática
- Gerenciamento de estado simples em um array, sem nenhuma biblioteca
- Lógica de filtragem condicional reaproveitando os mesmos dados
- Cálculo de porcentagens e atualização visual proporcional (barras de progresso)
- Organização de tema (claro/escuro) inteiramente via variáveis CSS

## Próximos passos

- [ ] Persistir as tarefas com `localStorage` (hoje os dados são perdidos ao recarregar a página)
- [ ] Implementar edição de tarefa usando o campo de texto já presente no card
- [ ] Adicionar testes básicos de funções (ex: `contabilizarTarefas`)
- [ ] Migrar nomenclatura de variáveis/funções para um padrão único (atualmente mistura português e inglês)

## Autor

Victor Fiuza Moreira

---

Projeto de estudo — parte do aprendizado em desenvolvimento full-stack (HTML, CSS e JavaScript).
