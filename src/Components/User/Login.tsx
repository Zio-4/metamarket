import React from 'react'
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

function Login() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1 className='placeholder-text'>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  )
}

export default Login