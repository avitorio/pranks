import typescript from '@rollup/plugin-typescript';
import del from 'rollup-plugin-delete';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/index.js',
        format: 'umd',
        name: 'Pranks',
        sourcemap: true,
      },
    ],
    plugins: [
      del({ targets: 'dist/*' }),
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: true,
        declarationDir: 'dist',
      }),
    ],
  },
  {
    input: 'src/pranks/hacker/index.ts',
    output: [
      {
        file: 'dist/pranks/hacker/index.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/pranks/hacker/index.cjs',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/pranks/hacker/index.js',
        format: 'umd',
        name: 'PranksHacker',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: true,
        declarationDir: 'dist',
      }),
    ],
  },
  {
    input: 'src/pranks/rotation/index.ts',
    output: [
      {
        file: 'dist/pranks/rotation/index.mjs',
        format: 'esm',
        sourcemap: true,
      },
      {
        file: 'dist/pranks/rotation/index.cjs',
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: 'dist/pranks/rotation/index.js',
        format: 'umd',
        name: 'PranksRotation',
        sourcemap: true,
      },
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.build.json',
        declaration: true,
        declarationDir: 'dist',
      }),
    ],
  },
];