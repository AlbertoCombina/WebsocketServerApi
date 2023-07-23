import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

export const hello = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
  const connectionId = event.requestContext.connectionId as string
  const routeKey = event.requestContext.routeKey as string
  const body = event.body || ""

  switch (routeKey){
    case "$connect":
    case "$disconnect":
    case "$msg":
  }

  return {
    statusCode: 200,
    body: ""
  };
};

const handleConnect = async(connectionId: String): Promise<APIGatewayProxyResult> => {};
const handleDisconnect = async(connectionId: String): Promise<APIGatewayProxyResult> => {};
const handleMsg = async(thisConnectionId: String): Promise<APIGatewayProxyResult> => {};
