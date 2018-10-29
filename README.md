# PoC for new themes mechanism
I'm slowly starting to figure out how we can work with themes ina . better way. This is the PoC of what I want to achieve (quality of code is shitty but it's just to demonstrate the idea). It works similarly to modules. We can import a theme (which finally can be a standalone npm package). Theme object contain all pages/components and probably some config files. Before registering it we can modify any of this files (for example current components from theme npm package with our own ).

With this approach:
1 ) themes can finally be a standalone npm packages
2) themes are finally easly upgradable
3) per-implementation codebase will be much smaller since it will contain only components that are overwritten
4) We can remove huge amount of complex business logic responsible for handle theme-specific stuff right now

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
