# @betha-plataforma/theme-bootstrap5

Tema do [Design System Betha](https://docs.plataforma.betha.cloud/) para [Bootstrap 5](https://getbootstrap.com/docs/5.3/)

> [!WARNING]
> Este theme foi construído para Bootstrap 5 e não é compatível automaticamente com markup, classes e comportamentos do Bootstrap 4. Em cenários de migração de BS4 para BS5, revise os breaking changes antes da adoção e ajuste os componentes consumidores conforme a documentação oficial: <https://getbootstrap.com/docs/5.3/migration/>

## Instalando

### NPM

```shell
npm install @betha-plataforma/theme-bootstrap5
```

### Yarn

```shell
yarn add @betha-plataforma/theme-bootstrap5
```

## Configurando

Publique o arquivo `theme-bootstrap5.css` junto da pasta `fonts/` gerada dentro de `dist/`. O CSS referencia a Open Sans com caminhos relativos como `./fonts/OpenSans-Regular.woff2`.

```html
<html>
  <head>
    <!-- Bootstrap 5 e Material Design Icons -->
    <link rel="stylesheet" href="/assets/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/mdi/materialdesignicons.min.css">

    <!-- Framework Design -->
    <link rel="stylesheet" href="/assets/theme-bootstrap5/theme-bootstrap5.css">
  </head>
  <!-- ... -->
</html>
```

Ao distribuir o theme, mantenha esta estrutura:

```text
assets/
  theme-bootstrap5/
    theme-bootstrap5.css
    fonts/
      OpenSans-Bold.woff2
      OpenSans-Light.woff2
      OpenSans-Regular.woff2
      OpenSans-Semibold.woff2
```

## Exemplos

Exemplos podem ser encontrados em [betha-plataforma/exemplos](https://github.com/betha-plataforma/exemplos)

## Componentes

Os componentes suportados, com base na especificação do Design System, são:

* Abas
* Alerta
* Badge
* Barra de rolagem (somente para navegadores com suporte a webkit)
* Botão
* Breadcrumbs
* Card
* Checkbox
* Dropdown
* Input
* Link
* Listagem
* Loader
* Modal
* Paginação
* Popover
* Radio
* Switch
* Tag
