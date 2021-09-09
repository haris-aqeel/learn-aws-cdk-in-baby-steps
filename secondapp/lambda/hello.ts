import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

exports.handler = 
async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
    console.log("request:", JSON.stringify(event));
    console.log("context:", JSON.stringify(context));


    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain" },
        body: `Hello, CDK! You've hit ${event.path}\n`
      };
}

