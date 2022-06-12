// eslint-disable-next-line @typescript-eslint/no-var-requires
const mobileFeatureGenerator = require('./mobile/features/index');

module.exports = function (plop) {
  plop.setGenerator('Create mobile feature structure', mobileFeatureGenerator);
};
