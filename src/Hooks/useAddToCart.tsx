import { useAppDispatch } from '../Redux-Toolkit/reduxHooks'
import { addId } from '../Redux-Toolkit/listingIDSlice'



export const useAddToCart = () => {
    const dispatch = useAppDispatch()

    const addToCart = (image: string, title: string, price: number, id: number) => {
        let cart = []
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart') || '')
        }
        cart.push({'listingId': id, 'image': image, 'title': title, 'price': price})
        localStorage.setItem('cart', JSON.stringify(cart))
        
    
        dispatch(addId(id))
        console.log("Listing added to cart")
    }

    return addToCart
}

// export const useAddToCart = (image: string, title: string, price: number, id: number) => {
//     const dispatch = useAppDispatch()
//     dispatch(addId(id))
//     return addToCart(image, title, price, id)
// }


// const addToCart = (image: string, title: string, price: number, id: number) => {
//     let cart = []
//     if (localStorage.getItem('cart')) {
//         cart = JSON.parse(localStorage.getItem('cart') || '')
//     }
//     cart.push({'listingId': id, 'image': image, 'title': title, 'price': price})
//     localStorage.setItem('cart', JSON.stringify(cart))
    
//     dispatch(addId(id))
//     console.log("Listing added to cart")
// }