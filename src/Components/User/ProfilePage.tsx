import React, {useEffect, useRef} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../Redux-Toolkit/reduxHooks'
import { userState } from '../../Redux-Toolkit/userSlice'
import { Button } from '@mui/material'
import { API, graphqlOperation } from 'aws-amplify'
import { deleteStripeConnectAccount } from '../../graphql/mutations'
import { useAppDispatch } from '../../Redux-Toolkit/reduxHooks';
import { setCurrentUser } from '../../Redux-Toolkit/userSlice';
import { useUpdateUser } from '../../Hooks/useUpdateUser'



const ProfilePage: React.FC = () => {
  const navigate = useNavigate()
  const userInfo = useAppSelector(userState)
  const dispatch = useAppDispatch()
  const updateUser = useUpdateUser()

  useEffect(() => {
    if (!userInfo.username) return navigate('/')

  }, [])

  const handleUpdateUser = () => {
    // updateUser({stripeId: 'updated hook', chargesEnabled: true})
  }


  const handleDeleteStripeAccount = async () => {
    // loading
    let deleteResponse = await API.graphql(graphqlOperation(deleteStripeConnectAccount, {input: {stripeAccountId: 'acct_1LAU5yQJVxACuSzu', userId: '4e5360a9-3c67-4f8a-a0c0-7b7ddffc5f15'}}))
    console.log('deleteResponse :', deleteResponse)
    if (deleteResponse === 'SUCCESFULLY DELETED ACCOUNT') {
      console.log('hurray!')

      updateUser({stripeId: '', chargesEnabled: false})

      // const userInStorage = JSON.parse(localStorage.getItem('userInfo') || '')
      // const updatedUser = {...userInStorage, 'stripeId': '', 'chargesEnabled': false}
      // localStorage.setItem('userInfo', JSON.stringify(updatedUser))
      
      // const updateUserState = {...userInfo, stripeId: '', chargesEnabled: false}
      // dispatch(setCurrentUser(updateUserState))
    } else {
      // let user know something went wrong
      console.log('Something went wrong deleting your account')
    }
  }


  return (
    <div>
      <div className='placeholder-text'>Profile Page</div>
      <Button variant='contained' color='error' onClick={handleDeleteStripeAccount}>Delete Stripe Account</Button>
      <br></br>
      <div className='placeholder-text'>Current user: {userInfo.username}</div>
      <br></br>
      <Button variant='contained' onClick={handleUpdateUser}>useUpdateHook</Button>
    </div>
  )
}

export default ProfilePage