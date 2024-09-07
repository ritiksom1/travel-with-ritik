import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/App.jsx',
  output: {
    file: 'bundle.js',
    format: 'iife',
  },
  plugins: [resolve()],
};
