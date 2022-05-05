import React, {useState } from 'react'
import { Tab, Box, TextField, Button, Typography} from '@mui/material'
import { TabPanel, TabContext, TabList } from '@mui/lab';

function Login() {
  const [tabValue, setTabValue] = useState("1")
  const [signInFormValues, setSignInFormValues] = useState({
    username: '',
    password: ''
  })
  const [createAccountFormValues, setCreateAccountFormValues] = useState({
    username: '',
    password: '',
    confirmPassword: ''
  })

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
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
          <TextField variant='outlined' label='Username' sx={{ width: '100%', }}/>
          <TextField variant='outlined' label='Password' sx={{ width: '100%', marginTop: '0.5rem' }}/>
          <Button variant='contained' sx={{ width: '100%', marginTop: '0.8rem'}}>
            Sign In
          </Button>
          <Typography sx={{textAlign: 'center', marginTop: '0.5rem'}}>Forgot your password?</Typography>
        </TabPanel>
        <TabPanel value="2" sx={{bgcolor: '#C5C6C7'}}>
          <TextField variant='outlined' label='Username' sx={{ width: '100%', }}/>
          <TextField variant='outlined' label='Password' sx={{ width: '100%', marginTop: '0.5rem',}}/>
          <TextField variant='outlined' label='Confirm Password' sx={{ width: '100%', marginTop: '0.5rem', }}/>
          <Button variant='contained' sx={{ width: '100%', marginTop: '0.8rem'}}>
            Create Account
          </Button>
        </TabPanel>
      </TabContext>
    </div>
  )
}

export default Login