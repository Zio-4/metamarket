import React from 'react'
import { Button } from '@mui/material'
import { API, graphqlOperation } from 'aws-amplify'
import { deleteStripeConnectAccount } from '../../graphql/mutations'

function LandingPage() {
  const handleDeleteStripeAccount = async () => {
    // loading
    let deleteResponse = await API.graphql(graphqlOperation(deleteStripeConnectAccount, {input: {stripeAccountId: 'acct_1LATzI8kNHp12tsU', userId: '6a845f72-00d5-4030-aa73-b908f7df08b2'}}))
    console.log('deleteResponse :', deleteResponse)
    if (deleteResponse === 'SUCCESSFULLY DELETED ACCOUNT') {
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