import React from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import Autocomplete from '@mui/material/Autocomplete';
import Typography from '@mui/material/Typography';

const Input = styled('input')({
  display: 'none',
});

const listColors = [{color: 'Yellow'}, {color: 'Yellow-Green'}, {color: 'Green'}, {color: 'Blue-Green'}, {color: 'Blue'}, {color: 'Blue-Violet'}, {color: 'Violet'}, {color: 'Red-Violet'}, {color: 'Red'}, {color: 'Red-Orange'}, {color: 'Orange'}, {color: 'Yellow-Orange'}]

const blockchains = [{label: 'Ethereum'}, {label: 'Solona'}, {label: 'Polygon'}, {label: 'Cardano'}, {label: 'Tezos'}]

function ListingForm() {


  const handleSubmit = () => {
    console.log('poop')
  }

  return (
    <Grid container alignItems="center" justifyContent="center" >
      {/* <Paper sx={{ marginTop: 10 }}> */}
        <form onSubmit={handleSubmit} className='listing-form'>
          <Grid item >
            <TextField variant="outlined" label="Title" required sx={{ input: {color: 'White'}, width: '30rem' }} />
          </Grid>
          <Grid item>
            <TextField variant="outlined" label="Price" type="number" required helperText="Price in USD"/>
          </Grid>
          <Grid item>
            <Autocomplete multiple limitTags={1} options={listColors} getOptionLabel={(option) => option.color} renderInput={(params) => (
        <TextField {...params} label="Colors" />
      )}/>
          </Grid>
          <Grid item>
              <Autocomplete
                disablePortal
                options={blockchains}
                renderInput={(params) => <TextField {...params} label="Blockchain" />}
              />
          </Grid>
          <Typography>
              Land coordinates
          </Typography>
          <Grid item>
            <TextField variant="outlined" label="X coordinate" type="number" />
          </Grid>
          <Grid item>
            <TextField variant="outlined" label="Y coordinate" type="number" />
          </Grid>
          <Grid item>
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span" endIcon={<ArrowUpwardSharpIcon/>}>
              Upload
            </Button>
          </label>
          <Button variant="contained">
            List
          </Button>
          </Grid>
        </form>
      {/* </Paper> */}
    </Grid>
  ) 
}

export default ListingForm