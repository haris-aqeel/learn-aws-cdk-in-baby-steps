This is the first step of learning cdk.

In this step, we will start learning the first and the main service (LAMBDA) which cdk provides us.

For more detailed understanding proceed to https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda-readme.html

<h1>BASIC LAMBDA STRUCTURE:</h2><br/><br/>

const Fn = new lambda.Function(this, 'MyFunction', { <br/>
&nbsp &nbsp &nbsp runtime: lambda.Runtime.NODEJS_12_X,<br/>
&nbsp &nbsp &nbsp handler: 'hello.handler',<br/>
&nbsp &nbsp &nbsp timeout: Duration.minutes(1),<br/>
&nbsp &nbsp &nbsp code: lambda.Code.fromAsset("lambda") <br/>
});<br/><br/><br/>

1. Runtime includes the version of NodeJS onwhich it will run <br/>
2. Handler is the name of lambda Function <br/>
3. Timeout is the time after which lamda function will not run (Max available time) <br/>
4. Code is the place from which the handler function may be extracted. In this case it is in the lambda folder. It can be of following types <br/>
   a. lambda.Code.fromBucket(bucket, key) - specify an S3 object that contains the archive of your runtime code. <br/>
   b. lambda.Code.fromInline(code) - inline the handle code as a string. This is limited to supported runtimes and the code cannot exceed 4KiB.<br/>
   c. lambda.Code.fromAsset(path) - specify a directory or a .zip file in the local filesystem which will be zipped and uploaded to S3 before deployment.<br/>
   d. lambda.Code.fromDockerBuild(path, options) - use the result of a Docker build as code. The runtime code is expected to be located at /asset in the image and          will be zipped and uploaded to S3 as an asset.<br/>



