const authDocs = require('./auth-docs');
const transactionsDocs = require('./transactions-docs');

module.exports = {
  ...authDocs,
  ...transactionsDocs
};
