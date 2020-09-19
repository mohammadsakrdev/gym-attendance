const authDefinitions = require('./auth-definitions');
const transactionsDefinitions = require('./transactions-definitions');

module.exports = {
  ...authDefinitions,
  ...transactionsDefinitions
};
