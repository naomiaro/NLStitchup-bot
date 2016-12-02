require('dotenv').config();

const {Wit, log, interactive} = require('node-wit');
const actions = require('./actions');

// Wit.ai parameters
const accessToken = process.env.WIT_TOKEN;

const client = new Wit({
  accessToken,
  actions,
  logger: new log.Logger(log.DEBUG) // optional
});

interactive(client);