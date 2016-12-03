require('dotenv').config();

const {Wit, log, interactive} = require('node-wit');
const actions = require('./actions');

// Wit.ai parameters
const WIT_TOKEN = process.env.WIT_TOKEN;
if (!WIT_TOKEN) { throw new Error('missing WIT_TOKEN') }
// Messenger API parameters
const FB_PAGE_TOKEN = process.env.FB_PAGE_TOKEN;
if (!FB_PAGE_TOKEN) { throw new Error('missing FB_PAGE_TOKEN') }
const FB_APP_SECRET = process.env.FB_APP_SECRET;
if (!FB_APP_SECRET) { throw new Error('missing FB_APP_SECRET') }

const client = new Wit({
  accessToken: WIT_TOKEN,
  actions,
  logger: new log.Logger(log.DEBUG) // optional
});

interactive(client);