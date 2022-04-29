import React, {useEffect, useState} from 'react'
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
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveShoppingCartSharpIcon from '@mui/icons-material/RemoveShoppingCartSharp';
import Chip from '@mui/material/Chip';
import { useParams, Link, useNavigate } from 'react-router-dom'
import Divider from '@mui/material/Divider';
import { useAppDispatch, useAppSelector } from '../../Redux-Toolkit/hooks'
import { addId, removeId, selectCount } from '../../Redux-Toolkit/listingIDSlice'


interface Iphotos {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}

interface IlistingInCart {
    listingId: number
    image: string
    title: string
    price: number
}

function Market() {
    const [photos, setPhotos] = useState<Iphotos[]>([])
    const { marketname } = useParams()
    let navigate = useNavigate()
    const dispatch = useAppDispatch()
    const idsInCart = useAppSelector(selectCount)


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


//  Type of JSON.parse dependency must be a string .
// But the local storage return type is string|null so it can be both string and null and when you declare the data, its value is null until you render the component (or call the function) and then call the getItem function, it gets the value, and then it's a string.
// You can use || operator and add a string to it so that it is not null anymore.

    const addToCart = (image: string, title: string, price: number, id: number) => {
        let cart = []
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart') || '')
        }
        cart.push({'listingId': id, 'image': image, 'title': title, 'price': price})
        localStorage.setItem('cart', JSON.stringify(cart))
        
        dispatch(addId(id))
        // set
        // setListingIds(new Set(listingIds).add(id))
        console.log("Listing added to cart")
    }

    const removeFromCart = (listingId: number) => {
        let storageCart = JSON.parse(localStorage.getItem('cart') || '')
        let updatedCart = storageCart.filter((listing: IlistingInCart) => listing.listingId !== listingId)
        localStorage.setItem('cart', JSON.stringify(updatedCart))

        dispatch(removeId(listingId))

        console.log("listing removed from cart")

        // remove from set
        // const updatedListingIds = new Set(listingIds)
        // updatedListingIds.delete(listingId)
        // setListingIds(updatedListingIds)
    }


    const renderPokemon = () => {
       return photos.map(p => (
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
        ))
    }
    
  return (
    <>
        <Typography variant="h3" sx={{textAlign: 'center', color: '#C5C6C7', marginTop: 5, textTransform: 'capitalize'}}>
            explore {marketname}
        </Typography>
        <Box sx={{ width: '65%', margin: 'auto', marginTop: 6}}>
            <Typography sx={{color: '#C5C6C7'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris vitae ultricies leo integer. Quis risus sed vulputate odio ut. In egestas erat imperdiet sed euismod nisi porta lorem. Nulla facilisi cras fermentum odio eu feugiat.
            </Typography>
        </Box>
        <Divider variant="middle" sx={{marginY: 8, bgcolor: "gray"}} className='market-divider'></Divider>
        <Grid container spacing={{md: 1}} sx={{paddingX: 4, paddingTop: 3 }}>
            {renderPokemon()}
        </Grid>
    </>
  )
}

export default Market