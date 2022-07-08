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
    
    let response = {};
    switch(fieldName) {
      case "addUserToGroup": 
        response = await addUserToGroup(event);
        break;
      case "removeUserFromGroup":
        response = await removeUserFromGroup(event)
        break;
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

    return response;
};

const removeUserFromGroup = async (event) => {
  try {
    const { user, group } = event.arguments.input;
    const { AUTH_LOGBOOKD7346641_USERPOOLID } = process.env;

    const params = {
      Username: user,
      GroupName: group,
      UserPoolId: AUTH_LOGBOOKD7346641_USERPOOLID
    }

    console.log('addUserToGroup params: ', params);
    await cognitoSP.adminRemoveUserFromGroup(params)

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
