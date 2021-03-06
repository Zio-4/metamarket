const aws = require('aws-sdk');
const ddb = new aws.DynamoDB({apiVersion: '2012-10-08'});
const stripe = require('stripe')('sk_test_51J22KpGBmWPuX4VCT8wPqbVnX3yTKaGsuQXOIb5mbOKUZ3h03V0HNDsK9tPfWNCa6jtGwNFJWvt5H5EXVDImNOo10015VuHc6l');


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const tableName = process.env.tableName
    console.log('table name: ', tableName)

    try {
        const {stripeAccountId, userId} = event.arguments.input
        
        const account = await stripe.accounts.retrieve(stripeAccountId);

        console.log('Are charges enabled? :', account.charges_enabled)
        if (account.charges_enabled) {
            let ddbParams = {
                Key: {
                    userId: {S: `${userId}`}
                },
                UpdateExpression: "set chargesEnabled = :updateChargesEnabled",
                ExpressionAttributeValues: {
                    ":updateChargesEnabled": {BOOL: true},
                }, 
                TableName: tableName,
            }
            
            try {
                await ddb.updateItem(ddbParams).promise()
                console.log("Successfully updated chargesEnabled field")
                return 'SUCCESS'
            } catch (err) {
                console.log("Storing to DB error: ", err)
                return 'FAILED'
            }

        }

    } catch (err) {
        console.log('error :', err)
    }
};
