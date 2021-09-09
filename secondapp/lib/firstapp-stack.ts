import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { aws_lambda as lambda, aws_apigateway as apigw } from 'aws-cdk-lib';

export class FirstappStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const fn = new lambda.Function(this, 'MyFunction', {
      runtime: lambda.Runtime.NODEJS_12_X,
      handler: 'hello.handler',
      code: lambda.Code.fromAsset("lambda"),
      timeout: Duration.minutes(1)
    });

    const deployAPI = new apigw.LambdaRestApi(this, 'HelloApi', {
      handler: fn,
    })

    
  }
}
