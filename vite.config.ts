import path from "path";
import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";

import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Optimize bundle for better Core Web Vitals
    minify: "esbuild",
    // Improve asset chunking for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["vue"],
        },
      },
    },
    // Generate source maps for production debugging
    sourcemap: false,
    // Target modern browsers for smaller bundle
    target: "esnext",
    // Chunk size warnings
    chunkSizeWarningLimit: 600,
  },
  server: {
    // Add headers for better SEO and security
    headers: {
      "X-Content-Type-Options": "nosniff",
      "X-Frame-Options": "SAMEORIGIN",
      "X-XSS-Protection": "1; mode=block",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
  },
});
