import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../Redux-Toolkit/reduxHooks'
import { userState } from '../../Redux-Toolkit/userSlice'



const ProfilePage: React.FC = () => {
  const navigate = useNavigate()
  const userInfo = useAppSelector(userState)

  useEffect(() => {
    if (!userInfo.username) return navigate('/')
  }, [])

  return (
    <div>
      <div className='placeholder-text'>Profile Page</div>
      <br></br>
      <div className='placeholder-text'>Current user: {userInfo.username}</div>
    </div>
  )
}

export default ProfilePage