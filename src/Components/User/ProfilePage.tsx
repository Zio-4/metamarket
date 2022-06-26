import React, {useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../Redux-Toolkit/reduxHooks'
import { userState } from '../../Redux-Toolkit/userSlice'
import { Button } from '@mui/material'
import { API, graphqlOperation } from 'aws-amplify'
import { deleteStripeConnectAccount } from '../../graphql/mutations'



const ProfilePage: React.FC = () => {
  const navigate = useNavigate()
  const userInfo = useAppSelector(userState)

  useEffect(() => {
    if (!userInfo.username) return navigate('/')

  }, [])

  const handleDeleteStripeAccount = async () => {
    // loading
    let deleteResponse = await API.graphql(graphqlOperation(deleteStripeConnectAccount, {input: {stripeAccountId: 'acct_1LAUEwQH508CPaZP', userId: '6a845f72-00d5-4030-aa73-b908f7df08b2'}}))
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
      <div className='placeholder-text'>Profile Page</div>
      <Button variant='contained' color='error' onClick={handleDeleteStripeAccount}>Delete Stripe Account</Button>
      <br></br>
      <div className='placeholder-text'>Current user: {userInfo.username}</div>
    </div>
  )
}

export default ProfilePage