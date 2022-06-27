import React from 'react'
import { Button } from '@mui/material'
import { API, graphqlOperation } from 'aws-amplify'
import { deleteStripeConnectAccount } from '../../graphql/mutations'

function LandingPage() {
  const handleDeleteStripeAccount = async () => {
    // loading
    let deleteResponse = await API.graphql(graphqlOperation(deleteStripeConnectAccount, {input: {stripeAccountId: 'acct_1LAU5yQJVxACuSzu', userId: '4e5360a9-3c67-4f8a-a0c0-7b7ddffc5f15'}}))
    console.log('deleteResponse :', deleteResponse)
    if (deleteResponse === 'SUCCESFULLY DELETED ACCOUNT') {
      console.log('hurray!')
      // update user in localStorage
      // update user in redux
    } else {
      // let user know something went wrong
    }
  }

  return (
    <div>
      <div className='placeholder-text'>Landing Page</div>
      <Button variant='contained' color='error' onClick={handleDeleteStripeAccount}>Delete Stripe Account</Button>
    </div>
  )
}

export default LandingPage