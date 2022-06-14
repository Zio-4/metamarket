// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
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

        const {username, email, userId} = event.arguments.input

        const account = await stripe.accounts.create({
            type: 'express',
            email: `${email}`,
            business_type: 'individual',
            metadata: {user: `${username}`}
        });

        // console.log("Account creation response: ", account)
        // console.log("Account id: ", account.id)

        // store the Stripe account id in DBB
        let ddbParams = {
            Key: {
                userId: {S: `${userId}`}
            },
            UpdateExpression: "set stripeId = :accountId",
            ExpressionAttributeValues: {
                ":accountId": {S: `${account.id}`},
            },
            TableName: tableName,
        }
        
        try {
            await ddb.updateItem(ddbParams).promise()
            console.log("Successfully updated stripeId field")
        } catch (err) {
            console.log("Storing to DB error: ", err)
        }

        const accountLink = await stripe.accountLinks.create({
            account: account.id,
            //Swap for live website
            refresh_url: 'http://localhost:3000/profile',
            return_url: 'http://localhost:3000/listingform',
            type: 'account_onboarding',
          });

          console.log('Account link response :', accountLink)

        return {accountId: account.id, object: accountLink.object, created: accountLink.created, expires_at: accountLink.expires_at, url: accountLink.url}

    } catch (err) {
        throw new Error(err)
    }
    // return {
    // //  Uncomment below to enable CORS requests
    // //  headers: {
    // //      "Access-Control-Allow-Origin": "*",
    // //      "Access-Control-Allow-Headers": "*"
    // //  }, 
    // };
};
