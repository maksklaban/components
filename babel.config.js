module.exports = {
  env: {
    development: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        ['babel-plugin-styled-components', { ssr: false, displayName: true }],
        // ['styled-components', { ssr: true, displayName: true, preprocess: false }],
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
    },
    production: {
      presets: ['@babel/preset-env', '@babel/preset-react'],
      plugins: [
        ['babel-plugin-styled-components', { ssr: false, displayName: true }],
        // ['styled-components', { ssr: true, displayName: true, preprocess: false }],
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
    }
  }
}