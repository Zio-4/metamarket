import React, {useState, useEffect } from 'react'
import { Tab, Box, TextField, Button, Typography} from '@mui/material'
import { TabPanel, TabContext, TabList } from '@mui/lab';
import { Auth, API } from 'aws-amplify';
import { useNavigate } from 'react-router-dom'
import { useUpdateUser } from '../../Hooks/useUpdateUser'
import { signIn, signUp } from '../../lib/auth/authFunc' 


const AuthForm: React.FC = () => {
  const [tabValue, setTabValue] = useState("1")
  const [signInFormValues, setSignInFormValues] = useState({
    signInUsername: '',
    signInPassword: ''
  })
  const [createAccountFormValues, setCreateAccountFormValues] = useState({
    createAccountUsername: '',
    createAccountPassword: '',
    createAccountConfirmPassword: '',
    createAccountEmail: ''
  })
  const [codeValue, setCodeValue] = useState("")
  const [username, setUsername] = useState("")
  const [userSigningUp, setUserSigningUp] = useState(false)
  let navigate = useNavigate()
  const updateUser = useUpdateUser()

  useEffect(() => {
    if (localStorage.getItem('userSignUpInfo')) {
      setUserSigningUp(true)
      const userSignUpInfo = JSON.parse(localStorage.getItem('userSignUpInfo') || '')
      setUsername(userSignUpInfo.username)
    } else console.log("no userInfo stored")
  }, [])

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
  }

  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInFormValues({...signInFormValues, [e.target.name]: e.target.value})
  }

  const handleCreateAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateAccountFormValues({...createAccountFormValues, [e.target.name]: e.target.value})
  }

  const handleCodeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeValue(e.target.value)
  }

  // persists users info in case the page is reloaded before the user can enter the signup verification code
  const persistUserSignUpInfo = (signupUsername: string) => {
    setUserSigningUp(true)
    setUsername(signupUsername)

    const userSignUpInfo = {username: signupUsername}
    localStorage.setItem('userSignUpInfo', JSON.stringify(userSignUpInfo))
  }

  // ------------------------------------------------------------------------------------------------------------------------------------------------

  const signInUser = async () => {
    let res = await signIn(signInFormValues.signInUsername, signInFormValues.signInPassword)
    // @ts-ignore
    if (res.username) {
      // @ts-ignore
      updateUser({username: res.username, userId: res.userId, email: res.email, stripeId: res.stripeId, sold: res.sold, owned: res.owned, favorited: res.favorited, chargesEnabled: res.chargesEnabled})
      setSignInFormValues({ signInUsername: '', signInPassword: '' })
      navigate('/')
    } 
    else {
      // let user know there was a problem signing in
    }
  }

  const signUpUser = async () => {
    if (!createAccountFormValues.createAccountEmail) return

    let signUpResult

    if (createAccountFormValues.createAccountPassword === createAccountFormValues.createAccountConfirmPassword) {
      persistUserSignUpInfo(createAccountFormValues.createAccountUsername)
      signUpResult = await signUp(createAccountFormValues.createAccountEmail, createAccountFormValues.createAccountUsername, createAccountFormValues.createAccountPassword)
    } else return
      
    if (signUpResult === 'SUCCESS') {
      setCreateAccountFormValues({
        createAccountUsername: '',
        createAccountPassword: '',
        createAccountConfirmPassword: '',
        createAccountEmail: ''
      })
    } else {
      // let user know something went wrong
    }
  }


  const confirmSignUp = async () => {
    //
    try {
      console.log("signup username:", username)

      let response = await Auth.confirmSignUp(username, codeValue);
      setSignInFormValues({
        signInUsername: username,
        signInPassword: ''
      })
      setUserSigningUp(false)
      setTabValue('1')
      // Add message to the sign in tab that the user must sign in for security purposes
      localStorage.removeItem('userSignUpInfo')
      console.log("confirm sign up response: ", response)
    } catch (error) {
        console.log('error confirming sign up', error);
    }
  }


  return (
    <Box>
      { userSigningUp ?  
      <div className='code-field-container'>
        <TextField variant='outlined' label='code' sx={{ width: '100%', }} value={codeValue} onChange={handleCodeValue} />
        <Button variant='contained' sx={{ width: '100%', marginTop: '0.8rem'}} onClick={confirmSignUp}>Confirm Sign Up</Button>
      </div>
      : <TabContext value={tabValue}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'white',}}>
                <TabList onChange={handleTabChange} aria-label="login & sign up tabs" textColor='secondary' indicatorColor='secondary' centered >
                <Tab label="Sign in" value="1" />
                <Tab label="Create Account" value="2" />
                </TabList>
            </Box>
            <TabPanel value="1" sx={{bgcolor: '#C5C6C7', maxWidth: {lg: '30%'}, margin: 'auto'}}>
                <TextField variant='outlined' label='Username' sx={{ width: '100%', }} name='signInUsername' value={signInFormValues.signInUsername} onChange={handleSignInChange}/>
                <TextField variant='outlined' label='Password' sx={{ width: '100%', marginTop: '0.5rem' }} name='signInPassword' value={signInFormValues.signInPassword} onChange={handleSignInChange}/>
                <Button variant='contained' sx={{ width: '100%', marginTop: '0.8rem'}} onClick={signInUser}>
                Sign In
                </Button>
                {/* <Typography sx={{textAlign: 'center', marginTop: '0.5rem'}}>Forgot your password?</Typography> */}
            </TabPanel>
            <TabPanel value="2" sx={{bgcolor: '#C5C6C7', maxWidth: {lg: '30%'}, margin: 'auto'}}>
                <TextField variant='outlined' label='Username' sx={{ width: '100%', }} name='createAccountUsername' value={createAccountFormValues.createAccountUsername} onChange={handleCreateAccountChange}/>
                <TextField variant='outlined' label='Password' sx={{ width: '100%', marginTop: '0.5rem',}} name='createAccountPassword' value={createAccountFormValues.createAccountPassword} onChange={handleCreateAccountChange} type='password'/>
                <TextField variant='outlined' label='Confirm Password' sx={{ width: '100%', marginTop: '0.5rem', }} name='createAccountConfirmPassword' value={createAccountFormValues.createAccountConfirmPassword} onChange={handleCreateAccountChange} type='password'/>
                <TextField variant='outlined' label='Email' sx={{ width: '100%', marginTop: '0.5rem', }} name='createAccountEmail' value={createAccountFormValues.createAccountEmail} onChange={handleCreateAccountChange}/>
                <Button variant='contained' sx={{ width: '100%', marginTop: '0.8rem'}} onClick={signUpUser}>
                Create Account
                </Button>
            </TabPanel>
      </TabContext>}
    </Box>
  )
}

export default AuthForm