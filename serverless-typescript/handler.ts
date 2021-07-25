import { APIGatewayProxyEvent, Context, APIGatewayProxyResult } from "aws-lambda"

export async function hello (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world',
      input: event,
    })
  }
}