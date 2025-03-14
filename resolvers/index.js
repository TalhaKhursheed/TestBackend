const jobResolver = require('./job');
const applicationResolver = require('./application');

const rootResolver = {
  ...jobResolver,
  ...applicationResolver,
};

module.exports = rootResolver;