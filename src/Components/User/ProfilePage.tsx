import React from 'react'

interface Iprops {
  cognitoUser: {
    cognitoId: string
    username: string
    email: string
  }
}

const ProfilePage: React.FC<Iprops> = ({cognitoUser}) => {
  return (
    <div>
      <div className='placeholder-text'>Profile Page</div>
      <br></br>
      <div className='placeholder-text'>Current user: {cognitoUser.username}</div>
    </div>
  )
}

export default ProfilePage