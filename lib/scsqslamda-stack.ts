import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
const { SqsToLambda } = require('@aws-solutions-constructs/aws-sqs-lambda');

export class ScsqslamdaStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const NAME_PREFIX = id.toLowerCase()

    new SqsToLambda(this, 'SqsToLambdaPattern', {
        queueProps: {
          queueName: NAME_PREFIX + '-queue',
          deliveryDelay: cdk.Duration.seconds(5),
          visibilityTimeout: cdk.Duration.seconds(20),
        },
        deadLetterQueueProps: {
          queueName: NAME_PREFIX + '-deadletter-queue'
        },
        lambdaFunctionProps: {
          runtime: lambda.Runtime.PYTHON_3_8,
          handler: 'index.handler',
          code: lambda.Code.fromAsset('lambda'),
          functionName: NAME_PREFIX + '-function',
          timeout: cdk.Duration.seconds(15),
          reservedConcurrentExecutions: 1
        }
    });
  }
}
