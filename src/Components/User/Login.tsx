import React from 'react'
import { Tabs, Tab, } from '@mui/material'
import { TabPanel } from '@mui/lab';

function Login() {

  return (
    <>
      <Tabs >
        <Tab label="Sign In"/>
        <Tab label="Sign up"/>
      </Tabs>
      <TabPanel value="1">
        Sign in stuff
      </TabPanel>
      <TabPanel value="2">
        Sign up stuff
      </TabPanel>
    </>
  )
}

export default Login