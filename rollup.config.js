// Rollup plugins
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';

export default {
  input: 'src/PromiseQueue.js',
  output: {
    name: 'PromiseQueue',
    sourcemap: true,
    file: 'dist/PromiseQueue.js',
    format: 'umd',
  },
  plugins: [
    babel({
      babelrc: false, // stops babel from using .babelrc files
      plugins: ['external-helpers'],
      presets: [
        ['env', {
          'modules': false, // stop module conversion
        }],
      ],
      exclude: [
        'node_modules/**'
      ]
    }),
    uglify()
  ],
};