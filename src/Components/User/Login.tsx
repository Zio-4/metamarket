import React, {useState } from 'react'
import { Tab, Box, TextField, Button, Typography} from '@mui/material'
import { TabPanel, TabContext, TabList } from '@mui/lab';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

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

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
  }

  const handleSignInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSignInFormValues({...signInFormValues, [e.target.name]: e.target.value})
  }

  const handleCreateAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCreateAccountFormValues({...createAccountFormValues, [e.target.name]: e.target.value})
  }

  const signInUser = () => {
    // Call Auth API with credentials
    setSignInFormValues({
      signInUsername: '',
      signInPassword: ''
    })
  }

  const createAccount = () => {
    // Call Auth API
    // console.log(`${createAccountFormValues.createAccountUsername} ${createAccountFormValues.createAccountPassword} ${createAccountFormValues.createAccountConfirmPassword} ${createAccountFormValues.createAccountEmail}`)
    setCreateAccountFormValues({
      createAccountUsername: '',
      createAccountPassword: '',
      createAccountConfirmPassword: '',
      createAccountEmail: ''
    })
  }

  return (
    <div>
      <TabContext value={tabValue}>
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
          <Button variant='contained' sx={{ width: '100%', marginTop: '0.8rem'}} onClick={createAccount}>
            Create Account
          </Button>
        </TabPanel>
      </TabContext>
    </div>
  )
}

export default Login