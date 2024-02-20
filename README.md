Example of how to export a Vue project in library mode, so it can be integrated in any HTML page.

[Example demo](https://fguillen.github.io/VueLibExample/example_integration.html)

## 1. Minimize the main.ts (main.js)

[Commit](https://github.com/fguillen/VueLibExample/commit/bfa754684a546641551a714b95839ef1aa5854eb)

Don't create the App there, and not mount it.
Just import it and export it.

```js
// /src/main.ts
import './assets/main.css'
import App from './App.vue'

export { App }
```

## 2. Adapt your dev index.html

[Commit](https://github.com/fguillen/VueLibExample/commit/6b6899f2dc3aa90e071834af49e7d3e622782f86)

Now the main.ts is very passive so we have to trigger the app creation and mounting it manually in our dev `index.html`. This is also what have to be done when the lib is integrated in another app.


```html
<!-- /index.html -->
<body>
  <div id="app"></div>

  <script type="module">
    import { createApp } from 'vue';
    import { App as VueLibExample } from '/src/main.ts';

    createApp(VueLibExample).mount('#app');
  </script>
</body>
```

We are using an alias to avoid conflict with another imported apps.

## 3. The library mode build

[Commit](https://github.com/fguillen/VueLibExample/commit/d7c96aa26658ab3ed40ce92813c1fddebce7d12c)

The main concept is **"build your app using library mode"**. Here is the [documentation to do this with Vite](https://vitejs.dev/guide/build#library-mode).

There is described how to set up your `vite.config.js` and `package.json`.

In summary this is how my `vite.config.js` looks like at the end:

```js
// vite.config.js
import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'VueLibExample',
      // the proper extensions will be added
      fileName: 'vue-lib-example',
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
```

I am not sure about the `external: ['vue']`, it may be a good idea to include the whole vue in your library to prevent possible dependencies version problems.

And this is my `package.json`:

```js
{
  "name": "vue-lib-example",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "files": [
    "dist"
  ],
  "main": "./dist/vue-lib-example.umd.cjs",
  "module": "./dist/vue-lib-example.js",
  "exports": {
    ".": {
      "import": "./dist/vue-lib-example.js",
      "require": "./dist/vue-lib-example.umd.cjs"
    }
  },
  "scripts": {
    "dev": "vite",
    "build": "run-p type-check \"build-only {@}\" --",
    "preview": "vite preview",
    "build-only": "vite build",
    "type-check": "vue-tsc --build --force"
  },
  "dependencies": {
    "vue": "^3.4.15"
  },
  "devDependencies": {
    "@tsconfig/node20": "^20.1.2",
    "@types/node": "^20.11.10",
    "@vitejs/plugin-vue": "^5.0.3",
    "@vue/tsconfig": "^0.5.1",
    "npm-run-all2": "^6.1.1",
    "typescript": "~5.3.0",
    "vite": "^5.0.11",
    "vue-tsc": "^1.8.27"
  }
}
```

We can build our lib:

```bash
> yarn build
yarn run v1.22.21
$ run-p type-check "build-only {@}" --
$ vite build
$ vue-tsc --build --force
vite v5.1.3 building for production...
✓ 10 modules transformed.
dist/style.css  2.65 kB │ gzip: 0.94 kB
dist/vue-lib-example.js  1.94 kB │ gzip: 0.92 kB
dist/style.css       2.65 kB │ gzip: 0.94 kB
dist/vue-lib-example.umd.cjs  1.83 kB │ gzip: 0.95 kB
✓ built in 198ms
✨  Done in 3.11s.
```

## 4. Integrating the lib in a HTML page

[Commit](https://github.com/fguillen/VueLibExample/commit/77600c3c879cd57abb3accf22c3509d9f7fc9319)

Once we have the exported files we can use them in any HTML web page like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My website</title>

    <link rel="stylesheet" href="/dist/style.css">
  </head>
  <body>
    <div id="the-div"></div>

    <script type="importmap">
      {
        "imports": {
          "vue": "https://unpkg.com/vue@3/dist/vue.esm-browser.prod.js"
        }
      }
    </script>

    <script type="module">
      import { createApp } from 'vue';
      import { App as VueLibExample } from '/dist/vue-lib-example.js';

      createApp(VueLibExample).mount('#the-div');
    </script>
  </body>
</html>
```

Special attention to the `<link>` element importing the css style and `<script type="importmap">` importing the `vue` library undert the `vue` name. It is like this how is expected in our library `js`.
