const baseConfig = { ...require('./babel.config') };

baseConfig.ignore = ["**/*.test.mjs"]

module.exports = baseConfig;