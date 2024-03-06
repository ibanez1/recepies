
# Recipies in Angular

Angular Nx project with all relevant changes in recent years. Practical examples of all new features to show some examples of the framework evolution.
Based on the ebook https://houseofangular.io/the-ultimate-guide-to-angular-evolution/

### Angular v14

- ✔️​ Standalone API (developer preview) 
- Typed forms 
- ✔️​ Inject function 
- CDK Dialog and Menu 
- Setting the page title 
- ENVIRONMENT_INITIALIZER Injection Token 
- Binding to protected component members 
- Angular extended diagnostics 
- ✔️​ ESM Application Build (experimental) 
- ✔️​ Typescript/Node.js support 

### Angular v15

- ✔️​ Standalone API (Stable)
- Directive composition API
- Image directive 
- MDC-based components
- CDK Listbox
- Improved stack traces
- Auto-imports in language service
- ✔️​ Typescript/Node.js support

### Angular v16

- Signals library (developer preview)
- SSR Hydration (developer preview)
- ✔️​ Vite-powered dev server
- Required inputs
- Input transform function 
- Router data input bindings
- Injectable DestroyRef and takeUntilDestroyed
- ✔️ ​Self-closing tags
- runInInjectionContext
- ✔️​ Standalone API CLI support
- ✔️​ Typescript/Node.js support

### Angular v17

- Signals library (stable)
- Signal inputs
- New control flow (Developer preview)
- Deferred loading (developer preview)
- Inputs Binding with NgComponentOutlet
- Animation lazy loading
- View Transitions
- ✔️​ Esbuild + Vite (stable)
- SSR Hydration (stable)
- CLI improvements
- Devtools Dependency Graph
- ✔️​ Typescript/Node.js support


# RecepiesWorkspace

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Start the application

Run `npx nx serve recepies` to start the development server. Happy coding!

## Build for production

Run `npx nx build recepies` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)