import { useAppDispatch } from '../Redux-Toolkit/reduxHooks'
import { removeId } from '../Redux-Toolkit/listingIDSlice'

interface IlistingInCart {
    listingId: number
    image: string
    title: string
    price: number
}

export const useRemoveFromCart = () => {
    const dispatch = useAppDispatch()

    const removeFromCart = (id: number) => {
        let storageCart = JSON.parse(localStorage.getItem('cart') || '')
        let updatedCart = storageCart.filter((listing: IlistingInCart) => listing.listingId !== id)
        localStorage.setItem('cart', JSON.stringify(updatedCart))

        dispatch(removeId(id))

        console.log("listing removed from cart")
    }

    return removeFromCart
}