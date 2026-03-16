# Como contribuir

Este projeto contem o tema `@betha-plataforma/theme-bootstrap5`, voltado para Bootstrap 5 e distribuido como CSS compilado em `dist/`.

## Requisitos

- [Node.js](https://nodejs.org/en/) `v20.0.0` ou superior
- [Yarn Classic](https://classic.yarnpkg.com/en/) `v1.22` ou superior

## Setup local

Instale as dependencias do projeto:

```sh
yarn
```

## Estrutura relevante

- `src/all.scss`: ponto de entrada principal do tema
- `src/global.scss`: imports globais do tema, incluindo fontes
- `src/components/`: estilos dos componentes suportados
- `src/assets/fonts/woff2/`: arquivos-fonte da Open Sans usados na distribuicao
- `scripts/copy-fonts.js`: copia as fontes necessarias para `dist/fonts/`
- `dist/`: artefatos gerados no build e publicados no pacote npm

## Comandos

### Desenvolvimento

```sh
yarn start
```

Esse comando:

- copia as fontes para `dist/fonts/`
- inicia o watch do Sass
- recompila `dist/theme-bootstrap5.css` a cada alteracao em `src/`

### Build

```sh
yarn build
```

Esse comando:

- copia as fontes para `dist/fonts/`
- gera `dist/theme-bootstrap5.min.css`
- gera `dist/theme-bootstrap5.css`

### Verificacao do pacote

```sh
npm pack --dry-run
```

Use esse comando quando a mudanca afetar distribuicao, `package.json`, fontes ou artefatos esperados do pacote.

## Diretrizes para contribuicao

- mantenha compatibilidade com Bootstrap 5; nao introduza markup, classes ou utilitarios legados do Bootstrap 4 como contrato oficial do tema
- se a mudanca impactar exemplos, atualize tambem `index.html`
- se a mudanca impactar distribuicao, consumo do pacote ou breaking changes, atualize a documentacao relevante em `README.md` e, quando fizer sentido, em `MIGRATION_BOOTSTRAP5.md`
- ao alterar fontes, preserve o fluxo de copia para `dist/fonts/` e revise `scripts/copy-fonts.js` se o conjunto de arquivos publicados mudar
- prefira o padrao atual do Sass com `@use` e `@forward`; nao reintroduza `@import`
- evite acoplamento do CSS distribuido a assets externos em runtime quando houver alternativa local no pacote

## Validacao antes de abrir a mudanca

Rode, no minimo:

```sh
yarn build
git diff --check
```

Quando a mudanca afetar empacotamento ou arquivos publicados, rode tambem:

```sh
npm pack --dry-run
```

Tambem e recomendado validar visualmente os componentes alterados na demo local em `index.html`, com atencao especial para estados interativos, responsividade e regressao visual.

## Referencias

- [Sass documentation](https://sass-lang.com/documentation)
- [Bootstrap 5 migration guide](https://getbootstrap.com/docs/5.3/migration/)
