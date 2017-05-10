## aws-lambda-twilio

This is a AWS Lambda function deployed and hosted at Amazon. We also used the serverless framework [Serverless framework](https://serverless.com/) to handle all the necessary infrastructure needed for deploying in Amazon. Serverless also has support for Azure function and Apache OpenWhisk.

We also need to add a trigger to access our AWS lambda function. For that we added an Amazon API Gateway, that can be configured under "Trigger" in the aws lambda dashboard.

This project goes in hand with a front-end application that simply serves as a html document that triggers http call to the aws lambda function through the api gateway. The link to the front-end application that was used in this example is here - [front-end react](https://github.com/mrshawn191/serverless-twilio-example)

## Project Structure

#### handler.js - Contains the lambda function itself

#### event.json - Contains the main data structure used as payload for the lambda function to execute upon

#### serverless.yml - Contains the configuration needed by the serverless framework, to host and deploy on Amazon

#### package.json - Contains all the needed dependency, in this example we used Twilio Javascript SDK

## Project Design


![alt text](https://github.com/mrshawn191/aws-lambda-twilio/blob/master/aws%20serverless%20design.png "Logo Title Text 1")

## Getting started

1. To get started, first install the Serverless Dashboard [Serverless Dashboard](https://github.com/serverless/dashboard)

2. Configure to your AWS Account, follow this youtube tutorial video to get you started [Setting up AWS Credentials](https://www.youtube.com/watch?v=HSd9uYj2LJA)

3. Create a new service using the serverless dashboard client, and deploy your lambda function to Amazon

4. Create your twilio account so that you can use your own TWILIO_ACCOUNT_SID and TWILIO_AUTH_TOKEN. You also need to get your own TWILIO_PHONE_NUMBER which is a requirement when you send sms.

4. Setup your environmental variables in the aws lambda function dashboard.

5. Add a new trigger, select Amazon API Gateway

6. You should now have a custom api endpoint that you can use in your client to access your lambda function

## Demonstration

The front-end application is hosted in heroku and is connected to the aws lambda function through the api gateway.

The link to the application is here - [Twilio-client-example](https://github.com/mrshawn191/serverless-twilio-example)

## Dependencies used

- Twilio SDK

## Links

- [Twilio-client-example](https://github.com/mrshawn191/serverless-twilio-example)
- [Serverless framework](https://github.com/mzabriskie/axios)
- [Twilio SDK](https://github.com/mzabriskie/axios)