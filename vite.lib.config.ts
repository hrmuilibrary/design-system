import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';

// Note: Tailwind CSS itself is NOT run through this build. The library ships
// raw Tailwind utility classes in its component source so consumer apps can
// override/extend them freely (see README). The distributable stylesheet
// (design tokens + theme + base layer) is generated separately via the
// `build:css` script using the Tailwind CLI.
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      exclude: ['src/**/*.stories.tsx', 'src/**/*.docs.mdx'],
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        icons: resolve(__dirname, 'src/icons/index.ts'),
        'tailwind/preset': resolve(__dirname, 'src/tailwind/preset.ts'),
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: [
        'react',
        'react/jsx-runtime',
        'react-dom',
        'clsx',
        'class-variance-authority',
        'tailwind-merge',
        'lucide-react',
        'react-hook-form',
        'yup',
        '@hookform/resolvers/yup',
        '@tanstack/react-table',
        '@tanstack/react-virtual',
        '@dnd-kit/core',
        '@dnd-kit/sortable',
        '@dnd-kit/utilities',
        'react-select',
        'react-select/async',
        'react-select/creatable',
        'react-select/async-creatable',
      ],
      output: {
        preserveModules: false,
        entryFileNames: '[name].js',
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
