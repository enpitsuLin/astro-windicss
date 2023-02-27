# Astro Windicss Integration

## Installation

install with npm:

```sh
npm install astro-windicss -D
# use pnpm 
pnpm add astro-windicss -D
# use yarn
yarn add astro-windicss -D
```

## Usage

add to the integrations in your `astro.config.*`

```js
import windicss from 'astro-windicss'

export default defineConfig({
  //...
  integrations: [windicss()]
})
```

then, restart the dev server. windicss's utility classes should be ready to go right away.Head to the [windicss docs](https://windicss.org/) to learn how to use.

## Configuration

There are one way recommended is use config file, more detail: [configuration docs](https://windicss.org/guide/configuration.html)

### integration configuration

if you want import windicss whenever you like instead of auto import windicss, your can disabled it.

```javascript
//...
integrations: [windicss({ astro: { autoImport: false } })]
```
