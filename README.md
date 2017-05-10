## aws-lambda-twilio

This is a AWS Lambda function deployed and hosted at Amazon. We also used the serverless framework [Serverless framework](https://serverless.com/) to handle all the necessary infrastructure needed for deploying in Amazon. Serverless also has support for Azure function and Apache OpenWhisk.

We also need to add a trigger to access our AWS lambda function. For that we added an Amazon API Gateway, that can be configured under "Trigger" in the aws lambda dashboard.

This project goes in hand with a front-end application that simply serves as a html document that triggers http call to the aws lambda function through the api gateway. The link to the front-end application that was used in this example is here - [front-end react](https://github.com/mrshawn191/serverless-twilio-example)

## Project Structure

handler.js - Contains the lambda function itself
event.json - Contains the main data structure used as payload for the lambda function to execute upon
serverless.yml - Contains the configuration needed by the serverless framework, to host and deploy on Amazon
package.json - Contains all the needed dependency, in this example we used Twilio Javascript SDK

## Project Design

Inline-style:
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

## Getting started

To get started, first install the Serverless Dashboard

- [Serverless Dashboard](https://github.com/serverless/dashboard)


Configure to your AWS Account, follow this youtube tutorial video to get you started

- [Setting up AWS Credentials](https://www.youtube.com/watch?v=HSd9uYj2LJA)


Create a new service using the serverless dashboard client, and deploy your lambda function to Amazon

Add a new trigger, select Amazon API Gateway

You should now have a custom api endpoint that you can use in your client to access your lambda function

## Demonstration

The front-end application is hosted in heroku and is connected to the aws lambda function through the api gateway.

The link to the application is here - [Twilio-serverless-example](https://github.com/mrshawn191/serverless-twilio-example)

## Dependencies used

- Twilio SDK

## Links

- [front-end react example](https://github.com/mrshawn191/serverless-twilio-example)
- [Serverless framework](https://github.com/mzabriskie/axios)
- [Twilio SDK](https://github.com/mzabriskie/axios)
