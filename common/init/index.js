const initRoutes = require('./init-routes');
const connectDB = require('./init-db');
const checkInSubscriber = require('../pubSub/check-in-subscriber');
const checkOutSubscriber = require('../pubSub/check-out-subscriber');
const { createQueue } = require('../utils/notificationQue');
const notificationWorker = require('../utils/notificationWorker');

/**
 * @function
 * Initializes app components
 *
 * @param {object} app - Express app.
 */
module.exports = (app) => {
  initRoutes(app);
  connectDB();
  checkInSubscriber();
  checkOutSubscriber();
  createQueue();
  notificationWorker.start();
};
