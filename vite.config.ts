// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// GitHub Pages project sites are served from /<repo>/. Set PAGES_BASE at build
// time (the deploy workflow does this) and leave it unset everywhere else.
const base = process.env.PAGES_BASE ?? "/";

export default defineConfig({
  vite: { base },
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // Every page is fully static, so it can be rendered to HTML at build time
    // and hosted anywhere (including GitHub Pages).
    pages: [
      { path: "/" },
      { path: "/projects/wazibiz-ecommerce" },
      { path: "/projects/geek-gazette" },
      { path: "/projects/simonsgame" },
    ],
    prerender: { enabled: true, autoStaticPathsDiscovery: false },
  },
});
