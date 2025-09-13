import antfu from '@antfu/eslint-config';

export default antfu({
  type: 'app',
  typescript: true,
  formatters: true,
  react: true,
  nextjs: true,
  stylistic: {
    indent: 2,
    semi: true,
    quotes: 'single',
  },
  ignores: [
    'node_modules/**',
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ],
});
