import { useAppDispatch } from '../Redux-Toolkit/reduxHooks'
import { addId } from '../Redux-Toolkit/listingIDSlice'


export const useAddToCart = () => {
    const dispatch = useAppDispatch()

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
        console.log("Listing added to cart")
    }

    return addToCart
}

// Custom hook returns a function that takes the arguments in the call to dispatch.
