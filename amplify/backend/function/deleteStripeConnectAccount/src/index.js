/* Amplify Params - DO NOT EDIT
	ENV
	REGION
	tableName
Amplify Params - DO NOT EDIT */
const aws = require('aws-sdk');
const ddb = new aws.DynamoDB({apiVersion: '2012-10-08'});
const stripe = require('stripe')('sk_test_51J22KpGBmWPuX4VCT8wPqbVnX3yTKaGsuQXOIb5mbOKUZ3h03V0HNDsK9tPfWNCa6jtGwNFJWvt5H5EXVDImNOo10015VuHc6l');


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const tableName = process.env.tableName
    console.log('tableName', process.env.tableName)
    const { stripeAccountId, userId } = event.arguments.input
    console.log('inputs: ', event.arguments.input)
    const deleteResp = await stripe.accounts.del(stripeAccountId);

    console.log('delete response :', deleteResp)

    if (deleteResp.deleted) {
        let ddbParams = {
            Key: {
                userId: {S: `${userId}`}
            },
            UpdateExpression: "set stripeId = :accountId, chargesEnabled = :charges_enabled",
            ExpressionAttributeValues: {
                ":accountId": {S: ''},
                ":charges_enabled": {BOOL: false}
            },
            TableName: tableName,
        }
        
        try {
            await ddb.updateItem(ddbParams).promise()
            console.log("Successfully updated stripeId field")
            return  'SUCCESSFULLY DELETED ACCOUNT'
        } catch (err) {
            console.log("Storing to DB error: ", err)

        }
    } else return 'FAILED TO DELETE ACCOUNT'
};
