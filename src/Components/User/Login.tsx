import React, {useState } from 'react'
import { Tab, Box, TextField, Button, Typography} from '@mui/material'
import { TabPanel, TabContext, TabList } from '@mui/lab';
import { Auth } from 'aws-amplify';

function Login() {
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

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
  }

  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInFormValues({...signInFormValues, [e.target.name]: e.target.value})
  }

  const handleCreateAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateAccountFormValues({...createAccountFormValues, [e.target.name]: e.target.value})
  }

  const signInUser = async () => {
    // Call Auth API with credentials
    try {
        const user = await Auth.signIn(signInFormValues.signInUsername, signInFormValues.signInPassword);
        let mfaCode = user.preferredMFA
        console.log("mfa code: ", mfaCode)
        console.log(user)
        let userSignIn = await Auth.confirmSignIn(user, mfaCode)
        console.log("User signed in response: ", userSignIn)
        // navigate the user to main page or from where they came from

    } catch (error) {
        console.log('error signing in', error);
    }

    setSignInFormValues({
      signInUsername: '',
      signInPassword: ''
    })
  }



  const signUpUser = async () => {
    // console.log(`${createAccountFormValues.createAccountUsername} ${createAccountFormValues.createAccountPassword} ${createAccountFormValues.createAccountConfirmPassword} ${createAccountFormValues.createAccountEmail}`)
    if (createAccountFormValues.createAccountPassword === createAccountFormValues.createAccountConfirmPassword) {
      try {
        const { user } = await Auth.signUp({
            username: createAccountFormValues.createAccountUsername,
            password: createAccountFormValues.createAccountPassword,
            attributes: {
                email: createAccountFormValues.createAccountEmail
            }
        });
        setUserSigningUp(true)
        setUsername(createAccountFormValues.createAccountUsername)
        console.log(user);
        console.log("Success!")
      } catch (error) {
          console.log('error signing up:', error);
      }
    } else console.log("password and password confirmation do not match")

    setCreateAccountFormValues({
      createAccountUsername: '',
      createAccountPassword: '',
      createAccountConfirmPassword: '',
      createAccountEmail: ''
    })
  }

  const handleCodeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCodeValue(e.target.value)
  }

  const confirmSignUp = async () => {
    //
    try {
      console.log("signup username:", username)
      let response = await Auth.confirmSignUp(username, codeValue);
      console.log("confirm sign up response: ", response)
    } catch (error) {
        console.log('error confirming sign up', error);
    }
  }


  return (
    <div>
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
        <TabPanel value="1" sx={{bgcolor: '#C5C6C7'}}>
          <TextField variant='outlined' label='Username' sx={{ width: '100%', }} name='signInUsername' value={signInFormValues.signInUsername} onChange={handleSignInChange}/>
          <TextField variant='outlined' label='Password' sx={{ width: '100%', marginTop: '0.5rem' }} name='signInPassword' value={signInFormValues.signInPassword} onChange={handleSignInChange}/>
          <Button variant='contained' sx={{ width: '100%', marginTop: '0.8rem'}} onClick={signInUser}>
            Sign In
          </Button>
          <Typography sx={{textAlign: 'center', marginTop: '0.5rem'}}>Forgot your password?</Typography>
        </TabPanel>
        <TabPanel value="2" sx={{bgcolor: '#C5C6C7'}}>
          <TextField variant='outlined' label='Username' sx={{ width: '100%', }} name='createAccountUsername' value={createAccountFormValues.createAccountUsername} onChange={handleCreateAccountChange}/>
          <TextField variant='outlined' label='Password' sx={{ width: '100%', marginTop: '0.5rem',}} name='createAccountPassword' value={createAccountFormValues.createAccountPassword} onChange={handleCreateAccountChange}/>
          <TextField variant='outlined' label='Confirm Password' sx={{ width: '100%', marginTop: '0.5rem', }} name='createAccountConfirmPassword' value={createAccountFormValues.createAccountConfirmPassword} onChange={handleCreateAccountChange}/>
          <TextField variant='outlined' label='Email' sx={{ width: '100%', marginTop: '0.5rem', }} name='createAccountEmail' value={createAccountFormValues.createAccountEmail} onChange={handleCreateAccountChange}/>
          <Button variant='contained' sx={{ width: '100%', marginTop: '0.8rem'}} onClick={signUpUser}>
            Create Account
          </Button>
        </TabPanel>
      </TabContext>}
    </div>
  )
}

export default Login