This is the first step of learning cdk.

In this step, we will start learning the first and the main service (LAMBDA) which cdk provides us.

For more detailed understanding proceed to https://docs.aws.amazon.com/cdk/api/v2/docs/aws-cdk-lib.aws_lambda-readme.html

<h1>BASIC LAMBDA STRUCTURE:</h2><br/><br/>

const Fn = new lambda.Function(this, 'MyFunction', { <br/>
	 runtime: lambda.Runtime.NODEJS_12_X,<br/>
	 handler: 'hello.handler',<br/>
	 timeout: Duration.minutes(1),<br/>
	 code: lambda.Code.fromAsset("lambda") <br/>
});<br/><br/><br/>

1. Runtime includes the version of NodeJS onwhich it will run <br/>
2. Handler is the name of lambda Function <br/>
3. Timeout is the time after which lamda function will not run (Max available time) <br/>
4. Code is the place from which the handler function may be extracted. In this case it is in the lambda folder. It can be of following types <br/>
   a. lambda.Code.fromBucket(bucket, key) - specify an S3 object that contains the archive of your runtime code. <br/>
   b. lambda.Code.fromInline(code) - inline the handle code as a string. This is limited to supported runtimes and the code cannot exceed 4KiB.<br/>
   c. lambda.Code.fromAsset(path) - specify a directory or a .zip file in the local filesystem which will be zipped and uploaded to S3 before deployment.<br/>
   d. lambda.Code.fromDockerBuild(path, options) - use the result of a Docker build as code. The runtime code is expected to be located at /asset in the image and          will be zipped and uploaded to S3 as an asset.<br/>



exports.handlerName = function(event, context, callback) {
...
// callback parameter is optional
}


	<h5> What is Event </h5>

	<p>When your Lambda function is invoked in one of the supported languages, one of the parameters provided to your handler function is an event object. The event differs in structure and contents, depending on which event source created it. The contents of the event parameter include all of the data and metadata your Lambda function needs to drive its logic. For example, an event created by API Gateway will contain details related to the HTTPS request that was made by the API client (for example, path, query string, request body), whereas an event created by Amazon S3 when a new object is created will include details about the bucket and the new object.</p>

<h5> What is Context </h5>

	<p>Your Lambda function is also provided with a context object. The context object allows your function code to interact with the Lambda execution environment. The contents and structure of the context object vary, based on the language runtime your Lambda function is using</p>
