module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'app'
        }
      }
    ],
    '@neutrinojs/karma'
  ]
};
