import React from 'react'
import { useAppSelector } from '../Redux-Toolkit/reduxHooks';
import { userState } from '../Redux-Toolkit/userSlice';
import { useAppDispatch } from '../Redux-Toolkit/reduxHooks';
import { setCurrentUser } from '../Redux-Toolkit/userSlice';

// Updates fields on User in Redux and in localStorage
export const useUpdateUser = () => {
    // Updates user in redux and localStorage
    const dispatch = useAppDispatch()
    const userInfo = useAppSelector(userState)

    const updateReduxAndLocalStorage = (fieldsToUpdate: any) => {
        console.log('fields', fieldsToUpdate)

        if (userInfo) {
            const user = {...userInfo, ...fieldsToUpdate}
            dispatch(setCurrentUser(user))
            localStorage.setItem('userInfo', JSON.stringify(user))
        } else {
            dispatch(setCurrentUser(fieldsToUpdate))
            localStorage.setItem('userInfo', JSON.stringify(fieldsToUpdate))
        }
    }
    return updateReduxAndLocalStorage
}

