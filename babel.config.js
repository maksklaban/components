module.exports = {
  env: {
    development: {
      presets: ['next/babel', '@babel/preset-env', '@babel/preset-react'],
      plugins: [
        // ['babel-plugin-styled-components'],
        ['styled-components', { ssr: true, displayName: true, preprocess: false }],
        [
          'file-loader',
          {
            name: '[path][name].[ext]',
            extensions: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
            outputPath: '/build',
            context: './src',
            limit: Infinity,
          },
        ],
      ],
      babelrcRoots: ['.', 'packages/*'],
    },
    production: {
      presets: ['next/babel', '@babel/preset-env', '@babel/preset-react'],
      plugins: [
        // ['babel-plugin-styled-components'],
        ['styled-components', { ssr: true, displayName: true, preprocess: false }],
        [
          'file-loader',
          {
            name: '[path][name].[ext]',
            extensions: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
            outputPath: '/build',
            context: './src',
            limit: Infinity,
          },
        ],
      ],
      babelrcRoots: ['.', 'packages/*'],
    },
    server: {
      presets: ['next/babel', '@babel/preset-env', '@babel/preset-react'],
      plugins: [
        // ['babel-plugin-styled-components'],
        ['styled-components', { ssr: true, displayName: true, preprocess: false }],
        [
          'file-loader',
          {
            name: '[path][name].[ext]',
            extensions: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
            outputPath: '/build',
            context: './src',
            limit: Infinity,
          },
        ],
      ],
      babelrcRoots: ['.', 'packages/*'],
    },
  },

  // presets: ['next/babel', '@babel/preset-env', '@babel/preset-react'],
  // plugins: [
  //   ['babel-plugin-styled-components'],
  //   ['styled-components', { ssr: true, displayName: true, preprocess: false }],
  //   [
  //     'file-loader',
  //     {
  //       name: '[path][name].[ext]',
  //       extensions: ['png', 'jpg', 'jpeg', 'gif', 'svg'],
  //       outputPath: '/build',
  //       context: './src',
  //       limit: Infinity,
  //     },
  //   ],
  //   // ['styled-components', { ssr: true, displayName: true, preprocess: false }],
  // ],
  // babelrcRoots: ['.', 'packages/*'],
}
