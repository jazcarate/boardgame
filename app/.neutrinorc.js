const eslint = require('@neutrinojs/eslint');

module.exports = (neutrino) => {
  neutrino.use('@neutrinojs/standardjs');
  neutrino.use('@neutrinojs/react');
  neutrino.use('@neutrinojs/karma');

  neutrino.use(eslint, {
      eslint: {
        extends: [
          "eslint:recommended",
          "plugin:react/recommended",
          "plugin:import/errors",
          "plugin:import/warnings",
        ],
        plugins: [ "react", "import"],
        rules: {
          "new-cap": "off",
        }
      }
    });

  neutrino.config.devServer
    .hot(true)
    .host('0.0.0.0')
    .public('0.0.0.0')
    .port(5000)
    .watchOptions({
      aggregateTimeout: 300,
      poll: true
    });
}
