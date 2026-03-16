# Migracao para Bootstrap 5

## Resumo

Este repositorio foi consolidado como base do pacote `@betha-plataforma/theme-bootstrap5`.

O estado atual do projeto cobre:

- migracao estrutural para Bootstrap 5
- empacotamento local da fonte Open Sans dentro do artefato npm
- modernizacao do build Sass com `@use` e `@forward`
- ajustes de componentes e da demo para o markup esperado no Bootstrap 5

## O que foi alterado

### Metadados, build e distribuicao

- `package.json` foi atualizado para `@betha-plataforma/theme-bootstrap5`
- os artefatos de saida passaram para:
  - `dist/theme-bootstrap5.css`
  - `dist/theme-bootstrap5.min.css`
- o pacote publica apenas `dist/` via campo `files`
- o build passou a exigir Node `>=14.0.0`
- a versao de `sass` foi fixada em `1.98.0`
- os links de `repository`, `bugs` e `homepage` foram ajustados para o repositorio `theme-bootstrap5`
- o workflow de release em `.github/workflows/main.yml` foi atualizado para `actions/checkout@v4`, `actions/setup-node@v4` e Node `20.x`

### Fontes e assets

- a dependencia da Open Sans via `cdn.betha.cloud` foi removida do CSS distribuido
- `src/components/fonts/fonts.scss` agora usa caminhos relativos para `./fonts/`
- o pacote distribuido inclui apenas 4 arquivos `woff2`, que sao as variacoes usadas pelo theme:
  - `OpenSans-Light.woff2`
  - `OpenSans-Regular.woff2`
  - `OpenSans-Semibold.woff2`
  - `OpenSans-Bold.woff2`
- a referencia de `SemiBold` foi ajustada para `Semibold`, alinhando o nome do arquivo em ambientes case-sensitive
- o script `scripts/copy-fonts.js` passou a copiar essas fontes para `dist/fonts/` antes de `start` e `build`
- o contrato de distribuicao do theme passou a exigir a publicacao conjunta do CSS e da pasta `fonts/`

### Documentacao e demo

- `README.md` foi atualizado para o contexto de Bootstrap 5
- o `README.md` agora destaca explicitamente que a migracao de Bootstrap 4 para 5 possui breaking changes e referencia a documentacao oficial:
  - <https://getbootstrap.com/docs/5.3/migration/>
- `index.html` foi migrado de Bootstrap 4 para Bootstrap 5
- a demo agora usa `bootstrap.bundle.min.js`
- dependencias de `jquery` e `popper.js` foram removidas
- atributos `data-toggle`, `data-target` e `data-dismiss` foram substituidos por `data-bs-toggle`, `data-bs-target` e `data-bs-dismiss`
- a demo foi atualizada para usar markup compativel com Bootstrap 5, incluindo:
  - `form-label`
  - `input-group-text`
  - `form-switch`
  - `btn-close`
- classes e patterns legados do Bootstrap 4 foram removidos da demo, incluindo:
  - `input-group-append` e `input-group-prepend`
  - `custom-control` e `custom-switch`
  - `.close`
  - utilitarios `ml-*` e `mr-*`
  - layout `media` / `media-body`

### Modernizacao do Sass

- a base Sass foi migrada de `@import` para `@use` e `@forward`
- `src/_config.scss` passou a centralizar a exportacao dos modulos internos
- funcoes e mixins internos foram atualizados para os modulos modernos do Sass:
  - `sass:color`
  - `sass:map`
  - `sass:list`
  - `sass:string`
- funcoes de cor legadas foram substituidas por `color.adjust(...)`
- os warnings de deprecacao do Sass foram removidos do build validado com a stack atual do projeto

### Ajustes de SCSS para compatibilidade com Bootstrap 5

Os componentes abaixo foram adaptados para o markup e comportamento do Bootstrap 5:

- `src/components/form/form.scss`
  - suporte a `form-select`
  - suporte a `input-group-text`
  - suporte a `is-valid`, `is-invalid`, `valid-feedback` e `invalid-feedback`
  - compatibilidade com `visually-hidden`
  - labels alinhados ao contrato de `.form-label`
- `src/components/switch/switch.scss`
  - migrado para `form-switch`
  - visual ajustado com trilha fina e thumb maior, alinhado ao comportamento esperado na demo
- `src/components/checkbox/checkbox.scss`
  - ajuste para nao conflitar com switches do Bootstrap 5
- `src/components/badge/badge.scss`
  - suporte a classes de badge/background do Bootstrap 5
- `src/components/popover/popover.scss`
  - adaptado para a estrutura de popover do Bootstrap 5
- `src/components/dropdown/dropdown.scss`
  - ajustes em divisores e estados desabilitados
- `src/components/alert/alert.scss`
  - suporte a `btn-close`
- `src/components/helpers/helpers.scss`
  - utilitarios posicionais atualizados para `start-0` e `end-0`
- `src/components/table/table.scss`
  - cor da borda inferior das linhas alinhada ao restante das bordas da tabela

## Interfaces publicas resultantes

- o CSS final referencia fontes locais com `url("./fonts/...")`
- o tarball npm inclui `dist/fonts/*.woff2`
- o pacote deixa de depender de runtime externo para carregar Open Sans
- o theme passa a assumir Bootstrap 5 como baseline oficial de markup e comportamento

## Validacao executada

Os comandos abaixo foram executados com sucesso durante a consolidacao da migracao:

```sh
yarn build
npm pack --dry-run
git diff --check
```

O build gera:

- `dist/theme-bootstrap5.css`
- `dist/theme-bootstrap5.min.css`
- `dist/fonts/OpenSans-Light.woff2`
- `dist/fonts/OpenSans-Regular.woff2`
- `dist/fonts/OpenSans-Semibold.woff2`
- `dist/fonts/OpenSans-Bold.woff2`

## Observacoes

- o suporte oficial do pacote esta focado em distribuicao via `npm` e `yarn`
- a demo ainda usa `unpkg` para carregar o Bootstrap de referencia, mas isso nao e o caminho oficial de distribuicao do theme
- consumidores que ainda estejam em markup de Bootstrap 4 devem revisar a migracao antes da adocao do theme