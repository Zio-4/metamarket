/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

// Set your secret key. Remember to switch to your live secret key in production.
// See your keys here: https://dashboard.stripe.com/apikeys
const aws = require('aws-sdk');
const ddb = new aws.DynamoDB({apiVersion: '2012-10-08'});
const stripe = require('stripe')('sk_test_51J22KpGBmWPuX4VCT8wPqbVnX3yTKaGsuQXOIb5mbOKUZ3h03V0HNDsK9tPfWNCa6jtGwNFJWvt5H5EXVDImNOo10015VuHc6l');



exports.handler = async (event) => {

    try {
        const tableName = process.env.tableName
        const {username, email} = event.arguments.input

        const account = await stripe.accounts.create({
            type: 'express',
            email: `${email}`,
            metadata: {user: `${username}`}
        });

        console.log("Account creation response: ", account)
        console.log("Account id: ", account.id)

        // store the Stripe account id in DBB
        let ddbParams = {
            Item: {
                'stripe_id': `${account.id}`
            },
            TableName: tableName
        }
        
        try {
            await ddb.putItem(ddbParams).promise()
            console.log("Successfully updated stripe_id field")
        } catch (err) {
            console.log("Storing to DB error: ", err)
        }

        const accountId = account.id

        const accountLink = await stripe.accountLinks.create({
            account: accountId,
            //Swap for live website
            refresh_url: 'http://localhost:3000/profile',
            return_url: 'http://localhost:3000/listingform',
            type: 'account_onboarding',
          });

          console.log('Account link response :', accountLink)

          return accountLink
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
