const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;
const twilioClient = require('twilio')(twilioAccountSid, twilioAuthToken);

module.exports.sendText = (event, context, callback) => {
  // use twilio SDK to send text message
  const sms = {
    to: event.to,
    body: event.message,
    from: twilioPhoneNumber,
  };

  twilioClient.messages.create(sms, (error, data) => { // eslint-disable-line
    if (error) {
      const errResponse = {
        headers: {
          'Access-Control-Allow-Origin': '*', // Required for CORS support to work
        },
        statusCode: error.status,
        body: JSON.stringify({
          message: error.message,
          error: error // eslint-disable-line
        }),
      };
      return callback(null, errResponse);
    }

    // text message sent! 
    const response = {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"message": "SUCCESS"})
    };

    //context.succeed(response); // we must use this callback to return to amazon api gateway

    callback(null, response);

  });
};
