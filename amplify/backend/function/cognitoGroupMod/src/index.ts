/* Amplify Params - DO NOT EDIT
	AUTH_LOGBOOKD7346641_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

 import { CognitoIdentityServiceProvider } from 'aws-sdk';
 const cognitoSP = new CognitoIdentityServiceProvider();

exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    const { fieldName } = event;

    switch(fieldName) {
      case "addUserToGroup": 
        const response = await addUserToGroup(event);
         return response;
      default: 
        return {
          statusCode: 200,
          body: {
            success: false,
            error: "Unkown action",
            errorMsg: "The action: " + fieldName + " is unkown"
          }
        }
    }
};

const addUserToGroup = async (event) => {
  try {
    const { user, group } = event.arguments.input;
    const { AUTH_LOGBOOKD7346641_USERPOOLID } = process.env;

    const params = {
      Username: user,
      GroupName: group,
      UserPoolId: AUTH_LOGBOOKD7346641_USERPOOLID
    }

    console.log('addUserToGroup params: ', params);
    await cognitoSP.adminAddUserToGroup(params).promise();

    return {
      statusCode: 200,
      body: {
        success: true
      }
    }
  } catch(e) {
    return {
      statusCode: 200,
      body: {
        success: false,
        error: 'Could not add user to group',
        errorMsg: e 
      }
    }
  }
}
