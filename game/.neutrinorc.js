module.exports = {
    use: [
        ['@neutrinojs/react', {
            html: {
              title: 'Calculadora de Ganancias'
            },
            devServer: {
                port: 5001,
                host: '127.0.0.1',
                public: '127.0.0.1'
            }
          }]
    ]     
}