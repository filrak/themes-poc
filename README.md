# PoC for new themes mechanism
I'm slowly starting to figure out how we can work with themes in a better way. 
This is the PoC of what I want to achieve (quality of code is shitty but it's just to demonstrate the idea).

It works similarly to modules. 
1. We can import a theme (which finally can be a standalone npm package). 
2. Theme object contain all pages/components and probably some config files. 
3. Before registering it we can modify any of this files (for example current components from theme npm package with our own ).

````js
import { Theme } from '@vue-storefront/theme/default' // npm package
import HelloOverride from './theme-overrides/HelloOverride.vue' // our own repo

// We are overriding one of the components
Theme.components.Hello = HelloOverride

export default Theme
````

With this approach:
- themes can finally be a standalone npm packages
- themes are finally easly upgradable
- per-implementation codebase will be much smaller since it will contain only components that are overwritten
- We can remove huge amount of complex business logic responsible for handle theme-specific stuff right now

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Lints and fixes files
```
yarn run lint
```
