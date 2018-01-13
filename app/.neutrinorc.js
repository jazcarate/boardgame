module.exports = {
  use: [
    '@neutrinojs/standardjs',
    [
      '@neutrinojs/react',
      {
        html: {
          title: 'app'
        },
        devServer: {
          port: 5000,
          host: '0.0.0.0',
          public: '0.0.0.0'
        }
      }
    ],
    '@neutrinojs/karma'
  ]
};
