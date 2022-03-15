import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'


function Market() {
  return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{md: 3}} columns={{md: 12}} className="items">
            <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    component="img"
                    height="140"
                    image="https://cdn.vox-cdn.com/thumbor/kPVwAvRiRvewKWEiRqtr4yiN9_M=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                    alt="green iguana"
                    />
                    <CardContent style={{backgroundColor: "gray"}}>
                        <Typography gutterBottom variant="h5" component="div" style={{color: "white"}}>
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary" style={{color: "white"}}>
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

            <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                height="140"
                image="https://cdn.vox-cdn.com/thumbor/kPVwAvRiRvewKWEiRqtr4yiN9_M=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
                </Card>
            </Grid>

            <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                height="140"
                image="https://cdn.vox-cdn.com/thumbor/kPVwAvRiRvewKWEiRqtr4yiN9_M=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
                </Card>
            </Grid>

            <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                height="140"
                image="https://cdn.vox-cdn.com/thumbor/kPVwAvRiRvewKWEiRqtr4yiN9_M=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
                </Card>
            </Grid>

            <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                height="140"
                image="https://cdn.vox-cdn.com/thumbor/kPVwAvRiRvewKWEiRqtr4yiN9_M=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
                </Card>
            </Grid>

            <Grid item md={4}>
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                component="img"
                height="140"
                image="https://cdn.vox-cdn.com/thumbor/kPVwAvRiRvewKWEiRqtr4yiN9_M=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
                </Card>
            </Grid>
        </Grid>
      </Box>

  )
}

export default Market