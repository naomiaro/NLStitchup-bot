module.exports = {
  send(request, response) {
    return new Promise(function(resolve, reject) {
      console.log(JSON.stringify(response));
      return resolve();
    });
  },
  findNextMeetup({sessionId, context, text, entities}) {
    console.log(`Session ${sessionId} received ${text}`);
    console.log(`The current context is ${JSON.stringify(context)}`);
    console.log(`Wit extracted ${JSON.stringify(entities)}`);

    context.date = "Dec 3";
    context.start = "2:00";
    context.end = "5:00";
    context.location = "Swiss Cottage Library";
    return Promise.resolve(context);
  }
};
