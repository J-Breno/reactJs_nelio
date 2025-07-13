# ReactJs

## Criando projeto ReactJs usando Vite

```
yarn create vite [nome-do-projeto] --template react-ts
```

## Baixar as dependências do projeto

```
yarn
```

## Componentes react

Um componente react é uma função, ele possui dados, comportamentos e representação visual

## Props

Props podem ser entendidas como parâmetos do componente React.


## React router

### Instalação

```
yarn add react-router-dom@6.4.1 @types/react-router-dom@5.3.3
```

## React hooks

são funções especiais que se comportam em conformidade com o ciclo de vida do React.
Hooks são como "ganchos" que você pode usar dentro das suas funções no React pra adicionar comportamentos especiai;
Hooks são ferramentas que o React dá para você fazer coisas dinâmicas usando funções.

### useState

Guarda uma informação (ou “estado”) dentro do seu componente. Tipo: o nome que o usuário digitou,
se o menu está aberto ou fechado, quantos cliques ele deu, etc.
É um React hook que permite armazenar estado dentro de um componente;
O componente é capaz de observar mudanças neste estado, e dai reagir a essas mudanças.

### useEffect

Executa uma função depois que o componente aparece na tela ou quando algo muda.
“Quando o componente aparecer, ou quando essa variável mudar, execute essa tarefa aqui!”
Permite executar uma função no momento da criação do componente. Quando um estado do componente muda.
O useEffect pode observar e reagir a mudanças de estado no componente.

### Instalação do axios

yarn add axios@0.27.2
