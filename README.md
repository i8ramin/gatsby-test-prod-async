# Gatsby + async/await + @storybook + NODE_ENV=production == FAIL

For some reason, the following combination of things causes the Gatsby build to fail:

- `async/await` code
- `@storybook` packages
- `NODE_ENV=production`

## Steps to reproduce

```bash
> rm -rf node_modules
> NODE_ENV=production yarn install --ignore-optional
> NODE_ENV=production yarn build
```

- If you remove the `async/await` code, it builds just fine.
- If you remove the **@storybook** from `devDependencies`, it builds just fine.
- If you add **@storybook** modules to `dependencies`, it builds just fine (after issuing `rm -rf node_modules && NODE_ENV=production yarn install --ignore-optional`)

### Possibly related GH issues

- https://github.com/storybooks/storybook/issues/5510
- https://github.com/storybooks/storybook/issues/537
- https://github.com/storybooks/storybook/issues/489

## Stacktrace during build

```sh
info bootstrap finished - 1.904 s


error Generating JavaScript bundles failed


  Error: ./src/pages/index.js
  Module not found: Error: Can't resolve 'regenerator-runtime/runtime' in '/Users/home/tmp/gatsby-test-prod-  async/src/pages'
  resolve 'regenerator-runtime/runtime' in '/Users/home/tmp/gatsby-test-prod-async/src/pages'
    Parsed request is a module
    using description file: /Users/home/tmp/gatsby-test-prod-async/package.json (relative path: ./src/pages)      Field 'browser' doesn't contain a valid alias configuration
      resolve as module
        /Users/home/tmp/gatsby-test-prod-async/src/pages/node_modules doesn't exist or is not a directory
        /Users/home/tmp/gatsby-test-prod-async/src/node_modules doesn't exist or is not a directory
        /Users/home/tmp/node_modules doesn't exist or is not a directory
        /Users/home/node_modules doesn't exist or is not a directory
        /Users/node_modules doesn't exist or is not a directory
        /node_modules doesn't exist or is not a directory
        looking for modules in /Users/home/tmp/gatsby-test-prod-async/node_modules
          using description file: /Users/home/tmp/gatsby-test-prod-async/package.json (relative path: ./node  _modules)
            Field 'browser' doesn't contain a valid alias configuration
            using description file: /Users/home/tmp/gatsby-test-prod-async/package.json (relative path: ./no  de_modules/regenerator-runtime/runtime)
              no extension
                Field 'browser' doesn't contain a valid alias configuration
                /Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime doesn't exis  t
              .mjs
                Field 'browser' doesn't contain a valid alias configuration
                /Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime.mjs doesn't   exist
              .js
                Field 'browser' doesn't contain a valid alias configuration
                /Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime.js doesn't e  xist
              .jsx
                Field 'browser' doesn't contain a valid alias configuration
                /Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime.jsx doesn't   exist
              .wasm
                Field 'browser' doesn't contain a valid alias configuration
                /Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime.wasm doesn't   exist
              .json
                Field 'browser' doesn't contain a valid alias configuration
                /Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime.json doesn't   exist
              as directory
                /Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime doesn't exis  t
  [/Users/home/tmp/gatsby-test-prod-async/src/pages/node_modules]
  [/Users/home/tmp/gatsby-test-prod-async/src/node_modules]
  [/Users/home/tmp/node_modules]
  [/Users/home/node_modules]
  [/Users/node_modules]
  [/node_modules]
  [/Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime]
  [/Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime.mjs]
  [/Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime.js]
  [/Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime.jsx]
  [/Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime.wasm]
  [/Users/home/tmp/gatsby-test-prod-async/node_modules/regenerator-runtime/runtime.json]
   @ ./src/pages/index.js 2:0-37
   @ ./.cache/async-requires.js
   @ ./.cache/production-app.js

error Command failed with exit code 1.
```
