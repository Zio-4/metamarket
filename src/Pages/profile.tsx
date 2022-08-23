import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../Redux-Toolkit/reduxHooks'
import { userState } from '../Redux-Toolkit/userSlice'
import { Button, Box } from '@mui/material'
import { API, graphqlOperation } from 'aws-amplify'
import { deleteStripeConnectAccount, checkAndUpdateAccount } from '../graphql/mutations'
// import { setCurrentUser } from '../Redux-Toolkit/userSlice';
import { useUpdateUser } from '../Hooks/useUpdateUser'
import { IupdateUserResponse } from '../lib/Interfaces/ListingFormInterfaces'

export const Profile = () => {
    const navigate = useNavigate()
    const userInfo = useAppSelector(userState)
    const dispatch = useAppDispatch()
    const updateUser = useUpdateUser()
  
    useEffect(() => {
      if (!userInfo.username) return navigate('/')
  
      const handleUpdateUser = async () => {
        let updateUserResponse = await API.graphql(graphqlOperation(checkAndUpdateAccount, {input: {stripeAccountId: userInfo.stripeId, userId: userInfo.userId}})) as IupdateUserResponse
  
        console.log('updateUser response:', updateUserResponse)
        if (updateUserResponse.data.checkAndUpdateAccount === 'SUCCESS') {
          updateUser({chargesEnabled: true})
        } 
      }
  
      if (sessionStorage.getItem('signingUp')) {
          sessionStorage.removeItem('signingUp')
          handleUpdateUser()
      }
    }, [userInfo.username])
  
    const handleUpdateUser = () => {
      // updateUser({stripeId: 'updated hook', chargesEnabled: true})
    }
  
  
    const handleDeleteStripeAccount = async () => {
      // loading
      let deleteResponse = await API.graphql(graphqlOperation(deleteStripeConnectAccount, {input: {stripeAccountId: 'acct_1LAU5yQJVxACuSzu', userId: '4e5360a9-3c67-4f8a-a0c0-7b7ddffc5f15'}}))
      console.log('deleteResponse :', deleteResponse)
      if (deleteResponse === 'SUCCESFULLY DELETED') {
        console.log('hurray!')
        updateUser({stripeId: '', chargesEnabled: false})
      } else {
        // let user know something went wrong
        console.log('Something went wrong deleting your account')
      }
    }
  
    // https://etbgwbxkyqsvlk23n7y7ueituy0ikivh.lambda-url.us-west-1.on.aws/
  
    const handleUpdateStripeAccount = () => {
      let signUpURL = ''
  
      fetch("https://etbgwbxkyqsvlk23n7y7ueituy0ikivh.lambda-url.us-west-1.on.aws/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ stripeAccountId: userInfo.stripeId }),
      })
        .then((r) => {
          if (r.ok) {
            r.json().then((data) => {
                console.log("create stripe link response: ", data)
                signUpURL = data.url
            });
            
          } else {
            r.json().then((err) => console.log('lambda error', err.errors));
          }
        })
  
        if (signUpURL) {
          window.location.replace(signUpURL)
          sessionStorage.setItem('signingUp', JSON.stringify(true))
        }
      // Call createStripeAccountLink
      // set in storage session user is signing up
    }
  
  
    return (
      <Box>
        <div className='placeholder-text'>Profile Page</div>
        <Button variant='contained' color='error' onClick={handleDeleteStripeAccount}>Delete Stripe Account</Button>
        <br></br>
        <div className='placeholder-text'>Current user: {userInfo.username}</div>
        <br></br>
        <Button variant='contained' onClick={handleUpdateUser}>useUpdateHook</Button>
        {userInfo.stripeId && !userInfo.chargesEnabled ? <Button variant='contained' color='secondary' sx={{ marginTop: '1rem'}} onClick={handleUpdateStripeAccount}>Continue stripe account setup</Button> : null}
      </Box>
    )
  }

  export default Profile