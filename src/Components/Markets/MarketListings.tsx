import React, {useEffect, useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveShoppingCartSharpIcon from '@mui/icons-material/RemoveShoppingCartSharp';
import Chip from '@mui/material/Chip';
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../Redux-Toolkit/reduxHooks'
import { selectCount } from '../../Redux-Toolkit/listingIDSlice'
import { useAddToCart } from '../../Hooks/useAddToCart'
import { useRemoveFromCart } from '../../Hooks/useRemoveFromCart'
import { Iphotos } from '../../lib/Interfaces/DataInterfaces'


function MarketListings() {
    const [photos, setPhotos] = useState<Iphotos[]>([])
    const { marketname } = useParams()
    let navigate = useNavigate()
    const idsInCart = useAppSelector(selectCount)
    const addToCart = useAddToCart()
    const removeFromCart = useRemoveFromCart()


    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos").then((r) => {
            if (r.ok) {
                r.json().then((data) => {
                    setPhotos(data)
                })
            } else {
                r.json().then((err) => {
                    console.log(err)
                })
            }
            })
    }, [])

    console.log("ids in cart:", useAppSelector(selectCount))
    
  return (
    <>
        {photos.map(p => (
            <Grid item md={4} key={p.id} >
                <Card sx={{ maxWidth: 330, backgroundColor: "#636363", paddingBottom: 4,}}  onClick={() => navigate(`/markets/${marketname}/${p.id}`)}>
                    <CardMedia
                    component="img"
                    height="140"
                    image={p.thumbnailUrl}
                    alt="photos"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h6" component="div"  sx={{color: "white"}}>
                            {p.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{color: "white"}}>
                            Description
                        </Typography>
                    </CardContent>
                    <Stack sx={{width: { xs: .4, sm: .4, lg: .3}, left: 10}} direction="column" spacing={1}>
                        <Chip sx={{backgroundColor: "#C5C6C7",}} label="BTC: 0.238"></Chip>
                        <Chip sx={{backgroundColor: "#C5C6C7"}} label="ETH: 0.718"></Chip>
                        <Chip sx={{backgroundColor: "#C5C6C7"}} label="USD: 20.00"></Chip>
                    </Stack>

                </Card>
                {idsInCart.includes(p.id) ? <Fab sx={{backgroundColor: "#FF6666", top: -28, left: {xs: 170, md: 200, lg: 240},}} aria-label="remove" onClick={() => removeFromCart(p.id)}> <RemoveShoppingCartSharpIcon/> </Fab> 
                : 
                <Fab  sx={{backgroundColor: "#45A29E", top: -28, left: {xs: 170, md: 200, lg: 240},}} aria-label="add" onClick={() => addToCart(p.thumbnailUrl, p.title, p.id, p.id)}>
                    <AddIcon />
                </Fab>}
            </Grid>
        ))}
    </>
  )
}

export default MarketListings