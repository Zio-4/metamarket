const stripe = require('stripe')('sk_test_51J22KpGBmWPuX4VCT8wPqbVnX3yTKaGsuQXOIb5mbOKUZ3h03V0HNDsK9tPfWNCa6jtGwNFJWvt5H5EXVDImNOo10015VuHc6l');

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);

    const {stripeAccountId} = event.arguments.input
    
    const accountLink = await stripe.accountLinks.create({
      account: stripeAccountId,
      //Swap for live website
      refresh_url: 'http://localhost:3000/profile',
      return_url: 'http://localhost:3000/profile',
      type: 'account_onboarding',
    });
    
    return accountLink
};
