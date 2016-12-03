const MEETUP_KEY = process.env.MEETUP_KEY;
const fetch = require('node-fetch');
const moment = require('moment-timezone');

const EVENTS_URL = `https://api.meetup.com/North-London-Stitch-Up/events?sign=true&key=${MEETUP_KEY}`;

module.exports = {
  send(request, response) {
    return new Promise(function(resolve, reject) {
      console.log(JSON.stringify(response));
      return resolve();
    });
  },
  findNextMeetup({sessionId, context, text, entities}) {
    return fetch(EVENTS_URL)
      .then((res) => {
        return res.json();
      }).then((json) => {
        return json[0];
      }).then((event) => {
        let mStart = moment(event.time, "x").tz("Europe/London");
        let mEnd = moment(event.time + event.duration, "x").tz("Europe/London");

        context.date = mStart.format("MMM D");
        context.start = mStart.format("H:mm");
        context.end = mEnd.format("H:mm");
        context.location = event.venue.name;

        return context;
      });
  }
};
