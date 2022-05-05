import React, {useState } from 'react'
import { Tab, Box, TextField, Button} from '@mui/material'
import { TabPanel, TabContext, TabList } from '@mui/lab';

function Login() {
  const [tabValue, setTabValue] = useState("1")

  const handleTabChange = (event: React.SyntheticEvent, newValue: string) => {
    setTabValue(newValue)
  }

  return (
    <div>
      <TabContext value={tabValue}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'gray',}}>
          <TabList onChange={handleTabChange} aria-label="login & sign up tabs" textColor='secondary' indicatorColor='secondary' centered >
            <Tab label="Sign in" value="1" />
            <Tab label="Sign Up" value="2" />
          </TabList>
        </Box>
        <TabPanel value="1" sx={{bgcolor: 'white'}}>
          <TextField variant='outlined'/>
        </TabPanel>
        <TabPanel value="2">
          Item Two
        </TabPanel>
      </TabContext>
    </div>
  )
}

export default Login