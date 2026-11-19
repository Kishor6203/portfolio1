# Build and dependency fixes

This revision fixes the malformed JSX in `src/components/sections/Projects.tsx` and removes the invalid TypeScript project-reference option from `tsconfig.node.json`.

It also updates the dependencies to patched/current major versions based on the audit report supplied:

- `react-router-dom`: `^7.18.6`
- `zod`: `^4.6.7`
- `@hookform/resolvers`: `^5.2.2` (Zod 4-compatible)
- `recharts`: `^3.11.0`

## Apply this revision

1. Extract this archive to a new folder, or copy the changed files into your existing project.
2. In PowerShell, from the project root, run:

   ```powershell
   npm install
   npm install-scripts approve esbuild
   npm rebuild esbuild
   npm audit
   npm run build
   npm run dev
   ```

3. If `npm install-scripts approve esbuild` is not recognized by your npm version, run `npm install-scripts ls` and follow the install-script approval guidance for your installed npm release.

React Router v7 keeps the declarative APIs used by this portfolio (`BrowserRouter`, `Routes`, `Route`, `Link`, and navigation hooks), but the project should still be checked with `npm run build` after installing dependencies.

The archive was source-patched. A clean dependency install and production build could not be completed in the authoring environment, so please use the build output from your machine as the final verification.
